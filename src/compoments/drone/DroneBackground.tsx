import React, { useEffect, useState } from "react";

// Define types for our data structures
interface Persona {
  img: string;
  alt: string;
  desc: string;
  quote: string;
  painpoints: string[];
}

interface UxGoalItem {
  icon: string;
  title: string;
  body: string;
}

interface ChallengeItem {
  challenge: string;
  description: string;
  solution: string;
  solutionDesc: string;
}

// Type for visibility state
interface VisibilityState {
  [key: string]: boolean;
}

export function DroneBackground(): React.ReactElement {
  const [visible, setVisible] = useState<VisibilityState>({});

  useEffect(() => {
    // Function to check if an element is in viewport
    const checkVisibility = (): void => {
      const elements = document.querySelectorAll(".animate-element");
      elements.forEach((el: Element) => {
        if (el instanceof HTMLElement && el.id) {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            setVisible((prev) => ({ ...prev, [el.id]: true }));
          }
        }
      });
    };

    // Initial check
    checkVisibility();

    // Add event listener
    window.addEventListener("scroll", checkVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  // Safely check if section is visible
  const isSectionVisible = (sectionId: string): boolean => {
    return Boolean(visible[sectionId]);
  };

  const statisticsData = [
    {
      category: "이동 어려움",
      percentage: 70,
      description: "보행, 대중교통 이용",
    },
    {
      category: "일상생활 어려움",
      percentage: 60,
      description: "독서, 쇼핑, 요리 등",
    },
  ];

  const statisticsData2 = [
    {
      category: "보조기기에 관심이 있다다",
      percentage: 90,
      description: "스마트폰 앱, AR 글래스 등",
    },
    {
      category: "보조기기를 사용하고 있다",
      percentage: 30,
      description: "비용, 접근성, 사용 편의성 문제로 기술 활용에 어려움",
    },
  ];

  // Define persona data
  const personas: Persona[] = [
    {
      img: "/images/droneGo/person_pro.png",
      alt: "페르소나 이준호 프로필",
      desc: "이준호 / 29세 / 드론 개발자",
      quote: "비행 성능을 분석하고 문제를 빠르게 찾고 싶어요.",
      painpoints: [
        "비행 성능 데이터를 제대로 시각화할 수 있는 도구가 부족함.",
        "성능 데이터를 분석하는 데 필요한 정보를 손쉽게 얻기 어려움.",
        "데이터를 바탕으로 시스템 개선점을 빠르게 파악하기 힘듦.",
      ],
    },
    {
      img: "/images/droneGo/person_pro2.png",
      alt: "페르소나 김재호 프로필",
      desc: "김재호 / 42세 / 드론 운영 관리자",
      quote: "비행 경로를 쉽게 확인하고 효율성 평가가 필요해요.",
      painpoints: [
        "비행 기록이 복잡하게 나열되어 있어 데이터를 한눈에 파악하기 어려움.",
        "비행 기록이 너무 많아 필요한 정보만 빠르게 추출하기 힘듦.",
      ],
    },
  ];

  // Define UX goal items
  const uxGoalItems: UxGoalItem[] = [
    {
      icon: "what",
      title: "What",
      body: "드론 데이터 시각화 및 분석",
    },
    {
      icon: "who",
      title: "Who",
      body: "드론 조종사, 분석가, 이동 경로를 확인하려는 사용자",
    },
    { icon: "when", title: "When", body: "드론 비행 후 데이터 리뷰" },
    {
      icon: "location",
      title: "Where",
      body: "웹 기반 플랫폼으로 어디서나 접근 가능",
    },
  ];

  // Define challenge items
  const challengeItems: ChallengeItem[] = [
    {
      challenge: "데이터 과부화",
      description: "데이터가 직관적이지 않으면 사용자에게 과부하.",
      solution: "친화적 시각화",
      solutionDesc:
        "인터페이스 단순화 및 필터링, 다양한 시각화(차트, 맵) 요소 추가",
    },
  ];

  return (
    <div className="max-w-[1128px]">
      {/* Overview Section */}
      <div
        id="overview-section"
        className={`w-full flex flex-col justify-center mb-20 pb-10 animate-element transition-all duration-700 ${
          isSectionVisible("overview-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="w-full text-center mb-10 text-lg font-bold ">Overview</p>
        <p className="w-full text-center mb-10 text-4xl font-semibold">
          드론 데이터 분석의 주요 문제점이 뭘까?
        </p>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10">
          <div
            className={`transition-all duration-700 delay-300 ${
              isSectionVisible("overview-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white text-center text-black shadow-md rounded-md py-6 px-4">
              <p className="font-semibold text-lg">데이터 양의 과부하</p> <br />
              <p>
                드론은 하루에 수백 기가바이트의 데이터를 생성할 수 있습니다.
              </p>
              <p className="opacity-50 text-sm font-thin">
                출처: DroneDeploy, 2021
              </p>
            </div>
            <br />
            <div className="bg-white text-center text-black shadow-md rounded-md py-6 px-4">
              <p className="font-semibold text-lg">데이터 처리 시간</p>
              <br />
              드론 데이터 처리에 소요되는 시간은 데이터 양과 분석 도구에 따라
              크게 달라질 수 있습니다.
              <p className="opacity-50 text-sm font-thin">출처: PwC, 2020</p>
            </div>
            <br />
            <div className="bg-white text-center text-black shadow-md rounded-md py-6 px-4 font-light">
              <p className="font-semibold text-lg">
                사용자 친화적인 인터페이스
              </p>
              <br />
              <p>
                드론 데이터 분석 도구의 60% 이상이 사용자 친화적인 인터페이스를
                제공하지 못해 사용자들이 어려움을 겪고 있습니다.
              </p>
              <p className="opacity-50 text-sm font-thin">
                출처: DroneAnalyst, 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Section */}
      <div
        id="persona-section"
        className={`w-full flex flex-col justify-center mb-20 pb-10 animate-element transition-all duration-700 ${
          isSectionVisible("persona-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="w-full text-center mb-10 text-lg font-bold">Persona</p>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          퍼소나를 설정하고, 서비스 이용의 니즈를 구체화 하였어요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <div
              key={persona.desc}
              className={`w-full min-h-[450px] border-gray-500 border rounded-xl flex flex-col items-center justify-center px-6 py-8 gap-4 shadow-md transition-all duration-700 delay-${
                index * 200 + 300
              } ${
                isSectionVisible("persona-section")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <img
                className="max-w-[150px] rounded-full max-h-[150px] transform transition-transform duration-500 hover:scale-105"
                src={persona.img}
                alt={persona.alt}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/eyecane/default-person.png"; // Fallback image
                  target.alt = "Default profile image";
                }}
              />
              <p className="text-sm text-center">{persona.desc}</p>
              <p className="text-2xl font-semibold text-center">
                " {persona.quote} "
              </p>
              <div className="w-full">
                <p className="text-base font-medium">Needs & Painpoints</p>
                <ul className="list-disc list-inside text-sm">
                  {persona.painpoints.map((point, idx) => (
                    <li
                      key={idx}
                      className={`transition-all duration-500 delay-${
                        idx * 100 + 500
                      } ${
                        isSectionVisible("persona-section")
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-5"
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UX Goal Section */}
      <div
        id="ux-goal-section"
        className={`w-full flex flex-col justify-center mb-20 pb-10 animate-element transition-all duration-700 ${
          isSectionVisible("ux-goal-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="w-full text-center mb-10 text-lg font-bold">UX Goal</p>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          드론 데이터 분석을 주 사용자의 환경을 구체화하여 목표의 방향을
          잡았어요
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {uxGoalItems.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white h-[260px] text-center rounded-xl text-black flex flex-col justify-center items-center gap-4 p-4 shadow-md transition-all duration-500 delay-${
                index * 100 + 300
              } ${
                isSectionVisible("ux-goal-section")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:shadow-lg hover:-translate-y-1 transform transition-transform`}
            >
              <img
                src={`/icons/${item.icon}.svg`}
                alt={`${item.title} 아이콘`}
                className="transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/icons/default-icon.svg"; // Fallback icon
                  target.alt = `${item.title} default icon`;
                }}
              />
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="px-4 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Goal Section */}
      <div
        id="project-goal-section"
        className={`w-full flex flex-col justify-center mb-20 pb-10 animate-element transition-all duration-700 ${
          isSectionVisible("project-goal-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="w-full text-center mb-10 text-lg font-semibold">
          Project Goal
        </h2>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          사용자의 고충과 니즈를 충족하여 개선하는 방향으로 목표를 수립하였어요
        </p>
        <div className="flex flex-col text-center justify-center items-center gap-6">
          <div className="flex w-full text-center justify-between">
            <h3 className="mb-4 font-normal text-xl w-full text-center max-w-[480px]">
              챌린지 분석
            </h3>
            <h3 className="mb-4 font-normal text-xl w-full max-w-[480px] text-center">
              이슈 도출
            </h3>
          </div>

          {challengeItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-full justify-between transition-all duration-700 delay-${
                index * 200 + 300
              } ${
                isSectionVisible("project-goal-section")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-[#36373C] w-full min-h-[132px] h-full py-2 text-white flex flex-col items-center justify-center gap-2 rounded-xl max-w-[480px] px-12 transform transition-transform duration-300 hover:scale-102">
                <h4 className="font-bold">{item.challenge}</h4>
                <p className="text-xs">{item.description}</p>
              </div>
              <img
                src="/icons/next.png"
                alt="다음 아이콘"
                className="w-4 h-5 mx-2 animate-pulse"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/icons/default-arrow.png"; // Fallback arrow
                  target.alt = "Default arrow icon";
                }}
              />
              <div className="bg-gradient-to-r from-[#C2C6FF] to-[#9ADFFF] w-full min-h-[132px] h-full py-2 text-black flex flex-col items-center justify-center gap-2 rounded-xl max-w-[480px] px-12 transform transition-transform duration-300 hover:scale-102">
                <h4 className="font-bold">{item.solution}</h4>
                <p className="text-xs max-w">{item.solutionDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Flow Section */}
      <div
        id="service-flow-section"
        className={`w-full flex flex-col justify-center mb-20 pb-10 animate-element transition-all duration-700 ${
          isSectionVisible("service-flow-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="w-full text-center mb-10 text-lg font-semibold">
          Service Flow
        </h2>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          사용자의 불편함을 최소화하고 직관적인 경험을 제공하기 위해 단계별
          서비스 흐름을 설계하였어요.
        </p>
        <div
          className={`transition-all duration-1000 delay-300 ${
            isSectionVisible("service-flow-section")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <img
            className="bg-[#595B6A] px-2 py-2 rounded-xl transition-transform duration-500 hover:scale-102"
            src="images/droneGo/UserFlow.png"
            alt="서비스플로우 이미지"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/eyecane/default-flow.png"; // Fallback flow image
              target.alt = "Default service flow image";
            }}
          />
        </div>
      </div>
    </div>
  );
}
