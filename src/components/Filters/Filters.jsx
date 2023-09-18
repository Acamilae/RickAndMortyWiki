import { Gender } from "./Caregories/Gender";
import { Status } from "./Caregories/Status";
import { Species } from "./Caregories/Species";

const Filters = ({ setpageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setpageNumber("");
    setGender("");
    setSpecies("");

    window.location.reload(false);
  }
  return (
    <div className="col-12 mb-5 col-lg-3 ">
      <div className="text-center">
        <h2 className="fw-bold fs-4 mb-2">Filtros</h2>
        <div
          className="text-center text-info text-decoration-underline mb-3"
          onClick={clear}
          style={{ cursor: "pointer" }}
        >
          Limpiar Filtros
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setpageNumber={setpageNumber} />
        <Species setSpecies={setSpecies} setpageNumber={setpageNumber} />
        <Gender setGender={setGender} setpageNumber={setpageNumber} />
      </div>
    </div>
  );
};

export default Filters;
