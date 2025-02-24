export function Banner() {
  return (
    <div className="w-full min-h-screen pt-10 bg-[#F5F5F5] text-[#3B3838] flex flex-col justify-center items-center mx-auto px-4 pb-10">
      <div className="text-center w-full flex flex-col justify-center items-center mt-20 pb-20 max-w-[1440px] border-b-gray-500 border-b-[1px]">
        <p className="text-[40px] md:text-[60px] font-bold mb-4 ">
          이벤트 & 광고 배너
        </p>
        <p className="text-[14px] mb-10 text">
          운영팀에서 커뮤니티 배너 기획에 참여하며 이벤트 배너 작업을 진행하고
          <br />
          구글, 카카오에 게임 광고 배너 작업을 진행했습니다.
        </p>
        <div className="gap-4 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center text-center ">
            <p className="text-sm mb-4 font-bold text-slate-500 opacity-50">
              2022.07 ~ 2024.01
            </p>
            <div className="flex flex-col gap-4 mt-4 justify-center items-center ">
              <p className="font-semibold w-full">Tools</p>
              <img
                src="/images/tools/photoshop.png"
                alt="tool logo"
                className="w-12 h-12 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] flex flex-col text-center font-bold text-lg mt-20">
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {/*home 화면 설명*/}
          <div className="w-full flex flex-col text-center gap-2">
            <p className="mb-2">Home</p>
            <p className="text-2xl">직관적 디자인</p>

            {/*배너 이미지 리스트*/}
            <div className="flex w-full  gap-4 flex-wrap justify-center mt-8">
              <img
                src="/images/banner/maona01.png"
                alt="마오나 광고 배너01"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/maona02.png"
                alt="마오나 광고 배너02"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/maona03.png"
                alt="마오나 광고 배너03"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/maona04.png"
                alt="마오나 광고 배너04"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/05.png"
                alt=" 흑월 사전예약 배너"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/06.png"
                alt=" 흑월 커뮤니티 배너"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/FI.png"
                alt=" 패밀리 아일랜드 배너"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/ILB.png"
                alt=" 아이러브버거 배너"
                className="w-[280px] md:w-[320px] m-2"
              />
              <img
                src="/images/banner/umi.png"
                alt=" 유미의 세포들 일본 배너"
                className="w-[280px] md:w-[600px] m-2"
              />
              <img
                src="/images/banner/umi02.png"
                alt=" 유미의 세포들 일본 배너 2"
                className="w-[280px] md:w-[320px] m-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
