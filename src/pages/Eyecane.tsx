import { Tab } from "../compoments/common/Tab";
import { EyeBackground } from "../compoments/eyecane/EyeBackground";
import { EyeDesignSystem } from "../compoments/eyecane/EyeDesignSystem";
import { EyeUiUxDesign } from "../compoments/eyecane/EyeUiUxDesign";

export default function Eyecane() {
  return (
    <div className="w-full min-h-screen pt-[10vh] bg-[#1F1F1F] text-white flex flex-col justify-center items-center mx-auto px-4 pb-20">
      <div className="text-center flex flex-col justify-center items-center mt-20 mb-40">
        <p className="text-[20px] mb-10">2024.01 ~ 2024.12</p>
        <p className="text-[80px] font-bold mb-8">EYECANE</p>
        <p className="text-[20px] mb-6">
          AR 기술, 저시력자도 자유로운 삶을 제공합니다.
        </p>
        <p className="text-[14px] max-w-[534px] w-full mb-24">
          저시력자들이 환경을 더 잘 인식하고, 독립적인 생활을 할 수 있도록 돕는
          이 앱은 주변을 실시간으로 분석해 장애물 감지와 시야를 커스텀할 수
          있습니다.
        </p>
        <img
          src="/images/eyecane/main_app_mockup.png"
          className="max-w-[900px] w-[70%]"
        />
      </div>
      <EyeBackground />
      <EyeDesignSystem />
      <EyeUiUxDesign />
      {/* Tab 컴포넌트에 JSX 요소 전달 */}
      {/* 
      <Tab
        background={<EyeBackground />}
        designSystem={<EyeDesignSystem />}
        design={undefined}
      />
      */}
    </div>
  );
}
