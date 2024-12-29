"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Persona from "@/components/Persona";

function Page() {
  const [activeoption, setactiveOption] = useState({
    color: "red",
    wheel: "carbon",
    interiortheme: "sabbia",
  });
  function changeOptions(options, values) {
    const newOptions = {
      ...activeoption,
      [options]: values,
    };
    setactiveOption(newOptions);
  }
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row">
        <section className="md:w-[70%]">
          <Main {...activeoption} />
        </section>
        <section className="md:w-[30%] ">
          <Persona changeOptions={changeOptions} {...activeoption} />
        </section>
      </div>
    </div>
  );
}

export default Page;
