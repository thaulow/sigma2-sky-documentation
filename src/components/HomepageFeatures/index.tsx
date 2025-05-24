import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';



type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'General Users',
    Svg: require('@site/static/img/users.svg').default,
    description: (
      <>
        Select General Users if you're a researcher, company, or public sector looking to apply for or buy resources or competence.
      </>
    ),
    link: '/users/intro',
  },
  {
    title: 'Service Providers',
    Svg: require('@site/static/img/providers.svg').default,
    description: (
      <>
        Select Service Providers if you are an infrastructure owner looking to offer computing resources or competency to other users
      </>
    ),
      link: '/providers/intro',
  },
    {
    title: 'Call Managers',
    Svg: require('@site/static/img/calls.svg').default,
    description: (
      <>
        Select Call Managers if you manage resource calls and are responsible for evaluating applications and selecting recipients.
      </>
    ),
        link: '/calls/intro',
  },
  {
    title: 'Staff',
    Svg: require('@site/static/img/staff.svg').default,
    description: (
      <>
        Select Staff if you are a Sigma2 representative or affiliated, responsible for support or development of sky.sigma2.no
      </>
    ),
        link: '/staff/intro',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx('text--center', 'padding-horiz--md', styles.eeeText)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
