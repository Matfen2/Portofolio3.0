import React from 'react'
import wellifeSite from '../pict/myProjets/wellifeSite.png'

export default function Modal() {
  return (
    <div>
      {/* STARFIELD */}
      <div
        class="modal fade"
        id="starfield"
        tabindex="-1"
        aria-labelledby="starfieldLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          style={{ maxWidth: "90%" }}
        >
          <div class="modal-content h-100">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-header">
              <h5
                class="modal-title"
                id="starfieldLabel"
                style={{ display: "block", margin: "auto" }}
              >
                GAME WORLD
              </h5>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12">
                  <img
                    src="src/myProjets/Game-World.png"
                    class="img-fluid w-100"
                    alt="pictProjet"
                  />
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                  <p class="drivers">Langages utilisées :</p>
                  <div class="langages">
                    <ul class="list">
                      <li class="codes">HTML</li>
                      <li class="codes">CSS</li>
                      <li class="codes">SCSS</li>
                      <li class="codes">Javascript</li>
                    </ul>
                    <ul class="list">
                      <li class="codes">Jquery</li>
                      <li class="codes">Bootstrap</li>
                      <li class="codes">NodeJs</li>
                      <li class="codes">ExpressJs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer" style={{ justifyContent: "center" }}>
              <p>
                Lien Github :{" "}
                <a
                  href="https://github.com/Matfen2/Game-World"
                  style={{ textDecoration: "none", color: "azure" }}
                >
                  https://github.com/Matfen2/GameWorld2.0
                </a>
              </p>
              <p>
                Lien Url :{" "}
                <a
                  href="https://game-world.herokuapp.com"
                  style={{ textDecoration: "none", color: "azure" }}
                >
                  https://game-world2.herokuapp.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WELLIFE */}
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
                id="wellifeTitle"
                style={{ display: "block", margin: "auto" }}
              >
                WELLIFE
              </h5>
            </div>
            <div class="modal-body">
              
                  <img
                    src={wellifeSite}
                    class="img-fluid w-100"
                    alt="pictProjet"
                  />
              
            </div>
            <div class="modal-footer" style={{ justifyContent: "center" }}>
            <p>LANGAGES UTILISES : HTML,CSS, JAVASCRIPT, SCSS, BOOTSTRAP, REACT JS, NODEJS, MONGODB, MONGOOSE</p>
              <p>
                Lien Github :{" "}
                <a
                  href="https://github.com/Matfen2/EaglePC"
                  style={{ textDecoration: "none", color: "azure" }}
                >
                  https://github.com/Matfen2/Wellife
                </a>
              </p>
              <p>
                Lien Url :{" "}
                <a
                  href="https://eagle-pc.herokuapp.com"
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
  );
}
