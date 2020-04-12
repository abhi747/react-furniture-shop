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
    <>
      <div className="px-4">
        <div className="row mx-0">
          <div className="col-md-3 justify-content-center menu">
            <span
              onClick={(e) => setView(1)}
              style={{ backgroundColor: view === 1 ? "#f5d061" : "" }}
            >
              Details
            </span>
            <span
              onClick={(e) => setView(2)}
              style={{ backgroundColor: view === 2 ? "#f5d061" : "" }}
            >
              Description
            </span>
            <span
              onClick={(e) => setView(3)}
              style={{ backgroundColor: view === 3 ? "#f5d061" : "" }}
            >
              Reviews
            </span>
          </div>
          <main className="col-md-9 main">
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

        <RelatedItems />
      </div>
    </>
  );
}
