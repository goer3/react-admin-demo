import React from 'react';
import {Button, Dropdown} from 'antd';
import {DownloadOutlined, DownOutlined, FileExcelOutlined, UploadOutlined, UserAddOutlined,} from '@ant-design/icons'; // 按钮组

// 按钮组
const UserBtnGroup = () => {
  const items = [
    {
      label: '激活选中用户',
      key: '1',
    },
    {
      label: '禁用选中用户',
      key: '2',
    },
    {
      label: '启用选中用户',
      key: '3',
    },
    {
      label: '锁定选中用户',
      key: '4',
    },
    {
      label: '解锁选中用户',
      key: '5',
    },
    {
      label: '删除选中用户',
      key: '6',
    },
  ];

  const menuProps = {
    items,
    onClick: () => {},
  };

  return (
    <div className="admin-tb-header">
      <div className="admin-tb-btn-left">
        <Button style={{ marginLeft: 0 }} type="primary" icon={<UserAddOutlined />}>
          新建用户
        </Button>
        <Dropdown menu={menuProps}>
          <Button>
            批量操作
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="admin-tb-btn-right">
        <Button icon={<FileExcelOutlined />}>模板下载</Button>
        <Button icon={<UploadOutlined />}>用户导入</Button>
        <Button icon={<DownloadOutlined />}>用户导出</Button>
      </div>
    </div>
  );
};

export default UserBtnGroup;
