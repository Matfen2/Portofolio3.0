import React from 'react'
import gamerBackground from '../pict/gamerBackground.jpg'

export default function Head() {
  return (
    <div>
        <section id="me" style={{backgroundImage: gamerBackground}}>
            <div class="container-fluid">
                <div class="navbar navbar-expand-lg">
                    <div class="navbar-brand">MF</div>
                    <button type="button" id="btnBars"><i class="fas fa-bars" data-bs-toggle="offcanvas" data-bs-target="#sideCanvas"></i></button>
                    <div class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="portofolio.html#about-me">A propos de moi</a></li>
                        <li class="nav-item"><a class="nav-link" href="portofolio.html#my-capacity">Compétences/CV</a></li>
                        <li class="nav-item"><a class="nav-link" href="portofolio.html#myProjets">Projets</a></li>
                        <li class="nav-item"><a class="nav-link" href="portofolio.html#contact">Contact</a></li>
                    </div>
                </div>

                <div class="myProfil">
                    <h1 class="myName">Mathieu FENOUIL</h1>
                </div>
            </div>
        </section>
    </div>
  )
}