import { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './common.module.scss';
import { Button, Empty, Space, Table, Tag, Typography, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ListSearch from '@/components/listSearch/ListSearch.tsx';
const { confirm } = Modal;
const { Title } = Typography;

const rawQuestionList = [
  {
    _id: 'q1',
    title: 'q1',
    isStar: true,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
  {
    _id: 'q2',
    title: 'q2',
    isStar: false,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
];

const Trash: FC = () => {
  useTitle('问卷网-回收站');

  const [questionList] = useState(rawQuestionList);
  const [selectIds, setSelectedIds] = useState([] as React.Key[]);
  function del() {
    confirm({
      title: '确定彻底删除该问卷?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后无法找回',
      onOk: () => alert(JSON.stringify(selectIds)),
    });
  }
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing"> 已发布</Tag>
        ) : (
          <Tag>未发布 </Tag>
        );
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];
  const TableElem = (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button disabled={selectIds.length === 0}>
            恢复
          </Button>
          <Button color="default" onClick={del}>
            删除
          </Button>
        </Space>
      </div>
      <Table
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedIds(selectedRowKeys);
          },
        }}
        rowKey={(q) => q._id}
        dataSource={questionList}
        columns={columns}
      />
    </div>
  );
  return (
    <>
      <div className={styles.commonHeader}>
        <div className={styles.commonHeaderLeft}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.commonHeaderRight}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.commonContent}>
        {questionList.length === 0 ? (
          <Empty description={<span>回收站没有数据</span>} />
        ) : (
          TableElem
        )}
      </div>
      <div className={styles.commonFooter}>分页</div>
    </>
  );
};

export default Trash;
