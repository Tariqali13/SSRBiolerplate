import React from "react";
import Plyr from "react-plyr";
import { PublicTemplate } from "../../../components"
const  VonzaShow = () => {
    return (
        <div>
            <PublicTemplate pageTitle="Show - Vonza ">
                <section id="privacy-policy-main" className="pt-140">
                    <div className="container">
                        <div className="pricing-header">
                            <h2>Vonza Show</h2>
                        </div>
                    </div>
                </section>

                <main id="main" className="main main-about">
                    <div className="privacy-info-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text">
                                      Join us on the Vonza Show on Mondays - Fridays at 1PM EST on <a href="https://www.facebook.com/vonzaHQ" target="_blank">Vonza Facebook page</a> with your hosts @Uyi Abraham & Faith Abraham. This is a first of its kind business and personal success live show with live call in. It is going to be educative, entertaining and fun. Don't miss it.
                                    </p>
                                    <br/>
                                    <p style={{textAlign: "center"}}>
                                      <a href="https://www.facebook.com/vonzaHQ" target="_blank">
                                        <img style={{ borderRadius : "10px", width: "60%" }} src="https://vonza.s3-us-west-2.amazonaws.com/vonza-show.jpg" alt="Vonza Show" />
                                      </a>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <Plyr
                                  type="video"
                                  url="https://vonza.s3-us-west-2.amazonaws.com/The-Vonza-Show-Welcome.mp4"
                                />
                              </div>
                            </div>
                        </div>
                    </div>
                </main>
            </PublicTemplate>
        </div>
    );
  }
  
  export {  VonzaShow }
    
  