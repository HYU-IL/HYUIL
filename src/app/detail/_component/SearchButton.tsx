import Image from "next/image";
import RIGHT from "../../../../public/assets/icons/right.svg";

interface SearchButtonProps {
  url?: string;
}

function SearchButton({ url, ...props }: SearchButtonProps) {
  const linkToSite = () => {

  }
  return (
    <a href={url || ""}
    className="flex bg-white p-3 rounded-full items-center justify-center gap-2 absolute z-10 top-[230px] left-[220px] text-primary-900 text-body1">
      여행지 검색 <Image src={RIGHT} alt="right" />
    </a>
  );
}

export default SearchButton;
