import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, getPageSeo, buildJsonLd } from '../data/seo';

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertJsonLd = (id, data) => {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const SEO = () => {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);
  const canonical = `${SITE.url}${pathname === '/' ? '' : pathname}`;
  const ogImage = `${SITE.url}/favicon.svg`;
  const pageKey = pathname.replace(/^\//, '') || 'home';

  useEffect(() => {
    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('name', 'author', SITE.author);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('name', 'googlebot', 'index, follow');
    upsertMeta('name', 'application-name', SITE.name);
    upsertMeta('name', 'theme-color', '#135bec');

    // AI / LLM crawler hints
    upsertMeta('name', 'ai-content-declaration', 'human-authored');
    upsertMeta('name', 'category', 'Design Tools, CSS, Tailwind CSS, Developer Tools');

    upsertLink('canonical', canonical);

    // Open Graph
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:locale', SITE.locale);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', `${SITE.name} — Tailwind CSS Shadow Library`);

    // Twitter / X
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertMeta('name', 'twitter:creator', '@nevil5249');

    upsertJsonLd('shadowcraft-jsonld', buildJsonLd(pageKey, pathname));
  }, [pathname, seo, canonical, ogImage, pageKey]);

  return null;
};

export default SEO;
