import React from 'react'
import starfieldLogo from '../pict/myProjets/starfieldLogo.png'
import wellifeLogo from '../pict/myProjets/wellifeLogo.png'
import eaglePcLogo from '../pict/myProjets/EaglePCLogo.png'

export default function MyProjets() {
  return (
    <div>
      <section className="idea" id="myProjets">
        <h1 className="nameProjet">Mes projets</h1>
        <div className="row" id="listProjets">
          <div className="col-lg-4" id="projet">
            <img src={starfieldLogo} data-bs-toggle="modal" data-bs-target="#starfield" alt="starfield" className="img-fluid" style={{width: "450px", heigth: "350px", border: "1px solid black", borderRadius: "40px", cursor: "pointer"}} />
          </div>
          <div className="col-lg-4" id="projet">
            <img src={wellifeLogo} data-bs-toggle="modal" data-bs-target="#wellife" alt="wellife" className="img-fluid" style={{width: "450px", heigth: "350px", border: "1px solid black", borderRadius: "40px", cursor: "pointer"}} />
          </div>
          <div className="col-lg-4" id="projet">
            <img src={eaglePcLogo} data-bs-toggle="modal" data-bs-target="#eaglePC" alt="eaglePC" className="img-fluid" style={{width: "450px", heigth: "350px", border: "1px solid black", borderRadius: "40px", cursor: "pointer"}} />
          </div>
        </div>
        <div className="lienProjets">
          <a href="mesProjets.html" className="lien">Voir plus de mes projets</a>
        </div>
      </section>
    </div>
  );
}
