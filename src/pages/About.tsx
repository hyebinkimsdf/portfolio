export function About() {
  return (
    <div
      className="w-full h-full mx-auto flex flex-col md:flex-row  justify-center items-center gap-20 min-w-[550px] px-4 py-8"
      id="about"
    >
      <img src="/images/home/kimhyebinPoto.png" className="  mb-4 md:mb-0" />
      <div className="flex flex-col text-white gap-2">
        <p className="text-4xl font-bold sm:text-5xl md:text-4xl mb-2">
          김혜빈
        </p>
        <p className="opacity-50 text-sm text-center mb-4">
          개발자와 디테일한 소통이 가능하며 3D 구현에 능숙한 UX/UI 디자이너
        </p>

        <div className="flex gap-2 justify-center sm:justify-start">
          <img src="/icons/phone.svg" className="w-6 h-6 opacity-60" />
          <p>010-3967-1421</p>
        </div>
        <div className="flex gap-2 justify-center sm:justify-start">
          <img src="/icons/email.svg" className="w-6 h-6 opacity-60" />
          <p>hyebinkimdesign@gmail.com</p>
        </div>
        <div className="flex gap-2 justify-center sm:justify-start">
          <img src="/icons/github.svg" className="w-6 h-6 opacity-60" />
          <p>https://github.com/hyebinkimsdf</p>
        </div>
      </div>
    </div>
  );
}
