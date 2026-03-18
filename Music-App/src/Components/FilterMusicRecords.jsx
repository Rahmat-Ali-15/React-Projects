import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import data from "../../db.json";

export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(
    searchParams.getAll("genre") || [],
  );

  const [sort, setSort] = useState(searchParams.get("_sort") || "");

  const [keys] = useState(() => {
    return data.albums
      .map((el) => {
        let value = Object.values(el.genre).join("");
        return value;
      })
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
  });

  //   let genre = [];
  //   data.albums.map((el) => {
  //     genre.push(el.genre);
  //   });

  //  let obj= genre.reduce((curr, acc) => {
  //     curr[acc] = (curr[acc] || 0) + 1;
  //     return curr;
  //   }, {});

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
    console.log("🚀 ~ option:", option);

    const newArr = [...filterVal];

    if (newArr.includes(option)) {
      newArr.splice(newArr.indexOf(option), 1);
    } else {
      newArr.push(option);
    }
    setFilterVal(newArr);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const Params = {};

    filterVal && (Params.genre = filterVal);

    sort && (Params._sort = sort);

    setSearchParams(Params);
  }, [sort, filterVal, setSearchParams]);

  console.log(filterVal);

  return (
    <>
      <h1>Filter</h1>
      <div>
        {Object.keys(keys).map((el, i) => {
          return (
            <div
              key={i + 1}
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
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

      <h2>Sort</h2>
      <div onChange={handleSort}>
        <div>
          <label>Asc</label>
          <input
            type="radio"
            value="asc"
            name="sort"
            defaultChecked={sort.includes("asc")}
          />
        </div>
        <div>
          <label>Dsc</label>
          <input
            type="radio"
            value="dsc"
            name="sort"
            defaultChecked={sort.includes("dsc")}
          />
        </div>
      </div>
    </>
  );
};
