import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export const FilterMusicRecords = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [filterVal, setFilterVal] = useState([])
    console.log("🚀 ~ filterVal:", filterVal);

    const handleFilter = (e) => {
        const option = e.target.name;
        console.log("🚀 ~ option:", option);
        
        const newArr = [...filterVal];
        
        if(filterVal.includes(option)){
            newArr.splice(filterVal.indexOf(option), 1);
        }
        else{
            newArr.push(option)
        }
        console.log("🚀 ~ newArr:", newArr);
        setFilterVal(newArr)
    }


    return (
        <>
            <h1>Filter</h1>
            <div style={{display: "flex", alignItems: "start", flexDirection: "column"}}>
                <div>
                    <input type="checkbox" name="k-pop" onChange={handleFilter} />
                    <label>K-Pop</label>
                </div>
                <div>
                    <input type="checkbox" name="Holiday" onChange={handleFilter} />
                    <label>Holiday</label>
                </div>
                <div>
                    <input type="checkbox" name="Heavy Metal" onChange={handleFilter} />
                    <label>Heavy Metal</label>
                </div>
            </div>
        </>
    )
}