import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";
import { CardDataType } from "../pages/GenrateQR";
import CloseIcon from "./CloseIcon";

type QRContainerPropsType = {
  setOpenCardModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: CardDataType;
};

const QRContainer = ({ setOpenCardModal, data }: QRContainerPropsType) => {
  const { regNo } = data;

  const url =
    process.env.NODE_ENV === "production"
      ? "https://atbu-virtual-id-generator.netlify.app/card/"
      : "http://localhost:5173/card/";

  const encodeInitial = btoa(regNo);
  const encodeReg = encodeInitial.slice(0, encodeInitial.length - 1);
  const link = url + encodeReg;

  return (
    <section className="absolute inset-0 backdrop-blur-sm z-10 bg-black bg-opacity-90 flex justify-center items-center flex-col w-full px-5">
      <button
        className="absolute right-5 sm:right-20 top-14"
        onClick={() => setOpenCardModal(false)}
      >
        <CloseIcon />
      </button>
      <QRCodeCanvas value={link} includeMargin className="qrCode" id="qrCode" />
      <Link
        to={`/card/${encodeReg}`}
        className="text-white font-Lato font-bold mt-20 text-xl underline break-all px-5 text-center"
        target="_blank"
      >
        View My ID Card
      </Link>
    </section>
  );
};

export default QRContainer;
