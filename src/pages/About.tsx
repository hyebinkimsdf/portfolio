import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full h-full mx-auto flex flex-col md:flex-row justify-center items-center gap-20 min-w-[550px] px-4 py-8 relative"
      id="about"
    >
      <motion.div
        className="relative group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"
          animate={{
            boxShadow: isHovered
              ? "0 0 30px rgba(59, 130, 246, 0.5)"
              : "0 0 0px rgba(59, 130, 246, 0)",
          }}
        />
        <img
          src="/images/home/kimhyebinPoto.png"
          className="mb-4 md:mb-0 relative z-10 rounded-lg"
        />
      </motion.div>

      <motion.div
        className="flex flex-col text-white gap-2"
        variants={containerVariants}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.p
            className="text-4xl font-bold sm:text-5xl md:text-4xl mb-2"
            variants={itemVariants}
          >
            김혜빈
          </motion.p>
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </motion.div>

        <motion.p
          className="opacity-50 text-sm text-start mb-4 w-full "
          variants={itemVariants}
        >
          개발자와 디테일한 소통이 가능하며 3D 구현에 능숙한 UX/UI 디자이너
        </motion.p>

        {[
          { icon: "phone", text: "010-3967-1421", link: "tel:010-3967-1421" },
          {
            icon: "email",
            text: "hyebinkimdesign@gmail.com",
            link: "mailto:hyebinkimdesign@gmail.com",
          },
          {
            icon: "github",
            text: "github.com/hyebinkimsdf",
            link: "https://github.com/hyebinkimsdf",
          },
        ].map((item, index) => (
          <motion.a
            key={item.icon}
            href={item.link}
            target={item.icon === "github" ? "_blank" : undefined}
            rel={item.icon === "github" ? "noopener noreferrer" : undefined}
            className="flex gap-2 items-center group cursor-pointer"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`/icons/${item.icon}.svg`}
                className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <p className="group-hover:text-blue-300 transition-colors">
              {item.text}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent opacity-20 pointer-events-none" />
    </motion.div>
  );
}
