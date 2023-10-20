import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';

const { Option } = Select;

// 表单布局
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

// 搜索框布局宽度
const searchFiledSpan = 6;

// 搜索框
const allSearchFiled = [
  <Col span={searchFiledSpan} key="username">
    <Form.Item name="username" label="用户名">
      <Input placeholder="通过用户名检索用户" />
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="name">
    <Form.Item name="name" label="姓名">
      <Input placeholder="通过姓名检索用户" />
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="email">
    <Form.Item name="email" label="邮箱">
      <Input placeholder="通过邮箱检索用户" />
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="mobile">
    <Form.Item name="mobile" label="手机号码">
      <Input placeholder="通过手机号码检索用户" />
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="gender">
    <Form.Item name="gender" label="性别">
      <Select>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="status">
    <Form.Item name="status" label="状态">
      <Select>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="address">
    <Form.Item name="address" label="办公地点">
      <Input placeholder="通过办公地点检索用户" />
    </Form.Item>
  </Col>,
  <Col span={searchFiledSpan} key="job">
    <Form.Item name="job" label="职位">
      <Input placeholder="通过职位检索用户" />
    </Form.Item>
  </Col>,
];

// 所有搜索框数量
const searchFiledCount = allSearchFiled.length;

// 默认显示搜索框数量
const defaultSearchFiledCount = 4;

// 用户搜索
const UserSearch = () => {
  const [form] = Form.useForm();

  // 搜索框状态
  const [searchExpand, setSearchExpand] = useState(false);

  // 提交数据
  const onFinish = (values) => {
    console.log('提交数据: ', values);
  };

  // 生成搜索表单
  const getSearchFiled = () => {
    // 根据是否展开显示不同数量的搜索框
    const count = searchExpand ? searchFiledCount : defaultSearchFiledCount;
    if (searchExpand) {
      return allSearchFiled;
    } else {
      return allSearchFiled.slice(0, count);
    }
  };

  return (
    <>
      <Form form={form} name="user_search" onFinish={onFinish} {...formItemLayout}>
        <Row gutter={24}>{getSearchFiled()}</Row>
        <Row gutter={24}>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}>
            <Button type="primary" htmlType="submit">
              搜索用户
            </Button>
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => {
                form.resetFields();
              }}>
              清除条件
            </Button>
            <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setSearchExpand(!searchExpand);
              }}>
              {searchExpand ? (
                <span>
                  <i className="admin-dropup-icon admin-dropup-search"></i>
                  <span>收起更多</span>
                </span>
              ) : (
                <span>
                  <i className="admin-dropdown-icon admin-dropdown-search"></i>
                  <span>展开更多</span>
                </span>
              )}
            </a>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default UserSearch;
