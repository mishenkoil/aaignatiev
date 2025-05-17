import { FC } from "react";

type Props = {
  gifSrc: string;
  maskSrc: string;
  width?: number;
  height?: number;
  className?: string;
};

export const SvgMaskGif: FC<Props> = ({ gifSrc, maskSrc, className }) => {
  return (
    <div className={(className || "") + " relative w-full h-full"}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="svgMask" maskUnits="userSpaceOnUse">
            <rect fill="black" height="100%" width="100%" />
            <image height="100%" href={maskSrc} width="100%" />
          </mask>
        </defs>
        <image
          className="absolute inset-0 w-full h-full object-cover"
          href={gifSrc}
          mask="url(#svgMask)"
        />
      </svg>
    </div>
  );
};
