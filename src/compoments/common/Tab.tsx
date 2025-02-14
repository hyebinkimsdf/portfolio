import { useState } from "react";

interface TabProp {
  background: React.ReactNode;
  designSystem: React.ReactNode;
  design: React.ReactNode;
}

export function Tab({ background, designSystem, design }: TabProp) {
  const [selectedTab, setSelectedTab] = useState("BACK GROUND");

  const tabs = ["BACK GROUND", "DESIGN SYSTEM", "UX/UI DESIGN"];

  // JSX 요소를 반환하도록 수정
  const renderContent = () => {
    switch (selectedTab) {
      case "BACK GROUND":
        return <div className="py-8 w-full max-w-[1128px]">{background}</div>;
      case "DESIGN SYSTEM":
        return <div className="py-8 w-full max-w-[1128px]">{designSystem}</div>;
      case "UX/UI DESIGN":
        return <div className="py-8 w-full max-w-[1128px]">{design}</div>;
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
