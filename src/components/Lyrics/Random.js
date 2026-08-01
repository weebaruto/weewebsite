// src/components/Lyrics/Random.js
import React, {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import Layout from '@theme/Layout';

export default function Random({songs}) {
  const history = useHistory();

  useEffect(() => {
    if (!songs || songs.length === 0) return;
    const pick = songs[Math.floor(Math.random() * songs.length)];
    history.replace(pick.permalink);
  }, [songs, history]);

  return (
    <Layout title="A random song" description="A randomly chosen song.">
      <main className="container margin-vert--lg">
        <p>Finding you a song…</p>
      </main>
    </Layout>
  );
}
