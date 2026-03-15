import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GoZoomIn, GoZoomOut } from "react-icons/go";

import { useEffect, useState } from "react";
import { api } from "../Api/api";

export const New = () => {
  const [newSeasonProduct, setNewSeasonProduct] = useState([]);


  useEffect(() => {
    const fetchNewSeasonData = async () => {
      try {
        const newSeasonData = await api.get("/new_season_products");
        setNewSeasonProduct(newSeasonData.data);
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
    };
    fetchNewSeasonData();
  }, []);

  console.log("🚀 ~ newSeasonProduct:", newSeasonProduct);
  return (
    <>
      <main className="py-10">
        <div className="px-10 h-30 flex items-center">
          <h1 className="text-3xl font-bold">NEW SEASON</h1>
        </div>

        {/* Product filter */}
        <div className="px-10 py-7 flex items-center justify-between border-y border-black/10">
          <div className="flex gap-2 [&>div]:flex [&>div]:items-center  [&>div]:gap-4 [&>div]:border [&>div]:border-black/20 [&>div]:px-3 [&>div]:py-2 [&>div]:font-bold [&>div>div]:flex [&>div>div>:nth-child(1)]:text-2xl [&>div>div>:nth-child(2)]:hidden cursor-pointer">
            <div>
              <p>Category</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Product Type</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Price</p>
              <section className="hidden ">
                <div>
                  <input type="radio" />
                  <label>Price: Low to High</label>
                </div>
                <div>
                  <input type="radio" />
                  <label>Price: High to Low</label>
                </div>
              </section>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Size</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Colour</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Activity Type</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
            <div>
              <p>Gender</p>
              <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 px-3 py-2 font-semibold border border-black/20 cursor-pointer">
              <p>RECOMMENDED</p>
              <div className="flex [&>:nth-child(1)]:text-2xl [&>:nth-child(2)]:hidden">
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
              </div>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="flex flex-col gap-10 p-10">
          {/* up part */}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-[20px]">{newSeasonProduct.length} PRODUCTS</h1>
            </div>
            <div className="flex gap-2">
              <GoZoomIn className="text-3xl" />
              <GoZoomOut className="text-3xl" />
            </div>
          </div>
          {/* card part */}
          <div className="grid grid-cols-4 gap-4">
            {newSeasonProduct.map((el,i) => (
              <div key={i} className="flex flex-col gap-5 cursor-pointer">
                <img
                  src={el.img}
                  alt={el.title}
                />
                <div>
                  <p className="text-[12px] text-[#909192]">{el.totalColor}</p>
                  <div className="flex justify-between font-semibold mt-5">
                    <p className="text-[15px]">{el.title}</p>
                    <p>₹{Number(el.price).toLocaleString("en-IN")}</p>
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
