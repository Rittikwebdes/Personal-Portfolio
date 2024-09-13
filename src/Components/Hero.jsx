import { HERO_CONTENT } from "../constant";
import rittiklogo from "../assets/rittiklogo.png";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

export default function Hero() {
  let pdfGenerate = () => {
    let doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(
      "https://i.ibb.co/NWhb6P3/rittiknewone.png",
      "PNG",
      0,
      0,
      450,
      600
    );

    doc.save("RittikCV.pdf");
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap" style={{ marginTop: "-50px" }}>
        <div className="w-full lg:w-1/2">
          <div className="flex  flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl "
            >
              Rittik Chauhan
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl"
            >
              MERN STACK DEVELOPER
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 2, scale: 1 }}
              transition={{ duration: 0.8 }}
              onClick={pdfGenerate}
              className="bg-white text-black p-2 mb-10 font-bold rounded-lg"
            >
              Download CV
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-10">
          <div className="flex flex-col  lg:items-center  md:items-center sm:items-center">
            <motion.img initial={{x: 100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            
             src={rittiklogo}  alt="photo" width={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
