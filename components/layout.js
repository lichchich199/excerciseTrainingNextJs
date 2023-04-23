import { Footer } from './Footer';
import Header from './Header';
import Head from 'next/head';

export { Layout };

//Layout
function Layout({ children }) {
    return (
        <>
          <Head>
            <title>Excercise NextJs</title>
          </Head>
          <Header />
          <main>
            <div className="col-md-8 offset-md-2 mt-5">
                {children}
            </div>
          </main>
          <Footer/>
    </>
    );
}