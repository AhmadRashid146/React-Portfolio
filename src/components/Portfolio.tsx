import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Portfolio = () => {
  return (
    <div>
      <h3 className="text-2xl py-2 dark:text-white">Portfolio</h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
        I build efficient software solutions, write clean code, and collaborate
        with teams to bring innovative ideas to life.Scince the begining of of
        my journey as freelancer i worked for{" "}
        <span className="text-teal-500">agencies</span> and{" "}
        <span className="text-teal-500">startups</span>. Skilled in React and
        Angular UI development. In addition work in umbraco as well. I ensure
        reliability and scalability in web, mobile, or desktop applications
      </p>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
        I build efficient software solutions, write clean code, and collaborate
        with teams to bring innovative ideas to life.
      </p>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            alt="Portfolio Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
