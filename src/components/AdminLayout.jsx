import {
  AlertOutlined,
  ApiOutlined,
  AuditOutlined,
  BranchesOutlined,
  CodeOutlined,
  FileProtectOutlined,
  FlagOutlined,
  HomeOutlined,
  InsuranceOutlined,
  PartitionOutlined,
  ScanOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';
import React, { useState } from 'react';
// import CodingLogo from '../../assets/images/coding-logo.svg';
import Logo from '../assets/images/logo.png';
import './AdminLayout.css';
const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menus = [
  getItem('工作空间', '1', <HomeOutlined />),
  getItem('流程审批', '100', <AuditOutlined />, [
    getItem('流程创建', '101'),
    getItem('流程列表', '102'),
    getItem('待我审批', '103'),
  ]),
  getItem('作业中心', '110', <ScanOutlined />, [
    getItem('定时任务', '111'),
    getItem('批量任务', '112'),
    getItem('任务监控', '113'),
  ]),
  getItem('资产管理', '200', <CodeOutlined />, [
    getItem('自建机房', '201'),
    getItem('云联托管', '202'),
    getItem('云商接入', '203'),
  ]),
  getItem('域名解析', '300', <ApiOutlined />, [
    getItem('内网解析', '303'),
    getItem('自建接入', '304'),
    getItem('外网解析', '301'),
    getItem('网商接入', '302'),
  ]),
  getItem('制品管理', '400', <BranchesOutlined />, [
    getItem('制品构建', '401'),
    getItem('制品仓库', '402'),
    getItem('构建模板', '403'),
  ]),
  getItem('应用发布', '500', <FlagOutlined />, [
    getItem('主机发布', '501'),
    getItem('容器发布', '502'),
    getItem('发布模板', '503'),
  ]),
  getItem('监控告警', '600', <AlertOutlined />, [
    getItem('监控大盘', '601'),
    getItem('告警规则', '602'),
    getItem('告警媒介', '603'),
    getItem('告警历史', '604'),
  ]),
  getItem('项目维护', '610', <PartitionOutlined />, [
    getItem('项目列表', '611'),
    getItem('应用列表', '612'),
  ]),
  getItem('用户管理', '700', <TeamOutlined />, [
    getItem('部门列表', '701'),
    getItem('用户列表', '702'),
    getItem('用户分组', '703'),
  ]),
  getItem('系统管理', '1000', <SettingOutlined />, [
    getItem('菜单管理', '1004'),
    getItem('接口管理', '1005'),
    getItem('角色管理', '1006'),
    getItem('基础配置', '1007'),
  ]),
  getItem('日志审计', '2000', <InsuranceOutlined />, [
    getItem('操作日志', '2001'),
    getItem('登录日志', '2002'),
    getItem('改密日志', '2003'),
    getItem('机器日志', '2004'),
  ]),
  getItem('个人中心', '3000', <UserOutlined />),
  getItem('获取帮助', '9999', <FileProtectOutlined />),
];

// 只能使用这个变量名称
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        用户中心
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        禁用按钮
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        注销登录
      </a>
    ),
  },
];

const AdminLayout = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Header className="admin-header">
          <div className="admin-header-left">
            <img src={Logo} className="admin-logo" alt="" />
          </div>
          <div className="admin-header-right">
            <Dropdown
              menu={{
                items,
              }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar
                    className="admin-avatar"
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.ZajtkkT_I2qt_EXCwhbthQAAAA?pid=ImgDet&rs=1"
                  />
                  {/* <span style={{ marginRight: 10 }}>Jayce Kuang</span> */}
                  <i className="admin-dropdown-icon"></i>
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout className="admin-main">
          <Sider
            width={220}
            className="admin-sider"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}>
            <Menu
              className="admin-sider-menu"
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={menus}
            />
          </Sider>
          <Layout>
            <Content className="admin-content">Content</Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default AdminLayout;
