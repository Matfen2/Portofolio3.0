import React from 'react'
import starfieldSite from '../pict/myProjets/starfieldSite.png'
import wellifeSite from '../pict/myProjets/wellifeSite.png'
import eaglePCSite from '../pict/myProjets/EaglePCSite.png'

export default function Modal() {
  return (
    <div>
      {/* STARFIELD  */}
      <div
        class="modal fade"
        id="starfield"
        tabindex="-1"
        aria-labelledby="starLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-md"
          style={{ maxWidth: "90%" }}
        >
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-header">
              <h5
                class="modal-title"
                id="starTitle"
                style={{ display: "block", margin: "auto" }}
              >
                STARFIELD
              </h5>
            </div>
            <div class="modal-body">
              <img
                src={starfieldSite}
                class="img-fluid w-100"
                alt="pictProjet"
              />
            </div>
            <div class="modal-footer" style={{ justifyContent: "center" }}>
              <div className="langageUse">
                <p>
                  LANGAGES UTILISES : HTML, CSS, JAVASCRIPT, SCSS, BOOTSTRAP,
                  REACT JS
                </p>
              </div>
              <div className="hrefShowSite">
                <p>
                  Lien Github :{" "}
                  <a
                    href="https://github.com/Matfen2/Starfield"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://github.com/Matfen2/Starfield
                  </a>
                </p>
                <p>
                  Lien Url :{" "}
                  <a
                    href="https://my-site-show-starfield-ae77d85a58bb.herokuapp.com"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://my-site-show-starfield-ae77d85a58bb.herokuapp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WELLIFE  */}
      <div
        class="modal fade"
        id="wellife"
        tabindex="-1"
        aria-labelledby="wellLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-md"
          style={{ maxWidth: "90%" }}
        >
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-header">
              <h5
                class="modal-title"
                id="wellTitle"
                style={{ display: "block", margin: "auto" }}
              >
                WELLIFE
              </h5>
            </div>
            <div class="modal-body">
              <img src={wellifeSite} class="img-fluid w-100" alt="pictProjet" />
            </div>
            <div class="modal-footer" style={{ justifyContent: "center" }}>
              <div className="langageUse">
                <p>
                  LANGAGES UTILISES : HTML, CSS, JAVASCRIPT, SCSS, BOOTSTRAP,
                  REACT JS, NODEJS, MONGODB, MONGOOSE
                </p>
              </div>
              <div className="hrefShowSite">
                <p>
                  Lien Github :{" "}
                  <a
                    href="https://github.com/Matfen2/Wellife"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://github.com/Matfen2/Wellife
                  </a>
                </p>
                <p>
                  Lien Url :{" "}
                  <a
                    href="https://wellife-882346b6871e.herokuapp.com"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://wellife-882346b6871e.herokuapp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EAGLEPC */}
      <div
        class="modal fade"
        id="eaglePC"
        tabindex="-1"
        aria-labelledby="eagleLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-md"
          style={{ maxWidth: "90%" }}
        >
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-header">
              <h5
                class="modal-title"
                id="eaglePCTitle"
                style={{ display: "block", margin: "auto" }}
              >
                EAGLEPC
              </h5>
            </div>
            <div class="modal-body">
              <img src={eaglePCSite} class="img-fluid w-100" alt="pictProjet" />
            </div>
            <div class="modal-footer" style={{ justifyContent: "center" }}>
              <div className="langageUse">
                <p>
                  LANGAGES UTILISES : HTML, CSS, JAVASCRIPT, SCSS, BOOTSTRAP,
                  REACT JS
                </p>
              </div>
              <div className="hrefShowSite">
                <p>
                  Lien Github :{" "}
                  <a
                    href="https://github.com/Matfen2/EaglePC"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://github.com/Matfen2/EaglePC
                  </a>
                </p>
                <p>
                  Lien Url :{" "}
                  <a
                    href="https://eagle-pc.herokuapp.com"
                    style={{ textDecoration: "none", color: "azure" }}
                  >
                    https://eagle-pc.herokuapp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
