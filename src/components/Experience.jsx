
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";


const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0,
            transition: {duration: 0.8, ease: "easeOut",
                staggerChildren: 0.3
            }
         }
      };

      const childVariants = {
            hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 ,
            transition: { duration: 0.6, ease: "easeOut",

            }
        }
      }
  return (
  <section className="px-6 py-10" id="experience">
    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Experiencia
    </h2>

    <div className="h-1 w-20 mb-8 bg-white"></div>

    <motion.div 
    className="space-y-10"
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.3}}
    variants={containerVariants}>
        {EXPERIENCES.map((experience, index)=> (
            <motion.div key={index}
             variants={childVariants}>
                <div className="flex flex-col md:flex-row
                md:justify-between">
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {experience.description.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        ))}
    </motion.div>
    


  </section>
  )
}

export default Experience
