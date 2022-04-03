import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderComponent from "../Components/Layout/Header/HeaderComponent";
import FooterComponent from "../Components/Layout/Footer/FooterComponent";
import AboutusStyles from "./Home.module.scss";
import { Carousel } from "react-bootstrap";
import HomeHeaderCarousel from "./HomeHeaderCarousel";
import HomeBottomCarousel from "./HomeBottomCarousel";

const HomeScene = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <>
      <HeaderComponent />
      <HomeHeaderCarousel />

      <div className={AboutusStyles.astVastuWrapper}>
        <div className="container">
          <div className="row">
            <br />
            <h2 className={AboutusStyles.title}>Daily Routines </h2>
            <br />
            <h4 className="text-center">
              Trivedi Ravi had studied vedic astrology, KP astrology, Navmansha
              method, arudh pada, Sarvatobhadra chakra, Muhurat shastr,
              Numerology, Lo shu grid, Vastu shastr.
            </h4>
            <br />
            <br />

            <div className="col-lg col-md-4 mt-5">
              <div className={AboutusStyles.ast_vedic_astrology}>
                <h4 className={AboutusStyles.ntitle}>
                  Worried? Try Numerograph
                </h4>
                <div className={AboutusStyles.astSearchBox}>
                  <input
                    style={{
                      width: "100%",
                    }}
                    type="text"
                    placeholder="Name*"
                    required
                  />{" "}
                  <br />
                  <input
                    style={{
                      width: "100%",
                    }}
                    type="datetime-local"
                    placeholder="Date of Birth"
                    required
                  />{" "}
                  <br />
                  <select
                    style={{
                      width: "100%",
                    }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>{" "}
                  <br />
                  <input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Phone Number"
                  />{" "}
                  <br />
                  <input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Email"
                  />
                  <br />
                  <button
                    type="submit"
                    className="ast_btn w-100"
                  >Get now</button>
                </div>
              </div>
            </div>
            <div className="col-lg col-md-8 mt-5">
              <div className={AboutusStyles.ast_vedic_astrology}>
                <h4 style={{
                  float: "left",
                  width: "100%",
                  fontSize: "20px",
                  margin: "0px 0px 15px 0px",
                  textTransform: "capitalize",
                }} className="text-start">
                  Reports
                </h4>
                <div>
                  <ul>
                    <li>
                      <a href="https://trivediravi.com/vastu-shastra/">
                        <img src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_1.png" alt="Sign" title="Sign" />
                        <div className={AboutusStyles.ast_vedic_astro_info}>
                          <h5 className="f-18" style={{ marginBottom: "3px" }}>Vastu Reports</h5>
                          <p className="f-14 mb-0" style={{ color: "#337ab7" }}>Get Your Home Vastu reports, Office Vastu reports at minimun price.</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://trivediravi.com/career/">
                        <img src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_2.png" alt="Sign" title="Sign" />
                        <div className={AboutusStyles.ast_vedic_astro_info}>
                          <h5 className="f-18" style={{ marginBottom: "3px" }}>Career Reports</h5>
                          <p className="f-14 mb-0" style={{ color: "#337ab7" }}>Get Your Career reports at reasonable <br /> price.</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://trivediravi.com/finance-report/">
                        <img src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_3.png" alt="Sign" title="Sign" />
                        <div className={AboutusStyles.ast_vedic_astro_info}>
                          <h5 className="f-18" style={{ marginBottom: "3px" }}>Finance Report</h5>
                          <p className="f-14 mb-0" style={{ color: "#337ab7" }}>Get Your Financial reports at minimum <br /> price.</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://trivediravi.com/business-report/">
                        <img src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_4.png" alt="Sign" title="Sign" />
                        <div className={AboutusStyles.ast_vedic_astro_info}>
                          <h5 className="f-18" style={{ marginBottom: "3px" }}>Business Report</h5>
                          <p className="f-14 mb-0" style={{ color: "#337ab7" }}>Get Your Business Reports at minimum <br />price.</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://trivediravi.com/birth-star-report/">
                        <img src="https://trivediravi.com/wp-content/themes/astro/images/content/vas_6.png" alt="Sign" title="Sign" />
                        <div className={AboutusStyles.ast_vedic_astro_info}>
                          <h5 className="f-18" style={{ marginBottom: "3px" }}>Birth Star Report</h5>
                          <p className="f-14 mb-0" style={{ color: "#337ab7" }}>Get Your Birth Star Reports at minimum <br />price.</p>
                        </div>
                      </a>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
            <div className="col-lg col-md-8 mt-5">
              <div className={AboutusStyles.ast_vedic_astrology}>
                <h4 style={{
                  float: "left",
                  width: "100%",
                  fontSize: "20px",
                  margin: "0px 0px 15px 0px",
                  textTransform: "capitalize",
                }} className="text-start">
                  Today&#39;s Expert Tips
                </h4>
                <br />
                <div className={AboutusStyles.ast_vedic_astro_box}>
                  <p>Here is today's expert tips from our astroguru Mr. Trivedi Ravi. For more tips please contact on 9574744469</p>
                  <span>
                    <img src="https://trivediravi.com/wp-content/themes/astro/images/experttips/03.jpg" alt="expertips" title="expertips" style={{ width: "100%", height: "350px" }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <HomeBottomCarousel />
          <div className={AboutusStyles.astVastuWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <h2 className={AboutusStyles.title}>About Trivedi Ravi</h2>
                  <ul className={AboutusStyles.List}>
                    <li className={AboutusStyles.bulletPoints}>
                      <img src="/assets/sun.svg" className={AboutusStyles.sunImg} /> Trivedi Raviji is holding expertise in various astrology branches like Vedic astrology, KP astrology, Vastu Shastr, Numerology, etc. </li>
                    <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  In past, he gave mile-stone prediction in advance as an example Trump win the election, Late Jaylalitha ji’s death, P V sindhu couldn’t got Gold medal, Gold price touch at 41000 Rs, Box office success for many movies, etc .  </li>
                    <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  Further, he is expert to give accurate prediction as well as effective remedy. Also, he has habit to set remedy with combination of Vedic astrology, Vastu shastra and numerology. So the clients are getting success smoothly. </li>
                    <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  The goal is to maintain this website for anyone who believe in astrology and provide him/her life path through astrological solutions. Also, Astrologer who are participating in Astro-research can post the articles via this website.</li>
                    <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  Person can approach to our core astrologer by using e-mail address <a href="mailto:info@trivediravi.com"></a> or can use whatsApp number 9574744469.</li>
                    <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} /> Also, Astrologer who are participating in Astro-research can post the articles via this website. Person can approach to our core astrologer by using e-mail address info@trivediravi.com or can use whatsApp number 9574744469.</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <img src="https://trivediravi.com/wp-content/uploads/2020/11/home-about.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`${AboutusStyles.cta} col-12`}>
              <h3>Connect to Vastu Astrologer Mr. Trivedi Ravi</h3>
              <a
                href="https://trivediravi.com/contact"
                className="su-button su-button-style-soft"
                target="_self"
                title="Contact Now"
              >
                <span>
                  {" "}
                  <FontAwesomeIcon icon={["fas", "phone-volume"]} /> Contact Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer wrapper start--> */}
      <FooterComponent />
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};

export default HomeScene;
