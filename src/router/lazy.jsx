import React, {Suspense} from 'react';
import {Spin} from 'antd'; // 加载中显示内容

// loading 内容
const Loading = () => {
  return (
    <div className="admin-data-loading">
      <Spin tip="Loading..." />
    </div>
  );
};

// 惰性加载实现
const LazyLoad = (Component) => {
  return (
    // fallback 显示加载中内容
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
