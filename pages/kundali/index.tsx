import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import FooterComponent from '../../Components/Layout/Footer/FooterComponent';
import HeaderComponent from '../../Components/Layout/Header/HeaderComponent';
import kundalityles from './kundali.module.scss';

const kundali = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={kundalityles.astPagetitle}>
        <div className={kundalityles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={kundalityles.pageTitle}>
                <h1>Kundali</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">Home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Kundali</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={kundalityles.astVastuWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={kundalityles.astVastuInfo}>
                <div className='row'>
                  <div className='col-md-9 col-12'>
                    <p className="inner-text">
                      Individual horoscopes are the most commonly known form of Astrology in the world. Now days, there are lots of challenges in individual life and most of the person find instant and accurate solutions for that.
                    </p>
                    <p className="inner-text">
                      In this matter, Trivedi Ravi is providing best astrological services. He can resolve many problems of individual life for example, help to find perfect period when one can get Job, help in selection of Job or business, Marriage yog as well as help to improve marriage life, he is expert to predict when one can get property.
                    </p>
                    <p className="inner-text">
                      Trivedi Ravi had studied vedic astrology, KP astrology, Navmansha method, arudh pada, Sarvatobhadra chakra, Muhurt shahtr, Numerology, Lo shu grid, Vastu shahtra. He is passionate for pure astrology and prediction. Trivedi Ravi is professional astrologer and practicing since 1993.
                    </p>
                  </div>
                  <div className='col-md-3 col-12'>
                    <img src="/assets/kundali.jpg" alt="" className='w-100' />
                  </div>
                </div>

                <div className={kundalityles.cta}>
                  <h4>Get Sample Kundali</h4>
                  <a
                    href="https://trivediravi.com/wp-content/uploads/2020/03/Career-future-Reports.pdf"
                    className="su-button su-button-style-soft"
                    target="_self"
                    title="Horoscope Report Sample"
                    download="Horoscope Sample Report"
                  >
                    <button className={kundalityles.downloadBtn}>
                      <FontAwesomeIcon icon={['fas', 'phone-volume']} />{' '}
                      Download Now
                    </button>
                  </a>
                </div>
                <h2 className={kundalityles.reportTitle}>
                  Get Your Kundali
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
                      className={kundalityles.formWrapper}
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
                          <label>Upload Your Current Kundali If You Have</label>
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
                        Payment: INR 499*
                      </h3>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 payment-div">
                          <label
                            style={{ fontSize: "17px", marginBottom: "20px" }}
                          >
                            Select Mode of Payment
                          </label>
                          <br />
                          <span className={kundalityles.wrapPayment}>
                            <span className="wpcf7-form-control wpcf7-radio">
                              <span className={kundalityles.formList}>
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
                              <span className={kundalityles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="NEFT (National Electronic Fund Transfer)"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  NEFT (National Electronic Fund Transfer)
                                </span>
                              </span>
                              <span className={kundalityles.formList}>
                                <input
                                  type="radio"
                                  name="payment"
                                  value="PAYTM / BHIM UPI"
                                />
                                <span className="wpcf7-list-item-label f-14">
                                  PAYTM / BHIM UPI
                                </span>
                              </span>{" "}
                              <span className={kundalityles.formList}>
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
                          <span className={kundalityles.bankDetails}>
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
                            className={kundalityles.paymentImg}
                            alt="payment"
                            title="payment"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="submit"
                          value="Send"
                          className={`${kundalityles.submitBtn} wpcf7-form-control wpcf7-submit asn_btn pull-right w-100`}
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
export default kundali;