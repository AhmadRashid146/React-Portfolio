import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Dimitri Marco
        </h2>
        <h3 className="text-2xl py-2">Developer and Designer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          I build efficient software solutions, write clean code, and
          collaborate with teams to bring innovative ideas to life. Skilled in
          Java, Python, or C++, I ensure reliability and scalability in web,
          mobile, or desktop applications
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto">
        <img src={deved} className="object-cover" alt="Deved" />
      </div>
    </div>
  );
};

export default Hero;
