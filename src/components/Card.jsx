import "../styles/cards.css";
import { Link } from "react-router-dom";

export const Card = ({ results, page }) => {
  // console.log( results )

  let display;

  if (results && Array.isArray(results) && results.length > 0) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
        style={{textDecoration : 'none'}}
          to={`${page}${id}`}
          className="col-12 col-md-6 col-lg-4 position-relative mb-3 text-dark"
          key={id}
        >
          <div className="cards d-flex  flex-column justify-content-center">
            <img src={image} alt="" className="personaje img-fluid img" />
            <div className="content" style={{ padding: "10px" }}>
              <div className="nameP">
                <span className="fs-5 fw-bold mb-4">{name}</span>
              </div>
              <div className="fs-7">Última ubicación :</div>
              <div className="location fs-6">{location.name}</div>
            </div>
          </div>
          {/* IIFE de estado del personaje, la usamos para que se ejecute inmediatamente */}
          {(function () {
            // Danger btn
            if (status === "Dead") {
              return (
                <div className="position-absolute badge bg-danger">
                  {status}
                </div>
              );
            }
            //Success btn
            else if (status === "Alive") {
              return (
                <div className="position-absolute badge bg-success">
                  {status}
                </div>
              );
            }
            //Secondary btn
            else {
              return (
                <div className="position-absolute badge bg-secondary">
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No hay resultados :(";
  }

  return <>{display}</>;
};
