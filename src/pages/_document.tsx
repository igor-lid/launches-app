import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Orbital Launches</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
