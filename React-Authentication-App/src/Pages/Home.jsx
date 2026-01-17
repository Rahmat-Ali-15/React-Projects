import { Button } from "../Components/Button";

export const Home = () => {
  return (
    <>
      <main className="pb-15">
        <div className="relative flex items-center justify-end h-145 w-full bg-cover bg-center bg-[url(/images/end_of_season.avif)] cursor-pointer">
          <div className="flex gap-6 flex-col text-white text-right pr-15">
            <div>
              <h1 className="text-4xl font-bold">FLAT 40% OFF</h1>
              <p>+ EXTRA 5% OFF ONLINE PAYMENTS</p>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                text="FOR HIM"
                className="px-4 py-2 font-bold cursor-pointer"
              />
              <Button
                text="FOR HER"
                className="px-4 py-2 font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-end h-145 w-full bg-cover bg-center bg-[url(/images/hero_img_1.avif)] cursor-pointer">
          <div className="flex gap-6 flex-col text-black text-right pr-15">
            <div className="z-40">
              <h1 className="text-[38px] font-bold">IT'S SHOWTIME</h1>
              <p className="text-[22px]">2026 PUMA X RCB REPLICA JERSEY</p>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                text="FOR HIM"
                bgColor="bg-black"
                className="px-4 py-2 text-white cursor-pointer"
              />
              <Button
                text="FOR HER"
                bgColor="bg-black"
                className="px-4 py-2 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-end h-145 w-full bg-cover bg-center bg-[url(/images/hero_img_2.avif)] cursor-pointer">
          <div className="flex gap-6 flex-col text-black text-right pr-15">
            <div className="z-40">
              <h1 className="text-[38px] font-bold">BACK IN BLUE.</h1>
              <h1 className="text-[38px] font-bold">BUILT TO WIN.</h1>
              <p className="text-[22px]">2026 PUMA X DELHI CAPITALS REPLICA JERSEY</p>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                text="FOR HIM"
                bgColor="bg-black"
                className="px-4 py-2 text-white cursor-pointer"
              />
              <Button
                text="FOR HER"
                bgColor="bg-black"
                className="px-4 py-2 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-10">
          <h1 className="text-3xl font-semibold">WRAPPED UP AND READY TO MOVE</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-2.5 mb-10">
          <h1 className="text-3xl font-semibold">UNLEASH YOUR ENERGY</h1>
          <p>EXPERIENCE THE NITRO<sup className="text-blue-700 font-bold">TM</sup> DIFFERENCE</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-2 px-12 [&>div]:pb-5 [&>div]:flex [&>div]:items-end [&>div]:justify-center [&>div]:h-115 [&>div]:relative [&>div>h1]:text-3xl [&>div>h1]:text-white [&  >div>h1]:text-bold ">
          <div className="bg-cover bg-center bg-[url(/images/velocity_shoes.avif)]">
            <h1>VELOCITY 4</h1>
          </div>
          <div className="bg-cover bg-center bg-[url(/images/deviate_shoe.avif)]">
            <h1>DEVIATE 3</h1>
          </div>
          <div className="bg-cover bg-center bg-[url(/images/magmax_shoe.avif)]">
            <h1>MAGMAX</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 pl-12 mt-15 h-145 bg-cover bg-[url(/images/speedcat.avif)]">
          <div>
            <h1 className="text-4xl font-bold">SPEEDCAT</h1>
            <p className="text-2xl">EFFORTLESSLEY LUXE</p>
          </div>
          <div>
            <Button text="SHOP NOW" bgColor="bg-black" className="text-white font-bold px-4 py-2" />
          </div>
        </div>


        <div className="flex flex-col justify-center gap-5 text-white pl-12 h-145 bg-cover bg-[url(/images/Winterware.avif)]">
          <div>
            <h1 className="text-4xl font-bold">WINTERWEAR</h1>
            <p className="text-2xl">SEASON'S MUST HAVES</p>
          </div>
          <div>
            <Button text="SHOP NOW" className="font-bold px-4 py-2" />
          </div>
        </div>

        {/* Cutting Edge Faves */}

        <div className="flex flex-col gap-6 mt-4 px-10">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold">CUTTING-EDGE FAVES</h1>
          </div>
          <div className="grid grid-cols-5 gap-3 [&>div]:flex [&>div]:items-end [&>div]:justify-center [&>div]:h-72 [&>div]:bg-center [&>div]:bg-cover [&>div]:border [&>div]:cursor-pointer [&>div]:pb-3">
              <div className="bg-[url(/images/Palermo_Shoe.avif)]">
                <h1>PALERMO</h1>
              </div>
            <div className="bg-[url(/images/Mostro.avif)]">
              <h1>MOSTRO</h1>
            </div>
            <div className="bg-[url(/images/Rider_Shoe.avif)]">
              <h1>RIDER</h1>
            </div>
            <div className="bg-[url(/images/Inhale_Shoe.avif)]">
              <h1>INHALE</h1>
            </div>
            <div className="bg-[url(/images/Inverse_Shoe.avif)]">
              <h1>INVERSE</h1>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};
