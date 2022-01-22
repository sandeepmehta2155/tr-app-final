/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import HeaderComponent from "../../Components/Layout/Header/HeaderComponent";
import AboutusStyles from "./AboutUs.module.scss";
import {
  useState,
  useEffect,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogRoute = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://ravitrivedi.sandeepmehta1.repl.co/getblog"
      );

      if (resp.status === 201) {
        setData(resp?.data?.blogs);
      }
    })();

    return () => {};
  }, [data]);

  return (
    <>
      <HeaderComponent />

      <div className={AboutusStyles.astPagetitle}>
        <div className={AboutusStyles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={AboutusStyles.pageTitle}>
                <h1>About Us</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={AboutusStyles.astVastuWrapper}>
        <div
          style={{ width: "90%", margin: "auto" }}
          className="d-flex flex-wrap justify-content-between"
        >
          {data && data.length > 0 ? (
            data
              .filter(
                (blog: { _id: string | string[] | undefined }) =>
                  blog._id === id
              )
              .map(
                (blog: {
                  imageurl: string | undefined;
                  heading:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  description:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                }) => {
                  return (
                    <>
                      <span style={{}}>
                        <img
                          src={blog.imageurl}
                          width="400rem"
                          height="200rem"
                        />{" "}
                        <br />
                        <h1>{blog.heading}</h1> <br />
                        <span style={{ width: "40%" }}>
                          {blog.description}
                        </span>{" "}
                        <br />
                        <button
                          style={{
                            padding: "0.5rem",
                            backgroundColor: "#ffad29",
                            color: "white",
                            border: "none",
                            marginTop: "1rem",
                          }}
                          onClick={() => router.push(`/blog`)}
                        >
                          Go back
                        </button>{" "}
                        <br /> <br />
                      </span>
                    </>
                  );
                }
              )
          ) : (
            <div style={{ margin: "auto" }}>
              <h1>Loading your blogs</h1>
              <Loader
                type="Puff"
                color="#ffad29"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          )}
        </div>
      </div>
      {/* <!-- Footer wrapper start--> */}
      <div className={AboutusStyles.astFooterWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-0 mx-auto">
              <div className={AboutusStyles.astFooterInfo}>
                <img
                  src="https://trivediravi.com/wp-content/themes/astro/images/header/logo.png"
                  alt="Logo"
                  title="Logo"
                  className={AboutusStyles.footerImg}
                />
                <p className={AboutusStyles.astFooterPara}>
                  Trivedi Raviji is holding expertise in various astrology
                  branches like Vedic astrology, KP astrology, Vastu Shastra,
                  Numerology, etc.In past, he gave mile-stone prediction in
                  advance as an example Trump win the election, Late Jaylalitha
                  ji’s death, P V sindhu couldn’t got Gold medal, Gold price
                  touch at 41000 Rs, Box office success for many movies etc.
                </p>
                <ul className={AboutusStyles.asFooterList}>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.facebook.com/trivediraviastroguru/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://join.skype.com/invite/YKZyus2k7T0l"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://twitter.com/TrivediRaviji"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.youtube.com/user/ravi4197"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.instagram.com/trivediraviastrology/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.linkedin.com/in/trivedi-ravi-669b371a5/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>our newsletter</h4>
                <div className={AboutusStyles.astNewsLetter}>
                  <p className={AboutusStyles.widgetPara}>
                    Please get updated with latest tips provided by Mr. Trivedi
                    Ravi.
                  </p>
                  <div className={AboutusStyles.astNewsletterBox}>
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f88-o2"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div
                        className="screen-reader-response"
                        role="alert"
                        aria-live="polite"
                      ></div>
                      <form
                        action="/about-us/#wpcf7-f88-o2"
                        method="post"
                        className="wpcf7-form init"
                      >
                        <div style={{ display: "none" }}>
                          <input type="hidden" name="_wpcf7" value="88" />
                          <input
                            type="hidden"
                            name="_wpcf7_version"
                            value="5.2"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_locale"
                            value="en_US"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_unit_tag"
                            value="wpcf7-f88-o2"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_container_post"
                            value="0"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_posted_data_hash"
                            value=""
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            value=""
                          />
                        </div>
                        <p>
                          <span className="wpcf7-form-control-wrap email">
                            <input
                              type="email"
                              name="email"
                              value=""
                              className={`${AboutusStyles.input} mb-4`}
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Email"
                            />
                          </span>
                          <input
                            type="submit"
                            value="Send"
                            className={AboutusStyles.input}
                          />
                        </p>
                        <div
                          className="wpcf7-response-output"
                          role="alert"
                          aria-hidden="true"
                        ></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>our services</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/horoscope/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        horoscopes
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/traditional-muhurat/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Traditional Muhurat
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/modern-muhurat/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Modern Muhurat
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/numerology-report/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Numerology
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vastu-shastra/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Vastu Consultation
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vedic-astrology/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Vedic Astrology
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>quick links</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/about/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        about
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/blog/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        blog
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/services/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        services
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/appointment/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Appointment
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/contact/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        contact
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/privacy-policy/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>get in touch</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "home"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <p className={AboutusStyles.getInTouchText}>
                        Ahmedabad - Gujarat - India
                      </p>
                    </li>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "at"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <a
                        href="/cdn-cgi/l/email-protection#c5acaba3aa85b1b7acb3a0a1acb7a4b3aceba6aaa8"
                        className={AboutusStyles.getInTouchText}
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="c4adaaa2ab84b0b6adb2a1a0adb6a5b2adeaa7aba9"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "phone-alt"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <a
                        href="tel:+91957474469"
                        className={AboutusStyles.getInTouchText}
                      >
                        +91 9574744469
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="ast_copyright_wrapper">
                <p>
                  &copy; Copyright 2020, All Rights Reserved,{" "}
                  <a href="https://trivediravi.com">Trivedi Ravi</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};
export default BlogRoute;
