import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../src/styles/cards.css";
import "./App.css";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import NavBar from "./components/Navbar/NavBar";
import Filters from "./components/Filters/Filters";
import Search from "./components/Search";
import { Card } from "./components/card";
import { CardDetails } from "./components/Navbar/CardDetails";
import { Pag } from "./components/Pag";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setpageNumber] = useState(1);
  // console.log(pageNumber);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fecthDato, setFechtDato] = useState([]);
  let { info, results } = fecthDato;

  console.log(results);
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    //IIFE FUNCTION (Immediately Invoked Function Expression): en estas no hay que escribir el nombre si no directamente la funcion.
    (async function () {
      let datos = await fetch(apiUrl).then((resultado) => resultado.json());
      setFechtDato(datos);
      // console.log(datos.results)
    })();
    //Vigilante
  }, [apiUrl]);

  return (
    <>
    <h1 className="text-center mb-4">Personajes</h1>
      <Search setSearch={setSearch} setpageNumber={setpageNumber} />

      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setpageNumber={setpageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-12 col-lg-8">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pag info={info} pageNumber={pageNumber} setpageNumber={setpageNumber} />
    </>
  );
};

export default App;
