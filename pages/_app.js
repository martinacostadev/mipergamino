import "../styles/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import MainLayout from "../components/MainLayout";
import { Provider as SessionProvider } from "../src/session/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <MainLayout>
        <Component {...pageProps} />
        <div></div>
        <div id="modalgoncy"></div>
      </MainLayout>
    </SessionProvider>
  );
}
