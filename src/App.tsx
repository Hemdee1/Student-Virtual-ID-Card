import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";
import Pictures from "./components/Pictures";
import axios, { AxiosError } from "axios";

export type CardDataType = {
  firstName: string;
  lastName: string;
  otherName: string;
  regNo: string;
  session: string;
  bloodGroup: string;
  dateIssued: string;
  department: string;
  image: string;
  signature: string;
};

function App() {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<null | CardDataType>(null);
  const [loading, setLoading] = useState(false);

  const generateCard = async (regNo: string, password: string) => {
    const regNoRegex = /^\d\d\/\d\d\d\d\d[A-Za-z]\/[0-9]+$/i;
    const url =
      process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

    // Check if the student is already fetched
    if (data && data.regNo.toLowerCase() === regNo.toLowerCase()) {
      return setOpenCardModal(true);
    }

    if (!regNo) {
      return setError("Reg number is required!");
    }

    if (!regNoRegex.test(regNo)) {
      return setError("Reg number is of incorrect type");
    }

    if (!password) {
      return setError("Password is required!");
    }

    setLoading(true);

    try {
      const res = await axios.post<CardDataType>(url + "/reg/single", {
        regNo,
        password,
      });

      setData(res.data);
      setError("");
      setOpenCardModal(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          setError(error.response.data.error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen relative">
      <section className="flex-1 w-full">
        <Form generateCard={generateCard} error={error} loading={loading} />
      </section>
      <section className="hidden lg:block flex-1 bg-black overflow-hidden">
        <Pictures />
      </section>
      {openCardModal && data && (
        <CardContainer setOpenCardModal={setOpenCardModal} data={data} />
      )}
    </main>
  );
}

export default App;
