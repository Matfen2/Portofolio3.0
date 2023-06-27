import React from "react";
import pictMe from '../pict/pictsMe/meImgOne.jpeg'

export default function AboutMe() {
  return (
    <div>
      <div className="aboutMe" id="about-me">
        <h1 className="about">A propos de moi</h1>
        <div className="row" id="myStory">
          <div className="col-lg-5 col-md-12">
                <img src={pictMe} alt="photoMe" className="img-fluid w-100" />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="meIdentify">
              <p className="describeMe">
                Bonjour, je m'appelle Mathieu FENOUIL, j'ai suivi une formation
                de développement web Full Stack. Pendant deux ou trois ans, je
                travaillais dans le milieu du cinéma (assistant réalisateur,
                régisseur, ingénieur son, machino, monteur). J'ai acquis de
                nombreuses compétences tels que l'organisation, l'écoute, le
                conseil ainsi que des qualités relationnelles importantes. Mais
                à présent, en parallèle de mon travail, j'ai effectué une
                reconversion professionnelle dans le développement web, un
                domaine qui m'intéressait depuis des années.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
