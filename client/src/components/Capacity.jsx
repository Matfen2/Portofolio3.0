import React from "react";
import CV from "../pict/pictsMe/CV MATHIEU FENOUIL.jpg";

// FRONT-END
import htmlLogo from "../pict/myCodeLearn/htmlLogo.png";
import cssLogo from "../pict/myCodeLearn/cssLogo.png";
import jsLogo from "../pict/myCodeLearn/jsLogo.png";
import sassLogo from "../pict/myCodeLearn/sassLogo.png";
import reactLogo from "../pict/myCodeLearn/reactJsLogo.png";
import bootstrapLogo from "../pict/myCodeLearn/bootstrapLogo.png"

// BACK-END
import MongoDBLogo from "../pict/myCodeLearn/MongoDBLogo.png";
import nodeJsLogo from "../pict/myCodeLearn/nodeJsLogo.png";
import mongooseLogo from "../pict/myCodeLearn/mongooseLogo.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

export default function Capacity() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <div class="Capacity" id="my-capacity">
        <h1 class="mySuperPower">Mes compétences/Mon CV</h1>
        <div class="row" id="myListCapacities">
          <div class="col-lg-8">
            <>
              <div className="front">
                <p className="frontEnd">Front-End Frameworks :</p>
                <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row" style={{ margin: "15px auto" }}>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <img
                          src={htmlLogo}
                          className="img-fluid w-100"
                          alt="htmlLogo"
                          style={{
                            height: "250px",
                            maxWidth: "200px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <img
                          src={cssLogo}
                          className="img-fluid w-100"
                          alt="cssLogo"
                          style={{
                            height: "250px",
                            maxWidth: "200px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <img
                          src={jsLogo}
                          className="img-fluid w-100"
                          alt="jsLogo"
                          style={{
                            height: "250px",
                            maxWidth: "200px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <img
                          src={sassLogo}
                          className="img-fluid w-100"
                          alt="sassLogo"
                          style={{
                            height: "250px",
                            maxWidth: "200px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <img
                          src={reactLogo}
                          className="img-fluid w-100"
                          alt="reactLogo"
                          style={{
                            height: "300px",
                            maxWidth: "480px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <img
                          src={bootstrapLogo}
                          className="img-fluid w-100"
                          alt="bootstrapLogo"
                          style={{
                            height: "350px",
                            maxWidth: "880px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
            <>
              <div className="back">
                <p className="backEnd">Back-End Frameworks :</p>
                <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row" style={{ margin: "15px auto" }}>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <img
                          src={nodeJsLogo}
                          className="img-fluid w-100"
                          alt="nodeJsLogo"
                          style={{
                            height: "250px",
                            maxWidth: "350px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <img
                          src={MongoDBLogo}
                          className="img-fluid w-100"
                          alt="mongoDBLogo"
                          style={{
                            height: "250px",
                            maxWidth: "500px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <img
                          src={mongooseLogo}
                          className="img-fluid w-100"
                          alt="mongooseLogo"
                          style={{
                            height: "250px",
                            maxWidth: "350px",
                            display: "block",
                            margin: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
          </div>
          <div class="col-lg-4 mt-5 mt-lg-0 cv">
            <div class="myCV">
              <img
                src={CV}
                alt="MON CV"
                class="img-fluid mb-4 w-100"
              />
              <button type="button" id="btnDownload">
                <a
                  href="../pict/pictsMe/CV MATHIEU FENOUIL.jpg"
                  class="text-white"
                  download="CV Mathieu FENOUIL.png"
                >
                  Télécharger mon CV <i class="fa-solid fa-download"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
