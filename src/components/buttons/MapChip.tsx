interface MapChipProps {
  label?: string;
}

function MapChip({ label }: MapChipProps) {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-fit px-4 gap-2 py-1 border border-[#cdcece] rounded-full shadow-xl focus:border-2 focus:border-[#649EFF]"
    >
      {label && label}
    </button>
  );
}


export default MapChip;
