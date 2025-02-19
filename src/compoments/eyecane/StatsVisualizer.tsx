import React from "react";

interface StatItem {
  category: string;
  percentage: number;
  description: string;
}

interface StatsProps {
  title?: string;
  stats: StatItem[];
  source?: string;
}

const StatsVisualizer: React.FC<StatsProps> = ({
  title = "통계 현황", // 기본값 설정
  stats,
  source,
}) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="space-y-8">
        {stats.map((stat) => (
          <div key={stat.category} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-md font-semibold text-gray-700">
                {stat.category}
              </span>
              <span className="text-lg font-bold text-blue-600">
                {stat.percentage}%
              </span>
            </div>
            <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-1000 ease-out"
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
            <div className="text-sm text-gray-500">({stat.description})</div>
          </div>
        ))}
      </div>

      {source && (
        <div className="mt-6 text-sm text-gray-500">출처: {source}</div>
      )}
    </div>
  );
};

export default StatsVisualizer;
