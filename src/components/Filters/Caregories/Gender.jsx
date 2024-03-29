import { FilterBtn } from "../FilterBtn";

export const Gender = ({ setGender, setpageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Genero
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FilterBtn
              task={setGender}
              setpageNumber={setpageNumber}
              key={index}
              name="gender"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
