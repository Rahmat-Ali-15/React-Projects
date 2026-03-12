import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import data from "../../db.json";


export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(searchParams.getAll("genre") || []);

  let genre = [];
  data.albums.map((el) => {
    genre.push(el.genre);
  });

  let obj = {};

  genre.reduce((curr, acc) => {
    curr[acc] = (curr[acc] || 0) + 1;
    return curr;
  }, obj);

  // for(let i = 0; i < arr.length; i++){
  //     let isGenre = arr[i]
  //     if(obj[isGenre]){
  //         obj[isGenre]++
  //     }
  //     else{
  //         obj[isGenre] = 1
  //     }
  // }
  // console.log("🚀 ~ obj:", obj);

  const handleFilter = (e) => {
    const option = e.target.name;

    const newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr.splice(filterVal.indexOf(option), 1);
    } else {
      newArr.push(option);
    }
    setFilterVal(newArr);
  };

  useEffect(() => {
    const Params = {};
    filterVal && (Params.genre = filterVal);

    setSearchParams(Params)
  },[filterVal, setSearchParams])

  return (
    <>
      <h1>Filter</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        {Object.keys(obj).map((el) => {
          return (
            <div key={el}>
              <input
                type="checkbox"
                name={el}
                onChange={handleFilter}
                defaultChecked={filterVal.includes(el)}
              />
              <label>{el}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
