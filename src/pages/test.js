import React from 'react';
import Layout from '@theme/Layout';

/* export default function MyReactPage() {
  return (
    <Layout>
      <h1>TEMARIO 2022</h1>
      <a href="https://docs.google.com/document/d/1Ad8EVo8wsXJL_gp1OOGwUvLy4LXc5MP4/edit?usp=share_link&ouid=108713560386230789749&rtpof=true&sd=true">TEMA 45</a>
    </Layout>
  )
}; */

export default function Hello() {
  return (
    <Layout title='SARA' description="SARA'S DOCUMENTATION">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          // alignItems: 'center',
          height: '50vh',
          color: '#1b1b32',
          fontSize: '40px',
        }}>
        <h1>Esto es una prueba</h1>
        
      </div>
    </Layout>
  );
}
