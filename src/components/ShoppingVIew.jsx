import React from 'react'
import Card from './Card'

export default function ShoppingVIew() {
    return (
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
            <div className="row">
                <div className="desktop col-lg-1 col-0" />
                <Card varname='https://images.dailyobjects.com/marche/product-images/1201/all-mustard-pedal-daypack-images/All-Mustard-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-3,w-768,h-694,dpr-1' item1="Backpack" item2="Yellow Backpack" />
                <Card varname="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF-QzSUmHUiNu2DVka-6TXQp-9V9TzLMTjbSAcpkwV3xjAW1o_kywammXbm2IRxo3D1JxMWvyu3TwnQ6k4_7KyhWCQQ4Ph0ggkbjiIqpM" item1="Jacket" item2="Blue-Bomber Jacket" />
                <Card varname="https://www.albertotorresi.com/cdn/shop/files/62336TAN_4.jpg?v=1740756443&width=535" item1="Shoes" item2="Brown Leathered shoes" />
                <Card varname="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQT0LlikCStEITejYeOC4BxYvPtXMGLaRD5mJreptBzGou-Fr_dCZFjpLhMsYcBTKXJX8ILEWBXs6O1tsoxRmyk8XuolNliqF4yX-viYjQ" item1="Women's Top" item2="Beautiful pink-top" />
                <Card varname="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqSHTvAU7BCSXZkP2Uu2qBZh3r_2bvqtMlQ&s" item1="Handbag" item2="Stylish brown leathered handbag" />
                <div className="desktop col-lg-1 col-0" />
                <div className="desktop col-lg-1 col-0" />
                <Card varname="https://www.americancrew.in/cdn/shop/files/B0B529BR4L_1_M.jpg?v=1682768300" item1="Tshirt" item2="Grey T-shirt" />
                <Card varname="https://www.snitch.co.in/cdn/shop/files/NOTAG-TSHIRT-WHITE-M53.jpg?v=1738231060" item1="Glasses" item2="Stylish Black Sunglasses" />
                <Card varname="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPqLOzWzmHuF4UCcfarn0wfuA8tTf384pYR9Ni9MAQpI7xJmKTIWPhlUumlnijkmQECmrvFoyERho2fY6YLebz69_taloNEDEaQb49TiH1qaOxSwEqI-Nb&usqp=CAc" item1="Casual,Jacket" item2="Black-denim Jacket" />
                <Card varname="https://media.istockphoto.com/id/1391784115/photo/womens-purse-on-pink-background-flat-lay.jpg?s=612x612&w=0&k=20&c=6xIyzOCMwzpU1MuLwEzJwtSqwCOIKKc_ROWyU7K1oxo=" item1="Purse,handbag" item2="Decent Blue-Purse" />
                <Card varname="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTu_1AA-PTiRe8e9LdWx4I_xxwI1vl0MW8ZLDpCRXzFn5gaDhxF4Ck7nCrstq3R7pR0HX_u6hLf2exhc-s44i7nE8J8F7ZG-F9WddpOSjm2rOTZGV6WnuQ2" item1="Jeans,Jacket" item2="Blue-Denim Jacket" />
                <div className="desktop col-lg-1 col-0" />
            </div>
        </div>
    )
}
