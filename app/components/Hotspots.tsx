'use client';

import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const ratio = 6 / 5;
const Hotspots = ({ designId, spots = [], slideIsActive }) => {
  const { palette, loadedDesigns } = useSelector((state) => state.landing);
  const loaded = loadedDesigns.includes(designId);
  return (
    <div className="absolute w-full h-full">
      {spots.map((h, i) => {
        const dX = h.end.x - h.start.x;
        const dY = (h.end.y - h.start.y) * ratio;
        const deg = (Math.atan2(dY, dX) * 180) / Math.PI;
        const l = Math.sqrt(dY * dY + dX * dX);
        return (
          <Fragment key={i}>
            <div
              className="absolute bg-black h-[1px] origin-left transition-all duration-[250ms] delay-500"
              style={{
                left: `${h.start.x}%`,
                top: `${h.start.y}%`,
                width: `${slideIsActive && loaded ? l : '0'}%`,
                transform: `rotate(${deg}deg)`,
              }}
            />
            <div
              className="absolute bg-black text-white font-mono text-[0.5rem] font-normal h-3 leading-3 my-[-0.75rem] w-[35px] mx-[-17px] cursor-pointer duration-[250ms] delay-[750ms]"
              style={{
                left: `${h.end.x}%`,
                top: `${h.end.y}%`,
                opacity: slideIsActive && loaded ? 1 : 0,
              }}
            >
              {palette[i].hex}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Hotspots;
