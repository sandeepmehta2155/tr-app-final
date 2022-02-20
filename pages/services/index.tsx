import HeaderComponent from "../../Components/Layout/Header/HeaderComponent";
import AboutusStyles from "./AboutUs.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterComponent from "../../Components/Layout/Footer/FooterComponent";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <HeaderComponent />
      <div className={AboutusStyles.astPagetitle}>
        <div className={AboutusStyles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={AboutusStyles.pageTitle}>
                <h1>Services</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "hidden", color: "white" }}> as</div>
      <div className="container">
        <div
          style={{ width: "100%", margin: "", justifyContent: "auto" }}
          className="t-5 w-10 text-left"
        >
          Trivedi Raviji is ready to provide solutions of your problems using tool
          of Astrology. The solutions are pathway to make life excellent. <br />{" "}
          <br /> We can provide accurate predictions and Astro-solution through
          your horoscope, numerology i.e. through your birth date and name, Vastu
          consultation for your home and or office-factory; to get desire result
          of your efforts, he provides auspicious time as muhurat, etc.
        </div>
        <br />
      </div>

      <h2 className="text-center"> Astrology Services</h2>
      <br />
      <div className="container">
        <div className="row">
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv1.png" />
            <br />
            <br />
            <h5>Horoscopes</h5>
            <div className="f-14" >
              Horoscope analysis for your query not limited to subjects.
            </div>
            <br />
            <Link href="/horoscope">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv2.png" />
            <br />
            <br />
            <h5>Traditional Muhurat</h5>
            <div className="f-14" >
              For marriage, Gruh pravesh, Kalsh poojan, Janoi, Simant, Mundal,
              etc.
            </div>
            <br />
            <Link href="/traditional-muhurat">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv4.png" />
            <br />
            <br />
            <h5>Modern Muhurat</h5>
            <div className="f-14" >
              Time to apply Visa, court appeal, Purchase machinery and many
              more.
            </div>
            <br />
            <Link href="/modern-muhurat">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv3.png" />
            <br />
            <br />
            <h5>Numerology</h5>
            <div className="f-14" >
              Related to find lucky number for your bank account, mobile number, etc.
            </div>
            <br />
            <Link href="/numerology-report">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv6.png" />
            <br />
            <br />
            <h5>Vastu Consultation</h5>
            <div className="f-14" >
              For land acquisition, plot-duplex, flat selection, Office, Factory etc.
            </div>
            <br />
            <Link href="/vastu-consultation">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv11.png" />
            <br />
            <br />
            <h5>Vedic Astrology</h5>
            <div className="f-14" >
              Birth chart, Verga kundali and Sarvato bhadra chakra base prediction
            </div>
            <br />
            <Link href="/vedic-astrology">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv5.png" />
            <br />
            <br />
            <h5>Kundali</h5>
            <div className="f-14" >
              For Education, Marriage life, Career Guide, Wealth & Health matters & more.
            </div>
            <br />
            <Link href="/kundali">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv10.png" />
            <br />
            <br />
            <h5>Career Guidelines</h5>
            <div className="f-14" >
              Advise for better career and personal growth with respect to education line.
            </div>
            <br />
             <button className="ast_btn"> Read More </button>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv9.png" />
            <br />
            <br />
            <h5>Finance Reports</h5>
            <div className="f-14" >
              Predict about your company growth or individual growth on financial front.
            </div>
            <br />
            <Link href="/finance-report">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv7.png" />
            <br />
            <br />
            <h5>Business Reports</h5>
            <div className="f-14" >
              Business expansion, To get new product launching time and more.
            </div>
            <br />
            <Link href="/business-report">
               <button className="ast_btn"> Read More </button>
            </Link>
          </div>
          <div style={{ width: "33%" }} className="col-lg-4 p-5 col-md-12 text-center col-sm-12 border border-lightgray">
            <img className="mb-2" src="https://trivediravi.com/wp-content/themes/astro/images/content/sv5.png" />
            <br />
            <br />
            <h5>Birth Star Reports</h5>
            <div className="f-14" >
              Forecast about your future achievement and events.
            </div>
            <br />
            <Link href="/birth-star-report">
              <button className="ast_btn"> Read More </button>
            </Link>
          </div>

        </div>
      </div>
      {/* <!-- Footer wrapper start--> */}
      <FooterComponent />
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};

export default Services;
