import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
const Hero = () => {
  return (
    <div className="p-10 pt-0">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
         Muhammad Ahmad Rashid 
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Frontend Developer </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          I build efficient software solutions, write clean code, and
          collaborate with teams to bring innovative ideas to life. Skilled in
          HTML,CSSand Tailwind. I ensure reliability and scalability in web,
          mobile, or desktop applications
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-50 ">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96">
        <img src={deved} className="object-cover" alt="Deved" />
      </div>
    </div>
  );
};

export default Hero;
