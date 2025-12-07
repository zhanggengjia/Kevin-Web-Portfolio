import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsCard = ({ imgList, title, text, url, github }) => {
  const [showMore, setShowMore] = useState(false)
  const img = imgList[0];

  return (
    <article className='rounded-lg shadow-md hover:shadow-xl duration-300 bg-base-100 hover:scale-[1.01]'>
      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium text-primary'>
          {title}
        </h2>

        <p className="mt-4 text-primary-content leading-loose">
          {!showMore && <span>{text.slice(0, 50)}... </span>}

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.span
                id="proj-desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="block overflow-hidden"
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>

          <button
            type="button"
            className="ml-2 bg-transparent border-0 capitalize cursor-pointer text-blue-500 font-semibold hover:underline focus:underline"
            onClick={() => setShowMore(v => !v)}
            aria-expanded={showMore}
            aria-controls="proj-desc"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </p>


        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank' rel="noreferrer">
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>

      </div>
    </article>
  )
}

export default ProjectsCard