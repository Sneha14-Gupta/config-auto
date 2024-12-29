import Image from "next/image";

function Headers() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center m-3 space-x-4">
        <h1 className="text-4xl font-bold ">CONFIG CAR</h1>
        <Image
          src="/transport.png"
          alt="logo"
          width={50}
          height={50}
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-2xl font-semibold text-center text-orange-900 tracking-widest mb-4">
        Build your perfect ride with our car configurator
      </p>
    </div>
  );
}
export default Headers;
