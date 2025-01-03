"use client";
import { useState } from "react";
import Image from "next/image";

function Persona({
  color = "",
  wheel = "",
  changeOptions,
  interiortheme = "",
}) {
  const externalColors = [
    { id: 0, color: "red", src: "/assets/exteriorcolors/red.png" },
    { id: 1, color: "violet", src: "/assets/exteriorcolors/violet.png" },
    { id: 2, color: "lightblue", src: "/assets/exteriorcolors/lightblue.png" },
    { id: 3, color: "white", src: "/assets/exteriorcolors/white.png" },
    { id: 4, color: "yellow", src: "/assets/exteriorcolors/yellow.png" },
    { id: 5, color: "green", src: "/assets/exteriorcolors/green.png" },
    { id: 6, color: "orange", src: "/assets/exteriorcolors/orange.png" },
    { id: 7, color: "grey", src: "/assets/exteriorcolors/grey.png" },
    { id: 9, color: "bronze", src: "/assets/exteriorcolors/bronze.png" },
    { id: 10, color: "marron", src: "/assets/exteriorcolors/marron.png" },
  ];
  const wheels = [
    { id: 0, color: "rims", src: "/assets/wheels/rims.png" },
    { id: 1, color: "carbon", src: "/assets/wheels/carbon.png" },
    { id: 2, color: "velador", src: "/assets/wheels/velador.png" },
  ];
  const interiorOptions = [
    {
      id: 0,
      color: "blue",
      src: "/assets/interiorpalette/blue.png",
    },
    {
      id: 1,
      color: "red",
      src: "/assets/interiorpalette/red.png",
    },
    {
      id: 2,
      color: "yellow",
      src: "/assets/interiorpalette/yellow.png",
    },
    {
      id: 3,
      color: "bianco",
      src: "/assets/interiorpalette/bianco.png",
    },
    {
      id: 4,
      color: "sabbia",
      src: "/assets/interiorpalette/sabbia.png",
    },
    {
      id: 5,
      color: "blu",
      src: "/assets/interiorpalette/blu.png",
    },
  ];

  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold mb-3 text-center">
        Customize Your Car
      </h3>
      <p className=" mb-6 text-center">
        A car configurator is an interactive tool that allows users to design
        and customize their ideal vehicle.
      </p>
      {/* Exterior Colors Section */}
      <div className="rounded-lg p-4 bg-gray-50 shadow-md ">
        <h4 className="font-semibold text-lg border-4 border-inset border-black rounded-lg text-center mb-3">
          Exterior Palette
        </h4>
        <div className="grid grid-cols-5 gap-2 justify-center place-items-center">
          {externalColors.map((color) => (
            <button
              key={color.id}
              onClick={() => changeOptions("color", color.color)}
              className={`transition-transform duration-200 hover:scale-105 p-2 rounded-full border-2 ${
                color === color.color ? "border-blue-500" : "border-transparent"
              }`}
            >
              <div>
                <img src={color.src} alt={color.name} className="w-10" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Wheels Section */}
      <div className="mb-60 rounded-lg p-4 bg-gray-50 shadow-md">
        <h4 className="font-semibold text-lg text-center mb-3 border-4 border-inset border-black rounded-lg">
          Wheel Selections
        </h4>
        <div className="grid grid-cols-3 gap-2 justify-center place-items-center">
          {wheels.map((wheel) => (
            <button
              key={wheel.id}
              onClick={() => changeOptions("wheel", wheel.color)}
              className={`transition-transform duration-200 hover:scale-105 p-2 rounded-full border-2 ${
                wheel === wheel.color ? "border-blue-500" : "border-transparent"
              }`}
            >
              <div>
                <img src={wheel.src} alt={wheel.name} className="w-14 h-14" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Interior Options Section */}
      <div className="rounded-lg p-4 bg-gray-50 shadow-md">
        <h4 className="font-semibold text-lg text-center mb-3 border-4 border-inset border-black rounded-lg">
          Seat Customization
        </h4>
        <div className="grid grid-cols-3 gap-2 justify-center place-items-center">
          {interiorOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => changeOptions("interiortheme", option.color)}
              className={`transition-transform duration-200 hover:scale-105 p-2 rounded-full border-2 w-28 ${
                option === option.color
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <div>
                <img src={option.src} alt={option.name} className="w-10" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Persona;
