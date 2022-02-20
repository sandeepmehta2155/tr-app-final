import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import FooterComponent from '../../Components/Layout/Footer/FooterComponent';
import HeaderComponent from '../../Components/Layout/Header/HeaderComponent';
import vastuStyles from './vastu-consultation.module.scss';

const vastuconsultation = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={vastuStyles.astPagetitle}>
        <div className={vastuStyles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={vastuStyles.pageTitle}>
                <h1>Vastu Shastra</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">Home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Vastu Shastra</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={vastuStyles.astVastuWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={vastuStyles.astVastuInfo}>
                <p className="inner-text">
                  Vastu means the site which is useful to live. Vastu shastra (vāstu śāstra) is a traditional Indian system which is science of architecture. Basically, it is principles of design, layout, measurements, ground preparation, space arrangement, and spatial geometry. Vastu shastra is described to maintain site with pancha tatve- elements. The flats, tenement, plot, office, factory, industries are improved with balancing five elements like agny-fire, Pruthvi-Earth, Vayu-air, Jal-water and akash-space. Trivedi Ravi is modern vastu expert and can provide solution-correction in site with and without restructure. He is expert to create environment in site to achieve individual goal.
                </p>
                <p>Here, various Vastu reports provided for your reference.</p>
                <div className='row'>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <img src="https://trivediravi.com/wp-content/uploads/2020/03/vastu2.png" alt="vastu 1" title="vastu 1" width="300" height="300" className="alignnone size-full wp-image-273" srcSet="https://trivediravi.com/wp-content/uploads/2020/03/vastu2.png 300w, https://trivediravi.com/wp-content/uploads/2020/03/vastu2-150x150.png 150w, https://trivediravi.com/wp-content/uploads/2020/03/vastu2-100x100.png 100w" sizes="(max-width: 300px) 100vw, 300px" />
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <img src="https://trivediravi.com/wp-content/uploads/2020/03/vastu1.png" alt="vastu 2" title="vastu 2" width="300" height="297" className="alignnone size-full wp-image-274" srcSet="https://trivediravi.com/wp-content/uploads/2020/03/vastu1.png 300w, https://trivediravi.com/wp-content/uploads/2020/03/vastu1-150x150.png 150w, https://trivediravi.com/wp-content/uploads/2020/03/vastu1-100x100.png 100w" sizes="(max-width: 300px) 100vw, 300px" />
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <p>During Vastu consultation our Expert Mr. Trivedi Ravi provides necessary details pertaining to site, plot, soil etc with full scrutiny and examination. In the past 6 years he has been providing this service with full dedication without any profit motive. E-reports are sent through e-mail for easy accessibility which also saves time and money. Here you can download Vastu Report:</p>
                    <div>
                      <a href="https://trivediravi.com/wp-content/uploads/2020/03/Business-Vastu-Report.pdf" className={vastuStyles.downloadBtn} target="_self" title="Download Sample Report" download="Vastu Report">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "download"]}
                          />{" "} Download Sample Report</span></a></div>
                  </div>
                </div>
                <img src="/assets/steps.png" alt="" className='w-100' />
                <h2 className={vastuStyles.reportTitle}>
                  Get Your Vastu Report

                </h2>
                <div className="ast_journal_box_wrapper">
                  <div
                    role="form"
                    className="wpcf7"
                    id="wpcf7-f342-p316-o2"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div
                      className="screen-reader-response"
                      role="alert"
                      aria-live="polite"
                    ></div>
                    <form
                      action="/horoscope/#wpcf7-f342-p316-o2"
                      method="post"
                      className={vastuStyles.formWrapper}
                      encType="multipart/form-data"
                    >
                      <div style={{ display: "none" }}>
                        <input type="hidden" name="_wpcf7" value="342" />
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
                          value="wpcf7-f342-p316-o2"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_container_post"
                          value="316"
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
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Email Address</label>
                          <br />
                          <span className="wpcf7-form-control-wrap email">
                            <input
                              type="email"
                              name="email"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email"
                              aria-invalid="false"
                              placeholder="Enter Email Address*"
                            />
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Name*</label>
                          <br />
                          <span className="wpcf7-form-control-wrap fname">
                            <input
                              type="text"
                              name="fname"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Your Name*"
                            />
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Mobile Number*</label>
                          <br />
                          <span className="wpcf7-form-control-wrap mobile">
                            <input
                              type="tel"
                              name="mobile"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Mobile Number*"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Gender</label>
                          <br />
                          <span className="wpcf7-form-control-wrap gender">
                            <select
                              name="gender"
                              className="wpcf7-form-control wpcf7-select"
                              aria-invalid="false"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Birth Date*</label>
                          <br />
                          <span className="wpcf7-form-control-wrap bdate">
                            <input
                              type="date"
                              name="bdate"
                              // value="DD/MM/YYYY"
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              id="datepicker"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Birth Time*</label>
                          <br />
                          <span className="wpcf7-form-control-wrap btime">
                            <input
                              type="text"
                              name="btime"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              id="timepicker"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="HH:MM"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Birth City</label>
                          <br />
                          <span className="wpcf7-form-control-wrap city">
                            <input
                              type="text"
                              name="city"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Enter Birth City"
                            />
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Birth State</label>
                          <br />
                          <span className="wpcf7-form-control-wrap state">
                            <input
                              type="text"
                              name="state"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Enter Birth State"
                            />
                          </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <label>Birth Country</label>
                          <br />
                          <span className="wpcf7-form-control-wrap country">
                            <input
                              type="text"
                              name="country"
                              value=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Enter Birth Country"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label>Questions (Ask only 2 Questions)</label>
                          <br />
                          <span className="wpcf7-form-control-wrap question">
                            <textarea
                              name="question"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Enter Your Questions"
                            ></textarea>
                          </span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label>Upload Your Floor Plan</label>
                          <br />
                          <span className="wpcf7-form-control-wrap kundali">
                            <input
                              type="file"
                              name="kundali"
                              size={40}
                              style={{ padding: "10px" }}
                              className="mb-0 wpcf7-form-control wpcf7-file f-14"
                              accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                              aria-invalid="false"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <hr />
                      <h3 style={{ textAlign: "center", fontSize: "24px" }}>
                        Payment: INR 7500*
                      </h3>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 payment-div">
                          <label
                            style={{ fontSize: "17px", marginBottom: "20px" }}
                          >
                            Select Mode of Payment
                          </label>
                          <br />
                          <span className={vastuStyles.wrapPayment}>
                            <span className="wpcf7-form-control wpcf7-radio">
                              <span className={vastuStyles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="Pay by: Credit cards/Debit cards/Net Banking/Cash Cards"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  Pay by: Credit cards/Debit cards/Net
                                  Banking/Cash Cards
                                </span>
                              </span>
                              <span className={vastuStyles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="NEFT (National Electronic Fund Transfer)"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  NEFT (National Electronic Fund Transfer)
                                </span>
                              </span>
                              <span className={vastuStyles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="PAYTM / BHIM UPI"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  PAYTM / BHIM UPI
                                </span>
                              </span>{" "}
                              <span className={vastuStyles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="Google Pay (UPI ID: ravitrivedi1976-1@oksbi)"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  Google Pay(UPI ID: ravitrivedi1976-1@oksbi)
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="3e4c5f48574a4c57485b5a570f070908130f7e51554d5c57"
                                  >
                                  </a>
                                  )
                                </span>
                              </span>
                            </span>
                          </span>
                          <br />
                          <span className={vastuStyles.bankDetails}>
                            <br />
                            SBI Bank A/C No: 30876664155
                            <br />
                            Branch code No: 13760
                            <br />
                            Branch: chandlodia
                            <br />
                            RTGS/NEFT IFSC: SBIN0013760
                            <br />
                            A/C Holder`&39;`s Name: Mrs. Manisha Ravikumar
                            Trivedi
                          </span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <img
                            src="https://trivediravi.com/wp-content/uploads/2020/04/scanner.png"
                            className={vastuStyles.paymentImg}
                            alt="payment"
                            title="payment"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="submit"
                          value="Send"
                          className={`${vastuStyles.submitBtn} wpcf7-form-control wpcf7-submit asn_btn pull-right w-100`}
                        />
                      </div>
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
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
export default vastuconsultation;