export function DroneDesignSystem() {
  return (
    <div className="w-full max-w-[1440px] pt-10 border-zinc-200 border-t-[1px]">
      <div className="w-full items-center max-w-[1024px] mx-auto flex flex-col justify-center   pb-6  ">
        {/* Design Concept Section */}
        <p className="w-full text-center mb-6 md:mb-10 text-base md:text-lg font-semibold">
          Design Concept
        </p>

        {/* Concept Circles - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-slate-500 border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>미니멀</p>
            <p>Simple</p>
          </div>
          <img
            className="w-6 h-6 hidden sm:block"
            src="/icons/plus_black.svg"
            alt="더하기 아이콘"
          />
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-slate-500 border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>전문적인</p>
            <p>Professional</p>
          </div>

          <img
            className="w-6 h-6 hidden sm:block "
            src="/icons/plus_black.svg"
            alt="더하기 아이콘"
          />
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-slate-500 border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>세련됨</p>
            <p>Sophisticated</p>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-xs sm:text-sm mx-auto w-full leading-loose opacity-80 text-center justify-center flex items-center mt-8 md:mt-16 max-w-3xl">
          사용자가 복잡한 과정 없이 직관적으로 드론을 선택하고 데이터를 확인할
          수 있도록 간결한 인터페이스를 제공하며, 최신 데이터를 기반으로 한
          차트와 맵을 실시간 업데이트하여 신뢰성을 높였습니다. 전문가뿐만 아니라
          초보자도 쉽게 이해할 수 있도록 설명과 가이드를 추가하여 전문성과
          접근성을 모두 갖춘 플랫폼을 구현했습니다.
        </p>

        {/* Main Design System Image */}
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[560px] h-auto mx-auto my-10"
          src="/images/droneGo/desktopMockUp.png"
          alt="디자인시스템 메인 이미지"
        />

        <p className="w-full  max-w-[1440px] text-center mb-6 md:mb-10 text-base md:text-lg font-semibold border-zinc-200 border-t-[1px] pt-10">
          Design System
        </p>

        {/* Font and Color Section - Stack on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8 ">
          {/* Font Section */}
          <div className="flex flex-col items-center md:items-start justify-between h-auto lg:h-[364px] gap-4 lg:gap-0">
            <p className="text-lg font-semibold mb-2 ">Font</p>
            <p className="text-2xl a">Pretendard</p>
            <p className="text-4xl font-bold">Heading 1 60px Bold</p>
            <p className="text-3xl font-bold">Heading 3 30px Bold</p>
            <p className="text-sm  font-bold">SubTitle 1 14px Bold</p>
            <p className="text-sm ">Body 14px Medium</p>
            <p className="text-xs  font-light">Caption 12px Light</p>
            <p className="text-sm font-medium">Button 14px Medium</p>
          </div>

          {/* Color and Icon Section */}
          <div className="flex flex-col gap-4 w-full lg:w-auto justify-center">
            <p className="text-lg md:text-xl font-semibold  items-center md:items-start">
              Color
            </p>

            {/* Color Boxes - Responsive arrangement */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <div className="w-full sm:w-[360px] bg-[#F8F9FC] rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                <p className="mb-4 text-lg md:text-xl">Main</p>
                <p>R:248 G:249 B:252</p>
                <p># F8F9FC</p>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-[264px]">
                <div className="w-full bg-[#242222] text-white rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                  <p className="mb-4 text-lg md:text-xl">Sub</p>
                  <p>R:36 G:34 B:34</p>
                  <p># 242222</p>
                </div>
                <div className="w-full bg-[#3027F1] text-white rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                  <p className="mb-4 text-lg md:text-xl">Point</p>
                  <p>R:48 G:39 B:241</p>
                  <p># 3027F1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
