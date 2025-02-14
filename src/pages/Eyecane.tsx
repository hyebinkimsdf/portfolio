import { Tab } from "../compoments/eyecane/Tab";

export default function Eyecane() {
  return (
    <div className="w-full min-h-screen pt-[10vh] bg-[#1F1F1F] text-white flex flex-col justify-center items-center mx-auto px-4">
      <div className="text-center flex flex-col justify-center items-center mt-20">
        <p className="text-[20px] mb-10">2024.01 ~ 2024.12</p>
        <p className="text-[80px]  font-bold mb-8">EYECANE</p>
        <p className="text-[20px] mb-6 ">
          AR 기술, 저시력자도 자유로운 삶을 제공합니다.
        </p>
        <p className="text-[14px] max-w-[534px] w-full mb-24">
          저시력자들이 환경을 더 잘 인식하고, 독립적인 생활을 할 수 있도록 돕는
          이 앱은 주변을 실시간으로 분석해 장애물 감지와 시야를 커스텀할 수
          있습니다. 삼성의 지원을 받아 개발되었고, 사회적 기여와 혁신성을
          인정받아 여러 상을 받았습니다.
        </p>
        <img
          src="/images/eyecane/main_app_mockup.png"
          className="max-w-[900px] w-[70%]"
        />
      </div>
      <Tab
        background={"백그라운드"}
        designSystem={"디자인 시스템"}
        design={"디자인인"}
      />
    </div>
  );
}
