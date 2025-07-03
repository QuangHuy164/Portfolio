import { skills } from "../constants"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am <span className="blue-gradient_text font-semibold drop-shadow">Huy</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Engineer based in Helsinki, trying to find an opportunity in a Software Development role and a good company, specializing in technical education through hands-on learning
          and learning applications. I just graduated from university and am open to work. I have fundamental skills in front-end development and the basics of NodeJS. </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=> (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
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
        <p>In my work experience section, 
        </p>
      </div>
      </div>
      </section>
  )
}

export default About