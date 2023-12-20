import colorNames from "colornames";

type PropsType = {
  color: string;
};

const ColorBox = ({ color }: PropsType) => {
  return (
    <section
      className="color-box mb-5 flex h-20 w-full max-w-xs flex-col flex-wrap content-center justify-center rounded-lg border-2 border-slate-50"
      style={{ backgroundColor: color }}
    >
      <p className="text-center mix-blend-normal">
        {color ? color : "Empty value"}
      </p>
      <p className="text-center mix-blend-normal">
        {color ? colorNames(color) : null}
      </p>
    </section>
  );
};

export default ColorBox;
