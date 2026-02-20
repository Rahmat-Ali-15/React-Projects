import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const New = () => {
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
      <div>
      {/* up part */}
        <div>
          <div>
            <p>1548 PRODUCTS</p>
          </div>
          <div>
            <p>Zoom in</p>
            <p>Zoom out</p>
          </div>
        </div>
        {/* card part */}
        <div>
          
        </div>
      </div>

      </main>
    </>
  );
};
