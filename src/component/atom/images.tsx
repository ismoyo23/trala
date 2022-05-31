import React from "react";

interface ImagesProps {
  url: any;
  css: string;
}

export const Images = ({ url, css }: ImagesProps) => {
  return <img src={url} className={css} />;
};
