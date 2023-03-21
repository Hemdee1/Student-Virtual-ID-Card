import { CardDataType } from "../App";
import CloseIcon from "./CloseIcon";

type CardContainerPropsType = {
  setOpenCardModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: CardDataType;
};

const CardContainer = ({ setOpenCardModal, data }: CardContainerPropsType) => {
  const {
    bloodGroup,
    dateIssued,
    department,
    firstName,
    image,
    lastName,
    otherName,
    regNo,
    session,
    signature,
  } = data;

  return (
    <section className="absolute inset-0 backdrop-blur-sm z-10 bg-black bg-opacity-80 flex justify-center items-center w-full sm:px-5">
      <button
        className="absolute right-5 sm:right-20 top-5"
        onClick={() => setOpenCardModal(false)}
      >
        <CloseIcon />
      </button>

      <div className="bg-[#B6BDC7] max-w-[640px] rounded-3xl py-3 sm:px-3 px-4 sm:py-4 overflow-hidden card relative">
        <div className="absolute inset-0 w-full bg-[url('/images/picture4-flip.jpg')] sm:bg-[url('/images/picture4.jpg')] flex justify-center items-center bg-cover bg-no-repeat opacity-20">
          <img src="/images/logo.png" alt="logo" className="w-36 h-32" />
        </div>

        <div className="z-10 relative">
          <h1 className="font-sans font-semibold tracking-tighter text-center text-white text-xl bg-[#256895] uppercase title">
            Abubakar Tafawa Balewa University, Bauchi
          </h1>

          <div className="flex justify-between w-full px-3 gap-10 py-3">
            <div>
              <h2 className="text-[#354730] tracking-tight font-sans text-[18px] uppercase font-semibold text-center">
                Student Identity Card
              </h2>

              <div className="flex flex-col mt-2 gap-3">
                <article className="text-[#205172] font-semibold text-xl flex items-center gap-3">
                  <span className="font-Lato tracking-tighter">Name:</span>
                  <span className="font-sans uppercase font-black">
                    {/* Muhyideen Olayemi Sanusi */}
                    {`${lastName} ${otherName} ${firstName}`}
                  </span>
                </article>
                <article className="text-[#205172] font-semibold text-xl flex items-center gap-3">
                  <span className="font-Lato tracking-tighter">
                    Student Number:
                  </span>
                  <span className="font-sans uppercase font-black">
                    {/* 16/43106u/2 */}
                    {regNo}
                  </span>
                </article>
                <article className="text-[#205172] font-semibold text-xl flex items-center gap-3">
                  <span className="font-Lato tracking-tighter">Session:</span>
                  <span className="font-sans uppercase font-black">
                    {/* 2016/2017 */}
                    {session}
                  </span>
                </article>
                <article className="text-[#205172] font-semibold text-xl flex items-center gap-3">
                  <span className="font-Lato tracking-tighter">
                    Blood Group:
                  </span>
                  <span className="font-sans uppercase font-black">
                    {/* B+ */}
                    {bloodGroup}
                  </span>
                </article>
                <article className="text-[#205172] font-semibold text-xl flex items-center gap-3">
                  <span className="font-Lato tracking-tighter">
                    Date Issued:
                  </span>
                  <span className="font-sans uppercase font-black">
                    {/* 25-May-18 */}
                    {dateIssued}
                  </span>
                </article>
              </div>
            </div>
            <div className="pl-12 sm:pl-0 relative">
              <img
                // src="/images/me.jpg"
                src={image}
                alt="user-photo"
                className="w-[150px] h-[150px] object-cover object-top"
              />
              <span className="my-1 tracking-tighter font-bold text-xl font-sans text-center block text-slate-900">
                Signature
              </span>
              <img
                src={signature}
                alt="sign"
                className="w-[150px] h-[40px] absolute sm:relative top-14 sm:top-auto -left-12 sm:left-auto bg-white object-contain"
              />
            </div>
          </div>

          <footer className="text-center mt-2 font-Lato tracking-tighter bg-[#8E542E] text-[#f7c250]">
            {/* Computer & Communications Engineering Programme */}
            {department} {" Programme"}
          </footer>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
