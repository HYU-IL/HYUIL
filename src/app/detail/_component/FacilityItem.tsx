import { IoCheckmarkCircle } from "react-icons/io5";
interface FacilityItemProps {
  label?: string;
}

function FacilityItem({label}: FacilityItemProps) {
  return (
    <div className="w-fit flex flex-row text-gray-600 text-body2 justify-center items-center gap-[2px]">
      <IoCheckmarkCircle className="text-[#649EFF] text-[20px]"/>
      {label}
    </div>
  );
}

export default FacilityItem;
