import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProp {
  name: string;
  link: string;
  image: string;
}

export function ProjectCard({ name, link, image }: ProjectCardProp) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link}>
      <motion.div
        className="relative w-[280px] h-[380px] mx-auto sm:mx-2 my-4" // 고정 크기로 변경하고 마진 조정
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* 배경 그라데이션 효과 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl"
          animate={{
            filter: isHovered ? "hue-rotate(45deg)" : "hue-rotate(0deg)",
          }}
          transition={{ duration: 0.6 }}
        />

        {/* 글로우 효과 */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            boxShadow: isHovered
              ? "0 0 30px rgba(88, 80, 236, 0.5)"
              : "0 0 0px rgba(88, 80, 236, 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* 메인 카드 */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* 이미지 배경 */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.3s ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />

          {/* 이미지 오버레이 */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.6 : 0.3 }}
          />

          {/* 움직이는 그라데이션 보더 */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            style={{
              transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
              transition: "transform 0.8s ease",
            }}
          />

          {/* 콘텐츠 */}
          <div className="relative h-full flex flex-col items-center justify-center p-6">
            <motion.div
              animate={{
                y: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-white text-xl font-bold mb-2">{name}</h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 text-sm"
              >
                View Project
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 장식용 도형들 */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-1 h-6 bg-white/30 rounded-full"
          animate={{
            height: isHovered ? "2rem" : "1.5rem",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}
