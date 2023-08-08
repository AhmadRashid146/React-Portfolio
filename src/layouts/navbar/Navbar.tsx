import { BsFillMoonStarsFill } from "react-icons/bs";
const PDF_FILE_URL ="https://ahmadrashid.netlify.app//Ahmad-CV.pdf"
// const PDF_FILE_URL ="http://localhost:5173/Ahmad-CV.pdf"

const Navbar = () => {

  const downloadFileAtURL = (url)=>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">AHMAD</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer" />
        </li>
        <li>
          <button onClick={()=>{
            downloadFileAtURL(PDF_FILE_URL)
          }} className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8">Resume</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
