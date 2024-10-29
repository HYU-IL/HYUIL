import React from 'react';

interface CategoryTitleProps {
  label?: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ label }) => {
  return (
    <h2 className='text-primary-400 text-title2 font-Pretendard'>
      {label}
    </h2>
  );
};

export default CategoryTitle;
