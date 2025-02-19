export function EyeDesignSystem() {
  return (
    <div className="w-full max-w-[1128px] mx-auto px-4 md:px-6 lg:px-0 pt-10">
      <div className="w-full flex flex-col justify-center mb-20 md:mb-40 pb-6 md:pb-10">
        {/* Design Concept Section */}
        <p className="w-full text-center mb-6 md:mb-10 text-base md:text-lg">
          Design Concept
        </p>

        {/* Concept Circles - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-white border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>프리미엄</p>
            <p>Premium</p>
          </div>
          <img
            className="w-6 h-6 hidden sm:block"
            src="/icons/plus.svg"
            alt="더하기 아이콘"
          />
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-white border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>미니멀리즘</p>
            <p>Minimalism</p>
          </div>
          <img
            className="w-6 h-6 hidden sm:block"
            src="/icons/plus.svg"
            alt="더하기 아이콘"
          />
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center font-semibold border-white border-[1px] rounded-full justify-center items-center text-lg md:text-xl flex flex-col">
            <p>우아함</p>
            <p>Elegance</p>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-xs sm:text-sm mx-auto w-full leading-loose opacity-80 text-center justify-center flex items-center mt-8 md:mt-16 max-w-3xl">
          저시력자를 위한 AR 컨트롤 앱은 직관적이고 세련되며 전문적인 디자인을
          통해 사용자가 편리하게 AR 기능을 제어할 수 있도록 설계되었습니다.
          직관적인 UI는 간단하고 명확한 네비게이션을 제공하여 사용자가 앱을 쉽게
          이해하고 사용할 수 있도록 도와줍니다. 세련된 미니멀리즘 디자인은
          불필요한 요소를 제거하고, 고대비 색상과 깔끔한 레이아웃을 통해 시각적
          혼란을 최소화하며, 눈의 피로를 줄입니다. 또한, 전문적인 접근 방식으로
          시각적 피드백과 음성 안내 기능을 강화하여 저시력자들이 기능을 정확하게
          활용할 수 있도록 지원합니다.
        </p>

        {/* Main Design System Image */}
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[560px] h-auto mx-auto my-10"
          src="/images/eyecane/designsystem-main.png"
          alt="디자인시스템 메인 이미지"
        />

        <p className="w-full text-center mb-6 md:mb-10 text-base md:text-lg">
          Design System
        </p>

        {/* Font and Color Section - Stack on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
          {/* Font Section */}
          <div className="flex flex-col items-start justify-between h-auto lg:h-[364px] gap-4 lg:gap-0">
            <p className="text-lg md:text-xl mb-2 ">Font</p>
            <p className="text-2xl md:text-4xl">KoddiUD OnGothic</p>
            <p className="text-2xl md:text-4xl font-bold">H1 Title 40px Bold</p>
            <p className="text-xl md:text-2xl font-bold">
              H2 SubTitle 24px Bold
            </p>
            <p className="text-sm md:text-base">body 16px Regular</p>
          </div>

          {/* Color and Icon Section */}
          <div className="flex flex-col gap-4 w-full lg:w-auto justify-center">
            <p className="text-lg md:text-xl">Color</p>

            {/* Color Boxes - Responsive arrangement */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <div className="w-full sm:w-[360px] bg-[#1B222E] rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                <p className="mb-4 text-lg md:text-xl">Main</p>
                <p>R:27 G:34 B:46</p>
                <p># 1B222E</p>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-[264px]">
                <div className="w-full bg-white text-black rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                  <p className="mb-4 text-lg md:text-xl">Sub</p>
                  <p>R:255 G:255 B:255</p>
                  <p># FFFFFF</p>
                </div>
                <div className="w-full bg-[#4F9EFF] text-white rounded-xl px-4 sm:px-8 py-4 border-gray-500 border-[1px]">
                  <p className="mb-4 text-lg md:text-xl">Point</p>
                  <p>R:79 G:158 B:255</p>
                  <p># 4F9EFF</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="gap-4 flex flex-col mt-4 justify-center">
              <p className="text-lg md:text-xl">Icon</p>
              <div className="grid grid-cols-5 gap-2 w-full">
                <img
                  src="/icons/home.svg"
                  alt="eyecane ui home 아이콘"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
                <img
                  src="/icons/setting.svg"
                  alt="eyecane ui setting 아이콘"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
                <img
                  src="/icons/sight.svg"
                  alt="eyecane ui sight 아이콘"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
                <img
                  src="/icons/bookmarks.svg"
                  alt="eyecane ui bookmark 아이콘"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
                <img
                  src="/icons/bookmarksOn.svg"
                  alt="eyecane ui bookmark 아이콘"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
