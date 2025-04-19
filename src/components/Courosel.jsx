import React from 'react'
import bgimg from '../assets/images/model1.png'

export default function Courosel() {
  return (
    <>
      <div className="container-fluid bg-light ">
        <div className="row">
            {/* Desktab */}
            <div
              className="col-sm-6 col-md-6 col-lg-6 col-12 desktop"
              style={{ padding: "8% 0 8% 10%" }}
            >
              <h1
                className="text-center text-primary"
                style={{ fontFamily: '"Playwrite IN", serif', fontSize: "2.7vw" }}
              >
                <b>Season Sale</b>
              </h1>
              <h1
                className="display-3 text-center text-primary text-dark"
                style={{ fontSize: "4vw" }}
              >
                <b>Women's Fashion</b>
              </h1>
              <h1
                className="display-6 text-center text-primary text-dark"
                style={{ fontSize: "2.5vw" }}
              >
                <b>Min. 35%-75% Off. </b>
              </h1>
              <h1 className='display-6'>&nbsp;</h1>
              <div className="d-grid gap-4 d-flex justify-content-center">
                <button type="button" className="col-3 btn btn-primary btn-sm rounded-0" style={{ fontSize: "1.3vw" }}>
                  SHOP NOW
                </button>
                <button
                  type="button"
                  className=" col-3 btn btn-outline-primary btn-sm rounded-0 "
                  style={{ fontSize: "1.3vw" }}
                >
                  READ MORE
                </button>
              </div>
            </div>
            {/* Tab */}
            <div
              className="col-sm-6 col-md-6 col-lg-6 col-12 tab"
              style={{ padding: "8% 0 8% 10%" }}>
              <h1 className=" text-center text-primary" style={{ fontFamily: '"Playwrite IN", serif', fontSize: "3.2vw" }}>
                <b>Season Sale</b>
              </h1>

              <h1
                className=" display-3 text-center text-primary text-dark"
                style={{ fontSize: "4.5vw" }}
              >
                <b>Women's Fashion</b>
              </h1>

              <h1
                className=" display-6 text-center text-primary text-dark"
                style={{ fontSize: "2.7vw" }}
              >
                <b>Min. 35%-75% Off. </b>
              </h1>
              <h1 className='display-6'style={{ fontSize: "1.7vw" }}>&nbsp;</h1>
              <div className="d-grid gap-4 d-flex justify-content-center">
                <button type="button" className="col-5 btn btn-primary btn-md rounded-0" style={{ fontSize: "2vw" }}>
                  SHOP NOW
                </button>
                <button
                  type="button"
                  className=" col-5 btn btn-outline-primary btn-md rounded-0 "
                  style={{ fontSize: "2vw" }}
                >
                  READ MORE
                </button>
              </div>
            </div>
            {/* stab */}
            <div
              className="col-12 stab"
              style={{ padding: "8% 0 8% 10%",backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D')`,backgroundSize: "cover" }} width="100%"
            >
              <h1 className=" text-center text-primary" style={{ fontFamily: '"Playwrite IN", serif', fontSize: "4vw" }}>
                <b>Season Sale</b>
              </h1>

              <h1
                className=" display-3 text-center text-light "
                style={{ fontSize: "8vw" }}
              >
                <b>Women's Fashion</b>
              </h1>

              <h1
                className=" display-3 text-center text-light "
                style={{ fontSize: "4.0vw" }}
              >
                <b>Min. 35%-75% Off. </b>
              </h1>
              <h1 className='display-6' style={{ fontSize: "4.0vw" }}>&nbsp;</h1>
              <div className="d-grid gap-4 d-flex justify-content-center">
                <button type="button" className="col-3 btn btn-primary btn-sm rounded-0" style={{ fontSize: "3vw" }}>
                  SHOP NOW
                </button>
                <button
                  type="button"
                  className=" col-3 btn btn-outline-primary btn-sm rounded-0 "
                  style={{ fontSize: "3vw" }}
                >
                  READ MORE
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-12" style={{backgroundImage: `url(${bgimg})`,backgroundSize: "cover"}} width="100%">
              
            </div>
        </div>
      </div>

    </>
  )
}
