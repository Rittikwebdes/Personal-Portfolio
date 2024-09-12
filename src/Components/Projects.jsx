import { PROJECTS } from "../constant";
import { motion } from "framer-motion";


export default function Projects() {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4">
            <h1 className=" my-20 text-center text-4xl">Projects</h1>
            <div>
                {PROJECTS.map((project,i)=>(

    <div key={i} className=" mb-8 flex flex-wrap items-center  lg:justify-center md:justify-center justify-center">
    <motion.div 
       whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9 }}
    className="  lg:w-1/4 mt-5">
    <img className=" mb-6 rounded w-[200px] h-[150px]" src={project.image} alt={project.title}/>
    </motion.div>
    <motion.div
        whileInView={{
                opacity:1,
                x:0
            }}
            initial={{
                opacity:0,
                x:100
            }}
            transition={{duration:1}} 
     className="ml-10 max-w-sm text-center lg:w-3/4  ">
        <h1 className="mb-2 font-semibold text-2xl">{project.title}</h1>
        <p className="mb-4 text-neutral-400">{project.description}</p>
        {project.technologies.map((tech,idx)=>(
            <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                {tech}
            </span>
          
        ))}
        <button className="w-full mt-3 bg-neutral-900 text-white rounded-xl p-1 ">{project.link}</button>
    </motion.div>
    </div>

                ))
                
                }
            </div>
        </div>

    </>
  )
}
