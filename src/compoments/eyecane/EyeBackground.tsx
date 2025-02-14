import { CircleChart } from "../common/CircleChart";

export function EyeBackground() {
  return (
    <div className="w-full flex flex-col justify-center mb-20 border-b-white">
      <p className="w-full text-center mb-4">Overview</p>
      <p className="w-full text-center mb-10 text-4xl font- max-w-">
        저시력자들은 일상에서 정말 많은 어려움을 겪고 있을까?
      </p>
      <div className="flex w-full justify-center gap-10">
        <CircleChart />
        <div>
          <p className="max-w-[480px] w-full">
            한국시각장애인연합회(KFVB, 2020) 조사에 따르면, 저시력자의 약 70%가
            이동(보행, 대중교통 이용)에 어려움을 겪고 있으며, 60%는 독립적인
            일상생활(독서, 쇼핑, 요리 등)에 어려움을 호소했습니다.
          </p>
          <p className="opacity-50 mt-2">출처: 한국시각장애인연합회 보고서</p>
        </div>
      </div>
    </div>
  );
}
