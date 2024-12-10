function GuideBox() {
  return (
    <div className="w-full h-[48%] flex flex-col items-start justify-center p-[16px]">
      <span className="text-subtitle1 font-bold">이용안내</span>
      <div className="w-full h-[100px] mt-4 px-2 py-4 rounded-lg bg-gray-200 flex flex-col items-start gap-1">
        <span className="text-caption1 font-medium text-primary-800">
          1회용품 줄이기에 동참해주세요
        </span>
        <span className="text-body2 text-gray-800 font-normal block w-[100%] text-wrap leading-4">
          2024년 3월 29일부터 일부 숙소는 1회용품(칫솔, 면도기 등)을 무료로
          제공하지 않을 수 있습니다.
        </span>
      </div>
    </div>
  );
}

export default GuideBox;
