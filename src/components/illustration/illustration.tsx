import {
  ASTRONAUT_HOSE,
  CRATERS,
  DISTORTION,
  INK,
  PLANET,
  STROKE,
} from "@/lib/helpers";
import { Star } from "./star";
import { Tube } from "./tube";

export const Illustration = () => (
  <svg
    viewBox="316 92 820 612"
    role="img"
    aria-label="An astronaut tethered to a red planet, with a rocket parked on its far side"
    style={{
      width: "100%",
      maxWidth: 720,
      height: "auto",
      display: "block",
      overflow: "visible",
    }}
  >
    <defs>
      <clipPath id="notfound-planet-clip">
        <circle cx={PLANET.cx} cy={PLANET.cy} r={PLANET.r} />
      </clipPath>
      <filter id="notfound-distort" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves={2}
          seed={3}
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={DISTORTION}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
    <g filter={DISTORTION ? "url(#notfound-distort)" : undefined}>
      <Star x={390} y={168} r={26} fill="#90caf9" />
      <Star x={1027} y={137} r={35} fill="#a5d6a7" />
      <Star x={1073} y={640} r={54} fill="#dcaedb" />

      <Tube d={ASTRONAUT_HOSE} width={12} fill="#cfd8dc" ticks />
      <Tube d="M900 348 L1015 348" width={6} fill="#cfd8dc" ticks />

      <circle
        cx={PLANET.cx}
        cy={PLANET.cy}
        r={PLANET.r}
        fill="#e67c7a"
        stroke={INK}
        strokeWidth={STROKE}
      />
      <g clipPath="url(#notfound-planet-clip)" fill="#e25b5b">
        {CRATERS.map(({ cx, cy, rx, ry, rot }, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            transform={`rotate(${rot} ${cx} ${cy})`}
          />
        ))}
      </g>
      <circle
        cx={PLANET.cx}
        cy={PLANET.cy}
        r={PLANET.r}
        fill="none"
        stroke={INK}
        strokeWidth={STROKE}
      />

      <g
        transform="translate(1043 347) rotate(-18)"
        stroke={INK}
        strokeWidth={STROKE}
        strokeLinejoin="round"
      >
        <path d="M-38 22 L-64 52 Q-66 62 -56 62 L-38 56 Z" fill="#b0bec5" />
        <path d="M38 22 L64 52 Q66 62 56 62 L38 56 Z" fill="#b0bec5" />
        <path d="M-18 60 L-13 80 L13 80 L18 60 Z" fill="#e8eaec" />
        <path
          d="M0 -92 C30 -76 40 -36 40 14 L40 60 L-40 60 L-40 14 C-40 -36 -30 -76 0 -92 Z"
          fill="#e8eaec"
        />
        <path d="M-34 -42 L34 -42" fill="none" />
        <circle cx={0} cy={4} r={23} fill="#cfd8dc" />
        <circle cx={0} cy={4} r={14} fill="#a5d6f7" />
      </g>

      <g stroke={INK} strokeWidth={STROKE} strokeLinejoin="round">
        <Tube
          d="M512 246 Q522 258 507 266 Q494 271 495 281"
          width={9}
          fill="#f5f5f5"
        />
        <Tube
          d="M522 244 Q542 262 526 276 Q521 281 525 288"
          width={9}
          fill="#f5f5f5"
        />
        <rect x={464} y={208} width={26} height={28} rx={5} fill="#eceff1" />
        <rect
          x={484}
          y={196}
          width={40}
          height={54}
          rx={12}
          fill="#f5f5f5"
          transform="rotate(8 504 223)"
        />
        <Tube d="M516 210 Q532 214 546 207" width={9} fill="#f5f5f5" />
        <rect x={487} y={194} width={26} height={9} rx={3} fill="#f5f5f5" />
        <ellipse cx={500} cy={181} rx={19} ry={17} fill="#78909c" />
        <path
          d="M491 177 Q494 171 501 171"
          fill="none"
          stroke="#fff"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);
