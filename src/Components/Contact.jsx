import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, {Toaster} from 'react-hot-toast';
import logo1 from "../assets/logo1-removebg-preview.png"

export default function Contact() {
  const {
    register,
    handleSubmit,
watch,
    formState: { errors },
  } = useForm()
  const onSubmit =async (data) => {
    const userInfo={
      access_key: "9a06c827-e11b-4f00-b34a-8501d10333ac",
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
      await axios.post("https://api.web3forms.com/submit",userInfo)
      toast.success("Message sent successfully")
    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
  }

  return (
    <>
         <Toaster />
      <div>
        <div className=" min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full space-y-8 shadow-2xl shadow-gray-500  p-10 rounded-lg shadow-lg">
          
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-100">
                Contact Me
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.9 }}
                className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4"
              >
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                  <div>
                    <input
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                    {errors.name && (
                      <span className="text-red-600 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                    {errors.email && (
                      <span className="text-red-600 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      {...register("message", { required: true })}
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                    />
                    {errors.message && (
                      <span className="text-red-600 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-300 "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 md:pl-4"
              >
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <FaPhone className="text-red-500" />
                    <span>+91 7876630370</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaEnvelope className="text-pink-500" />
                    <span>rittikchauhan8112002@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>Sirmaur, Himachal Pradesh , India</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="m-7 flex items-center justify-center gap-4 text-2xl text-white">
          <a href="https://www.facebook.com/">
            {" "}
            <FaFacebook />
          </a>
          <a href="https://github.com/">
            {" "}
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rittik-chauhan-556a28284/">
            {" "}
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
