import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn } from '@clerk/clerk-react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className='button button--secondary button--lg' to='/docs/intro'>
              Docusaurus -  🧠
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ClerkProvider publishableKey='pk_test_ZWFnZXItZmluY2gtMzkuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </ClerkProvider>
  );
}

//9E@fMbsC2kqMHi$T
