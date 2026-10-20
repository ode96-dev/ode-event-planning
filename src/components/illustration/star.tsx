import { INK, STROKE } from "@/lib/helpers";

type StarProps = { x: number; y: number; r: number; fill: string };

export const Star = ({ x, y, r, fill }: StarProps) => {
  const a = r * 0.2;
  return (
    <path
      transform={`translate(${x} ${y})`}
      d={`M0 ${-r} Q${a} ${-a} ${r} 0 Q${a} ${a} 0 ${r} Q${-a} ${a} ${-r} 0 Q${-a} ${-a} 0 ${-r}Z`}
      fill={fill}
      stroke={INK}
      strokeWidth={STROKE}
      strokeLinejoin="round"
    />
  );
};
