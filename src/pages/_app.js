import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import '../assets/vendor/aos/aos.js';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import { Provider } from 'react-redux';
import { store } from '@/store.js';
import { useRouter } from 'next/router.js';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Access the pathname from the router object
  const showHeader = !(router.pathname.startsWith('/anas') || router.pathname.startsWith('/dashboard'));
  return <Provider store={store}>
    {showHeader && <Header />}
    <Component {...pageProps} />
    {showHeader && <Footer />}
    <script src="/scripts/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="/scripts/vendor/aos/aos.js"></script>
    <script src="/scripts/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/scripts/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="/scripts/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="/scripts/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/scripts/js/main.js"></script>
  </Provider>
}
