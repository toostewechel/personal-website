import { MDXProvider } from "@mdx-js/react";
import "../styles/styles.css";

import * as components from "../components/markdown/MDX.js";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
