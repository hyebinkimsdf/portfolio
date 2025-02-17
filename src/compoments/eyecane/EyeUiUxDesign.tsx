export function EyeUiUxDesign() {
  return (
    <div className="w-full max-w-[1128px] mx-auto px-4 md:px-6 lg:px-0">
      {/* User Flow Section */}
      <div className="w-full flex flex-col justify-center mb-20 md:mb-40 pb-6 md:pb-10">
        <p className="w-full text-center mb-6 md:mb-10 text-base md:text-lg">
          User Flow
        </p>
        <div className="w-full flex justify-center">
          <img
            className="w-full max-w-[1024px] object-contain"
            src="/images/eyecane/UserFlow.png"
            alt="유저 플로우 png"
          />
        </div>
      </div>

      {/* Home Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 Home mb-20">
        <div className="w-full md:w-auto flex justify-center">
          <img
            src="/images/eyecane/home.png"
            alt="eyecane home 화면"
            className="w-full max-w-[400px] md:max-w-none object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <p className="text-lg md:text-xl">Home</p>
          <p className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl">
            인지, 사용 부담감 감소
          </p>
          <p className="leading-loose text-sm md:text-base">
            한국장애인협회에서 제작한 유니버셜서체인 KoddiUD OnGothic을 사용하여
            비교적 큰 글씨를 사용하였고 가로형의 큰 버튼을 사용하여 저시력자
            사용자의 APP 이용에 따른 학습시간 및 사용의 부담감을 감소시켰습니다.
            <br />
            <br />
            버튼에 직관적인 이미지를 사용하여 병명 선택인 경우 해당 병명에 맞는
            이미지가 나오도록 디자인했습니다. 홈 화면에선 병명 선택, 카메라,
            시력 검사 화면으로 이동이 가능하고, 카메라 화면으로 이동할땐
            필수적으로 병명을 선택해야 이동이 가능하여 미선택 시 토스트 메세지가
            표시됩니다.
          </p>
        </div>
      </div>
      {/* Camera Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 Home mb-20">
        <div className="flex flex-col gap-4 md:flex-1">
          <p className="text-lg md:text-xl">Camera</p>
          <p className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl">
            사용자의 시야를 대신 <br />
            보여드립니다!
          </p>
          <p className="leading-loose text-sm md:text-base max-w-[550px]">
            시각적으로 불편한 사용자를 위해 휴대폰의 형태를 이용하여 각 모서리에
            아이콘이 배치되어 사용자가 버튼 위치를 보다 쉽게 인지하도록 UX
            디자인을 했습니다.
            <br />
            <br /> 또한 카메라화면이 사용자의 시야인 만큼 UI가 일상 생활에
            불편감을 주지 않기 위해 뒷 배경이 보이는 라인 아이콘을
            사용하였습니다.
            <br />
            <br /> Settings에서 설정한 디스플레이를 북마크로 저장해서 상황에
            맞는 대비, 밝기, 색상으로 손 쉽게 바뀌어볼 수 있습니다.
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src="/images/eyecane/Camera.png"
            alt="eyecane Camera 화면"
            className="w-full max-w-[400px] md:max-w-none object-contain"
          />
        </div>
      </div>
      {/* Camera Section 2 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 Home mb-20">
        <div className="flex flex-col gap-4 md:flex-1">
          <p className="text-lg md:text-xl">Camera</p>
          <p className="bg-gradient-to-r from-[#C1C7FE] to-[#A3D9FF] text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl">
            음성 인식으로도 조작
          </p>
          <p className="leading-loose text-sm md:text-base max-w-[550px]">
            터치패드로 사용할 뿐만 아니라 음성 인식으로 기능을 사용할 수
            있습니다.
            <br />
            <br /> 선택 시 버튼이 활성화 디자인으로 교체됩니다. 푸른 계열의
            그라데이션을 사용하여 브랜드의 전문적이면서 세련된 느낌을 사용자에게
            부여합니다.
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src="/images/eyecane/Camera2.png"
            alt="eyecane Camera 화면 2"
            className="w-full max-w-[400px] md:max-w-none object-contain"
          />
        </div>
      </div>
    </div>
  );
}
