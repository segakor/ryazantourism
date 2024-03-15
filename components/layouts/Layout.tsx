import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
