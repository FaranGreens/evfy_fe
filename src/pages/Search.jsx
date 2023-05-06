import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const Search = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSearch = async () => {
    let res = fetch(`http://localhost:8080/cars?q=${text}&page=${page}`)
      .then((d) => d.json())
      .then((data) => {
        // console.log(data);
        setData(data.data);
        setTotalPages(data.totalPages);
      });
  };
  const getresults = handleSearch;

  useEffect(() => {
    getresults();
  }, [page]);
  
  return (
    <div>
      <div>
        <input type="text" onChange={handleInputChange} placeholder="Search" />
        <br />
        <button onClick={handleSearch}>Search</button>
        <br />
        <select>
          <option>Select the brand</option>
          <option>Maruti</option>
          <option>Honda</option>
          <option>Mahindra</option>
          <option>Kia</option>
        </select>
        <select>
          <option>Select the Model</option>
          <option>Sedan</option>
          <option>Hatchback</option>
          <option>SUV</option>
        </select>
        <select>
          <option>Select by Fuel</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>EV</option>
        </select>
      </div>
      {data?.map((e, i) => {
        {
          /* console.log(e); */
        }
        return (
          <div
            className="seach-result-card"
            key={i}
            style={{ display: "flex", gap:"20px", margin:"10px" }}
          >
            <div>
              <img src={e.images[0]} alt="image" width={200} />
            </div>
            <div>
              <p>{e.make}</p>
              <p>{e.model}</p>
              <p>{e.price}</p>
            </div>
          </div>
        );
      })}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={(e) => setPage(e)}
      />
    </div>
  );
};

export default Search;
