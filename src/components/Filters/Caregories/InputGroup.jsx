const InputGroup = ({ total, name, setID }) => {
  console.log([...Array(total).keys()]);
  return (
    <>
      <div className="input-group mb-3">
        <select
          onChange={(e) => setID(e.target.value)}

          className="form-select"
          id={name}
        >
          <option value={1} disabled>Selecciona un capitulo</option>

          {[...Array(total).keys()].map((x) => {
            return (
              <option key={x} value={x + 1}>{name} - {x + 1}</option>
            );
          })}
        </select>
       
      </div>
    </>
  );
};

export default InputGroup;
