export function Drone() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-10">
      <div className="text-center w-full flex flex-col justify-center items-center mt-20 pb-20 border-b-gray-500 border-b-[1px]">
        <p className="text-[40px] md:text-[60px] font-bold mb-4 text-[#342DC2]">
          드론 데이터 시각화 Web
        </p>
        <p className="text-[14px] mb-10 text">
          드론 행동 데이터를 차트와 맵을 활용한 시각화 디자인을 기획하고, <br />
          3D 몰입형 스크롤을 적용하여 입체감 있는 경험을 구현했습니다. <br />
          <br />
          협업 기업의 의도를 반영하며 고려한 UI를 설계하고,
          <br /> Figma 기반의 UI 컴포넌트를 제작 및 관리하였습니다.
          <br />
          <br />
          React Three Fiber, GSAP, Blender를 활용하여 드론 행동 데이터를 3D로
          시각화하였으며, 해당 프로젝트는 오름 캠프 최우수상을 수상하였습니다.
        </p>

        <div className="gap-4 flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full flex justify-center max-w-[400px]">
            <img
              src="/images/droneGo/desktopMockUp.png"
              className=" w-[100%]"
              alt="naver 히어로 섹션 이미지"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <p className="text-sm mb-4 font-bold text-slate-500 opacity-50">
              2024.01 ~ 2024.12
            </p>
            <p className="text-[18px] font-semibold">주요 업무: UI/UX 개선</p>
            <br />
            <ul className="list-disc px-5 text-start">
              <li>업체의 피드백에 따른 디자인, 아이콘 수정 작업</li>
              <li>직관성 향상 목적 UX writing 제안 및 참여</li>
              <li>아이콘 svg 포맷으로 통일화</li>
            </ul>

            <div className="flex flex-col gap-4 mt-4 justify-center items-center md:items-start">
              <p>Tools</p>
              <img
                src="/images/tools/figma.png"
                alt="tool"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col text-center font-bold text-lg  mt-20"
        id="UiUx"
      >
        <p>네이버 플레이스</p>
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <img
            src="/images/naver/naver01.png"
            className="max-w-[250px] w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver02.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver03.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
        </div>
        <p>네이버 고객센터</p>
        <div className="flex flex-wrap justify-center gap-4 mt-20 text-center font-bold text-lg ">
          <img
            src="/images/naver/naver04.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver05.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver06.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver07.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
          <img
            src="/images/naver/naver08.png"
            className="max-w-[250px]  w-[40%] h-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
