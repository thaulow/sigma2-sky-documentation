import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Translate from '@docusaurus/Translate';



import styles from './index.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
          <Link className="button button--secondary button--lg"
          to="/users/">
          Getting started </Link>
          <Link className="button button--info button--lg"
          to="https://sky.sigma2.no" target="_blank" rel="noopener noreferrer"> Access Sky ↗ </Link>
        </div>
        
      </div>
    </header>
  );
}
function VideoContainer() {
  return (
    <div className="container text--center margin-top--xl margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate>Quickstart</Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="uFJGQP1r1IE"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Quickstart"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Frontpage`}
      description="Documentation for Norwegian national infrastructure access">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <VideoContainer />
      </main>
    </Layout>
  );
}
