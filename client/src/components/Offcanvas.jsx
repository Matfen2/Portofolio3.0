import React from "react";

export default function Offcanvas() {
  return (
    <div>
      <div className="offcanvas offcanvas-end" id="sideCanvas">
        <div className="offcanvas-body">
          <button type="button" id="btnCloseCanvas" data-bs-dismiss="offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="containNav">
            <div className="navbar-nav">
              <li className="nav-item">
                <a href="portofolio.html#about-me" className="nav-link">
                  A propos de moi
                </a>
              </li>
              <li className="nav-item">
                <a href="portofolio.html#my-capacity" className="nav-link">
                  Compétences/CV
                </a>
              </li>
              <li className="nav-item">
                <a href="portofolio.html#myProjets" className="nav-link">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a href="portofolio.html#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
