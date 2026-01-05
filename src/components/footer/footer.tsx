import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Flim Atlas contains all the movies and the popular film suggestions.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
              <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-black">Home</a></li>
          <li><a href="#" className="text-decoration-none text-black">Services</a></li>
          <li><a href="#" className="text-decoration-none text-black">Contact</a></li>
        </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><i className="bi bi-facebook"></i></li>
              <li className="list-inline-item"><i className="bi bi-twitter"></i></li>
              <li className="list-inline-item"><i className="bi bi-instagram"></i></li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="text-center">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
