import React from 'react';
import AdminPageHeader from '../../common/AdminPageHeader.jsx';
import UserList from './UserList.jsx';
import UserSearch from './UserSearch.jsx';

// 用户列表
const User = () => {
  const title = '用户管理'; // 页面标题
  const notices = [
    // 提示信息
    {
      id: 1,
      content:
        '管理用户可以对用户进行：搜索查看，新增创建，编辑修改，禁用启用，锁定解锁，删除等操作。',
    },
    {
      id: 2,
      content:
        '删除用户后，用户信息在数据库中依然存在，默认删除属于软删除，想要找回可以联系管理员。',
    },
  ];

  return (
    <div>
      <AdminPageHeader title={title} notices={notices} />
      <div className="admin-content-main">
        <UserSearch />
        <UserList />
      </div>
    </div>
  );
};

export default User;
