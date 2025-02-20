import { Nav } from "../compoments/common/Nav";
import Drone from "../compoments/drone/Drone";
import { DroneBackground } from "../compoments/drone/DroneBackground";

export function DroneGo() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-10">
      <Nav textColor={"black"} lineColor={"bg-black"} />
      <div className="text-center w-full flex flex-col justify-center items-center mt-20 pb-20 max-w-[1440px] border-b-gray-500 border-b-[1px]">
        <p className="text-[40px] md:text-[60px] font-bold mb-4 text-[#342DC2]">
          드론 데이터 시각화 Web
        </p>
        <p className="text-[14px] mb-10 text">
          드론 행동 데이터를 차트와 맵을 활용한 시각화 디자인을 기획하고, <br />
          3D 몰입형 스크롤을 적용하여 입체감 있는 경험을 구현했습니다. <br />
        </p>

        <div className="gap-4 flex flex-col justify-center items-center w-full">
          <div className="relative w-full max-w-[400px] h-[300px]">
            <Drone
              scale={130}
              rotation={[0, -80, 0]}
              yAnimationHeight={10}
              height={"300px"}
              width={"400px"}
            />
          </div>
          <div className="flex flex-col  items-center  text-center ">
            <p className="text-sm mb-4 font-bold text-slate-500 opacity-50">
              2025.01 ~ 2025.02
            </p>
            <p className="text-[18px] font-semibold">
              주요 업무:UI/UX 컨셉 및 디자인 리드
            </p>
            <br />
            <ul className=" px-5 text-center">
              <li>- UI/UX 컨셉 기획 및 디자인 리드</li>
              <li>- 드론 데이터를 이해하고 차트, 맵으로 시각화 디자인</li>
              <li>- 데이터 시각화 디자인에 협업 기업의 의도와 일치도 확보</li>
              <br />
              <li> 3D 몰입형 스크롤</li>
              <ul>
                <li>
                  - React Three Fiber, GSAP, Blender를 이용하여 사이트의 입체감
                  높임
                </li>
              </ul>
              <li>-드론 행동 데이터 3D 시각화</li>
            </ul>

            <div className="flex flex-col gap-4 mt-4 justify-center items-center md:items-start">
              <p className="font-semibold">Tools</p>
              <img
                src="/images/tools/figma.png"
                alt="tool"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="Back" className="mt-10">
        <DroneBackground />
      </div>

      <div
        className="w-full flex flex-col text-center font-bold text-lg  mt-20"
        id="UiUx"
      >
        {/*home 화면*/}
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <video
            className="w-full max-w-[50%] min-w-[500px] rounded-lg "
            src="/videos/drone/home.mp4"
            autoPlay
            loop
            muted
          />
          {/*home 화면 설명*/}
          <div className="w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Home</p>
            <p className="text-2xl">3D Drone</p>
            <p className="text-base font-normal">
              드론 데이터 시각화 사이트의 몰입성을 줄 수 있게 히어로 섹션에
              React Three Fiber을 사용하여 드론 3D를 구현하였습니다.{" "}
            </p>
          </div>
        </div>

        {/*droneList Unlog 화면*/}
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <img
            className="w-full max-w-[50%] min-w-[500px] rounded-lg "
            src="/images/droneGo/logOut.png"
            alt="DroneGo 로그인 화면"
          />
          {/*droneList  화면 설명*/}
          <div className="w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">Login</p>
            <p className="text-base font-normal">
              회원 전용으로 이용되는 유료 사이트이기 때문에 핵심 콘텐츠인 데이터
              시각화 자료 리스트에 로그인 모덜을 띄워 사용자의 편의성을
              고려하였습니다.
            </p>
          </div>
        </div>

        {/*droneList 화면*/}
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <video
            className="w-full max-w-[50%] min-w-[500px] rounded-lg shadow-md "
            src="/videos/drone/droneList2.mp4"
            autoPlay
            loop
            muted
          />
          {/*droneList 화면 설명*/}
          <div className="w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">Interaction Design</p>
            <p className="text-base font-normal">
              사이트의 전문성과 세련된 느낌을 브랜딩하기 위해 드론 리스트를
              호버했을 때 Interation Design을 설계하였습니다.
            </p>
          </div>
        </div>

        {/*droneList 화면*/}
        <div className="flex flex-wrap justify-center gap-4 my-20 ">
          <img
            className="w-full max-w-[50%] min-w-[500px] rounded-lg shadow-md "
            src="/images/droneGo/chart.png"
            alt="DroneGo 차트 화면"
          />
          {/*droneList 화면 설명*/}
          <div className="w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">Interaction Design</p>
            <p className="text-base font-normal mb-5">
              사이트의 전문성과 세련된 느낌을 브랜딩하기 위해 드론 리스트를
              호버했을 때 Interation Design을 설계하였습니다. 하지만 프로젝트
              개발에서 적합한 차트 라이브러리를 찾지 못해 커스텀을 진행하진
              못했습니다.
            </p>
            <p className="text-2xl">Recently</p>
            <p className="text-base font-normal mb-5">
              드론 리스트에서 선택했을 때 해당 드론의 최신 날짜 데이터가
              연결되며 사용자의 클릭빈도를 줄였습니다.
            </p>
            <p className="text-2xl">Download</p>
            <p className="text-base font-normal mb-5">
              시각한 데이터와 차트를 다운받을 수 있도록 통일감있는 다운로드
              컴포먼트를 디자인했습니다.
            </p>
          </div>
        </div>

        {/*droneList 화면*/}
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <img
            className="w-full max-w-[50%] min-w-[500px] rounded-lg shadow-md "
            src="/images/droneGo/map2d.png"
            alt="DroneGo 차트 화면"
          />
          {/*droneList 화면 설명*/}
          <div className="w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">2D/3D Map</p>
            <p className="text-2xl">UX</p>
            <p className="text-base font-normal">
              드론 상태, 속도, 고도 등의 핵심 데이터를 왼쪽 패널에 배치하고,
              상단에는 필터 및 모드 선택 옵션을 제공하며, 하단에는 시간 제어
              UI를 배치해 직관적인 인터랙션과 데이터 탐색이 가능하도록
              설계했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
