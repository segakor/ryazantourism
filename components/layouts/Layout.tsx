import { Footer } from "../modules/Footer";
import { Header } from "../modules/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "grid", minHeight: "100vh" }}>
      <Header />
      <main className="content" style={{ flex: "1 0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
