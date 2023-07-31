import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const DEFAULT_WIDHT = 200;
const DEFAULT_HEIGHT = 200;
const TextDelay: React.FC<{
  delay: string;
  value: string;
  img?: string;
  imgStatic?: StaticImageData;
  imgWidth?: number;
  extendDelayFunc?: () => void;
}> = (props) => {
  const { delay, value, img, imgWidth, imgStatic, extendDelayFunc } = props;
  const [timer, setTimer] = useState<any>();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let extendDelayFuncTimer: any;
    const timeout = setTimeout(() => {
      setIsShow(true);
      extendDelayFuncTimer = setTimeout(() => {
        extendDelayFunc && extendDelayFunc();
      }, 0.1 * 1000);
    }, Number(delay) * 1000);
    setTimer(timeout);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (extendDelayFuncTimer) {
        clearTimeout(extendDelayFuncTimer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
  return (
    <>
      {isShow && (
        <div className="flex flex-col items-center animate-fadeIn">
          {img && (
            <Image
              loader={() => img}
              src={img}
              alt=""
              width={imgWidth || DEFAULT_WIDHT}
              height={imgWidth || DEFAULT_HEIGHT}
            />
          )}
          {imgStatic && (
            <Image
              src={imgStatic}
              alt=""
              width={imgWidth || DEFAULT_WIDHT}
              height={imgWidth || DEFAULT_HEIGHT}
            />
          )}
          <span className="font-bold text-xl">{value}</span>
        </div>
      )}
    </>
  );
};

export default TextDelay;
