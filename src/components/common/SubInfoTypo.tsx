import React from 'react';

interface SubInfoTypoProps {
  label?: string;
}

const SubInfoTypo: React.FC<SubInfoTypoProps> = ({ label }) => {
  return (
    <h2 className='text-secondary-400 w-[600] font-semibold leading-[14px] tracking-tighter font-Pretendard'>
      {label}
    </h2>
  );
};

export default SubInfoTypo;
