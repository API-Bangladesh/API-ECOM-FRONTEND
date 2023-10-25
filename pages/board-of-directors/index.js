import Image from "next/image";
import Row from "react-bootstrap/Row";
import Directors from "../../public/bod/Banner.png";
import Head from "next/head";
import { makeTitle } from "../../utils/helpers";
import React, { Fragment } from "react";

const BoardOfDirectors = () => {
  return (
    <Fragment>
      <Head>
        <title>{makeTitle("Board of Directors")}</title>
      </Head>
      <section>
        <div className="">
          <Image src={Directors} alt="" className="bod-img" />
        </div>
        <div className="container-bod">
          <h1 className="bod-page-title text-capitalize font-40 fw-bold text-center py-5 font-inter">
            board of directors
          </h1>
          {/* Chirman */}
          <div className="" style={{ paddingBottom: "30px" }}>
            <Row className="d-flex justify-content-md-center">
              <div className="col-lg-4 col-md-4 mb-4">
                <div className="text-center">
                  <img
                    src="/bod/bod_men.png"
                    alt=""
                    className="rounded-pill chairman-img"
                  />
                  <h2 className="font-20 fw-bold pt-2 pb-2">
                    Iftekhar Ahmed Tipu
                  </h2>
                  <p className="about_titledesign position-relative pt-2">
                    Chairman, API
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-4">
                <div className="text-center">
                  <img
                    src="/bod/bod_lady.png"
                    alt=""
                    className="rounded-pill chairman-img"
                  />
                  <h2 className="font-20 fw-bold pt-2 pb-2">
                    Mrs. Nilufar Ahmed
                  </h2>
                  <p className="about_titledesign position-relative pt-2">
                    Director, API 
                  </p>
                </div>
              </div>
            </Row>
          </div>
          <div className="row d-flex justify-content-evenly">
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                  src="/bod/bod_men.png"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Tanveer Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                   Vice Chairman (i)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_men.png"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Taskeen Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                   Vice Chairman (ii)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_men.png"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Tashfeen Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                   Vice Chairman (iii)
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-capitalize font-40 fw-bold text-center py-4 font-inter">
            leadership team
          </h1>
          <div className="d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded leadership-team"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Reazul Haque Chowdhury
                </h2>
                <p className="position-relative pt-1">
                   Managing Director
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_lady.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
                <p className="position-relative pt-1">
                   Human Resource Director
                </p>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
                <p className=" position-relative pt-1">
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Syed Mohammed Sibgat Ullah
                </h2>
                <p className="pt-1"> Head of Supply Chain Management</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Shah Jalal Chowdhury FCA
                </h2>
                <p className=" pt-1">Chief Financial Office</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Mohammed Saleh Uddin Bhuyan
                </h2>
                <p className="pt-1">Head of Sales</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Md. Zakir Hossain Mondal
                </h2>
                <p className="pt-1">Head of Plant</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="text-center">
                <img
                src="/bod/bod_leader.png"
                  alt=""
                  className="rounded new-team-member"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  Md. Habibur Rahman
                </h2>
                <p className="pt-1"> Head of Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BoardOfDirectors;


