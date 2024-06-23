
import MiddleNav from './Components/MiddleNav';
import TopNav from './Components/TopNav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <TopNav />
            <MiddleNav />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
