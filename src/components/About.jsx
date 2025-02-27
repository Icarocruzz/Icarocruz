import { motion } from "framer-motion"
import {ABOUT_CONTENT} from "../constants"

const About = () => {
    const textVariants = {
        hidden: {opacity: 0, y:50},
        visible: {
            opacity: 1,
            y: 0, 
            transition: {
                duration: 0.6,
                ease: "easeOut"}

        }
    }
  return (
   <section className="px-6 py-10" id="about">
     <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Sobre mim
     </h1>

    <div className="h-1 w-20 mb-8 bg-white"></div>

    <div className="max-w-4xl mx-auto"></div>
    {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
        <motion.p key={index}
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{once: true, amount: 0.5}}
        className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed">
            {paragraph}
        </motion.p>
    ))}
   </section>
  )
}

export default About
