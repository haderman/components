import React, { useRef, useEffect, useState, useMemo } from 'react';
import { scaleLinear } from 'd3';
import {  useSpring, animated } from 'react-spring';

import useInterval from '../../utils/useInterval';

export default function Chart() {
  return (
    <div style={{ width: 500, border: '1px solid gold', position: 'relative', padding: 20 }}>
      <Axis />
    </div>
  );
}

interface AxisProps {
  domain?: [number, number];
  range?: [number, number];
}

function Axis({ domain = [0, 100], range=[10, 290]}: AxisProps) {
  const ticks = useMemo(() => {
    const xScale = scaleLinear()
      .domain(domain)
      .range(range);

    const width = range[1] - range[0];
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(
      1,
      Math.floor(
        width / pixelsPerTick
      )
    );

    return xScale.ticks(numberOfTicksTarget)
      .map(value => ({
        value,
        xOffset: xScale(value)
      }));
  }, [
    domain.join('-'),
    range.join('-'),
  ]);

  return (
    <svg
      stroke="currentColor"
      style={{
        color: 'hsl(197, 40%, 60%)',
        width: '100%',
      }}
    >
      <path
        d={[
          'M', range[0], 6,
          'v', -6,
          'H', range[1],
          'v', 6,
        ].join(' ')}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, xOffset }) => (
        <g
          key={value}
          transform={`translate(${xOffset}, 0)`}
          >
          <line
            y2="6"
            stroke="currentColor"
          />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)"
            }}>
            { value }
          </text>
        </g>
      ))}
    </svg>
  );
}
