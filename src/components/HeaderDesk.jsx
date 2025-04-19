import React from 'react'
import emailsv from '../assets/Svgfolder/email.svg'
import phone from '../assets/Svgfolder/phone.svg'

export default function HeaderDesk() {
  return (
    <>
    <div className="container-fluid text-lg bg-primary text-white text-center desktop">
        <div className="row">
          <div className="col-1" />
          <div className="col-2 border-start border-end">
            <img src={emailsv} />
            support@email.com
          </div>
          <div className="col-2 border-end ">
            <img src={phone} />
            +91-256788999
          </div>
          <div className="col-2" />
          <div className="col-2 border-start border-end">Welcome to our store</div>
          <div className=" col-1 border-end dropdown">
            <button
              type="button"
              className="p-0 btn  btn-primary dropdown-toggle rounded-0"
              data-bs-toggle="dropdown"
            >
              Language
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Marathi
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-1 border-end dropdown">
            <button type="button" className="p-0 btn  btn-primary dropdown-toggle rounded-0" data-bs-toggle="dropdown">
              Currency
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  $ Dollar(US)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Marathi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </>
  )
}
