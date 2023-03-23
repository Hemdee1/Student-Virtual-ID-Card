import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDataType } from "./GenrateQR";

const Card = () => {
  const [data, setData] = useState<CardDataType>({} as CardDataType);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const url =
    process.env.NODE_ENV === "production"
      ? "https://student-virtual-id-card-production.up.railway.app"
      : "http://localhost:5000";

  useEffect(() => {
    if (!id) return;

    const fetchId = async () => {
      setLoading(true);

      try {
        const decode = atob(id);
        const regNo = decode;
        const password = "admin";

        const res = await axios.post<CardDataType>(url + "/reg/admin", {
          regNo,
          password,
        });

        setData(res.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            console.log(error.response.data.error);
            setError(true);
          }
        }
        if (error instanceof Error) {
          console.log(error.message);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchId();
  }, [id]);

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

  if (loading) {
    return (
      <section className="bg-slate-900 flex flex-col gap-5 text-white font-Lato font-semibold tracking-widest justify-center items-center w-full h-screen">
        <p>Loading card...</p>
        <span className="loader"></span>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-900 flex flex-col gap-5 text-white text-center font-Lato font-semibold tracking-widest justify-center items-center w-full h-screen">
        <img src="/images/failed.ico" alt="failed" className="w-20" />
        <p>
          The link you enter is invalid <br /> generate another link and try
          again
        </p>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 flex justify-center items-center w-full h-screen sm:px-5">
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

          <footer className="text-center mt-2 font-Lato  bg-[#8E542E] text-[#f7c250]">
            {/* Computer & Communications Engineering Programme */}
            {department} {" Programme"}
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Card;
