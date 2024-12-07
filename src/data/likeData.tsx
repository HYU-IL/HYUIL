export interface likeDataType{
    name: string;
    category: string;
    rdmn_adr: string;
    image: string;
}

export const LikeData : likeDataType[] = [
    {   name: "웨이브웍스 양양", 
        rdmn_adr: "강원특별자치도 양양군 현남면 인구중앙길 110", 
        category: "공유오피스", 
        image: "/assets/images/mockimg/office2.png" 
    },
    {   name: "속초 해수욕장", 
        rdmn_adr: "강원특별자치도 속초시 청호해안길 2", 
        category: "휴양, 해변", 
        image: "/assets/images/mockimg/beach3.png" 
    },
];