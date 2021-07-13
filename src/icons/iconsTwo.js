import React from "react";

export default function IconsTwo({ w, h, v, p }) {
  return (
    <svg width={w} height={h} viewBox={v} className="svgTwo">
      <path d={p} />
    </svg>
  );
}
