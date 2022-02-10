import '../styles/globals.css'
import '../styles/home.css'
import '../styles/navBar.css'
import '../styles/hamburgerMenu.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
