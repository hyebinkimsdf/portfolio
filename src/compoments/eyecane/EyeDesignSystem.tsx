export function EyeDesignSystem() {
  return (
    <div className="max-w-[1128px]">
      <div className="w-full flex flex-col justify-center mb-40 pb-10">
        <p className="w-full text-center mb-10 text-lg ">Design Concept</p>
        <div className="flex items-center justify-center gap-10">
          <div className="w-[200px] h-[200px] text-center  font-semibold border-white border-[1px] rounded-full justify-center items-center text-xl flex flex-col">
            <p>프리미엄</p>
            <p>Premium</p>
          </div>
          <img className="w-6 h-6" src="/icons/plus.svg" alt="더하기 아이콘" />
          <div className="w-[200px] h-[200px] text-center  font-semibold border-white border-[1px] rounded-full justify-center items-center text-xl flex flex-col">
            <p>미니멀리즘</p>
            <p>Minimalism</p>
          </div>
          <img className="w-6 h-6" src="/icons/plus.svg" alt="더하기 아이콘" />
          <div className="w-[200px] h-[200px] text-center  font-semibold border-white border-[1px] rounded-full justify-center items-center text-xl flex flex-col">
            <p>우아함</p>
            <p>Elegance</p>
          </div>
        </div>
        <p className=" text-sm  mx-auto w-full leading-loose opacity-80 text-center justify-center flex items-center mt-16">
          저시력자를 위한 AR 컨트롤 앱은 직관적이고 세련되며 전문적인 디자인을
          통해 사용자가 편리하게 AR 기능을 제어할 수 있도록 설계되었습니다.
          직관적인 UI는 간단하고 명확한 네비게이션을 제공하여 사용자가 앱을 쉽게
          이해하고 사용할 수 있도록 도와줍니다. 세련된 미니멀리즘 디자인은
          불필요한 요소를 제거하고, 고대비 색상과 깔끔한 레이아웃을 통해 시각적
          혼란을 최소화하며, 눈의 피로를 줄입니다. 또한, 전문적인 접근 방식으로
          시각적 피드백과 음성 안내 기능을 강화하여 저시력자들이 기능을 정확하게
          활용할 수 있도록 지원합니다.
        </p>
        <img
          className="w-[560px] h-[630px] mx-auto"
          src="/images/eyecane/designsystem-main.png"
          alt="디자인시스템 메인 이미지"
        />
        <p className="w-full text-center mb-10 text-lg ">Design Concept</p>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-start justify-between h-[364px] ">
            <p>Font</p>
            <p className="text-4xl">KoddiUD OnGothic</p>
            <p className="text-4xl font-bold">H1 Title 40px Bold</p>
            <p className="text-2xl font-bold">H2 SubTitle 24px Bold</p>
            <p className="text-base">body 16px Regular</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Color</p>
            <div className="flex gap-2">
              <div className="w-[360px] bg-[#1B222E] rounded-xl px-8 py-4 border-gray-500 border-[1px]">
                <p className="mb-4 text-xl">Main</p>
                <p>R:27 G:34 B:46</p>
                <p># 1B222E</p>
              </div>
              <div>
                <div className="w-[264px] bg-white text-black rounded-xl px-8 py-4 border-gray-500 border-[1px] mb-2">
                  <p className="mb-4 text-xl">Sub</p>
                  <p>R:255 G:255 B:255</p>
                  <p># FFFFFF</p>
                </div>
                <div className="w-[264px] bg-[#4F9EFF] text-white rounded-xl px-8 py-4 border-gray-500 border-[1px]">
                  <p className="mb-4 text-xl">Point</p>
                  <p>R:79 G:158 B:255</p>
                  <p># 4F9EFF</p>
                </div>
              </div>
            </div>
            <div className="gap-4 flex flex-col">
              <p>Icon</p>
              <div className="flex w-full justify-between">
                <img src="/icons/home.svg" alt="eyecane ui home 아이콘" />
                <img src="/icons/setting.svg" alt="eyecane ui setting 아이콘" />
                <img src="/icons/sight.svg" alt="eyecane ui sight 아이콘" />
                <img
                  src="/icons/bookmarks.svg"
                  alt="eyecane ui bookmark 아이콘"
                />
                <img
                  src="/icons/bookmarksOn.svg"
                  alt="eyecane ui bookmark 아이콘"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
