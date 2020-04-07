import React from "react";
import { Link } from "react-router-dom";
const ClassicTemplateFooter = ({ menus, platFormname }) => {
  return (
    <footer className="footer-container ls">
      <div className="container">
        <div className="footer-column">
          <p>&copy; {platFormname}</p>
          <a href="https://vonza.com" target="_blank">
            <img src="/images/dashboard/logo-v.png" />
            Made with Vonza
          </a>
        </div>
        <div className="footer-column">
          {menus &&
            menus.map((menusItems, index) => {
              return menusItems.url_type != "Internal" &&
                menusItems.menu_type == "Footer" ? (
                <a
                  key={index}
                  href={menusItems.url}
                  target="_blank"
                  className="fwm"
                >
                  {menusItems.name}
                </a>
              ) : menusItems && menusItems.menu_type == "Footer" ? (
                <Link to={menusItems.url} key={index} className="fwm">
                  {menusItems.name}
                </Link>
              ) : null;
            })}
        </div>
        <div className="footer-column">
          <Link to="/terms" className="fwm">Terms</Link>
          <Link to="/privacy-policy" className="fwm">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default ClassicTemplateFooter;
