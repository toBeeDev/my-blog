import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex w-full flex-col max-w-7xl mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
