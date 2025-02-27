import React from 'react';

const HeaderBox = ({ type = 'title', title, subtext, user }) => {
  return (
    <div className="header-box">
      <h1 className="text-14 lg:text-16 font-normal text-gray-600">
        {title}

        {type === 'greeting' && (
          <span className="text-14 lg:text-16 font-normal text-indigo-600">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="text-14 lg:text-16 font-normal text-gray-600">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
