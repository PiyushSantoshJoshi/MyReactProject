import React from 'react'
import star from '../assets/Svgfolder/star.svg'
import backpack from '../assets/products/bag.jpg'
import Jacket from '../assets/products/New Project (7).jpg'
import shoes from '../assets/products/New Project (1).jpg'
import pinky from '../assets/products/New Project (2).jpg'
import top2 from '../assets/products/New Project (3).jpg'
import Tshirt from '../assets/products/New Project (4).jpg'
import glasses from '../assets/products/New Project (5).jpg'
import Jacket2 from '../assets/products/New Project (6).jpg'
import hanbag from '../assets/images/handbag.png'
import Jacket3 from '../assets/images/mode2male.png'

export default function Products() {
  return (
    <>
    <div className="mt-5 mb-5 p-5 container-fluid">
  <div className=" mb-5 row">
    <h1 className="text-center">Featured Products</h1>
    <p>&nbsp;</p>
    <div className="col-sm-0 col-md-2 col-lg-3 col-0" />
    <div className="col-sm-12 col-md-8 col-lg-6 col-12">
      <div className="row text-center">
        <div
          className="m-1 p-2 col  border-primary"
          style={{ borderStyle: "solid", borderWidth: "0px 0px 5px 0px" }}
        >
          <h5>New Arrival.</h5>
        </div>
        <div className="m-1 p-2 col  border-bottom">
          <h5>Best Selling.</h5>
        </div>
        <div className="m-1 p-2 col  border-bottom">
          <h5>Top-rated.</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-0 col-md-2 col-lg-3 col-0" />
  </div>
  <div className="mt-5 px-5 row">
    <div className="desktop col-lg-1 col-0" />
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={backpack}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="card-text c">
            <p className="lh-1 text-muted" style={{ fontSize: 14 }}>
              Backpack
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>Yellow Backpack</b>
            </p>
            <p>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p style={{ fontSize: 16 }}>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={Jacket}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Jacket
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Blue Bomber-Jacket.
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={shoes}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Shoes,Formal
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Stylish Brown Shoes
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={pinky}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Women Top
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Beautiful Pink-top
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={top2}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              handbag
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Stylish Brown handbag
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="desktop col-lg-1 col-0" />
  </div>
  <div className="mt-5 px-5 row">
    <div className="desktop col-1" />
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={Tshirt}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Men,T-shirt
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Grey Casual T-shirt
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={glasses}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Glasses
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Stylish black glasses
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={Jacket2}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Casual,Jacket
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>
                Black-Denim Jacket
              </b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={hanbag}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Purse.
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>Decent Blue-Purse</b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 col-lg-2 col-6">
      <div className="card border-0" style={{ width: "100%" }}>
        <img
          className="border"
          src={Jacket3}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body px-1 py-4">
          <div className="c">
            <p className=" text-muted" style={{ fontSize: 14 }}>
              Jacket
            </p>
            <p className="lh-1">
              <b style={{ fontSize: 15, fontWeight: 600 }}>Blue-Denim Jacket</b>
            </p>
            <p className="card-text">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </p>
            <p>
              <b>$149.0-159.0</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="desktop col-1" />
  </div>
</div>

    
    </>
  )
}
