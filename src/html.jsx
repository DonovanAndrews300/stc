import React from 'react';
import Helmet from 'react-helmet';

import { siteMetadata as config } from '../gatsby-config';

const isProduction = process.env.NODE_ENV === 'production';
const openGraphUrl = isProduction ? `${config.url}/share.png` : '/share.png';

let styles;

if (isProduction) {
  try {
    styles = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.error(e);
  }
}

const Html = ({ body, headComponents, postBodyComponents }) => {
  const helmet = Helmet.rewind();

  return (
    <html lang="en">
      <head>
        {headComponents}

        {/* Document */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta */}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <meta name="theme-color" content="#000000" />

        {/* Styles */}
        {styles && <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};


export default Html;
