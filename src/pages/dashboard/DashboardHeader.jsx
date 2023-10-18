import React from 'react';
import {Avatar, Statistic} from 'antd';
import {DefaultAvatar} from '../../utils/Resources.jsx'; // 工作台 Header

// 问候语
function generateHelloWord(name) {
  let hour = new Date().getHours();
  let hello;
  if (hour > 22) {
    hello = '夜深了，' + name + '，别卷了，要好好休息哦 ~';
  } else if (hour > 18) {
    hello = '晚上好，' + name + '，适当加班，然后回家吧 ~';
  } else if (hour > 14) {
    hello = '下午好，' + name + '，如果困了，来杯咖啡提神吧 ~';
  } else if (hour > 11) {
    hello = '中午好，' + name + '，好好吃饭，好好休息，中午不睡下午崩溃哦 ~';
  } else if (hour > 6) {
    hello = '早上好，' + name + '，新的一天，也要元气满满哦 ~';
  } else if (hour > 3) {
    hello = 'OH MY GOD，' + name + '，也太早了吧，你是还没睡吗 ~';
  } else {
    hello = '打扰了，' + name + '，这个时候不是应该睡觉吗 ~';
  }
  return hello;
}

// 工作台 Header
const DashboardHeader = () => {
  // 问候语
  let hello = generateHelloWord('吴彦祖');

  return (
    <div className="admin-ph">
      <div className="admin-ph-left">
        <div className="admin-ph-avatar">
          <Avatar src={DefaultAvatar} size={60} />
        </div>
        <div className="admin-ph-info">
          <div className="admin-ph-welcome">{hello}</div>
          <div className="admin-ph-desc">
            高级运维工程师 | 深圳运维集团 － 产品研发中心 － 运维组 － DevOPS 团队
          </div>
        </div>
      </div>
      <div className="admin-ph-right">
        <Statistic
          title="用户数量"
          value={1024}
          style={{
            marginRight: 30,
          }}
        />
        <Statistic
          title="入职天数"
          value={65535}
          style={{
            marginRight: 30,
          }}
        />
        <Statistic title="任务数量" value={16384} />
      </div>
    </div>
  );
};

export default DashboardHeader;
