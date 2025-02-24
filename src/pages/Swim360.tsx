import { Link } from "react-router-dom";

import Drone from "../compoments/drone/Drone";

export function Swim360() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-10">
      <div className="text-center w-full flex flex-col justify-center items-center mt-20 pb-20 max-w-[1440px] border-b-gray-500 border-b-[1px]">
        <p className="text-[40px] md:text-[60px] font-bold mb-4 ">
          수영복 아커머스 <br /> 웹 팀 프로젝트
        </p>
        <p className="text-[14px] mb-10 text">
          드론 행동 데이터를 차트와 맵을 활용한 시각화 디자인을 기획하고, <br />
          3D 몰입형 스크롤을 적용하여 입체감 있는 경험을 구현했습니다. <br />
        </p>

        <div className="gap-4 flex flex-col justify-center items-center w-full">
          <div className="relative w-full max-w-[600px] h-[300px]">
            <img
              className="w-full min-w-[500px] rounded-lg "
              src="/videos/swim360/main.gif"
              alt="swim360 메인 화면"
            />
          </div>
          <div className="flex flex-col  items-center  text-center ">
            <p className="text-sm mb-4 font-bold text-slate-500 opacity-50">
              2024.11 ~ 2024.12
            </p>
            <p className="text-[18px] font-semibold">
              주요 업무:UI/UX 컨셉 및 디자인 리드
            </p>
            <br />
            <ul className=" px-5 text-center">
              <li>- UI/UX 컨셉 기획 및 디자인 리드</li>
              <li>- 수영복 아커머스 컨셉을 반영한 직관적인 UI 디자인 작업</li>
              <li>- 멀티 디바이스 대응을 위한 반응형 웹 디자인</li>
              <br />
              <li>Three.js를 활용하여 제품을 3D로 시각화</li>

              <li>
                React와 TypeScript를 활용하여 제품 상세 페이지 UI를 컴포넌트화
              </li>

              <li>-오름 캠프 대상 수상</li>
            </ul>

            <div className="flex flex-col gap-4 mt-4 justify-center  items-center ">
              <p className="font-semibold w-full">Tools</p>
              <img
                src="/images/tools/figma.png"
                alt="figma"
                className="w-12 h-12 "
              />

              <Link
                to={
                  "http://swim360-bucket.s3-website.ap-northeast-2.amazonaws.com/"
                }
              >
                <p className="font-semibold w-full">Web</p>
                <img
                  src="/images/swim360/logo.png"
                  alt="swim360 logo"
                  className="w-20 h-20 rounded-lg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-[1440px] flex flex-col text-center font-bold text-lg  mt-20"
        id="UiUx"
      >
        {/*home 화면*/}
        <div className="flex flex-wrap justify-center gap-8 my-20">
          <img
            className="w-full md:w-[50%] min-w-[500px] rounded-lg "
            src="/videos/swim360/main.gif"
            alt="swim360 메인 화면"
          />
          {/*home 화면 설명*/}
          <div className="w-full md:w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Home</p>
            <p className="text-2xl">직관적 디자인</p>
            <p className="text-base font-normal">
              수영복 아커머스에 맞는 컨셉의 직관적인 디자인을 통해 사용자의
              몰입감과 사이트의 브랜드 이미지를 구축했습니다.
            </p>
          </div>
        </div>

        {/*swim360 상품 리스트 화면*/}
        <div className="flex flex-wrap justify-center gap-8  my-20">
          <img
            className="w-full md:w-[50%] min-w-[500px] rounded-lg "
            src="/videos/swim360/list.gif"
            alt="swim360 상품 리스트 화면"
          />
          {/*droneList  화면 설명*/}
          <div className="w-full md:w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">Interaction Design</p>
            <p className="text-base font-normal">
              상품 리스트에 인터렉션을 넣어 호버했을 시 상품의 뒷면을 보여주며
              사용자에게 심플하면서 제품의 더 많은 디테일 제품 이미지를
              제공합니다.
            </p>
          </div>
        </div>

        {/*swim360 상품 상세 화면*/}
        <div className="flex flex-wrap justify-center gap-8  my-20">
          <img
            className="w-full md:w-[50%] min-w-[500px] rounded-lg "
            src="/videos/swim360/detail.gif"
            alt="swim360 상품 상세 화면"
          />
          {/*상품 상세세 화면 설명*/}
          <div className="w-full md:w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">3D 제공</p>
            <p className="text-base font-normal">
              React Three Fiber을 사용하여 3D 오브젝트를 넣고 수영복의 젖은
              텍스처도 제공하며 사용자가 제품을 고를 때 더 몰입감을 줄 수 있도록
              디자인했습니다. 또한 수영복도 직접 모델링하여 텍스처 작업을
              진행했습니다.
            </p>
          </div>
        </div>

        {/*swim cart 화면*/}
        <div className="flex flex-wrap justify-center gap-8  my-20 ">
          <img
            className="w-full md:w-[50%]  rounded-lg "
            src="/videos/swim360/cart.gif"
            alt="swim360 장바구니 화면"
          />
          {/*droneList 화면 설명*/}
          <div className="w-full md:w-[500px] flex flex-col text-start gap-2">
            <p className="text-zinc-400 font-extralight text-xs mb-2 ">
              UI/UX Design
            </p>
            <p className="mb-2">Drone Data List</p>
            <p className="text-2xl">디자인 통일과 심플함</p>
            <p className="text-base font-normal mb-5">
              최대한 필요한 정보만 입력하고 복잡한 이동 흐름을 사용하지 않아
              사용자가 사용의 스트레스를 받지 않고 사용자가 불편함을 느끼지
              않도록 개발자와 소통을하며 통일감 있는 디자인을 제공했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
