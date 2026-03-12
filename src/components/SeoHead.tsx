'use client';

import { useEffect } from 'react';
import type { MetaData } from '@/lib/meta-config';

interface Props {
  meta: MetaData;
}

export function SeoHead({ meta }: Props) {
  useEffect(() => {
    // Set page title
    document.title = meta.title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll(
      'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]'
    );
    existingMetas.forEach((tag) => tag.remove());

    // Add description
    const descMeta = document.createElement('meta');
    descMeta.name = 'description';
    descMeta.content = meta.description;
    document.head.appendChild(descMeta);

    // Add OG tags
    if (meta.og_image) {
      const ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.content = meta.og_image;
      document.head.appendChild(ogImage);
    }

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = meta.title;
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.content = meta.description;
    document.head.appendChild(ogDesc);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = meta.og_type || 'website';
    document.head.appendChild(ogType);

    if (meta.og_url) {
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.content = meta.og_url;
      document.head.appendChild(ogUrl);
    }

    // Add canonical
    if (meta.canonical) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = `https://www.pallapay.com${meta.canonical}`;
      document.head.appendChild(canonical);
    }

    // Add schema
    if (meta.schema) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(meta.schema);
      document.head.appendChild(schemaScript);
    }
  }, [meta]);

  return null;
}
