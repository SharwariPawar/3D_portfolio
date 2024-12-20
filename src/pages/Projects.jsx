import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've had the privilege of working on several exciting projects over the years, each of which has played a key role in shaping my journey. Among them, there are a few that I’m particularly proud of, and I’m excited to share them with you. Many of these projects are open-source, offering the opportunity for anyone interested to dive into the code, explore its functionality, and contribute their own ideas for further development. I welcome and greatly appreciate any collaboration, as it helps improve the projects and push the boundaries of what we can achieve together!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-12 h-12 object-cover' // Adjusted size here
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>

              {/* Conditionally render the Live Link */}
              {project.link && (
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
