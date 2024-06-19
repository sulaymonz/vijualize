'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../VizuCanvas';
import { HSVtoRGB } from '@/app/utils/converters';

const images = [
  {
    src: '/images/puffy/1-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/2-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 0,
  },
  {
    src: '/images/puffy/3-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 1,
  },
  {
    src: '/images/puffy/4-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/puffy/5-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/puffy/6-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
    colorCorrection: 'lighter',
  },
  {
    src: '/images/puffy/7-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
    colorCorrection: 'darker',
  },
  {
    src: '/images/puffy/8-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/puffy/9-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/10-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/11-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/12-static.png',
    layerType: 'normal',
  },
];

const Puffy = ({ inLoadingZone, id, slidePosition }) => {
  const { palette } = useSelector((state) => state.landing);
  const { r, g, b } = HSVtoRGB({ h: palette[2].h, s: 5, v: 97 });
  return (
    <div className="relative h-full aspect-[5/6]">
      <div
        className="absolute h-full w-full z-[-1] transition-all ease-in-out duration-[250ms]"
        // style={{ left: `${100 * slidePosition}%` }}
      >
        <div
          className="absolute w-[90%] h-[80%] bottom-0 left-[5%]"
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <div className="absolute w-[90%] h-[20%] top-0 left-[5%] flex flex-row font-mono">
          <div className="basis-1/4 p-[10px] leading-none flex flex-col justify-end border-r">
            <div className="text-xs leading-none pb-1">
              #<br />
              01
              <br />
              FLORIST_
            </div>
            <div>
              <svg
                className="w-[112%] h-auto ml-[-6px]"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="1464"
                height="510"
                viewBox="0 0 976 374"
              >
                <g>
                  <rect x="0" y="0" width="976" height="340" fill="white" />
                  <g transform="translate(10 10) scale(4)">
                    <g>
                      <rect
                        x="0"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="4"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="6"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="10"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="14"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="7.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        *
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="16"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="18"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="22"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="28"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="30"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="23.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        F
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="32"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="34"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="38"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="40"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="44"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="39.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        L
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="48"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="52"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="54"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="58"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="62"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="55.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        O
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="64"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="68"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="70"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="72"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="78"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="71.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        R
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="80"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="82"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="86"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="90"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="94"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="87.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        I
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="96"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="98"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="102"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="104"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="110"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="103.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        S
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="112"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="114"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="116"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="120"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="126"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="119.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        T
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="128"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="132"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="136"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="138"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="142"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="135.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        {' '}
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="144"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="146"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="150"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="154"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="158"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="151.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        P
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="160"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="166"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="168"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="170"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="172"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="167.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        U
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="176"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="178"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="182"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="188"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="190"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="183.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        F
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="192"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="194"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="198"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="204"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="206"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="199.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        F
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="208"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="214"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="216"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="220"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="222"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="215.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        Y
                      </text>
                    </g>
                    <g></g>
                    <g>
                      <rect
                        x="224"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="228"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="230"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="234"
                        y="0"
                        width="3"
                        height="80"
                        fill="url(#black)"
                      />
                      <rect
                        x="238"
                        y="0"
                        width="1"
                        height="80"
                        fill="url(#black)"
                      />
                      <text
                        x="231.5"
                        y="81.25"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="1.25"
                        fill="black"
                      >
                        *
                      </text>
                    </g>
                    <defs>
                      <linearGradient id="black" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#000" />
                      </linearGradient>
                      <linearGradient id="navyBlue" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00379c" />
                        <stop offset="100%" stopColor="#00379c" />
                      </linearGradient>
                      <linearGradient
                        id="midnightGreen"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#008000" />
                        <stop offset="100%" stopColor="#008000" />
                      </linearGradient>
                      <linearGradient id="holo" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ae00ff" />
                        <stop offset="100%" stopColor="#009dff" />
                      </linearGradient>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#d85bc6" />
                        <stop offset="100%" stopColor="#5c4cff" />
                      </linearGradient>
                      <linearGradient id="neon" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00c400" />
                        <stop offset="100%" stopColor="#00612a" />
                      </linearGradient>
                    </defs>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="basis-3/4 flex flex-col justify-end font-sans">
            <div className="text-7xl border-b px-[10px]">PUFFER</div>
            <div className="text-[7px] p-[10px] leading-none">
              The Re:Bound New Terrain Puffer is made with recycled nylon and
              polyester to create a reversible puffer that adapts to whatever
              terrain you&apos;re hustling through.
            </div>
          </div>
        </div>
        <div className="absolute text-xs font-serif font-light top-[137px] right-[53px]">
          フ<br />ロ<br />リ<br />ス<br />ト
        </div>
      </div>
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Puffy;
