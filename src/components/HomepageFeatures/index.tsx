import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const dashboardImage = '/img/pgrwl/metrics-full.png';

const FeatureList: FeatureItem[] = [
  {
    title: 'About',
    description: (
      <>
        A PostgreSQL write-ahead log (WAL) receiver written in Go.
      </>
    ),
  },
  {
    title: 'Features',
    description: (
      <>
        Stream, compress, encrypt, upload to S3/SFTP, retain and monitor your WAL archive.
      </>
    ),
  },
  {
    title: 'Purpose',
    description: (
      <>
        Designed for Point-in-Time Recovery (PITR), ensures zero data loss (RPO=0) and seamless
        integration with Kubernetes environments.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem): ReactNode {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* 3 columns */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* single image BELOW all sections */}
        <div className="text--center margin-top--lg">
          <img
            src={dashboardImage}
            alt="pgrwl dashboard"
            className={styles.dashboardImg}
          />
        </div>
      </div>
    </section>
  );
}