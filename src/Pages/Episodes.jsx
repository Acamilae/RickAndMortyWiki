import { useState, useEffect } from "react";
import { Card } from "../components/card";
import InputGroup from "../components/Filters/Caregories/InputGroup";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState ([]);

  // console.log(info)
  let apiUrlEpisodes = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    //IIFE
    (async function () {
      let datos = await fetch(apiUrlEpisodes).then((res) => res.json());
      setInfo(datos);
      // console.log(datos)

      let a = await Promise.all(
        datos.characters.map((x) => {
          return fetch (x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [apiUrlEpisodes]);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-3">
            Episodio :{" "}
            <span className="text-info">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Air Date {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="text-center">
              <h3>Escoge un Episodio</h3>
              <InputGroup setID={setID} name='Episodios' total = {51} />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row mb-5 mt-4">
            <Card page="/episodes/" results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
