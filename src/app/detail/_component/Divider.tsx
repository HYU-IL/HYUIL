interface DividerProps {
  height?: string;
}

function Divider({ height }: DividerProps) {
  return (
    <div className={`w-full bg-gray-300 h-[${height}px]`} />
  );
}

export default Divider;
