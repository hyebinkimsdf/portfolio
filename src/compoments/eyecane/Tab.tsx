import { useState } from "react";

interface TabProps {
  background: string;
  designSystem: string;
  design: string;
}

export function Tab({ background, designSystem, design }: TabProps) {
  const [selectedTab, setSelectedTab] = useState("BACK GROUND");

  const tabs = ["BACK GROUND", "DESIGN SYSTEM", "UX/UI DESIGN"];

  // 탭 컨텐츠를 렌더링하는 함수
  const renderContent = () => {
    switch (selectedTab) {
      case "BACK GROUND":
        return <div className="py-8">{background}</div>;
      case "DESIGN SYSTEM":
        return <div className="py-8">{designSystem}</div>;
      case "UX/UI DESIGN":
        return <div className="py-8">{design}</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="max-w-[1128px] mx-auto w-full flex mt-20 justify-center items-center border-b-[1px] border-[#6A6A6A]">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-1 text-center cursor-pointer py-2 transition-all duration-200 border-b-2 ${
              selectedTab === tab
                ? "text-lg font-bold border-white"
                : "border-transparent"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>
      {renderContent()}
    </>
  );
}
