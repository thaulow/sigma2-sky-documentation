import React from 'react';
import Layout from '@theme/Layout';
import versions from '@site/versions.json';
import Link from '@docusaurus/Link';

export default function Versions(): JSX.Element {
  const latestVersion = versions[0];

  return (
    <Layout title="Versions" description="Documentation versions">
      <main className="container margin-vert--xl">
        <h1>Documentation Versions</h1>

        <div className="margin-top--lg">
          <h2>Current version (stable)</h2>
          <p>
            <Link to={`/users/intro`}>{latestVersion}</Link>
          </p>
        </div>

        {versions.length > 1 && (
          <div className="margin-top--lg">
            <h2>Past versions</h2>
            <ul>
              {versions.slice(1).map((version) => (
                <li key={version}>
                  <Link to={`/users/${version}/intro`}>{version}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </Layout>
  );
}
