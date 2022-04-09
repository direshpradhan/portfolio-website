// pages/_document.js

import { ColorModeScript, localStorageManager } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            colorModeManager={localStorageManager}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
