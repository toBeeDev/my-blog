"use client";

import Image, { ImageProps } from "next/image";
import clsx from "clsx";

interface MdxImageProps extends ImageProps {
  ratio?: string; // 이미지 비율 "3/2", "16/9", "1/1"
  className?: string;
}

const MdxImage = ({ ratio = "3/2", className, ...props }: MdxImageProps) => {
  return (
    <div
      className={clsx("relative w-full", className)}
      style={{
        aspectRatio: ratio,
      }}
    >
      <Image {...props} fill style={{ objectFit: "contain" }} sizes="100vw" />
    </div>
  );
};

export default MdxImage;
