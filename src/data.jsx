import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaPython, FaReact } from 'react-icons/fa';
import GrasshopperIcon from './icons/GrasshopperIcon';
import RhinoIcon from './icons/RhinoIcon';
import CsharpIcon from './icons/GrasshopperIcon copy';
import { SiTensorflow } from "react-icons/si";


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#archiProjects', text: 'archiProjects' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#practices', text: 'practices' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-sky-800' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-sky-800' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-sky-800' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Grasshopper',
    icon: <GrasshopperIcon className='h-16 w-16 text-sky-800' />,
    text: 'Expert in Grasshopper visual programming for algorithmic modeling, enabling precise, parametric control in complex architectural and computational design workflows.',
  },
  {
    id: nanoid(),
    title: 'Rhino3D',
    icon: <RhinoIcon className='h-16 w-16 text-sky-800' />,
    text: 'Proficient in Rhino3D for advanced NURBS modeling, delivering precise and flexible 3D forms suitable for fabrication, simulation, and BIM interoperability.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-sky-800' />,
    text: 'Proficient in Python for computational design, scripting automation, and machine learning using TensorFlow and PyTorch for performance prediction.',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <CsharpIcon className='h-16 w-16 text-sky-800' />,
    text: 'Skilled in C# for RhinoCommon and Grasshopper scripting, enabling custom tools, component logic, and plugin development.',
  },
  {
    id: nanoid(),
    title: 'ML for Environmental Simulation',
    icon: <SiTensorflow className='h-16 w-16 text-sky-800' />,
    text: 'Utilized TensorFlow and PyTorch to develop predictive models for environmental performance simulations, accelerating iterative design workflows.',
  }

];

