import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <h1 className="footer-heading">FoodieZone</h1>
          <p className="footer-description">
            Discover a world of flavors and indulge in delightful culinary experiences with FoodieZone.
          </p>
          <div className="footer-links">
            <a href="/about" className="footer-link">About Us</a>
            <a href="/contact" className="footer-link">Contact Us</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
        <div className="footer-social">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
          <a href="#" className="social-icon-link">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="social-icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="social-icon-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon-link">
          <i className="fab fa-github"></i>
        </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
