import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata as config } from '../../../gatsby-config';

const Meta = props => {
  const metaImage = `${config.image}`;
  const mainTitle = `${config.title}`;
  const metaTitle = props.title ? `${props.title} | ${mainTitle}` : mainTitle;
  const metaDescription = props.description || config.description;
  const absoluteUrl = `${config.url}${props.location.pathname}`;

  const meta = [
    { name: 'og:description', content: metaDescription },
    { name: 'og:title', content: mainTitle },
    { name: 'og:description', content: metaDescription },
    { name:  'og:image', content: metaImage},
    { property: 'og:url', content: absoluteUrl },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
    { property: 'twitter:url', content: absoluteUrl },
  ];

  if (props.noIndex) {
    meta.push({ name: 'robots', content: 'noindex' });
  }

  return (
    <Helmet title={metaTitle} meta={meta} />
  );
};

export default Meta;
