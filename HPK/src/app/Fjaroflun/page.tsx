"use client";
import { Button, Html } from "@react-email/components";
import * as React from "react";
import { Link } from "react-router-dom";

export default function FjaroflunPage() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mt-9 text-gray-800">FJÁRÖFLUN</h1>
      </div>
      <div className="flex justify-center relative">
        <div
          className="relative w-screen max-w-screen-lg overflow-hidden rounded-md"
          style={{ height: "calc(100vh * 1 / 3)" }}
        >
          <img
            src="/Heroimg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 text-center text-2xl font-bold bg-opacity-20">
            <p className="text-white p-8">
              VIÐ HÖFUM STUTT VIÐ ÍSLENKST SAMFÉLAG Í YFIR 50 ÁR
            </p>
          </div>
        </div>
      </div>
      <div className="sm:grid grid-cols-2">
        <div className="bg-gray-100 p-8 rounded-md mt-3 sm:mr-4">
          <h1 className="mb-4 font-bold text-xl">Fyrir hverja</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias
            id, esse laudantium cum tenetur ut commodi, architecto pariatur non
            sunt debitis, est beatae voluptatibus quibusdam consequatur officia
            consectetur a? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellat, eaque a! Sapiente voluptate fugit ullam, illum,
            animi tempore unde incidunt corporis vitae molestiae ex voluptates
            est, necessitatibus quisquam dolores odit! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Iusto facilis nemo veniam
            quisquam repellendus ab delectus ex quos quaerat, aliquid aut natus,
            facere sunt! Totam nihil nobis explicabo quo sequi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Neque porro laudantium
            totam quasi saepe recusandae ea numquam, ex ipsam odio libero
            voluptate. Culpa eius sit aliquid corporis officia at assumenda?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ullam
            quod, vitae ad possimus, veniam accusantium nobis distinctio
            laudantium repellendus, sit consectetur odit voluptas accusamus
            velit architecto. Iste, aliquam temporibus.
          </p>
        </div>
        <div className="sm:ml-4 p-8 col bg-red-100 rounded-md mt-3 sm:mr-4">
          <h1 className="mb-4 font-bold text-xl">Sentu á okkur línu</h1>
          <div>
            <p>NAFN</p>
            <input
              type="text"
              className="border-2 border-red-500 w-full mb-4 rounded-xl h-10 text-center"
              placeholder="NAFN"
            />
          </div>
          <div>
            <p>EMAIL</p>
            <input
              type="text"
              className="border-2 border-red-500 w-full mb-4 rounded-xl h-10 text-center"
              placeholder="EMAIL"
            />
          </div>
          <div>
            <input
              type="text"
              className="border-2 border-red-500 w-full my-4 h-32 rounded-xl text-"
            />
          </div>
          <div className="text-center">
            <button className="bg-red-500 hover:bg-green-600 p-3 rounded-xl w-full text-white font-bold">
              SENDA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
