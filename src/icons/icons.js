import React from "react";

export default function Icons({ f, c, p }) {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" className="svg">
      <path fillRule={f} clipRule={c} d={p} />
    </svg>
  );
}
