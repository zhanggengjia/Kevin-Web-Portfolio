import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroLight from '../assets/hero-bg-light.jpg';
import heroDark from '../assets/hero-bg-dark.jpg';
import { useSelector } from 'react-redux';

const Hero = () => {
  const isDark = useSelector((state) => state.userState.isDark);
  console.log(isDark)

  return (
    <section
      id="home"
      className="
        relative isolate
        bg-cover bg-center bg-no-repeat
        min-h-[60vh] md:min-h-[70vh]
        py-24 scroll-mt-16
      "
    >
      <div className="hero-bg hero-bg-light" style={{ backgroundImage: `url(${heroLight})` }} />
      <div className="hero-bg hero-bg-dark" style={{ backgroundImage: `url(${heroDark})` }} />

      {/* 內容層 */}
      <div className="relative align-element grid md:grid-cols-2 items-center gap-8 text-white">
        <article>
          <h1 className="text-primary text-7xl font-bold tracking-wider">I'm Kevin</h1>
          <p className="text-primary-content mt-4 text-3xl capitalize tracking-wide">Front-End Developer</p>
          <p className="text-primary-content mt-2 text-lg capitalize tracking-wide">turning ideas into interactive reality</p>

          <div className="flex gap-x-4 mt-4">
            <a href="#"><FaGithubSquare className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} /></a>
            <a href="#"><FaLinkedin className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} /></a>
            <a href="#"><FaTwitterSquare className="h-8 w-8 opacity-80 hover:opacity-100 transition" style={{ color: 'DimGrey' }} /></a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;