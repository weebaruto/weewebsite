// src/components/Lyrics/SongForLifeLayout.js
// Wraps the songbook plugin routes in the docs "Song For Life" frame so they
// render with the same left sidebar as the ikigai doc pages. We reuse the
// theme's own DocRoot layout and hand it the sidebar via the standard
// DocsSidebarProvider, so the markup and styling match a real doc page.
//
// Docusaurus only exposes a doc sidebar's *first link* to non-doc routes (via
// global data) — not its full item tree — so we mirror the ikigai section here.
// Keep this in sync with docs/ikigai/* and the Songbook link in sidebars.js.
import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocRootLayout from '@theme/DocRoot/Layout';
import {DocsSidebarProvider} from '@docusaurus/plugin-content-docs/client';

function useSongForLifeSidebarItems() {
  return [
    {
      type: 'link',
      label: 'A Song For Life · 生き甲斐',
      href: useBaseUrl('/docs/ikigai/'),
    },
    {
      type: 'link',
      label: 'Seeker Bobby - Persona',
      href: useBaseUrl('/docs/ikigai/persona-seeker-bobby'),
    },
    {
      type: 'link',
      label: 'Jobs-To-Be-Done Statements',
      href: useBaseUrl('/docs/ikigai/jtbd-song-for-life-statements'),
    },
    {
      type: 'link',
      label: 'Jobs-To-Be-Done Canvas',
      href: useBaseUrl('/docs/ikigai/jtbd-song-for-life-canvas'),
    },
    {
      type: 'link',
      label: 'Songbook MVP 1.0',
      href: useBaseUrl('/songbook'),
    },
  ];
}

// Must run *inside* <Layout>, where LayoutProvider's contexts are available.
function SongForLifeFrame({children}) {
  const items = useSongForLifeSidebarItems();
  return (
    <DocsSidebarProvider name="ikigaiSidebar" items={items}>
      <DocRootLayout>{children}</DocRootLayout>
    </DocsSidebarProvider>
  );
}

export default function SongForLifeLayout({title, description, children}) {
  return (
    <Layout title={title} description={description}>
      <SongForLifeFrame>{children}</SongForLifeFrame>
    </Layout>
  );
}
