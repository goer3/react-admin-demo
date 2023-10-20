import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { AdminDropdownIcon, AdminDropupIcon } from '../../common/AdminIcon.jsx';

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

// 可供搜索的字段
const searchFields = [
  { name: 'username', label: '用户名', type: 'text' },
  { name: 'name', label: '姓名', type: 'text' },
  { name: 'mobile', label: '手机号', type: 'text' },
  { name: 'email', label: '邮箱', type: 'text' },
  { name: 'job_number', label: '工号', type: 'text' },
  { name: 'system_role_id', label: '角色', type: 'select' },
  { name: 'job_name', label: '岗位名称', type: 'text' },
  { name: 'system_department_id', label: '部门名称', type: 'select' },
  { name: 'native_province_id', label: '籍贯省份', type: 'select' },
  { name: 'native_city_id', label: '籍贯城市', type: 'select' },
  { name: 'active', label: '激活状态', type: 'select' },
  { name: 'unlocked', label: '锁定状态', type: 'select' },
  { name: 'gender', label: '性别', type: 'select' },
  { name: 'creator', label: '创建人', type: 'text' },
  { name: 'office_province_id', label: '办公省份', type: 'select' },
  { name: 'office_city_id', label: '办公城市', type: 'select' },
  { name: 'office_address', label: '办公地点', type: 'text' },
];

// 用户搜索
const UserSearch = () => {
  const [form] = Form.useForm();

  // 搜索框状态
  const [searchExpand, setSearchExpand] = useState(false);

  // 提交数据
  const onFinish = (values) => {
    console.log('提交数据: ', values);
  };

  // 根据是否展开显示不同数量的搜索框，默认是 4
  const count = searchExpand ? searchFields.length : 3;

  // 提交按钮布局
  let submitBtnSpan = count % 4 === 0 ? 24 : 6;
  let submitBtnTextAlign = count % 4 === 0 ? 'right' : 'left';
  if (count % 4 === 3) {
    submitBtnTextAlign = 'right';
  }

  // 用于存储传递给表单的结构
  const searchChildren = [];

  // 遍历生成搜索框数据
  for (let i = 0; i < count; i++) {
    // 每项数据和唯一的 Key
    let item = searchFields[i];

    // 输入提示信息，Placeholder
    let tp = '通过输入' + item.label + '进行搜索';
    let sp = '通过选择' + item.label + '进行搜索';

    // 默认模板
    let ele = <Input placeholder={tp} />;

    // 输入框格式
    if (item.type === 'select') {
      switch (item.name) {
        case 'system_role_id':
          ele = (
            <Select
              initialvalues="1"
              placeholder={sp}
              suffixIcon={<AdminDropdownIcon className="admin-dropdown-select" />}>
              <Option value="1">管理员</Option>
              <Option value="2">普通用户</Option>
              <Option value="3">访客</Option>
            </Select>
          );
          break;
        default:
          ele = (
            <Select
              initialvalues="1"
              placeholder={sp}
              suffixIcon={<AdminDropdownIcon className="admin-dropdown-select" />}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          );
          break;
      }
    }

    searchChildren.push(
      <Col span={6} key={item.name}>
        <Form.Item
          name={item.name}
          label={item.label}
          colon={false}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}>
          {ele}
        </Form.Item>
      </Col>,
    );
  }

  return (
    <>
      <Form form={form} name="user_search" onFinish={onFinish} {...formItemLayout}>
        <Row gutter={24}>
          {searchChildren}
          <Col
            span={submitBtnSpan}
            style={{
              textAlign: submitBtnTextAlign,
            }}>
            <div className="admin-search-btn-group">
              <Button type="primary" htmlType="submit">
                搜索用户
              </Button>
              <Button
                onClick={() => {
                  form.resetFields();
                }}>
                清除条件
              </Button>
              {searchFields.length > 3 && (
                <a
                  style={{
                    fontSize: 12,
                    height: '28px',
                    lineHeight: '28px',
                  }}
                  onClick={() => {
                    setSearchExpand(!searchExpand);
                  }}>
                  {searchExpand ? (
                    <span>
                      <AdminDropupIcon className="admin-dropup-search" />
                      <span>收起更多</span>
                    </span>
                  ) : (
                    <span>
                      <AdminDropdownIcon className="admin-dropdown-search" />
                      <span>更多搜索</span>
                    </span>
                  )}
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default UserSearch;
