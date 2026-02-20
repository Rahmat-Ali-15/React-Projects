import { Button } from "../Components/Button";
import { api } from "../Api/api";
import { useEffect, useState } from "react";

export const Home = () => {
  const [gearupData, setGearupData] = useState([]);
  const [trendingShoes, setTrendingShoew] = useState([]);

  useEffect(() => {
    const fetchGearUpData = async () => {
      try {
        const gearUp = await api.get("/GearUpSports");
        const trendingShoe = await api.get("/trending");
        setGearupData(gearUp.data);
        setTrendingShoew(trendingShoe.data);
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
    };
    fetchGearUpData();
  }, []);

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
              <p className="text-[22px]">
                2026 PUMA X DELHI CAPITALS REPLICA JERSEY
              </p>
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
          <h1 className="text-3xl font-semibold">
            WRAPPED UP AND READY TO MOVE
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-2.5 mb-10">
          <h1 className="text-3xl font-semibold">UNLEASH YOUR ENERGY</h1>
          <p>
            EXPERIENCE THE NITRO
            <sup className="text-blue-700 font-bold">TM</sup> DIFFERENCE
          </p>
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
            <Button
              text="SHOP NOW"
              bgColor="bg-black"
              className="text-white font-bold px-4 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 text-white pl-12 h-145 bg-cover bg-[url(/images/Winterware.avif)]">
          <div>
            <h1 className="text-4xl font-bold">WINTERWEAR</h1>
            <p className="text-2xl">SEASON'S MUST HAVES</p>
          </div>
          <div>
            <Button
              text="SHOP NOW"
              className="font-bold px-4 py-2"
            />
          </div>
        </div>

        {/* Cutting Edge Faves */}

        <div className="flex flex-col gap-6 mt-4 px-10">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold">CUTTING-EDGE FAVES</h1>
          </div>
          <div className="grid grid-cols-5 gap-3 [&>div]:flex [&>div]:items-end [&>div]:justify-center [&>div]:h-72 [&>div]:bg-center [&>div]:bg-cover [&>div]:border [&>div]:cursor-pointer [&>div]:pb-3 [&>div>h1]:text-xl [&>div>h1]:font-bold">
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

        {/* Portugal Home Kit */}

        <div className="flex justify-center flex-col gap-6 h-145 pl-15 my-15 bg-[url(/images/portugal_home_kit.avif)] bg-cover bg-center">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">
              FOR THE LOVE OF THE SHIRT
            </h1>
            <p className="text-2xl">PORTUGAL HOME KIT</p>
          </div>
          <div>
            <Button
              text="SHOP NOW"
              className="px-4 py-2 font-semibold"
            />
          </div>
        </div>

        {/* discover the latest */}

        <div className="flex flex-col items-center gap-2 pb-15">
          <h1 className="text-4xl font-bold">DISCOVER THE LATEST</h1>
          <p className="text-[17px] text-[#b5a8a8]">
            SEASON’S BEST JUST LANDED
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 pl-15 h-145 bg-center bg-cover bg-[url(/images/luckey_img.avif)] text-white">
          <div>
            <h1 className="text-4xl font-bold">LUCKY SIZES GET LUCKIER</h1>
            <p className="text-[22px]">YOUR SIZE. EXTRA OFF.</p>
          </div>
          <div className="flex gap-3 [&>Button]:font-semibold [&>Button]:px-4 [&>Button]:py-2">
            <Button text="SHOP FOOTWEAR" />
            <Button text="SHOP APPAREL" />
          </div>
        </div>

        {/* Gear up for sports */}
        <div className="flex flex-col gap-7 font-bold text-2xl py-10 px-8">
          <div>
            <h1>GEAR UP FOR SPORTS</h1>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {gearupData.map((el) => (
              <div key={el.id}>
                <div className="h-92.5 relative">
                  <img
                    src={el.img}
                    alt={el.title}
                    className="h-92.5 w-full"
                  />
                  <h3 className="absolute bottom-2 left-3 text-white font-bold text-2xl">
                    {el.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Shoes */}

        <div className=" gap-4">
          <h1 className="text-2xl font-bold">TRENDING NOW</h1>
          <div className="flex gap-2 border-3">
            {trendingShoes.map((el) => (
              <div className="border w-100 ">
                <img
                  src={el.img}
                  alt={el.title}
                />
                <div className="flex">
                  <p>{el.title}</p>
                  <div>
                    <p>{el.newPrice}</p>
                    <p>{el.oldPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
