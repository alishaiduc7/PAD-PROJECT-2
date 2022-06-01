import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/Footer';
//using this file for navigation through app pages (with layout - children)
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
    <Footer></Footer>
  </Layout>
  );
}
  
export default MyApp
