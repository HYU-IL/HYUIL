import React from 'react';

interface CategoryTitleProps {
  label?: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ label }) => {
  return (
    <h2 className='w-fit flex justify-center text-primary-core text-title2 font-Pretendard'>
      {label}
    </h2>
  );
};

export default CategoryTitle;
