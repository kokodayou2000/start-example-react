import { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './ManageLayout.module.scss';
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Button, Divider, message, Space } from 'antd';
import { createQuestion } from '@/api/question.ts';
import { EDIT, QUESTION, wrapPath } from '@/router/routerConstant.ts';
import { useRequest } from 'ahooks';
import { QuestionProps } from '@/types';

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { loading, run: doCreateAPI } = useRequest(createQuestion, {
    manual: true,
    onSuccess(result: QuestionProps) {
      nav(wrapPath(QUESTION, EDIT, result.id));
      message.success('创建成功');
    },
  });
  return (
    <div className={styles.manageContainer}>
      <div className={styles.manageLeft}>
        <Space direction="vertical">
          <Button
            size="large"
            icon={<PlusOutlined />}
            onClick={doCreateAPI}
            disabled={loading}
          >
            新建问卷
          </Button>
          <Divider style={{ borderTop: 'transparent' }} />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.manageRight}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
