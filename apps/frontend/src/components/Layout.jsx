import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <Header />}
      <main className={isHome ? "landing-main" : "page-content"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
