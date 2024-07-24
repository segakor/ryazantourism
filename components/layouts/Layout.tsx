import { Footer } from "../modules/Footer";
import { Header } from "../modules/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-[1]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
