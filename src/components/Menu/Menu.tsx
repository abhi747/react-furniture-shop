import React, { useState } from "react";
import "./Menu.scss";

import Details from "./../Details/Details";
import Reviews from "./../Reviews/Reviews";
import RelatedItems from "./../Related/RelatedItems";

import sofa from "../../assets/images/sofa.jpeg";

export default function Menu() {
  const detailsImage = sofa;
  const detailsTitle = "Elegant Sofa for two persons";
  const descriptionTitle = "Super luxury comfy sofa!";
  const descriptionText = (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      magnam, repellat sint in omnis earum numquam provident esse reprehenderit
      voluptate eum ratione minima pariatur sed.
    </>
  );

  const [view, setView] = useState(1);

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="row mx-0 menu-details-wrapper">
        <div className="col-md-3 px-0 d-flex menu">
          <div
            onClick={(e) => setView(1)}
            className={view === 1 ? "highlight" : ""}
          >
            Details
          </div>
          <div
            onClick={(e) => setView(2)}
            className={view === 2 ? "highlight" : ""}
          >
            Description
          </div>
          <div
            onClick={(e) => setView(3)}
            className={view === 3 ? "highlight" : ""}
          >
            Reviews
          </div>
          <div className="d-none d-md-block">
            <i className="fa fa-facebook pr-3"></i>
            <i className="fa fa-twitter pr-3"></i>
            <i className="fa fa-pinterest"></i>
          </div>
        </div>
        <div className="col-md-9 px-0">
          <main className="main">
            {view === 1 && (
              <Details
                image={detailsImage}
                isDetails={true}
                title={detailsTitle}
              />
            )}

            {view === 2 && (
              <Details
                image={detailsImage}
                isDetails={false}
                title={descriptionTitle}
                text={descriptionText}
              />
            )}
            {view === 3 && <Reviews />}
          </main>
        </div>
      </div>

      <RelatedItems />
    </div>
  );
}
