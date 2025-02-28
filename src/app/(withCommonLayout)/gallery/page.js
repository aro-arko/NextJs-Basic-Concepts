import Image from "next/image";
import nextImage from "../../../assets/nextjsimage.png";

const GallaryPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl">This is Regular image tag</h1>
      <img
        className="mx-auto"
        src="https://nextjs.org/api/docs-og"
        height={500}
        width={500}
      ></img>

      <h1 className="text-4xl">This is NextJs Image component</h1>
      <Image
        src="https://nextjs.org/api/docs-og"
        height={500}
        width={500}
        alt="next js img"
        className="mx-auto"
      />

      <h1 className="text-4xl">This is NextJs Image from local</h1>
      <Image
        src={nextImage}
        height={500}
        width={500}
        alt="error"
        className="mx-auto"
      />
    </div>
  );
};

export default GallaryPage;
