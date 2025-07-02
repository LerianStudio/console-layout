"use client";

import React from "react";

export interface ClientImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ClientImage = ({
  src,
  alt,
  width,
  height,
  className,
}: ClientImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ClientImage;
