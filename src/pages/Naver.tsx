export function Naver() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-10">
      <div className="text-center w-full flex flex-col justify-center items-center mt-20 pb-20 border-b-gray-500 border-b-[1px]">
        <p className="text-[40px] md:text-[60px] font-bold mb-4 text-[#03C75A]">
          Naver 디지털 ASR
        </p>
        <p className="text-[14px] mb-10">
          네이버 디지털 보이는 ASR 서비스의 UI/UX 디자인 개선을 담당했습니다.
          <br />
          기존 음성 ARS 대신 웹 기반 인터페이스로 사용자가 시각적으로 쉽게
          안내를 받을 수 있도록 설계하여 접근성과 사용성을 향상시켰습니다.
        </p>
        <div className="gap-4 flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full flex justify-center max-w-[400px]">
            <img
              src="/images/naver/naver01.png"
              className="max-w-[250px] w-[50%]"
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
