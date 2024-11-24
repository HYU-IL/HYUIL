interface TitleContainerProps {
  arrange?: string;
  name?: string;
  rdnm_adr?: string;
  category?: string;
}

function TitleContainer({
  arrange,
  name,
  rdnm_adr = "",
  category = "",
  ...props
}: TitleContainerProps) {
  const subtitle = (): string => {
    const siIndex = rdnm_adr?.indexOf("시") || 0;
    const si = rdnm_adr?.slice(siIndex - 2, siIndex) || "";
    return si + " " + category;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="px-[16px] pt-[20px] pb-[30px] w-full flex flex-col items-start justify-center gap-1">
        <span className="text-caption2 text-primary-900">{subtitle()}</span>
        <span className="text-primary-900 font-semibold text-[24px] leading-5 tracking-tight ">
          {name || name}
        </span>
        <span className="text-[#999999] font-normal leading-4">
          #야영장 #카라반 #글램핑
        </span>
      </div>
    </div>
  );
}

export default TitleContainer;
