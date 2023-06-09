import { useState } from "react";
import EyeIcon from "./eyeIcon";

type formPropsType = {
  generateCard: (regNo: string, password: string) => void;
  error: string;
  loading: boolean;
};

const Form = ({ generateCard, error, loading }: formPropsType) => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full bg-slate-300 px-6 sm:px-10 flex flex-col justify-center items-center">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-36 sm:w-44 h-32 sm:h-40 mb-5"
      />
      <h1 className="font-Zendot text-xl sm:text-2xl w-[400px] max-w-full text-slate-800 text-center">
        ATBU VIRTUAL ID CARD GENERATOR
      </h1>
      <form
        className="flex flex-col w-full items-center font-Lato mt-20"
        onSubmit={(e) => {
          e.preventDefault();
          generateCard(regNo, password);
        }}
      >
        <input
          type="text"
          className="w-[400px] max-w-full px-3 py-2 transition duration-200 rounded-md outline-none focus:shadow focus:shadow-gray-800 text-slate-800 tracking-wider font-semibold"
          placeholder="Enter your reg number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />

        <div className="relative w-[400px] max-w-full mt-4">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 transition duration-200 rounded-md outline-none focus:shadow focus:shadow-gray-800 text-slate-800 tracking-wider font-semibold"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <EyeIcon />
          </button>
        </div>
        <p className="mt-4 text-red-600 leading-tight font-Lato font-medium min-h-[24px] text-center">
          {error}
        </p>
        <button
          className="px-4 py-2 w-32 h-11 grid place-items-center font-semibold tracking-wide mt-3 bg-slate-800 rounded-md text-white transition duration-200 hover:bg-slate-600"
          disabled={loading}
        >
          {loading ? <span className="block loader"></span> : "Generate"}
        </button>
      </form>
    </div>
  );
};

export default Form;
