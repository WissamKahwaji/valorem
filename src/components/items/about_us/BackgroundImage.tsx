import React from "react";

type BackgroundImageProps = {
  url: string;
  minHeight: number;
};

const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${props.url})`,
        minHeight: `${props.minHeight}px`,
      }}
    ></div>
  );
};

export default BackgroundImage;
