import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FadeInSection: React.FC<SectionProps> = ({
  children,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

const Image: React.FC<ImageProps> = ({ src, alt, className = "" }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`transition-transform duration-300 hover:scale-105 ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  />
);

export function EyeUiUxDesign() {
  return (
    <div className="w-full max-w-[1128px] mx-auto px-4 md:px-6 lg:px-0">
      {/* User Flow Section */}
      <FadeInSection className="w-full flex flex-col justify-center mb-20 md:mb-40 pb-6 md:pb-10">
        <p className="w-full text-center mb-6 md:mb-10 text-base md:text-lg font-medium">
          User Flow
        </p>
        <div className="w-full flex justify-center">
          <Image
            className="w-full max-w-[1024px] object-contain shadow-lg rounded-lg"
            src="/images/eyecane/UserFlow.png"
            alt="유저 플로우 png"
          />
        </div>
      </FadeInSection>

      {/* Home Section */}
      <FadeInSection className="flex flex-col-reverse md:flex-row gap-8 Home mb-20 text-center md:text-left">
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/images/eyecane/case.png"
            alt="eyecane home case 화면"
            className="w-full max-w-[70%] object-contain hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-1 min-w-[30%]">
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Home
          </motion.p>
          <motion.p
            className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            누를 때 <br />
            불편하지 않아요
          </motion.p>
          <motion.p
            className="leading-loose text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            큰 버튼, 대비 높은 색상과 직관적인 병명 이미지로
            <br />
            <br />
            사용자가 앱을 이용 시 혼동을 줄였어요.
          </motion.p>
        </div>
      </FadeInSection>

      {/* Camera Section */}
      <FadeInSection className="flex flex-col md:flex-row gap-6 md:gap-4 mb-20 text-center md:text-left">
        <div className="flex flex-col gap-4 md:flex-1">
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Camera
          </motion.p>
          <motion.p
            className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            사용자의 시야를 대신 <br />
            보여드립니다!
          </motion.p>
          <motion.p
            className="leading-loose text-sm md:text-base max-w-[550px] mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            시각적으로 불편한 사용자를 위해 휴대폰의 형태를 이용하여 각 모서리에
            아이콘이 배치되어 사용자가 버튼 위치를 보다 쉽게 인지하도록 UX
            디자인을 했습니다.
            <br />
            <br />
            또한 카메라화면이 사용자의 시야인 만큼 UI가 일상 생활에 불편감을
            주지 않기 위해 뒷 배경이 보이는 라인 아이콘을 사용하였습니다.
            <br />
            <br />
            Settings에서 설정한 디스플레이를 북마크로 저장해서 상황에 맞는 대비,
            밝기, 색상으로 손 쉽게 바뀌어볼 수 있습니다.
          </motion.p>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/images/eyecane/Camera.png"
            alt="eyecane Camera 화면"
            className="w-full max-w-[400px] md:max-w-none object-contain hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </FadeInSection>

      {/* Camera Section 2 */}
      <FadeInSection className="flex flex-col md:flex-row gap-6 md:gap-4 mb-20 text-center md:text-left">
        <div className="flex flex-col gap-4 md:flex-1">
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Camera
          </motion.p>
          <motion.p
            className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            음성 인식으로도 조작
          </motion.p>
          <motion.p
            className="leading-loose text-sm md:text-base max-w-[550px] mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            터치패드로 사용할 뿐만 아니라 음성 인식으로 기능을 사용할 수
            있습니다.
            <br />
            <br />
            선택 시 버튼이 활성화 디자인으로 교체됩니다. 푸른 계열의
            그라데이션을 사용하여 브랜드의 전문적이면서 세련된 느낌을 사용자에게
            부여합니다.
          </motion.p>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/images/eyecane/Camera2.png"
            alt="eyecane Camera 화면 2"
            className="w-full max-w-[400px] md:max-w-none object-contain hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </FadeInSection>

      {/* Settings Section */}
      <FadeInSection className="flex flex-col justify-center text-center items-center mt-40">
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Settings
        </motion.p>
        <motion.p
          className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl mt-4 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          깔끔한 앱 상세 설정
        </motion.p>
        <motion.p
          className="leading-loose text-sm md:text-base text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          자신의 상황에 맞게 조정할 수 있는 설정 창. 깔끔하고 세로형 배치로
          조작에 어려움을 해소할 수 있습니다. <br />
          디스플레이, Scotoma 위치를 이동하여 보다 쾌적한 일상 생활을 즐길 수
          있습니다.
        </motion.p>

        <motion.div
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { src: "/images/eyecane/settings01.png", alt: "eyecane Setting01" },
            { src: "/images/eyecane/settings02.png", alt: "eyecane Setting02" },
            { src: "/images/eyecane/settings03.png", alt: "eyecane Setting03" },
            { src: "/images/eyecane/settings04.png", alt: "eyecane Setting04" },
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full max-w-[200px] mx-auto object-contain rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </FadeInSection>

      {/* Scotoma Section */}
      <FadeInSection className="flex flex-col justify-start text-center items-center mt-40">
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Scotoma Images
        </motion.p>
        <motion.p
          className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl mt-4 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          병원 가지 않고 시력 측정과 기록을 혼자서
        </motion.p>
        <motion.p
          className="leading-loose text-sm md:text-base text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          자신의 상황에 맞게 조정할 수 있는 설정 창. 깔끔하고 세로형 배치로
          조작에 어려움을 해소할 수 있습니다. <br />
          디스플레이, Scotoma 위치를 이동하여 보다 쾌적한 일상 생활을 즐길 수
          있습니다.
        </motion.p>

        <div className="w-full flex flex-wrap mx-auto justify-center gap-10 mt-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[40%] max-w-[200px]"
          >
            <Image
              src="/images/eyecane/visualFieldScan.png"
              alt="Visual Field Scan"
              className="w-full object-contain h-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start sm:items-center md:items-start h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-semibold mb-4 px-4 sm:text-center">암점 측정</p>
            <p className="text-xs mb-4 px-4 sm:text-center">
              암점 측정했던 기록들도 다시 확인할 수 있습니다.
            </p>
            <Image
              src="/images/eyecane/visualFieldScan02.png"
              alt="암점 측정 화면"
              className="max-w-[440px] px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </motion.div>
        </div>

        <div className="w-full flex flex-wrap mx-auto justify-center gap-10 mt-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[40%] max-w-[200px]"
          >
            <Image
              src="/images/eyecane/Scan Records.png"
              alt="암점 측정 기록 리스트"
              className="w-full object-contain h-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start sm:items-center md:items-start h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-semibold mb-4 px-4 sm:text-center">
              암점 측정 기록
            </p>
            <p className="text-xs mb-1 px-4 sm:text-center">
              최신순 리스트로 배치하여 사용자가 선택하기 편하게 디자인 했어요.
            </p>
            <p className="text-xs mb-1 px-4 sm:text-center">
              측정 검사 기록은 실제 병원 기록과 유사한 디자인으로 진행하며
            </p>
            <p className="text-xs mb-4 px-4 sm:text-center">
              신뢰도와 전문성을 높였어요
            </p>
            <div className="space-y-2">
              <Image
                src="/images/eyecane/globalIndex01.png"
                alt="암점 측정 기록 화면 1"
                className="max-w-[440px] px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
              <Image
                src="/images/eyecane/globalIndex02.png"
                alt="암점 측정 기록 화면 2"
                className="max-w-[440px] px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </FadeInSection>
    </div>
  );
}
