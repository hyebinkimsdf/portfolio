import React, { useEffect, useState } from "react";
import { CircleChart } from "../common/CircleChart";
import AccessibilityStats from "./StatsVisualizer";
import StatsVisualizer from "./StatsVisualizer";

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

export function EyeBackground(): React.ReactElement {
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
      img: "/images/eyecane/person_minsu.png",
      alt: "페르소나 민수 프로필",
      desc: "황반변성 | 강민수 / 56세 / 편의점 점주님",
      quote: "작은 글씨와 어두운 환경이 가장 불편해요",
      painpoints: [
        "상품의 가격표나 유통기한을 확인하는 데 어려움이 있음.",
        "낮과 밤의 밝기 변화에 시야가 쉽게 적응하지 못함.",
        "앱이 복잡하면 조작하기 더 어렵다.",
      ],
    },
    {
      img: "/images/eyecane/person_jimin.png",
      alt: "페르소나 최지민 프로필",
      desc: "선천적 망막색소변성증 | 최지민 / 22세 / 대학생",
      quote: "길을 찾는 것도, 사람을 알아보는 것도 쉽지 않다.",
      painpoints: [
        "강의실을 찾을 때 주변 표지판을 읽기 어렵다.",
        "어두운 곳에서는 시야가 급격히 좁아져 계단이나 장애물을 인식하는 데 어려움을 겪는다.",
      ],
    },
  ];

  // Define UX goal items
  const uxGoalItems: UxGoalItem[] = [
    { icon: "what", title: "What" },
    { icon: "who", title: "Who" },
    { icon: "when", title: "When" },
    { icon: "location", title: "Where" },
  ];

  // Define challenge items
  const challengeItems: ChallengeItem[] = [
    {
      challenge: "정보 인식 문제",
      description:
        "장애물, 장애적 요소로 인한 시야 가림으로 시야 인식이 어려움",
      solution: "시야 커스텀",
      solutionDesc:
        "안보이는 부분을 시야를 이동, 확대하고 필터로 상황에 맞게 대비, 색상을 조절하여 커스텀할 수 있음",
    },
    {
      challenge: "사용자 피로도",
      description: "작은 글씨와 낮은 대비 색상 사용으로 가독성 문제 발생",
      solution: "인지, 사용 부담 감소",
      solutionDesc:
        "최적화된 컬러 대비 및 폰트 적용 깔끔한 가로형 큰 버튼 사용",
    },
    {
      challenge: "사용자 학습 부담",
      description:
        "복잡한 UI로 인해 신규 사용자의 평균 적응 시간이 많이 소요됨",
      solution: "직관적 UI로 적응 시간 단축",
      solutionDesc: "가이드가 명확한 UI 적용 시 평균 적응 시간 단축",
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
        <p className="w-full text-center mb-10 text-lg ">Overview</p>
        <p className="w-full text-center mb-10 text-4xl font-semibold">
          저시력자들은 일상에서 정말 많은 어려움을 겪고 있을까?
        </p>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10">
          <div
            className={`transition-all duration-700 delay-300 ${
              isSectionVisible("overview-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <StatsVisualizer
              title="시각장애인 생활 어려움 현황"
              stats={statisticsData}
              source="한국시각장애인연합회(KFVB, 2020)"
            />
          </div>
          <div
            className={`text-center md:text-left transition-all duration-700 delay-500 ${
              isSectionVisible("overview-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="max-w-[480px] w-full">
              한국시각장애인연합회(KFVB, 2020) 조사에 따르면, 저시력자의 약
              70%가 이동(보행, 대중교통 이용)에 어려움을 겪고 있으며, 60%는
              독립적인 일상생활(독서, 쇼핑, 요리 등)에 어려움을 호소했습니다.
            </p>
            <p className="opacity-50 mt-2">출처: 한국시각장애인연합회 보고서</p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        id="statistics-section"
        className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-10 animate-element"
      >
        <div
          className={`text-center md:text-left order-1 md:order-1 transition-all duration-700 delay-300 ${
            isSectionVisible("statistics-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="w-full text-center mb-10 text-4xl font-semibold">
            관심도에 비해 낮은 사용자 수
          </p>
          <p className="max-w-[480px] w-full">
            2021년 시각장애인 기술 활용 실태조사에 따르면, 한국의 시각장애인 중
            30%만이 보조기기(스마트폰 앱, AR 글래스 등)를 사용하고 있으며,
            나머지는 비용, 접근성, 사용 편의성 문제로 기술 활용에 어려움을 겪고
            있습니다.
          </p>
          <p className="opacity-50 mt-2">출처: 한국정보화진흥원</p>
        </div>
        <div
          className={`order-2 md:order-2 pb-24 transition-all duration-700 delay-500 ${
            isSectionVisible("statistics-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <StatsVisualizer
            title="시각장애인 기술 활용 실태조사"
            stats={statisticsData2}
            source="한국정보화진흥원"
          />
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
        <p className="w-full text-center mb-10 text-lg ">Persona</p>
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
                className="max-w-[150px] max-h-[150px] transform transition-transform duration-500 hover:scale-105"
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
        <p className="w-full text-center mb-10 text-lg ">UX Goal</p>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          AR 글라스 앱의 주 사용자의 환경을 구체화하여 목표의 방향을 잡았어요
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
              <p className="px-4 text-sm">
                저시력자가 일상생활에서 겪는 정보 접근성과 이동의 어려움을
                해결하는 AR 글라스 연동 앱
              </p>
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
        <h2 className="w-full text-center mb-10 text-lg">Project Goal</h2>
        <p className="w-full text-center mb-10 text-sm opacity-80">
          사용자의 고충과 니즈를 충족하여 개선하는 방향으로 목표를 수립하였어요
        </p>

        <div className="flex flex-col text-center justify-center items-center gap-6">
          <div className="flex w-full text-center justify-between">
            <h3 className="mb-4 font-bold text-xl w-full text-center max-w-[480px]">
              챌린지 분석
            </h3>
            <h3 className="mb-4 font-bold text-xl w-full max-w-[480px] text-center">
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
        <h2 className="w-full text-center mb-10 text-lg">Service Flow</h2>
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
            src="images/eyecane/ServiceFlow.png"
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
