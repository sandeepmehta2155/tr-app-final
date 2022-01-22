import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Components/Layout/Header/HeaderComponent";
import AboutusStyles from "./AboutUs.module.scss";
import Loader from "react-loader-spinner";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import FooterComponent from "../../Components/Layout/Footer/FooterComponent";
// https://replit.com/@sandeepmehta215/productSeller#auth.js
const AboutUsScene = () => {
  const [data, setData] = useState();
  const router = useRouter();
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
                <h1>Blog</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Blog</a>
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
            data.map((blog) => {
              return (
                <>
                  <span style={{}}>
                    <img src={blog.imageurl} width="400rem" height="200rem" />{" "}
                    <br />
                    <h1>{blog.heading}</h1> <br />
                    <span style={{ width: "40%" }}>
                      {blog.description.slice(0, 48)}...
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
                      onClick={() =>
                        router.push(`/blog/${blog._id}/?blog=${blog._id}`)
                      }
                    >
                      Read More
                    </button>{" "}
                    <br /> <br />
                  </span>
                </>
              );
            })
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
      <FooterComponent />
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};

export default AboutUsScene;
