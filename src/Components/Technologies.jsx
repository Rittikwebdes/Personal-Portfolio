import { RiReactjsLine } from "react-icons/ri";

import { RiJavascriptLine } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export default function Technologies() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
  
      
          <motion.div  
              variants={iconVariants(5)}
            initial="initial"
            animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-6xl text-[#f0db4f]" />
          </motion.div>
          <motion.div
             variants={iconVariants(2)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-[#61dbfb]" />
          </motion.div>
          <motion.div
             variants={iconVariants(2)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className="text-6xl text-[#3c873a]" />
          </motion.div>
          <motion.div
             variants={iconVariants(2)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">

            <SiExpress className="text-6xl text-[#a6d5e094]" />
          </motion.div>
          <motion.div
             variants={iconVariants(2)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb className="text-6xl text-[#257c1d]" />
          </motion.div>
          <motion.div
                 variants={iconVariants(6)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiBootstrapLine className="text-6xl text-[#563d7c]" />
          </motion.div>
          <motion.div
                 variants={iconVariants(4)}
            initial="initial"
            animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-6xl text-[#06b6d4]" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
