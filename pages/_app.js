import { Provider } from "react-redux";
import store from "../redux/store";
import "antd/dist/antd.css";
import "../assets/sass/main.scss";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../container/Layout/Layout";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout />
      <ToastContainer autoClose={4000} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
