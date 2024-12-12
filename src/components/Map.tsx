'use client'
import { useState, useEffect } from 'react';

interface MapProps{
    changeLoc: (location:string) => void;
}

type LocationKey = 
  | "Pyeongchang"
  | "Cheorwon"
  | "Goseong"
  | "Hwacheon"
  | "Yanggu"
  | "Inje"
  | "Chuncheon"
  | "Sokcho"
  | "Hongcheon"
  | "Yangyang"
  | "Gangneung"
  | "Hoengseong"
  | "Wonju"
  | "Yeongwol"
  | "Jeongseon"
  | "Donghae"
  | "Taebaek"
  | "Samcheok";

const locationNames: Record<LocationKey, string> = {
  Pyeongchang: "평창",
  Cheorwon: "철원",
  Goseong: "고성",
  Hwacheon: "화천",
  Yanggu: "양구",
  Inje: "인제",
  Chuncheon: "춘천",
  Sokcho: "속초",
  Hongcheon: "홍천",
  Yangyang: "양양",
  Gangneung: "강릉",
  Hoengseong: "횡성",
  Wonju: "원주",
  Yeongwol: "영월",
  Jeongseon: "정선",
  Donghae: "동해",
  Taebaek: "태백",
  Samcheok: "삼척",
};

export default function Map({changeLoc}: MapProps) {
  const [selectedLoc, setSelectedLoc] = useState("Pyeongchang"); 
  const koreanName = locationNames[selectedLoc as LocationKey];

  useEffect(() => {
    changeLoc(koreanName);
  }, [selectedLoc, koreanName, changeLoc]);
    
  return (
    <div className="w-full relative">
        <div className="w-full flex justify-center absolute top-0 left-0">
            <div 
                className="w-[56px] h-[34px] text-center content-center rounded-[54px] m-[10px] text-subtitle3 text-sub-core"
                style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)' }}>
                    { koreanName }
            </div>
        </div>
        <div className="w-[100%] m-auto flex justify-center">
            <div
                className="w-full h-[500px] bg-no-repeat bg-center flex flex-col max-w-[380px] min-w-[360px]"
                style={{
                    backgroundImage: `url("/assets/images/map/${selectedLoc}.svg")`,
                    backgroundSize: "contain",
                }}
                >
                <div className="w-full h-[30px] flex">
                    <div className="h-[30px] w-[20%]" onClick={()=>setSelectedLoc("Cheorwon")}></div>
                    <div className="h-[30px] w-[80%]"></div>
                </div>
                <div className="w-full h-[50px] flex">
                    <div className="h-[50px] w-[45%]" onClick={()=>setSelectedLoc("Cheorwon")}></div>
                    <div className="h-[50px] w-[25%]"></div>
                    <div className="h-[50px] w-[10%]" onClick={()=>setSelectedLoc("Goseong")}></div>
                    <div className="h-[50px] w-[20%]"></div>
                </div>
                <div className=" w-full h-[30px] flex">
                    <div className=" h-[30px] w-[15%]"></div>
                    <div className="h-[30px] w-[28%]" onClick={()=>setSelectedLoc("Hwacheon")}></div>
                    <div className="h-[30px] w-[17%]" onClick={()=>setSelectedLoc("Yanggu")}></div>
                    <div className="h-[30px] w-[7%]" onClick={()=>setSelectedLoc("Inje")}></div>
                    <div className="h-[30px] w-[15%]" onClick={()=>setSelectedLoc("Goseong")}></div>
                    <div className="h-[30px] w-[18%]"></div>
                </div>
                <div className="w-full h-[30px] flex">
                    <div className="h-[30px] w-[20%]"></div>
                    <div className="h-[30px] w-[10%]" onClick={()=>setSelectedLoc("Chuncheon")}></div>
                    <div className="h-[30px] w-[10%]" onClick={()=>setSelectedLoc("Hwacheon")}></div>
                    <div className="h-[30px] w-[15%]" onClick={()=>setSelectedLoc("Yanggu")}></div>
                    <div className="h-[30px] w-[15%]" onClick={()=>setSelectedLoc("Inje")}></div>
                    <div className="h-[30px] w-[10%]" onClick={()=>setSelectedLoc("Goseong")}></div>
                    <div className="h-[30px] w-[20%]"></div>
                </div>
                <div className="w-full h-[30px] flex">
                    <div className="h-[30px] w-[15%]"></div>
                    <div className="h-[30px] w-[27%]" onClick={()=>setSelectedLoc("Chuncheon")}></div>
                    <div className="h-[30px] w-[28%]" onClick={()=>setSelectedLoc("Inje")}></div>
                    <div className="h-[30px] w-[10%]" onClick={()=>setSelectedLoc("Sokcho")}></div>
                    <div className="h-[30px] w-[20%]"></div>
                </div>
                <div className="w-full h-[40px] flex">
                    <div className="h-[40px] w-[14%]"></div>
                    <div className="h-[40px] w-[19%]" onClick={()=>setSelectedLoc("Chuncheon")}></div>
                    <div className="h-[40px] w-[15%]" onClick={()=>setSelectedLoc("Hongcheon")}></div>
                    <div className="h-[40px] w-[22%]" onClick={()=>setSelectedLoc("Inje")}></div>
                    <div className="h-[40px] w-[15%]" onClick={()=>setSelectedLoc("Yangyang")}></div>
                    <div className="h-[40px] w-[15%]"></div>
                </div>
                <div className="w-full h-[25px] flex">
                    <div className="h-[25px] w-[15%]"></div>
                    <div className="h-[25px] w-[55%]" onClick={()=>setSelectedLoc("Hongcheon")}></div>
                    <div className="h-[25px] w-[15%]" onClick={()=>setSelectedLoc("Yangyang")}></div>
                    <div className="h-[25px] w-[15%]"></div>
                </div>
                <div className="w-full h-[15px] flex">
                    <div className="h-[15px] w-[20%]"></div>
                    <div className="h-[15px] w-[50%]" onClick={()=>setSelectedLoc("Hongcheon")}></div>
                    <div className="h-[15px] w-[15%]" onClick={()=>setSelectedLoc("Gangneung")}></div>
                    <div className="h-[15px] w-[15%]"></div>
                </div>
                <div className="w-full h-[15px] flex">
                    <div className="h-[15px] w-[20%]"></div>
                    <div className="h-[15px] w-[25%]" onClick={()=>setSelectedLoc("Hoengseong")}></div>
                    <div className="h-[15px] w-[27%]" onClick={()=>setSelectedLoc("Hongcheon")}></div>
                    <div className="h-[15px] w-[14%]" onClick={()=>setSelectedLoc("Gangneung")}></div>
                    <div className="h-[15px] w-[14%]"></div>
                </div>
                <div className="w-full h-[15px] flex">
                    <div className="h-[15px] w-[19%]"></div>
                    <div className="h-[15px] w-[29%]" onClick={()=>setSelectedLoc("Hoengseong")}></div>
                    <div className="h-[15px] w-[29%]" onClick={()=>setSelectedLoc("Pyeongchang")}></div>
                    <div className="h-[15px] w-[11%]" onClick={()=>setSelectedLoc("Gangneung")}></div>
                    <div className="h-[15px] w-[12%]"></div>
                </div>
                <div className="w-full h-[35px] flex">
                    <div className="h-[35px] w-[15%]"></div>
                    <div className="h-[35px] w-[17%]" onClick={()=>setSelectedLoc("Wonju")}></div>
                    <div className="h-[35px] w-[17%]" onClick={()=>setSelectedLoc("Hoengseong")}></div>
                    <div className="h-[35px] w-[26%]" onClick={()=>setSelectedLoc("Pyeongchang")}></div>
                    <div className="h-[35px] w-[16%]" onClick={()=>setSelectedLoc("Gangneung")}></div>
                    <div className="h-[35px] w-[9%]"></div>
                </div>
                <div className="w-full h-[20px] flex">
                    <div className="h-[20px] w-[10%]"></div>
                    <div className="h-[20px] w-[22%]" onClick={()=>setSelectedLoc("Wonju")}></div>
                    <div className="h-[20px] w-[12%]" onClick={()=>setSelectedLoc("Hoengseong")}></div>
                    <div className="h-[20px] w-[25%]" onClick={()=>setSelectedLoc("Pyeongchang")}></div>
                    <div className="h-[20px] w-[24%]" onClick={()=>setSelectedLoc("Gangneung")}></div>
                    <div className="h-[20px] w-[7%]"></div>
                </div>
                <div className="w-full h-[25px] flex">
                    <div className="h-[25px] w-[10%]"></div>
                    <div className="h-[25px] w-[25%]" onClick={()=>setSelectedLoc("Wonju")}></div>
                    <div className="h-[25px] w-[10%]" onClick={()=>setSelectedLoc("Yeongwol")}></div>
                    <div className="h-[25px] w-[12%]" onClick={()=>setSelectedLoc("Pyeongchang")}></div>
                    <div className="h-[25px] w-[24%]" onClick={()=>setSelectedLoc("Jeongseon")}></div>
                    <div className="h-[25px] w-[13%]" onClick={()=>setSelectedLoc("Donghae")}></div>
                    <div className="h-[25px] w-[6%]"></div>
                </div>
                <div className="w-full h-[20px] flex">
                    <div className="h-[20px] w-[35%]"></div>
                    <div className="h-[20px] w-[22%]" onClick={()=>setSelectedLoc("Yeongwol")}></div>
                    <div className="h-[20px] w-[20%]" onClick={()=>setSelectedLoc("Jeongseon")}></div>
                    <div className="h-[20px] w-[20%]" onClick={()=>setSelectedLoc("Donghae")}></div>
                    <div className="h-[20px] w-[8%]"></div>
                </div>
                <div className="w-full h-[45px] flex">
                    <div className="h-[45px] w-[38%]"></div>
                    <div className="h-[45px] w-[19%]" onClick={()=>setSelectedLoc("Yeongwol")}></div>
                    <div className="h-[45px] w-[16%]" onClick={()=>setSelectedLoc("Jeongseon")}></div>
                    <div className="h-[45px] w-[6%]" onClick={()=>setSelectedLoc("Taebaek")}></div>
                    <div className="h-[45px] w-[16%]" onClick={()=>setSelectedLoc("Samcheok")}></div>
                    <div className="h-[45px] w-[5%]"></div>
                </div>
                <div className="w-full h-[35px] flex">
                    <div className="h-[35px] w-[50%]"></div>
                    <div className="h-[35px] w-[17%]" onClick={()=>setSelectedLoc("Yeongwol")}></div>
                    <div className="h-[35px] w-[13%]" onClick={()=>setSelectedLoc("Taebaek")}></div>
                    <div className="h-[35px] w-[20%]" onClick={()=>setSelectedLoc("Samcheok")}></div>
                </div>
                <div className="w-full h-[40px] flex">
                    <div className="h-[40px] w-[80%]"></div>
                    <div className="h-[40px] w-[20%]" onClick={()=>setSelectedLoc("Samcheok")}></div>
                </div>
            </div>
        </div>

    </div>
  );
}
