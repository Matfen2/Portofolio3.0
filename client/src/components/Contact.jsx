import React from 'react'

export default function Contact() {
  return (
    <div>
      <section class="myContact" id="contact">
        <h1 class="titleContact">Contact</h1>
        <div class="contactModal">
          <form action="/contact" method="POST">
            <label for="contactMe"></label>
            <div class="row" id="contactMe">
              <div class="col-lg-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Votre Prénom"
                  required
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Votre Nom"
                  required
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="text"
                  name="adressEmail"
                  placeholder="Votre Adresse Email"
                  required
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="text"
                  name="yourSubject"
                  placeholder="Votre Sujet"
                  required
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  placeholder="Votre Message"
                  cols={130}
                  rows={6}
                  style={{ margin: "10px auto" }}
                ></textarea>
              </div>
            </div>
            <button type="submit" id="btnSend">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}


