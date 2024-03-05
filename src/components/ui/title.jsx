import React from 'react';

const Title = ({ title, className }) => {
  return (
    <div className={`text-2xl font-semibold ${className}`}>
      {title}
    </div>
  );
};

export default Title;