import React, { Component } from "react";
import PropTypes from "prop-types";

const UmOkkur = () => {
  return (
    <div className=" absolute flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-gray-300 body-font">
        <div className="container flex flex-col  px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src="/Kokugerd-HP-Logo.png" alt="logo" />
            </a>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Kökugerð HP
            </p>
          </div>
          <div className="flex justify-between flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h2 className="my-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font border-solid border-b-2 border-red-500">
                Um Okkur
              </h2>
              <p>
                Kökugerð HP var stofnuð í júni 1991. Fyrirtækið sérhæfir sig í
                bakstri á flatkökum, kleinum, kanilsnúðum, rúgbrauði. Vörurnar
                eru seldar í verslunum um land allt.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="my-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font border-solid border-b-2 border-red-500">
                Segðu hæ við okkur.
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    hpflatkokur@simnet.is
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Gagnheiði 15 - 800 Selfoss
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    +354 482-2740
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-red-500">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2023 - Kökugerð H P
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UmOkkur;
