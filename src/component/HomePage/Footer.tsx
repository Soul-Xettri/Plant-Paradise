import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook, faInstagram,  faPinterestP,
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer" style={{marginRight:"40px",marginLeft:"40px"}}>
        <div className="container">
            
            <div className="footer-bottom">
                <div className="wrap-copyright" style={{alignItems:"center"}}>
                    <div className="copyright">
                        Copyright © 2018 <Link to="">Plant</Link>.Powered by LaGrandee Students.
                    </div>
                    <div className="countries">
                        <img src="../src/assets/images/nepal.png" alt="" style={{width:"20px"}}/>Nepal
                    </div>
                </div>
                <div className="row" style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="menu-footer">
                            <ul>
                                <li><Link to="#">Gift Center  </Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">  Terms of Use </Link></li>
                                <li><Link to="#">  Privacy Policy </Link></li>
                                <li><Link to="#">  Buying Guildes </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="social">
                            <Link to="#" title="facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                            <i className="fa fa-facebook"></i>
                        </Link>
                            <Link to="#" title="facebook">
                            <FontAwesomeIcon icon={faInstagram} />
                            <i className="    fa fa-instagram"></i>
                        </Link>
                            <Link to="#" title="Pinterest">
                            <FontAwesomeIcon icon={ faPinterestP} />

                            <i className="fa fa-pinterest-p"></i>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
