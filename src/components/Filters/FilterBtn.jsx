

export const FilterBtn = ({ name, index, items, task, setpageNumber }) => {
  return (
    <>
      <style>
    {`.x:checked + label{
      background-color: #0c5ed7;
      color: #fff;
    }
    input[type="radio"]{
      display: none;
    }`}
    </style>

      <div className="form-check ">
        <input
          onClick={ () => {
            setpageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name} - ${index}`}
        />

        <label
          className="btn btn-outline-info"
          htmlFor={`${name} - ${index}`}
        >
          {items}
        </label>
      </div>
    </>
  );
};
