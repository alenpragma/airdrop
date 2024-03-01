import React from 'react';

const Title = ({ title, className }) => {
  return (
    <div className={`text-2xl ${className}`}>
      {title}
    </div>
  );
};

export default Title;