import React from "react";

import "./Details.scss";

interface Props {
  image: string;
  isDetails: boolean;
  title: string;
  text?: React.ReactElement;
}

const Details: React.FC<Props> = (props) => {
  const { image, isDetails, title, text } = props;
  let description;
  if (isDetails) {
    description = (
      <>
        <h5 className="py-2">$149</h5>
        <hr />
        <ul>
          <li>
            <b>Assembly: </b> Carpanter Assembly
          </li>
          <li>
            <b>Warranty: </b> 12 months warranty
          </li>
        </ul>
        <div className="d-flex">
          <button type="button" className="btn btn-light">
            -
          </button>
          <div className="item-count">1</div>
          <button type="button" className="btn btn-light">
            +
          </button>
          <button type="button" className="btn btn-warning">
            Add to cart
          </button>
        </div>
      </>
    );
  } else {
    description = text;
  }
  return (
    <div className="details row">
      <img
        src={image}
        alt="Sofa"
        className="col-md-6 pl-md-0 w-100 img-fluid"
      />
      <div className="py-3 details-text col-md-6">
        <h4>{title}</h4>
        {description}
      </div>
    </div>
  );
};

export default Details;
