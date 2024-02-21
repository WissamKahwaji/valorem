import React from "react";

type BackgroundImageProps = {
  url: string;
  minHeight: string;
};

const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <div
      className={`w-full bg-no-repeat bg-cover bg-fixed ${props.minHeight}`}
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    ></div>
  );
};

export default BackgroundImage;
