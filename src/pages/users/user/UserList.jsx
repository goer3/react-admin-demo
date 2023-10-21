import React from 'react';
import { Avatar, Button, Table, Tag } from 'antd';

const columns = [
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (_, { avatar }) => {
      return (
        <>
          <Avatar src={avatar} size={20} />
        </>
      );
    },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    render: (_, { gender }) => {
      let color;
      let word;
      switch (gender) {
        case 1:
          color = 'geekblue';
          word = '男';
          break;
        case 2:
          color = 'red';
          word = '女';
          break;
        default:
          color = 'green';
          word = '未知';
          break;
      }

      return (
        <>
          <Tag color={color}>{word}</Tag>
        </>
      );
    },
  },
  {
    title: '工号',
    dataIndex: 'job_number',
    key: 'job_number',
  },
  {
    title: '手机号码',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '岗位名称',
    dataIndex: 'job',
    key: 'job',
  },
  {
    title: '办公地点',
    dataIndex: 'address',
    key: 'address',
    render: (_, { work_province, work_city, work_address }) => {
      return <>{work_province + work_city + work_address}</>;
    },
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (_, { role }) => {
      let color;
      let word;
      switch (role) {
        case 1:
          color = 'red';
          word = '超级管理员';
          break;
        case 2:
          color = 'green';
          word = '普通用户';
          break;
        default:
          color = 'gold';
          word = '访客';
          break;
      }

      return (
        <>
          <Tag color={color}>{word}</Tag>
        </>
      );
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) => {
      let color;
      let word;
      switch (status) {
        case 0:
          color = 'green';
          word = '激活';
          break;
        case 1:
          color = 'gold';
          word = '未激活';
          break;
        case 2:
          color = 'volcano';
          word = '锁定';
          break;
        default:
          color = 'red';
          word = '禁用';
          break;
      }

      return (
        <>
          <Tag color={color}>{word}</Tag>
        </>
      );
    },
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (_, {}) => {
      return (
        <>
          <Button className="admin-tb-action-btn">详情</Button>
          <Button type="primary" className="admin-tb-action-btn">
            编辑
          </Button>
          <Button type="danger" className="admin-tb-action-btn">
            删除
          </Button>
        </>
      );
    },
  },
];

const data = [
  {
    key: 1,
    avatar: '/src/assets/images/avatar.jpg',
    name: '张三',
    gender: 1,
    job_number: 'EZ00001',
    mobile: '13333333333',
    email: 'fortress@ezops.cn',
    job: '高级运维工程师',
    work_province: '广东省',
    work_city: '深圳市',
    work_address: '南山区科技园',
    role: 1,
    status: 0,
  },
  {
    key: 2,
    avatar: '/src/assets/images/avatar.jpg',
    name: '李四',
    gender: 2,
    job_number: 'EZ00002',
    mobile: '13333333333',
    email: 'fortress@ezops.cn',
    job: '高级运维工程师',
    work_province: '广东省',
    work_city: '深圳市',
    work_address: '南山区科技园',
    role: 2,
    status: 2,
  },
  {
    key: 3,
    avatar: '/src/assets/images/avatar.jpg',
    name: '张三',
    gender: 1,
    job_number: 'EZ00002',
    mobile: '13333333333',
    email: 'fortress@ezops.cn',
    job: '高级运维工程师',
    work_province: '广东省',
    work_city: '深圳市',
    work_address: '南山区科技园',
    role: 2,
    status: 1,
  },
  {
    key: 4,
    avatar: '/src/assets/images/avatar.jpg',
    name: '张三',
    gender: 1,
    job_number: 'EZ00002',
    mobile: '13333333333',
    email: 'fortress@ezops.cn',
    job: '高级运维工程师',
    work_province: '广东省',
    work_city: '深圳市',
    work_address: '南山区科技园',
    role: 3,
    status: 3,
  },
  {
    key: 5,
    avatar: '/src/assets/images/avatar.jpg',
    name: '张三',
    gender: 1,
    job_number: 'EZ00002',
    mobile: '13333333333',
    email: 'fortress@ezops.cn',
    job: '高级运维工程师',
    work_province: '广东省',
    work_city: '深圳市',
    work_address: '南山区科技园',
    role: '超级管理员',
    status: 2,
  },
];

// 用户列表组件
const UserList = () => {
  return (
    <>
      <div className="admin-tb">
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          rowSelection={{
            type: 'checkbox',
          }}
          // bordered
        />
      </div>
    </>
  );
};

export default UserList;
