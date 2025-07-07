
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText} <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Huy</span> <br />A Software
      Developer from Viet Nam
    </h1>
  ),
  2: (
    <InfoBox
      text="I am opening to work and try to find a good position"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I got some projects that done by myself. Let go through it"
      link="/projects"
      btnText="Visit my projects"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev or need a project? I'm only miles away"
      link="/contact"
      btnText="Let's keep in touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
