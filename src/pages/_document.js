import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title and Meta Tags */}
        <meta content="" name="Artline is the Pakistan's No.1 Digital Agency which provides Graphics Designing Services, Web Development Services and Digital Services" />
        <meta content="" name="keywords" />

        {/* Favicons */}
        <link href="/favicon.ico" rel="icon" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <script src="/vendor/swiper/swiper-bundle.min.js" defer></script>


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
