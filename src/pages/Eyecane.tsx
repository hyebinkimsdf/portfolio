import { Nav } from "../compoments/common/Nav";
import { Tab } from "../compoments/common/Tab";
import { EyeBackground } from "../compoments/eyecane/EyeBackground";
import { EyeDesignSystem } from "../compoments/eyecane/EyeDesignSystem";
import { EyeUiUxDesign } from "../compoments/eyecane/EyeUiUxDesign";

export default function Eyecane() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#1F1F1F] text-white flex flex-col justify-center items-center mx-auto px-4 pb-20">
      <div className="text-center flex flex-col justify-center items-center mt-20 pb-20 border-b-gray-500 border-b-[1px]">
        <p className="text-[80px] font-bold mb-8">EYECANE</p>
        <p className="text-[20px] mb-6">
          AR 기술, 저시력자도 자유로운 삶을 제공합니다.
        </p>
        <p className="text-[14px] max-w-[534px] w-full mb-12">
          저시력자들이 환경을 더 잘 인식하고, 독립적인 생활을 할 수 있도록 돕는
          이 앱은 주변을 실시간으로 분석해 장애물 감지와 시야를 커스텀할 수
          있습니다.
        </p>
        <img
          src="/images/eyecane/main_app_mockup.png"
          className="max-w-[900px] w-[70%]"
        />

        <div className="flex flex-col mt-12 justify-center ">
          <p className="text-sm mb-4">2024.01 ~ 2024.12</p>

          <div className="flex gap-4 mt-4 justify-center">
            <img
              src="/images/tools/photoshop.png"
              className="w-12 h-12 border-[1px] rounded-lg border-slate-600"
            />
            <img
              src="/images/tools/figma.png"
              className="w-12 h-12 border-[1px] rounded-lg border-slate-600"
            />
          </div>
        </div>
      </div>
      <div id="Back" className=" border-b-gray-500 border-b-[1px] pt-10">
        <EyeBackground />
      </div>
      <div id="System" className=" border-b-gray-500 border-b-[1px]">
        <EyeDesignSystem />
      </div>
      <div id="UiUx">
        <EyeUiUxDesign />
      </div>
      <Nav />
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
