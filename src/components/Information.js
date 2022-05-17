import React from 'react';
const Information = () => {
  return (
    <>
      <div className="info">
        <div className="green">
          <p id="done">Done</p>
        </div>
        <div className="red">
          <p>Not Started</p>
        </div>
        <div className="yellow">
          <p>In progress</p>
        </div>
      </div>
      <p className="about">Created by Viacheslav Semushin</p>
    </>
  );
};

export default Information;
