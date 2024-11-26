import Image from "next/image";

interface MapChipProps {
  icon?: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function MapChip({ icon, label, isSelected, onClick }: MapChipProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center max-w-full gap-[4px] pl-[8px] pr-[12px] py-[6px] border rounded-full cursor-pointer whitespace-nowrap overflow-visible shadow-chip 
        ${
          isSelected
            ? "border-blue-500 bg-blue-100 text-blue-700"
            : "bg-white text-gray-900"
        }
        hover:shadow-md transition`}
    >
      {/* 아이콘 표시 */}
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={20} // 이미지 너비
          height={20} // 이미지 높이
          className="object-contain"
        />
      )}
      {/* 라벨 표시 */}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

export default MapChip;
