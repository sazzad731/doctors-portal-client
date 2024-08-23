import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      className="md:px-0 px-3"
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="footer md:flex md:justify-between pb-28 pt-20">
        <nav>
          <h6 className="footer-title">SERVICES</h6>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </nav>
        <nav className="md:my-0 my-24">
          <h6 className="footer-title">ORAL HEALTH</h6>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">OUR ADDRESS</h6>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </nav>
      </div>
      <div className="text-center pb-11">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
