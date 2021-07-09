import React from "react";

export default function Icons({ w, h, vb, p }) {
  return (
    <svg width={w} height={h} viewBox={vb} className="svg">
      <path d={p} />
    </svg>
  );
}
