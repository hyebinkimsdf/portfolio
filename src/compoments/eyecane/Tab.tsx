import { useState } from "react";

export function Tab() {
  const [selectedTab, setSelectedTab] = useState("BACK GROUND"); // 초기 선택 탭

  const tabs = ["BACK GROUND", "DESIGN SYSTEM", "UX/UI DESIGN"];

  return (
    <div className="max-w-[1128px] mx-auto w-full flex mt-20 justify-center items-center border-b-[1px] border-[#6A6A6A]">
      {tabs.map((tab) => (
        <p
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`
            flex-1 
            text-center 
            cursor-pointer 
            py-2
            transition-all 
            duration-200
            border-b-2
            ${
              selectedTab === tab
                ? "text-lg font-bold border-white"
                : "border-transparent"
            }
          `}
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
