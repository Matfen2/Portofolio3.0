import React from "react";
import CV from "../pict/pictsMe/CV Mathieu FENOUIL.jpg"

export default function Capacity() {
  return (
    <div>
      <div class="Capacity" id="my-capacity">
        <h1 class="mySuperPower">Mes compétences/Mon CV</h1>
        <div class="row" id="myListCapacities">
          <div class="col-lg-8">
            <ul></ul>
          </div>
          <div class="col-lg-4 mt-5 mt-lg-0">
            <div class="myCV">
              <img src={CV} alt="MON CV" class="img-fluid mb-4" style={{maxWidth: '100%', height: 'auto', width: '550px', border: '1px solid black', marginTop: '40px'}}/>
              <button type="button" id="btnDownload">
                <a href="src/myPictures/CV Mathieu FENOUIL.jpg" class="text-white" download="CV Mathieu FENOUIL.png">Télécharger mon CV <i class="fa-solid fa-download"></i></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
