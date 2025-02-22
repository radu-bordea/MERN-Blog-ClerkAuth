import { IKImage } from "imagekitio-react";

const Image = ({ path, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      // path="/logo.avif"
      path={path}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
