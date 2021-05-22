import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "../styles/globals.css";
import reducer from "../redux/reducer";

import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import MobileMenu from "../components/MobileMenu";

const store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <>
          <Header/>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer/>
        </>
      </Container>
      <MobileMenu/>
    </Provider>
  );
}

export default MyApp
