/* eslint-disable react/prop-types */
const Die = ({ id, value, isHeld, hold }) => {
  return (
    <button
      className={`${isHeld ? "is-held" : ""}`}
      onClick={() => hold(id)}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
};

export default Die;
