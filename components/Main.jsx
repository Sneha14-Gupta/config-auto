import Image from "next/image";
import configs from "@/app/configs.json";

function Main({ color = "red", wheel = "carbon", interiortheme = "sabbia" }) {
  return (
    <div className="ml-6 ">
      <img
        src={`${configs[color].wheels[wheel]}`}
        alt={`${color}`}
        className="sm:w-128 rounded-lg w-full h-auto object-cover border-4 border-slate-950 mb-16"
      />
      <h1 className="flex justify-center font-bold text-3xl mb-5">
        Interior Palette
      </h1>
      <img
        src={`/assets/interiorpic/${interiortheme}.jpg`}
        alt={`${interiortheme}`}
        className="w-full h-auto object-cover rounded-lg border-4 border-slate-950 sm:w-128 mb-16"
      />
    </div>
  );
}
export default Main;
