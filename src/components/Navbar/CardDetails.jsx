import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CardDetails = () => {
  let { id } = useParams();
  let [fecthDato, setFechtDato] = useState([]);
  let { name, image, origin, gender, species, status, type, location } =
    fecthDato;

  console.log(fecthDato);

  let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
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
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {/* IIFE de estado del personaje, la usamos para que se ejecute inmediatamente */}
        {(function () {
          // Danger btn
          if (status === "Dead") {
            return <div className=" badge bg-danger">{status}</div>;
          }
          //Success btn
          else if (status === "Alive") {
            return <div className=" badge bg-success">{status}</div>;
          }
          //Secondary btn
          else {
            return <div className=" badge bg-secondary">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Genero : </span>{gender}
          </div>
          <div className="">
            <span className="fw-bold">Epecie : </span>{species}
          </div>
          <div className="">
            <span className="fw-bold">Tipo : </span>{type === "" ? 'Unknown' : type}
          </div>
          <div className="">
            <span className="fw-bold">Origen : </span>{origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Ubicacion : </span>{location?.name}
          </div>
        </div>
      </div>
    </div>
  );
};
