import React from 'react';

const Title = ({ title, className }) => {
  return (
    <div className={`text-2xl font-semibold text-[#F0F0F0] ${className}`}>
      {title}
    </div>
  );
};

export default Title;