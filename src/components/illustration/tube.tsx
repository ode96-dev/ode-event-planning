import { INK } from "@/lib/helpers";

type TubeProps = { d: string; width: number; fill: string; ticks?: boolean };

export const Tube = ({ d, width, fill, ticks = false }: TubeProps) => (
  <g fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} stroke={INK} strokeWidth={width + 6} />
    <path d={d} stroke={fill} strokeWidth={width} />
    {ticks && (
      <path
        d={d}
        stroke={INK}
        strokeWidth={width}
        strokeDasharray="1.5 7"
        strokeLinecap="butt"
      />
    )}
  </g>
);
