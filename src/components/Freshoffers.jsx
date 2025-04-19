import React from 'react'
import malecover from '../assets/products/male1.jpg'
import handbag2 from '../assets/products/hanbag.jpg'
import backpack3 from '../assets/products/backpack3.jpg'
import rolex from '../assets/products/watch.jpg'

export default function Freshoffers() {
  return (
    <>
    <div className="container mt-5 mb-5 ">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-6 col-12">
      <div
        className="mt-4 p-3 border rounded"
        style={{
          height: "95%",
          backgroundImage: `url(${malecover})`,
          backgroundSize: "cover"
        }}
      >
        <div
          className="col text-end"
          style={{
            paddingTop: "15%",
            paddingRight: "5%",
            paddingBottom: "15%"
          }}
        >
          <h6 className=" text-primary ">New Arrivals.</h6>
          <h1>Men's Fashion.</h1>
          <h5>Upto 70% Off.</h5>
          <button type="button" className="btn btn-outline-dark rounded-pill ">
            SHOP NOW.
          </button>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-12">
      <div className="row">
        <div className="col-6">
          <div
            className="mt-4 p-3 border rounded"
            style={{
              height: "90%",
              backgroundImage: `url(${handbag2})`,
              backgroundSize: "cover"
            }}
          >
            <div className="col-6">
              <h6 className=" text-white bg-primary d-inline-flex focus-ring px-1 text-decoration-none ">
                25% OFF.
              </h6>
              <h1>Handbag.</h1>
              <h5>&nbsp;</h5>
              <a
                href="#"
                className="icon-link icon-link-hover text-decoration-none text-dark"
              >
                SHOP NOW.
                <svg
                  className="bi"
                  aria-hidden="true"
                  width="96px"
                  height="96px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ic_fluent_ios_chevron_24_filled</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="🔍-System-Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="ic_fluent_ios_chevron_24_filled"
                        fill="#212121"
                        fillRule="nonzero"
                      >
                        <path
                          d="M13.2929,4.29289 C12.9024,4.68342 12.9024,5.31658 13.2929,5.70711 L19.5858,12 L13.2929,18.2929 C12.9024,18.6834 12.9024,19.3166 13.2929,19.7071 C13.6834,20.0976 14.3166,20.0976 14.7071,19.7071 L21.7071,12.7071 C22.0976,12.3166 22.0976,11.6834 21.7071,11.2929 L14.7071,4.29289 C14.3166,3.90237 13.6834,3.90237 13.2929,4.29289 Z"
                          id="Path"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </g>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="mt-4 p-3 border rounded"
            style={{
              height: "90%",
              backgroundImage: `url(${rolex})`,
              backgroundSize: "cover"
            }}
          >
            <div className="col text-white">
              <h6 className="  bg-primary d-inline-flex focus-ring px-1 text-decoration-none ">
                25% OFF.
              </h6>
              <h1>Watches.</h1>
              <h5>&nbsp;</h5>
              <a
                href="#"
                className="icon-link icon-link-hover text-decoration-none text-white"
              >
                SHOP NOW.
                <svg
                  className="bi"
                  aria-hidden="true"
                  width="96px"
                  height="96px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ic_fluent_ios_chevron_24_filled</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="🔍-System-Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="ic_fluent_ios_chevron_24_filled"
                        fill="#ffffff"
                        fillRule="nonzero"
                      >
                        <path
                          d="M13.2929,4.29289 C12.9024,4.68342 12.9024,5.31658 13.2929,5.70711 L19.5858,12 L13.2929,18.2929 C12.9024,18.6834 12.9024,19.3166 13.2929,19.7071 C13.6834,20.0976 14.3166,20.0976 14.7071,19.7071 L21.7071,12.7071 C22.0976,12.3166 22.0976,11.6834 21.7071,11.2929 L14.7071,4.29289 C14.3166,3.90237 13.6834,3.90237 13.2929,4.29289 Z"
                          id="Path"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </g>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="mt-4 p-3 border rounded"
            style={{
              height: "90%",
              backgroundImage: `url(${backpack3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="p-3 col text-white ">
              <h6>Accessories.</h6>
              <h1>Backpack</h1>
              <h5>Min 40%-80% Off.</h5>
              <h6>&nbsp;</h6>
              <a
                href="#"
                className="icon-link icon-link-hover text-decoration-none text-white"
              >
                <u>Shop Now.</u>
                <svg
                  className="bi"
                  aria-hidden="true"
                  width="96px"
                  height="96px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ic_fluent_ios_chevron_24_filled</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="🔍-System-Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="ic_fluent_ios_chevron_24_filled"
                        fill="#ffffff"
                        fillRule="nonzero"
                      >
                        <path
                          d="M13.2929,4.29289 C12.9024,4.68342 12.9024,5.31658 13.2929,5.70711 L19.5858,12 L13.2929,18.2929 C12.9024,18.6834 12.9024,19.3166 13.2929,19.7071 C13.6834,20.0976 14.3166,20.0976 14.7071,19.7071 L21.7071,12.7071 C22.0976,12.3166 22.0976,11.6834 21.7071,11.2929 L14.7071,4.29289 C14.3166,3.90237 13.6834,3.90237 13.2929,4.29289 Z"
                          id="Path"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </g>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
