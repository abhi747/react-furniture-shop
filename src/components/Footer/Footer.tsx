import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="p-5 app-footer text-center">
      <h4 className="mb-5">Grab our Newsletter</h4>
      <div className="row mt-2 justify-content-center">
        <div className="col-sm-2">Bedrrom</div>
        <div className="col-sm-2">Living Room</div>
        <div className="col-sm-2">Office</div>
        <div className="col-sm-2">Kitchen</div>
        <div className="col-sm-2">Bathroom</div>
      </div>
    </footer>
  );
};

export default Footer;
