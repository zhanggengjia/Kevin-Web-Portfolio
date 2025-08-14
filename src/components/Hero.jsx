import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroLight from '../assets/hero-bg-light.jpg';
import heroDark from '../assets/hero-bg-dark.jpg';
import { useSelector } from 'react-redux';
import { GoArrowRight } from "react-icons/go";



const Hero = () => {
  const isDark = useSelector((state) => state.userState.isDark);


  return (
    <section
      id="home"
      className="
        relative isolate
        bg-cover bg-center bg-no-repeat
        min-h-[60vh] md:min-h-[70vh]
        py-12 sm:py-24 scroll-mt-16
      "
    >
      <div className="hero-bg hero-bg-light" style={{ backgroundImage: `url(${heroLight})` }} />
      <div className="hero-bg hero-bg-dark" style={{ backgroundImage: `url(${heroDark})` }} />

      {/* 內容層 */}
      <div className="relative text-white align-element">
        <h1 className="text-primary text-6xl md:text-7xl font-bold leading-tight">Form is Data<br /> Structure is Syntax</h1>
        <div className=' items-center grid md:grid-cols-2 gap-8'>
          <article>
            <p className="text-xl text-primary-content mt-4">
              Bridging architecture and software to craft meaningful digital workflows.
            </p>
            <p className="text-lg text-primary-content mt-2">
              From Rhino to React, spatial structures to data structures.
            </p>

            <div className="flex gap-x-4 mt-4">
              <a href="https://github.com/zhanggengjia">
                <FaGithubSquare className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} />
              </a>
              <a href="https://www.linkedin.com/in/keng-chia-chang-059725189/">
                <FaLinkedin className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} />
              </a>
              {/* <a href="#">
              <FaTwitterSquare className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} />
            </a> */}
            </div>
            <div className='flex mt-2'>
              <a className='btn btn-ghost text-center text-primary-content text-lg capitalize tracking-wide hover:scale-[1.05] transition duration-300' href='#archiProjects'>see my projects <GoArrowRight className='h-8 w-8 ml-2' /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;