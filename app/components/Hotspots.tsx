const ratio = 6 / 5;
const Hotspots = ({ spots = [] }) => {
  return (
    <div className="absolute w-full h-full opacity-50">
      {spots.map((h, i) => {
        const dX = h.end.x - h.start.x;
        const dY = (h.end.y - h.start.y) * ratio;
        const deg = (Math.atan2(dY, dX) * 180) / Math.PI;
        const l = Math.sqrt(dY * dY + dX * dX);
        return (
          <div
            key={i}
            className="absolute bg-black h-[1px] origin-left"
            style={{
              left: `${h.start.x}%`,
              top: `${h.start.y}%`,
              width: `${l}%`,
              transform: `rotate(${deg}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Hotspots;
