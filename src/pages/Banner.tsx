import React, { useState } from "react";

export function Banner() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // 이미지 배열
  const bannerImages = [
    {
      src: "/images/banner/maona01.png",
      alt: "마오나 광고 배너01",
      width: "320px",
    },
    {
      src: "/images/banner/maona02.png",
      alt: "마오나 광고 배너02",
      width: "320px",
    },
    {
      src: "/images/banner/maona03.png",
      alt: "마오나 광고 배너03",
      width: "320px",
    },
    {
      src: "/images/banner/maona04.png",
      alt: "마오나 광고 배너04",
      width: "320px",
    },
    { src: "/images/banner/05.png", alt: "흑월 사전예약 배너", width: "320px" },
    { src: "/images/banner/06.png", alt: "흑월 커뮤니티 배너", width: "320px" },
    {
      src: "/images/banner/FI.png",
      alt: "패밀리 아일랜드 배너",
      width: "320px",
    },
    { src: "/images/banner/ILB.png", alt: "아이러브버거 배너", width: "320px" },
    {
      src: "/images/banner/umi.png",
      alt: "유미의 세포들 일본 배너",
      width: "600px",
    },
    {
      src: "/images/banner/umi02.png",
      alt: "유미의 세포들 일본 배너 2",
      width: "320px",
    },
    {
      src: "/images/banner/bi.png",
      alt: "영웅 기사단 BI ",
      width: "320px",
    },
  ];

  // 이미지 클릭 시 모달 표시
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // 이전 이미지로 이동
  const goToPreviousImage = () => {
    if (selectedImageIndex === null) return;
    const newIndex =
      selectedImageIndex === 0
        ? bannerImages.length - 1
        : selectedImageIndex - 1;
    setSelectedImageIndex(newIndex);
  };

  // 다음 이미지로 이동
  const goToNextImage = () => {
    if (selectedImageIndex === null) return;
    const newIndex =
      selectedImageIndex === bannerImages.length - 1
        ? 0
        : selectedImageIndex + 1;
    setSelectedImageIndex(newIndex);
  };

  // 키보드 이벤트 처리
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

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

      {/*배너 이미지 리스트*/}
      <div className="flex w-full max-w-[1440px] gap-4 flex-wrap  justify-center mt-8">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className="relative items-center flex m-2 group overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-[280px] md:w-[${image.width}] transition-all duration-300 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                자세히 보기
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 확대 모달 + 캐러셀 */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 이미지 컨테이너 */}
            <div className="relative">
              <img
                src={bannerImages[selectedImageIndex].src}
                alt={bannerImages[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* 이전 버튼 - 왼쪽 중앙에 고정 */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 text-black hover:bg-opacity-100 transition-all z-20 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* 다음 버튼 - 오른쪽 중앙에 고정 */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 text-black hover:bg-opacity-100 transition-all z-20 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 text-black hover:bg-opacity-100 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* 이미지 정보 */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium">
                {selectedImageIndex + 1} / {bannerImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
