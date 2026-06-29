export const SITE = {
  name: 'ShadowCraft',
  url: 'https://shadowcraft.nevilgadhia.in',
  author: 'Nevil Gadhia',
  authorUrl: 'https://www.nevilgadhia.in',
  github: 'https://github.com/nevil5249',
  npm: 'https://www.npmjs.com/package/@nevil5249/shadowcraft',
  email: 'contact@nevilgadhia.in',
  locale: 'en_US',
  version: '1.1.0',
};

export const GLOBAL_KEYWORDS = [
  'ShadowCraft',
  'tailwind css shadows',
  'tailwind shadow plugin',
  'box shadow utilities',
  'css box shadow',
  'multi-layer shadows',
  'volumetric shadows',
  'ui depth system',
  'tailwind css plugin',
  'shadow library',
  'tailwind v4 plugin',
  'tailwind v3 plugin',
  'production shadows',
  'saas ui shadows',
  'elevation shadows',
  'inset shadows',
  'glass morphism shadows',
  'neumorphism shadows',
  'material design shadows',
  'dark mode shadows',
  'floating modal shadows',
  'hero section shadows',
  'card shadows',
  'button shadows',
  'dropdown shadows',
  'architectural shadows',
  'blueprint shadows',
  'copy paste shadows',
  'tailwind arbitrary shadows',
  '@nevil5249/shadowcraft',
  'npm tailwind plugin',
  'css shadow generator',
  'shadow playground',
  'design system shadows',
  'interface depth',
  'penumbra shadows',
  'layered box shadow',
].join(', ');

export const PAGE_SEO = {
  '/': {
    title: 'ShadowCraft — Premium Tailwind CSS Shadow Library | Volumetric Box Shadows',
    description:
      'ShadowCraft is a production-ready Tailwind CSS plugin with handcrafted multi-layer box shadows across curated categories. Install @nevil5249/shadowcraft for elevation, inset, glass, neumorphism, material, dark mode, and cinematic UI depth.',
    keywords: `${GLOBAL_KEYWORDS}, best tailwind shadows, free shadow css library, web design shadows`,
    ogType: 'website',
    jsonLd: 'home',
  },
  '/library': {
    title: 'Shadow Library — Browse Tailwind Box Shadow Utilities | ShadowCraft',
    description:
      'Explore production-grade Tailwind CSS shadow utilities organized by category: Elevation, Inset, Glass, Floating, Neumorphism, Material, Glow, Dark Mode, Cinematic, and more. Copy class names, raw CSS, or Tailwind arbitrary values instantly.',
    keywords: `${GLOBAL_KEYWORDS}, shadow catalog, shadow gallery, tailwind shadow classes, shd-subtle-01, shadow utilities list`,
    ogType: 'website',
    jsonLd: 'library',
  },
  '/playground': {
    title: 'Shadow Playground — Multi-Layer Box Shadow Generator | ShadowCraft',
    description:
      'Build custom multi-layer volumetric box shadows in real time. Adjust offset, blur, spread, opacity, and inset layers. Export raw CSS or Tailwind shadow-[...] arbitrary values for production UI.',
    keywords: `${GLOBAL_KEYWORDS}, shadow generator, box shadow builder, css shadow tool, tailwind shadow generator, multi layer shadow maker`,
    ogType: 'website',
    jsonLd: 'playground',
  },
  '/docs': {
    title: 'Documentation — Install ShadowCraft Tailwind Plugin | React, Next.js, HTML',
    description:
      'Step-by-step ShadowCraft integration guide for Tailwind CSS v4 and v3. Install @nevil5249/shadowcraft via npm and use volumetric shadow utilities in React, Next.js, and vanilla HTML projects.',
    keywords: `${GLOBAL_KEYWORDS}, tailwind plugin install, shadowcraft docs, tailwind css setup, npm install shadowcraft, @plugin shadowcraft`,
    ogType: 'article',
    jsonLd: 'docs',
  },
  '/legal': {
    title: 'Legal — Terms, Privacy & Security | ShadowCraft',
    description:
      'ShadowCraft legal protocols including terms of service, privacy policy, and security practices for the Tailwind CSS shadow library and documentation website.',
    keywords: 'ShadowCraft terms, ShadowCraft privacy, tailwind plugin license, MIT license',
    ogType: 'website',
    jsonLd: 'legal',
  },
};

export function getPageSeo(pathname) {
  return PAGE_SEO[pathname] || PAGE_SEO['/'];
}

export function buildJsonLd(pageKey, pathname) {
  const { url, name, author, authorUrl, github, npm, version } = SITE;

  const organization = {
    '@type': 'Organization',
    name,
    url,
    logo: `${url}/favicon.svg`,
    sameAs: [github, npm, authorUrl],
  };

  const softwareApp = {
    '@type': 'SoftwareApplication',
    name: '@nevil5249/shadowcraft',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description: 'Tailwind CSS plugin providing multi-layer volumetric box shadow utilities across curated categories.',
    url: npm,
    softwareVersion: version,
    author: { '@type': 'Person', name: author, url: authorUrl },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    downloadUrl: npm,
  };

  const website = {
    '@type': 'WebSite',
    name,
    url,
    description: PAGE_SEO['/'].description,
    publisher: organization,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/library?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbs = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: url },
      ...(pathname !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: pageKey.charAt(0).toUpperCase() + pageKey.slice(1),
              item: `${url}${pathname}`,
            },
          ]
        : []),
    ],
  };

  const schemas = [organization, softwareApp, website, breadcrumbs];

  if (pageKey === 'library') {
    schemas.push({
      '@type': 'CollectionPage',
      name: 'ShadowCraft Shadow Library',
      description: PAGE_SEO['/library'].description,
      url: `${url}/library`,
      about: {
        '@type': 'Thing',
        name: 'Tailwind CSS Box Shadow Utilities',
      },
    });
  }

  if (pageKey === 'playground') {
    schemas.push({
      '@type': 'WebApplication',
      name: 'ShadowCraft Playground',
      applicationCategory: 'DesignApplication',
      url: `${url}/playground`,
      description: PAGE_SEO['/playground'].description,
      browserRequirements: 'Requires JavaScript',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    });
  }

  if (pageKey === 'docs') {
    schemas.push({
      '@type': 'TechArticle',
      headline: 'ShadowCraft Integration Documentation',
      description: PAGE_SEO['/docs'].description,
      url: `${url}/docs`,
      author: { '@type': 'Person', name: author, url: authorUrl },
      publisher: organization,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
