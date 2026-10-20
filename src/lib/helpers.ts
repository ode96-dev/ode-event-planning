export const ASTRONAUT_HOSE =
  "M470 216 C430 200 345 195 333 285 C328 335 365 350 400 378 C440 410 440 440 420 490 C400 535 380 570 410 612 C450 665 560 685 625 655";
export const PLANET = { cx: 735, cy: 455, r: 232 };

export const INK = "#263238";
export const STROKE = 3.5;

export const DISTORTION = 10;

export const CRATERS = [
  { cx: 680, cy: 499, rx: 80, ry: 80, rot: 0 },
  { cx: 783, cy: 293, rx: 39, ry: 32, rot: 0 },
  { cx: 876, cy: 340, rx: 29, ry: 24, rot: 20 },
  { cx: 850, cy: 284, rx: 24, ry: 16, rot: 20 },
  { cx: 575, cy: 348, rx: 31, ry: 50, rot: 30 },
  { cx: 579, cy: 430, rx: 22, ry: 30, rot: 8 },
  { cx: 790, cy: 415, rx: 30, ry: 30, rot: 0 },
  { cx: 915, cy: 540, rx: 50, ry: 72, rot: 12 },
  { cx: 766, cy: 643, rx: 58, ry: 36, rot: 0 },
];

export const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    background: "#f8fafc",
  },
  title: {
    margin: "1.5rem 0 0",
    textAlign: "center",
    fontFamily: "Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontWeight: 400,
    fontSize: "clamp(1.25rem, 3.2vw, 2.25rem)",
    lineHeight: 1.3,
    color: INK,
  },
};

export const buttonCss = `
.notfound-home {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  background: ${INK};
  color: #fff;
  font: 500 1rem/1 Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif;
  text-decoration: none;
  transition: background-color 0.15s ease;
}
.notfound-home:hover {
  background: #37474f;
}
.notfound-home:focus-visible {
  outline: 3px solid #90caf9;
  outline-offset: 3px;
}
`;
