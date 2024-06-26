'use client';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import LoadingSpinner from './LoadingSpinner';
import * as landingActions from '../../store/actions/landingActions';

const fullConfig = resolveConfig(tailwindConfig);
let curLoadedResNum = {};

const Canvas = ({ designId, images, onClick = () => {} }) => {
  const totalResToLoad = images.length;
  const onScreenCvsRef = useRef();
  const onScreenCtxRef = useRef();
  const cvsArr = useRef([]);
  const [loading, setLoading] = useState(true);
  const [itemImages, setItemImages] = useState([]);
  const { palette } = useSelector((state) => state.landing);
  const dispatch = useDispatch();

  const redrawCanvas = () => {
    let cvsIndex = 0;
    onScreenCtxRef.current.clearRect(0, 0, 1000, 1200);
    itemImages.forEach((image, i) => {
      if (images[i].layerType === 'dynamic_color') {
        cvsArr.current[cvsIndex].context.globalCompositeOperation = 'normal';
        cvsArr.current[cvsIndex].context.clearRect(0, 0, 700, 840);
        cvsArr.current[cvsIndex].context.drawImage(image, 0, 0);
        cvsArr.current[cvsIndex].context.globalCompositeOperation = 'source-in';
        const color = palette[images[i].colorIndex].hex;
        cvsArr.current[cvsIndex].context.fillStyle = color;
        cvsArr.current[cvsIndex].context.fillRect(0, 0, 700, 840);
        onScreenCtxRef.current.drawImage(
          cvsArr.current[cvsIndex].canvas,
          0,
          0,
          1000,
          1200,
        );
        cvsIndex++;
      } else if (images[i].layerType === 'outline_on_bg') {
        cvsArr.current[cvsIndex].context.globalCompositeOperation = 'normal';
        cvsArr.current[cvsIndex].context.clearRect(0, 0, 700, 840);
        cvsArr.current[cvsIndex].context.drawImage(image, 0, 0);
        cvsArr.current[cvsIndex].context.globalCompositeOperation = 'source-in';
        const color =
          palette[images[i].bgColorIndex].v > 50 ? '#000000' : '#ffffff';
        cvsArr.current[cvsIndex].context.fillStyle = color;
        cvsArr.current[cvsIndex].context.fillRect(0, 0, 700, 840);
        onScreenCtxRef.current.drawImage(
          cvsArr.current[cvsIndex].canvas,
          0,
          0,
          1000,
          1200,
        );
        cvsIndex++;
      } else {
        onScreenCtxRef.current.drawImage(image, 0, 0, 1000, 1200);
      }
    });
  };

  const resourceLoaded = () => {
    curLoadedResNum[designId] = curLoadedResNum[designId] + 1;
  };

  const handleImageLoad = (e) => {
    const img = e.target;
    setItemImages((prevState) => {
      const newState = [...prevState];
      newState[img.index] = img;
      return newState;
    });
    resourceLoaded();
  };

  useEffect(() => {
    if (curLoadedResNum[designId] === totalResToLoad) {
      setLoading(false);
      dispatch(landingActions.landingDesignLoaded(designId));
      redrawCanvas();
    }
  }, [itemImages]);

  useEffect(() => {
    if (!loading) {
      redrawCanvas();
    }
  }, [palette]);

  useEffect(() => {
    curLoadedResNum[designId] = 0;
    onScreenCtxRef.current = onScreenCvsRef.current.getContext('2d');

    setItemImages([]);
    const tempImages = [];
    images.forEach((image, i) => {
      if (image.layerType === 'dynamic_color') {
        const cvs = document.createElement('canvas');
        cvs.width = 700;
        cvs.height = 840;
        cvsArr.current.push({
          canvas: cvs,
          context: cvs.getContext('2d'),
        });
      }
      let img = new Image();
      img.src = image.src;
      tempImages.push(img);
      img.index = i;
      img.addEventListener('load', handleImageLoad);
    });

    return () => {
      // clearing things up on component unmount
      tempImages.forEach((image) => {
        image.removeEventListener('load', handleImageLoad);
      });
      curLoadedResNum[designId] = 0;
      dispatch(landingActions.landingDesignUnmounted(designId));
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="absolute w-[500px] h-[600px] flex justify-center items-center">
          <LoadingSpinner
            mainColor={fullConfig.theme.colors.black}
            secondaryColor="none"
          />
        </div>
      )}
      <canvas
        className="w-[500px] h-[600px]"
        ref={onScreenCvsRef}
        width="1000"
        height="1200"
        onClick={onClick}
      />
    </>
  );
};

export default Canvas;
