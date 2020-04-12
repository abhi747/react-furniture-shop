import React from "react";

import item6 from "../../assets/images/item6.jpg";

const RelatedItems = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-12 px-0">
          <h3>Related Items</h3>
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
        <div className="col-md-2 col-6 px-0">
          <img alt="Related item" className="img-fluid" src={item6} />
        </div>
      </div>
    </>
  );
};

export default RelatedItems;
