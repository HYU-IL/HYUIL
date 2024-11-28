interface TitleBoxProps {
  arrange?: string;
  name?: string;
  rdnm_adr?: string;
  category?: string;
  date?: string;
}

function TitleBox({
  arrange,
  name,
  rdnm_adr = "",
  category = "",
  date = "",

  ...props
}: TitleBoxProps) {
  const subtitle = (): string => {
    const siIndex = rdnm_adr?.indexOf("시") || 0;
    const si = rdnm_adr?.slice(siIndex - 2, siIndex) || "";
    return si + " " + category;
  };
  const hashtage = (): string => {
    switch (category) {
      case "캠핑":
        return "";
      case "템플스테이":
        return "#마운틴 뷰";
      case "해변":
        return "#오션 뷰";
      case "축제":
        return `${date}`;
      case "공유 오피스":
        return "공유 오피스"; 
      default:
        return "";
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`px-[16px] pt-[20px] pb-[30px] w-full flex flex-col ${
          arrange === "middle" ? `items-center` : `items-start`
        } items-start justify-center gap-1`}
      >
        <span className="text-caption2 text-primary-900">{subtitle()}</span>
        <span className="text-primary-900 font-semibold text-[24px] leading-5 tracking-tight ">
          {name || name}
        </span>
        <span className="text-[#999999] font-normal leading-4">
          {hashtage()}
        </span>
      </div>
    </div>
  );
}

export default TitleBox;
