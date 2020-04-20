import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app-footer text-center">
      <h4 className="mb-5">Grab our Newsletter</h4>
      <div className="row mx-0 footer-sub-content">
        <div className="col-md-4 d-md-flex brand order-md-1">
          <i className="fas fa-couch"></i>
        </div>
        <div className="col-md-6 footer-items-links">
          <div>Bedroom</div>
          <div>Living Room</div>
          <div>Office</div>
          <div>Kitchen</div>
          <div>Bathroom</div>
        </div>
        <div className="col-md-2 d-md-flex justify-content-md-end order-md-2">
          <i className="fa fa-facebook pr-3"></i>
          <i className="fa fa-twitter pr-3"></i>
          <i className="fa fa-pinterest"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
