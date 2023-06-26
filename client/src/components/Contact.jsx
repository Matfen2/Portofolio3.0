import React from 'react'

export default function Contact() {
  return (
    <div>
        <section class="myContact" id="contact">
        <h1 class="titleContact">Contact</h1>
        <div class="contactModal">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12" id="youContact">
                    <form action='/contact' method='POST'>
                        <label for="contactMe"></label>
                        <div class="row" id="contactMe">
                            <div class="col-lg-6">
                                <input type="text" name="firstName" placeholder="Votre Prénom" required />
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="lastName" placeholder="Votre Nom" required />
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="adressEmail" placeholder="Votre Adresse Email" required />
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="yourSubject" placeholder="Votre Sujet" required />
                            </div>
                            <div class="col-lg-12">
                              <textarea placeholder="Votre Message" style={{margin: '10px auto'}}></textarea>  
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12" id="myListContact">
                    <i class="fa-regular fa-envelope"></i>
                    <p>matfen2.0@outlook.fr</p>

                    <i class="fa-solid fa-phone"></i>
                    <p>06 05 15 24 23</p>

                    <i class="fa-brands fa-linkedin-in"></i>
                    <p>Matfen</p>
                </div>
            </div>
            <button type="submit" id="btnSend">Envoyer</button>
        </div>
    </section>
    </div>
  )
}


