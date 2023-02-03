import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:wght@700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript>
          {/* JS Plugins  */}
          <script src="plugins/jquery/jquery.min.js" async></script>
          <script src="plugins/bootstrap/bootstrap.min.js" async></script>

          {/* Main Script */}
          <script src="js/script.js" async></script>
        </NextScript>
      </body>
    </Html>
  );
}
