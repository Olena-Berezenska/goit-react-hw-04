import React from 'react';
import stll from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ pagesDiff, OnClickLoadMore, loading }) => {
  return (
    pagesDiff !== 0 &&
    !loading && (
      <div className={stll.loadmoreBtnwrapp}>
        <button onClick={OnClickLoadMore}>Load more</button>
      </div>
    )
  );
};

export default LoadMoreBtn;
