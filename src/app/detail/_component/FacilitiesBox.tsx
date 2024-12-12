import Image, { StaticImageData } from "next/image";
import grass from "../../../../public/assets/icons/grass.svg";
import deck from "../../../../public/assets/icons/deck.svg";
import soil from "../../../../public/assets/icons/soil.svg";
import crushed_stone from "../../../../public/assets/icons/crused_stone.svg";
import gravel from "../../../../public/assets/icons/gravel.svg";
interface FacilitiesBoxProps {
  facilities: {
    grass: number;
    deck: number;
    soil: number;
    crushed_stone: number;
    gravel: number;
  };
}

interface facilType {
  imgsrc: StaticImageData;
  text: string;
  num: number;
}

function FacilitiesBox({ facilities }: FacilitiesBoxProps) {
  const facilList: Array<facilType> = [
    { imgsrc: grass, text: "잔디", num: facilities.grass },
    { imgsrc: deck, text: "데크", num: facilities.deck },
    { imgsrc: soil, text: "맨흙", num: facilities.soil },
    { imgsrc: crushed_stone, text: "파쇄석", num: facilities.crushed_stone },
    { imgsrc: gravel, text: "자갈", num: facilities.gravel },
  ];
  return (
    <div className="flex flex-col w-full h-[103px]  bg-white px-[16px] pt-4">
      <span className="text-subtitle1 font-bold text-primary-900">
        기타 환경
      </span>
      <div className="mt-2 flex w-full items-start">
        {facilList.map((it) =>
          it.num !== 0 ? (
            <div
              key={it.text}
              className="flex flex-col items-center gap-2 text-body2 font-normal text-primary-900 pr-7"
            >
              <Image src={it.imgsrc} alt={it.text} />
              {it.text}
            </div>
          ) : (
            <div key={it.text} />
          )
        )}
      </div>
    </div>
  );
}

export default FacilitiesBox;
