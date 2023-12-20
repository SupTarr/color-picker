import colorNames from "colornames";

type PropsType = {
  color: string;
};

const ColorBox = ({ color }: PropsType) => {
  return (
    <section
      className="color-box w-full max-w-xs h-20 flex flex-col flex-wrap content-center justify-center border-2 border-slate-50 rounded-lg mb-5"
      style={{ backgroundColor: color }}
    >
      <p className="mix-blend-normal text-center">{color ? color : "Empty value"}</p>
      <p className="mix-blend-normal text-center">{color ? colorNames(color) : null}</p>
    </section>
  );
};

export default ColorBox;
