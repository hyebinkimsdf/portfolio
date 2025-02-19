import { Nav } from "../compoments/common/Nav";

export function Naver() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-20">
      <div className="text-center flex flex-col justify-center items-center mt-20 pb-20 border-b-gray-500 border-b-[1px]">
        <p className="text-[60px] font-bold mb-8">Naver 디지털 ASR</p>
        <p className="text-[16px] font-semibold">주요 업무: UI/UX 개선</p>
        <br />
        <p className="text-[14px] mb-6">
          네이버 디지털 보이는 ASR 서비스의 UI/UX 디자인 개선을 담당했습니다.
          <br />
          기존 음성 ARS 대신 웹 기반 인터페이스로 사용자가 시각적으로 쉽게
          안내를 받을 수 있도록 설계하여 접근성과 사용성을 향상시켰습니다.
        </p>

        <p className="text-[14px] max-w-[534px] w-full mb-12 font-semibold ">
          <br />
          - 업체의 피드백에 따른 디자인,아이콘 수정 작업 <br />- 사용자 관점에서
          버튼의 직관성을 올려주기 위해 UX writing 제안 및 참여 <br />- 아이콘
          svg 포맷으로 통일화
        </p>
        <img
          src="/images/naver/naver01.png"
          className="max-w-[250px] w-[50%]"
        />
        <div className="flex flex-col mt-12 justify-center ">
          <p className="text-sm mb-4">2024.01 ~ 2024.12</p>

          <div className="flex gap-4 mt-4 justify-center">
            <img
              src="/images/tools/figma.png"
              alt="tool"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col  my-20" id="UiUx">
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <p>네이버 플레이스</p>
          <br />
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
        <div className="flex flex-wrap justify-center gap-4 my-20">
          <p>네이버 고객센터</p> <br />
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
