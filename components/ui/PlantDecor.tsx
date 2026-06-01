import Image from "next/image";

export type Plant = {
  src:      string;
  side:     "left" | "right";
  top:      string;   // any CSS value — "90vh", "400px", etc.
  width:    number;   // px — controls rendered size
  offset?:  string;   // how far it bleeds off the edge (default differs per side)
  flip?:    boolean;  // mirror horizontally
  rotate?:  number;   // degrees
  opacity?: number;   // 0–1
};

/**
 * Decorative plant overlays.
 * Parent wrapper MUST have  position: relative  and  overflow-x: hidden.
 * Plants are hidden below xl breakpoint so they never clutter mobile/tablet.
 */
export default function PlantDecor({ plants }: { plants: Plant[] }) {
  return (
    <div aria-hidden="true" style={{ pointerEvents: "none", userSelect: "none" }}>
      {plants.map((p, i) => {
        const transforms: string[] = [];
        if (p.flip)   transforms.push("scaleX(-1)");
        if (p.rotate) transforms.push(`rotate(${p.rotate}deg)`);

        return (
          <div
            key={i}
            className="hidden xl:block"
            style={{
              position:   "absolute",
              left:  p.side === "left"  ? (p.offset ?? "-65px") : "auto",
              right: p.side === "right" ? (p.offset ?? "-55px") : "auto",
              top:        p.top,
              zIndex:     20,
              width:      `${p.width}px`,
              transform:  transforms.join(" ") || undefined,
              opacity:    p.opacity ?? 1,
            }}
          >
            <Image
              src={p.src}
              alt=""
              width={p.width}
              height={Math.round(p.width * 1.5)}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        );
      })}
    </div>
  );
}
