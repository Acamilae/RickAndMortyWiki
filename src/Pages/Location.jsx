import { useState, useEffect } from "react";
import { Card } from "../components/card";
import InputGroup from "../components/Filters/Caregories/InputGroup";

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { name, type, dimension } = info;
  let [results, setResults] = useState ([]);

  // console.log(info)
  let apiUrlLocation = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    //IIFE
    (async function () {
      let datos = await fetch(apiUrlLocation).then((res) => res.json());
      setInfo(datos);
      // console.log(datos)

      let a = await Promise.all(
        datos.residents.map((x) => {
          return fetch (x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [apiUrlLocation]);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-3">
            Locacion :{" "}
            <span className="text-info">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Dimensiones : {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center">
            Tipo : {type === "" ? "Unknown" : type}
          </h6>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="text-center">
              <h3>Escoge una locacion</h3>
              <InputGroup setID={setID} name='Locacion' total = {126} />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row mb-5">
            <Card page="/location/" results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
