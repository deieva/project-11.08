import '../Assets/Css/Footer.css';
import logo from '../Assets/Images/logo.png';

function Footer() {

    return (
        <div>
             <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={logo} alt="logo with birds" width="374" height="174"/>
            <small className="d-block mb-3 text-muted">&copy; 2017-2021</small>
          </div>
          <div className="col-6 col-md">
            <h6 className="footer-titles">FEATURES</h6>
            <ul className="list-unstyled text-small">
              <li><a className="white-text" href="#">Cool stuff</a></li>
              <li><a className="white-text" href="#">Random feature</a></li>
              <li><a className="white-text" href="#">Team feature</a></li>
              <li><a className="white-text" href="#">Stuff for developers</a></li>
              <li><a className="white-text" href="#">Another one</a></li>
              <li><a className="white-text" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h6 className="footer-titles">RESOURCES</h6>
            <ul className="list-unstyled text-small">
              <li><a className="white-text" href="#">Resource</a></li>
              <li><a className="white-text" href="#">Resource name</a></li>
              <li><a className="white-text" href="#">Another resource</a></li>
              <li><a className="white-text" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h6 className="footer-titles">ABOUT</h6>
            <ul className="list-unstyled text-small">
              <li><a className="white-text"  href="#">Team</a></li>
              <li><a className="white-text" href="#">Locations</a></li>
              <li><a className="white-text" href="#">Privacy</a></li>
              <li><a className="white-text" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

        </div>
    )
}

export default Footer;