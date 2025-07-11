import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { skills, experiences, socialLinks } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Huy
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Helsinki, trying to find an opportunity in
          a Software Development role and a good company, specializing in
          technical education through hands-on learning and learning
          applications. I just graduated from university and am open to work. I
          have fundamental skills in front-end development and the basics of
          NodeJS.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            In my work experience section, I got an internship in Darkglass
            Electronics Oy base in Helsinki, Finland. During the internship
            time, I leveled up my coding skills and met several experts in
            development field. Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>}
                iconStyle={{background: experience.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200"/>
      <div className="py-16">
        <h3 className="subhead-text">Other Links</h3>
        </div>
      <div className="mt-12 flex">
          <VerticalTimeline>
            {socialLinks.map((socialLink) => (
              <VerticalTimelineElement
                key={socialLink.name}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img 
                    src={socialLink.iconUrl}
                    alt={socialLink.name}
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {socialLink.name}
                  </h3>
                  <Link to={socialLink.link} target="_blank" rel="noopener noreferrer"
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {socialLink.link}
                  </Link>  
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      <CTA />
    </section>
  );
};

export default About;
