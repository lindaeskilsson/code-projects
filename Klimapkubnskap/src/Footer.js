import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => (
  <div className="footer">
    <Link to="/">
      <img src="https://i.imgur.com/3NqGGsd.png" className="footerimg"></img>
    </Link>
    <svg
      height="10%"
      id="svg"
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <path
        d="M 0,600 C 0,600 0,150 0,150 C 139.96428571428572,164.14285714285714 279.92857142857144,178.28571428571428 403,186 C 526.0714285714286,193.71428571428572 632.25,195.00000000000003 745,174 C 857.75,152.99999999999997 977.0714285714284,109.71428571428571 1094,102 C 1210.9285714285716,94.28571428571429 1325.4642857142858,122.14285714285714 1440,150 C 1440,150 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="#B1C1F0"
        fill-opacity="0.4"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <path
        d="M 0,600 C 0,600 0,300 0,300 C 90.85714285714286,305.1428571428571 181.71428571428572,310.2857142857143 301,308 C 420.2857142857143,305.7142857142857 568,296 714,303 C 860,310 1004.2857142857142,333.7142857142857 1125,336 C 1245.7142857142858,338.2857142857143 1342.857142857143,319.1428571428571 1440,300 C 1440,300 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="#FFAA15"
        fill-opacity="0.53"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
      <path
        d="M 0,600 C 0,600 0,450 0,450 C 95.92857142857142,460.57142857142856 191.85714285714283,471.14285714285717 315,462 C 438.14285714285717,452.85714285714283 588.5000000000001,424 712,414 C 835.4999999999999,404 932.1428571428571,412.8571428571429 1049,422 C 1165.857142857143,431.1428571428571 1302.9285714285716,440.57142857142856 1440,450 C 1440,450 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        height=""
        fill="#00c0a8"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-2"
      ></path>
    </svg>
  </div>
);
export default Footer;
