import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import aboutDark from '../assets/about-dark.jpg'
import aboutLight from '../assets/about-light.jpg'

const About = () => {
  return (
    <section className=' py-20 scroll-mt-16 bg-base-200 theme-transition relative isolate
        bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[70vh] ' id='about'>
      <div className="hero-bg hero-bg-light" style={{ backgroundImage: `url(${aboutLight})` }} />
      <div className="hero-bg hero-bg-dark" style={{ backgroundImage: `url(${aboutDark})` }} />
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        {/* <img src={aboutSvg} className='w-full h-64' /> */}
        <div></div>
        <article>
          <SectionTitle text='about me' />
          <p className='text-primary-content mt-8 leading-loose'>
            Digital building engineer with experience at Tamkung University, Tongji University and ETH Zurich. Now developing intelligent facade systems at goMore Materials. Exploring automation, data-driven design, and AI integration. Actively expanding software skills to build next-gen BIM platforms and web-based architectural tools.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About