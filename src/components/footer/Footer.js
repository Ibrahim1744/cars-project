import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-overlay"></div>
        <div className="footer-content container">
          <div className="footer-content">
            <div className="footer-header">
              <h1>About Us</h1>
              <p>
                With a great passion for cars and the thrill of driving, Rotana
                Star is committed to offering an unforgettable experience to our
                valued clients. We are specialized in luxury and exotic car
                rentals, offering you great deals at unbeatable prices.
              </p>
              <p>
                Rent a car in Dubai, Abu Dhabi, Sharjah, Ajman. Search for any
                car you want to rent, browse at your convenience and make your
                choice.
              </p>
              <p>
                High standards and high quality. When you want the best of
                everything, then Dubai is your ultimate destination and Rotana
                Star is your most reliable provider of luxury car rentals. With
                our experience and high quality services we are established at
                the top of the car hire industry.
              </p>
              <div className="footer-socails">
                <a href="https://www.facebook.com/rotanastar.ae/">
                  <AiFillFacebook />
                </a>
                <a href="https://www.instagram.com/rotanastarrentacar/">
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-links">
                <ul>
                  <li className="footer-links-head">Head Office</li>
                  <li>
                    <Link to="tel:+971526601227">
                      <BsFillTelephoneFill /> +971526601227
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <AiOutlineMail />
                      nfo@rotanastar.ae
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <GoLocation />
                      nfo@rotanastar.ae
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="footer-links-head">Site Links</li>
                  <li>
                    <Link to="tel:+971526601227">
                      {" "}
                      Economy Car Rental in Dubai
                    </Link>
                  </li>
                  <li>
                    <Link to="">Luxury car rental Abu Dhabi</Link>
                  </li>
                  <li>
                    <Link to="">Rent Ferrari in Dubai</Link>
                  </li>
                  <li>
                    <Link to="">Rent Lamborghini in Dubai</Link>
                  </li>
                </ul>
                <ul>
                  <li className="footer-links-head">Site Links</li>
                  <li>
                    <Link to="tel:+971526601227"> Rent Mercedes Dubai</Link>
                  </li>
                  <li>
                    <Link to="">Rent Porsche Dubai</Link>
                  </li>
                  <li>
                    <Link to="">Rent Rolls Royce in Dubai</Link>
                  </li>
                  <li>
                    <Link to="">Rent Sports Car in Dubaii</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-links-copyright">
                <Link>Terms And Conditions</Link>
                <p>
                  Ⓒ 2021 - All Rights Are Reserved - Copyright Rotana Star -{" "}
                  <Link>Privact Policy</Link>
                </p>
                <div className="atms-imgs">
                  <img
                    src="https://www.rotanastar.ae/wp-content/uploads/2021/05/2.png"
                    alt=""
                  />
                  <img
                    src="https://www.rotanastar.ae/wp-content/uploads/2021/05/4.png"
                    alt=""
                  />
                  <img
                    src="https://www.rotanastar.ae/wp-content/uploads/2021/05/3.png"
                    alt=""
                  />
                  <img
                    src="https://www.rotanastar.ae/wp-content/uploads/2021/05/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
