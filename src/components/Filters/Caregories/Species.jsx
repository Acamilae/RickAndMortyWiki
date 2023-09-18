import { FilterBtn } from "../FilterBtn";

export const Species = ({ setSpecies, setpageNumber }) => {
  let especies = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybtthole",
    "Mythilogical",
    "Unknown",
    "Animal",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Especie
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body  d-flex flex-wrap gap-3">
          {especies.map((items, index) => (
            <FilterBtn
              task={setSpecies}
              setpageNumber={setpageNumber}
              key={index}
              name="species"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
