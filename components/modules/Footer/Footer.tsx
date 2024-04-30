import LogoFooter from "@/components/elements/Logo/LogoFooter";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_body">
          <div className="footer_info">
           {/*  <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div> */}
          </div>
        </div>
        <div className="footer_basement">
          <div className="footer_left">
            <LogoFooter />
            <div className="footer_title">
              Все о туризме в Рязани <br /> и Рязанской области
            </div>
          </div>
          <div className="footer_copyright">
            {`© 2017—${new Date().getFullYear()} Агентство развития туризма Рязанской области. Комитет
            инвестиций и туризма Рязанской области. Копирование материалов
            только с разрешения администрации сайта.`}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
