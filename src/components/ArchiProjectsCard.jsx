import { HiOutlinePhoto } from "react-icons/hi2";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from "./Modal";

const ArchiProjectsCard = ({ imgList, title, subtitle, text, url, github, open }) => {
  const [showMore, setShowMore] = useState(open)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const img = imgList[0];

  return (
    <article className='rounded-lg shadow-md hover:shadow-xl duration-300 bg-base-100 '>

      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-bold text-primary border-b mb-1 pb-1'>
          {title}
        </h2>

        <h2 className='text-lg tracking-wide text-primary-content'>
          {subtitle}
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
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
          // className="btn btn-ghost btn-sm"
          >
            <HiOutlinePhoto className='h-8 w-8 text-slate-500 hover:text-black cursor-pointer duration-300' />
          </button>

          {url && (
            <a href={url}>
              <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          )}
          {github && (
            <a href={github}>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          )}

        </div>

      </div>
      {/* Modal 放在卡片外層也可；這裡直接掛在同層即可 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        text={text}
        imgList={imgList}
      />
    </article>
  )
}

export default ArchiProjectsCard