type PropsType = {
  color: string;
  setColor(color: string): void;
};

const ColorInput = ({ color, setColor }: PropsType) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">What is your color?</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </label>
  );
};

export default ColorInput;
