export interface ShadowDefinition {
    name: string;
    className: string;
    css: string;
    layers: number;
    timing: string;
    zIndex?: number;
    usage: string;
    category: string;
    optimized?: boolean;
}

export const shadows: ShadowDefinition[] = [
    { name: "Subtle Elevation", className: "shd-subtle-01", css: "0 1px 2px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02)", layers: 3, timing: "0.02", usage: "Surface Layering", category: "Elevation" },
    { name: "Deep Inset", className: "shd-inset-premium", css: "inset 0 2px 4px rgba(0,0,0,0.04), inset 0 4px 8px rgba(0,0,0,0.04), inset 0 8px 16px rgba(0,0,0,0.04)", layers: 3, timing: "0.04", usage: "Recessed Panels", category: "Inset" },
    { name: "Glass Glow", className: "shd-glass", css: "0 4px 12px rgba(19,91,236,0.08), 0 0 0 1px rgba(19,91,236,0.05)", layers: 2, timing: "0.03", zIndex: 50, usage: "Accent Surfaces", category: "Glass", optimized: true },
    { name: "Floating Modal", className: "shd-floating-modal", css: "0 2px 4px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.05)", layers: 4, timing: "0.12", usage: "Modal Overlays", category: "Floating" },
    { name: "Ambient Separation", className: "shd-ambient-01", css: "0 1px 3px rgba(0,0,0,0.03), 0 3px 6px rgba(0,0,0,0.03)", layers: 2, timing: "0.01", usage: "Content Blocks", category: "Ambient" },
    { name: "Structural Depth", className: "shd-structural-01", css: "0 1px 1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04)", layers: 5, timing: "0.08", usage: "Card Systems", category: "Structural" },
    { name: "Crisp Edge", className: "shd-crisp-01", css: "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)", layers: 2, timing: "0.01", usage: "Button States", category: "Crisp" },
    { name: "Diffused Presence", className: "shd-diffused-01", css: "0 4px 6px rgba(0,0,0,0.01), 0 10px 15px rgba(0,0,0,0.02), 0 20px 25px rgba(0,0,0,0.02), 0 25px 50px rgba(0,0,0,0.04)", layers: 4, timing: "0.06", usage: "Hero Elements", category: "Diffused" },
    { name: "Blueprint Accent", className: "shd-blueprint-01", css: "0 0 0 1px rgba(19,91,236,0.1), 0 4px 16px rgba(19,91,236,0.06)", layers: 2, timing: "0.02", usage: "Accent Cards", category: "Blueprint", optimized: true },
    { name: "Recessed Input", className: "shd-recessed-input", css: "inset 0 1px 2px rgba(0,0,0,0.06), inset 0 2px 4px rgba(0,0,0,0.04)", layers: 2, timing: "0.01", usage: "Form Fields", category: "Inset" },
    { name: "Soft Lift", className: "shd-soft-lift", css: "0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)", layers: 2, timing: "0.02", usage: "Hover States", category: "Elevation" },
    { name: "Paper Layer", className: "shd-paper-01", css: "0 1px 1px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.03), 0 4px 4px rgba(0,0,0,0.02)", layers: 3, timing: "0.01", usage: "Content Cards", category: "Elevation" },
    { name: "Volumetric Base", className: "shd-volumetric-01", css: "0 0.5px 1px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.03)", layers: 6, timing: "0.10", usage: "Primary Surfaces", category: "Volumetric" },
    { name: "Shallow Inset", className: "shd-shallow-inset", css: "inset 0 1px 1px rgba(0,0,0,0.05)", layers: 1, timing: "0.01", usage: "Toggle States", category: "Inset" },
    { name: "Geometric Border", className: "shd-geometric-01", css: "0 0 0 1px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)", layers: 2, timing: "0.01", usage: "Outlined Elements", category: "Geometric" },
    { name: "Hover Elevation", className: "shd-hover-01", css: "0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.02)", layers: 3, timing: "0.04", usage: "Interactive Cards", category: "Elevation" },
    { name: "Deep Structural", className: "shd-deep-structural", css: "0 2px 4px rgba(0,0,0,0.01), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.06)", layers: 6, timing: "0.14", usage: "Overlay Panels", category: "Structural" },
    { name: "Micro Shadow", className: "shd-micro-01", css: "0 0.5px 1px rgba(0,0,0,0.05)", layers: 1, timing: "0.01", usage: "Micro Elements", category: "Micro" },
    { name: "Glass Panel", className: "shd-glass-panel", css: "0 4px 12px rgba(19,91,236,0.04), 0 8px 24px rgba(19,91,236,0.03), 0 0 0 1px rgba(19,91,236,0.06)", layers: 3, timing: "0.04", usage: "Glass Panels", category: "Glass", optimized: true },
    { name: "Frosted Surface", className: "shd-frosted-01", css: "0 2px 8px rgba(0,0,0,0.02), 0 0 0 1px rgba(0,0,0,0.04)", layers: 2, timing: "0.02", usage: "Frosted Cards", category: "Glass" },
    { name: "Pillow Soft", className: "shd-pillow-01", css: "0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.02)", layers: 4, timing: "0.04", usage: "Soft Surfaces", category: "Diffused" },
    { name: "Raised Button", className: "shd-raised-btn", css: "0 1px 2px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04)", layers: 3, timing: "0.02", usage: "Action Buttons", category: "Crisp" },
    { name: "Concave Inset", className: "shd-concave-01", css: "inset 0 2px 4px rgba(0,0,0,0.06), inset 0 -1px 2px rgba(255,255,255,0.5)", layers: 2, timing: "0.02", usage: "Pressed States", category: "Inset" },
    { name: "Layer Cake", className: "shd-layer-cake", css: "0 1px 2px rgba(0,0,0,0.015), 0 2px 4px rgba(0,0,0,0.015), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.025), 0 16px 32px rgba(0,0,0,0.03), 0 32px 64px rgba(0,0,0,0.035), 0 64px 128px rgba(0,0,0,0.04)", layers: 7, timing: "0.16", usage: "Premium Cards", category: "Volumetric" },
    { name: "Razor Thin", className: "shd-razor-01", css: "0 1px 1px rgba(0,0,0,0.08)", layers: 1, timing: "0.01", usage: "Divider Lines", category: "Micro" },
    { name: "Atmospheric", className: "shd-atmospheric-01", css: "0 8px 32px rgba(0,0,0,0.04), 0 16px 64px rgba(0,0,0,0.02)", layers: 2, timing: "0.06", usage: "Background Layers", category: "Ambient" },
    { name: "Topographic Rise", className: "shd-topo-rise", css: "0 1px 2px rgba(0,0,0,0.03), 0 3px 6px rgba(0,0,0,0.03), 0 6px 12px rgba(0,0,0,0.03), 0 12px 24px rgba(0,0,0,0.03)", layers: 4, timing: "0.05", usage: "Elevated Sections", category: "Elevation" },
    { name: "Inner Glow", className: "shd-inner-glow", css: "inset 0 0 8px rgba(19,91,236,0.06), inset 0 0 16px rgba(19,91,236,0.03)", layers: 2, timing: "0.03", usage: "Focus States", category: "Glass" },
    { name: "Column Shadow", className: "shd-column-01", css: "4px 0 8px rgba(0,0,0,0.02), 8px 0 16px rgba(0,0,0,0.02)", layers: 2, timing: "0.02", usage: "Side Panels", category: "Structural" },
    { name: "Ridge Line", className: "shd-ridge-01", css: "0 -1px 2px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.04)", layers: 2, timing: "0.01", usage: "Toolbar Elements", category: "Geometric" },
    { name: "Floating Tag", className: "shd-float-tag", css: "0 2px 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.03)", layers: 3, timing: "0.02", usage: "Tags & Badges", category: "Floating" },
    { name: "Matte Surface", className: "shd-matte-01", css: "0 1px 3px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.03)", layers: 2, timing: "0.01", usage: "Matte Cards", category: "Ambient" },
    { name: "Dropdown Panel", className: "shd-dropdown-01", css: "0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)", layers: 4, timing: "0.06", usage: "Dropdown Menus", category: "Floating" },
    { name: "Shelf Layer", className: "shd-shelf-01", css: "0 2px 2px rgba(0,0,0,0.02), 0 4px 4px rgba(0,0,0,0.02), 0 8px 8px rgba(0,0,0,0.03)", layers: 3, timing: "0.02", usage: "Shelf Elements", category: "Elevation" },
    { name: "Ghost Outline", className: "shd-ghost-01", css: "0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02)", layers: 2, timing: "0.01", usage: "Ghost Buttons", category: "Geometric" },
    { name: "Sunken Well", className: "shd-sunken-01", css: "inset 0 1px 3px rgba(0,0,0,0.08), inset 0 2px 6px rgba(0,0,0,0.04), inset 0 4px 12px rgba(0,0,0,0.02)", layers: 3, timing: "0.03", usage: "Input Wells", category: "Inset" },
    { name: "Panoramic Lift", className: "shd-panoramic-01", css: "0 4px 8px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.03), 0 24px 48px rgba(0,0,0,0.04), 0 48px 96px rgba(0,0,0,0.03)", layers: 4, timing: "0.10", usage: "Hero Cards", category: "Volumetric" },
    { name: "Embossed Edge", className: "shd-emboss-01", css: "0 1px 0 rgba(255,255,255,0.8), 0 -1px 1px rgba(0,0,0,0.04)", layers: 2, timing: "0.01", usage: "Embossed Text", category: "Geometric" },
    { name: "Penumbra", className: "shd-penumbra-01", css: "0 2px 8px rgba(0,0,0,0.015), 0 8px 32px rgba(0,0,0,0.025), 0 32px 64px rgba(0,0,0,0.03)", layers: 3, timing: "0.06", usage: "Wide Panels", category: "Diffused" },
    { name: "Blueprint Card", className: "shd-blueprint-card", css: "0 0 0 1px rgba(19,91,236,0.08), 0 2px 8px rgba(19,91,236,0.04), 0 4px 16px rgba(19,91,236,0.03)", layers: 3, timing: "0.03", usage: "Blueprint Cards", category: "Blueprint", optimized: true },
    { name: "Horizon Line", className: "shd-horizon-01", css: "0 4px 16px rgba(0,0,0,0.02), 0 -1px 0 rgba(0,0,0,0.04)", layers: 2, timing: "0.02", usage: "Section Dividers", category: "Ambient" },
    { name: "Isometric Base", className: "shd-iso-base", css: "4px 4px 0 rgba(0,0,0,0.03), 8px 8px 0 rgba(0,0,0,0.02)", layers: 2, timing: "0.02", usage: "Isometric Elements", category: "Geometric" },
    { name: "Floating Action", className: "shd-float-action", css: "0 4px 8px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)", layers: 3, timing: "0.06", usage: "FAB Buttons", category: "Floating" },
    { name: "Sidebar Depth", className: "shd-sidebar-01", css: "2px 0 4px rgba(0,0,0,0.02), 4px 0 8px rgba(0,0,0,0.02), 8px 0 16px rgba(0,0,0,0.02)", layers: 3, timing: "0.03", usage: "Sidebars", category: "Structural" },
    { name: "Notch Inset", className: "shd-notch-01", css: "inset 0 2px 2px rgba(0,0,0,0.04), inset 2px 0 2px rgba(0,0,0,0.02), inset -2px 0 2px rgba(0,0,0,0.02)", layers: 3, timing: "0.02", usage: "Notched Panels", category: "Inset" },
    { name: "Cloudscape", className: "shd-cloud-01", css: "0 8px 16px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.015), 0 32px 64px rgba(0,0,0,0.01), 0 64px 128px rgba(0,0,0,0.005)", layers: 4, timing: "0.08", usage: "Background Elements", category: "Diffused" },
    { name: "Monolith", className: "shd-monolith-01", css: "0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.04), 0 64px 128px rgba(0,0,0,0.04)", layers: 7, timing: "0.18", usage: "Monolithic Surfaces", category: "Volumetric" },
    { name: "Wire Frame", className: "shd-wire-01", css: "0 0 0 1px rgba(0,0,0,0.06)", layers: 1, timing: "0.01", usage: "Wireframe Elements", category: "Geometric" },
    { name: "Depth Field", className: "shd-depth-field", css: "0 1px 2px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.03)", layers: 4, timing: "0.05", usage: "Content Sections", category: "Structural" },
    { name: "Silk Touch", className: "shd-silk-01", css: "0 1px 4px rgba(0,0,0,0.01), 0 2px 8px rgba(0,0,0,0.015), 0 4px 16px rgba(0,0,0,0.02)", layers: 3, timing: "0.02", usage: "Elegant Surfaces", category: "Ambient" },
    { name: "Apex Float", className: "shd-apex-01", css: "0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.06), 0 64px 128px rgba(0,0,0,0.04)", layers: 4, timing: "0.14", usage: "Apex Elements", category: "Floating" },
    { name: "Letterpress", className: "shd-letterpress-01", css: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.1)", layers: 2, timing: "0.01", usage: "Pressed Buttons", category: "Inset" },
    { name: "Rim Light", className: "shd-rim-01", css: "0 0 0 1px rgba(255,255,255,0.8), 0 0 0 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03)", layers: 3, timing: "0.02", usage: "Rimmed Cards", category: "Geometric" },
    { name: "Foundation", className: "shd-foundation-01", css: "0 1px 2px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.03)", layers: 5, timing: "0.07", usage: "Base Components", category: "Structural" },
    { name: "Glass Tile", className: "shd-glass-tile", css: "0 2px 8px rgba(19,91,236,0.05), 0 0 0 1px rgba(19,91,236,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", layers: 3, timing: "0.03", usage: "Glass Tiles", category: "Glass", optimized: true },
    { name: "Projection", className: "shd-projection-01", css: "0 20px 40px rgba(0,0,0,0.03), 0 40px 80px rgba(0,0,0,0.02)", layers: 2, timing: "0.06", usage: "Projected Elements", category: "Diffused" },
    { name: "Tectonic Plate", className: "shd-tectonic-01", css: "0 1px 1px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.02), 0 0 0 1px rgba(0,0,0,0.03)", layers: 4, timing: "0.05", usage: "Tectonic Surfaces", category: "Structural" },
    { name: "Architect's Draft", className: "shd-draft-01", css: "0 0 0 1px rgba(19,91,236,0.06), 1px 1px 0 rgba(19,91,236,0.04), 2px 2px 0 rgba(19,91,236,0.02)", layers: 3, timing: "0.02", usage: "Draft Elements", category: "Blueprint" },
    { name: "Gravitational Pull", className: "shd-gravity-01", css: "0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.06)", layers: 6, timing: "0.16", usage: "High Elevation", category: "Volumetric" },
];
