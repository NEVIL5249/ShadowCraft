from collections import deque
from pathlib import Path

from PIL import Image


def flood_transparent(src, dst, threshold=242, feather=18):
    """Remove background by flooding near-white pixels from the image edges."""
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    px = im.load()

    def is_bg(x, y):
        r, g, b, a = px[x, y]
        return ((r + g + b) / 3) >= threshold

    visited = [[False] * w for _ in range(h)]
    q = deque()

    # Seed from all edge pixels that look like background
    for x in range(w):
        for y in (0, h - 1):
            if is_bg(x, y):
                q.append((x, y))
                visited[y][x] = True
    for y in range(h):
        for x in (0, w - 1):
            if not visited[y][x] and is_bg(x, y):
                q.append((x, y))
                visited[y][x] = True

    bg_mask = [[False] * w for _ in range(h)]
    while q:
        x, y = q.popleft()
        bg_mask[y][x] = True
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and is_bg(nx, ny):
                visited[ny][nx] = True
                q.append((nx, ny))

    # Soften edges near background
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if bg_mask[y][x]:
                px[x, y] = (r, g, b, 0)
                continue

            # Feather near bg neighbors for smoother cutout
            near = False
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if 0 <= nx < w and 0 <= ny < h and bg_mask[ny][nx]:
                    near = True
                    break
            if near:
                brightness = (r + g + b) / 3
                if brightness > threshold - feather:
                    alpha = int(255 * max(0, (threshold - brightness) / feather))
                    px[x, y] = (r, g, b, alpha)

    bbox = im.getbbox()
    if bbox:
        pad = 12
        im = im.crop((
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(w, bbox[2] + pad),
            min(h, bbox[3] + pad),
        ))

    im.save(dst, "PNG")
    print(f"Saved {dst} size={im.size}")
    return im


def main():
    base = Path("public/brand")
    flood_transparent(base / "shadowcraft-logo-full.jpg", base / "shadowcraft-logo-full.png")
    icon = flood_transparent(base / "shadowcraft-logo-icon.jpg", base / "shadowcraft-logo-icon.png")

    side = max(icon.size)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    ox = (side - icon.size[0]) // 2
    oy = (side - icon.size[1]) // 2
    canvas.paste(icon, (ox, oy), icon)

    for size in (512, 192, 64, 32):
        out = canvas.resize((size, size), Image.Resampling.LANCZOS)
        if size == 32:
            out.save(Path("public") / "favicon.png", "PNG")
            print("Saved public/favicon.png")
        else:
            path = base / f"favicon-{size}.png"
            out.save(path, "PNG")
            print(f"Saved {path}")


if __name__ == "__main__":
    main()
