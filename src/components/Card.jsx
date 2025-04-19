import React from 'react'
import star from '../assets/Svgfolder/star.svg'
import Imageresizer from './Imageresizer'


export default function Card({ varname, item1, item2 }) {
    return (
        <>
            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                <div className="card border-0" style={{ width: "100%" }}>
                    <Imageresizer imageUrl= {varname} />
                    <div className="card-body px-1 py-4">
                        <div className="card-text c">
                            <p className="lh-1 text-muted" style={{ fontSize: 14 }}>
                                {item1}
                            </p>
                            <p className="lh-1">
                                <b style={{ fontSize: 15, fontWeight: 600 }}>{item2}</b>
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


        </>
    )
}
