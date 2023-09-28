import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LinkWithUTM = ({ href, children }) => {
  if (!children) children = href;
  const context = useDocusaurusContext();
  const utmParams = context?.siteConfig?.customFields?.utmParams || '';
  const url = `${href}?${utmParams}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
  );
};

export default LinkWithUTM;