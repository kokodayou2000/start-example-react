import { FC, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd';
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useRequest } from 'ahooks';
import {
  updateQuestionService,
  duplicateQuestionService,
} from '@/api/question.ts';
import styles from './QuestionCard.module.scss';
import type { PropsType } from '@/types';
import { EDIT, QUESTION, STATUS, wrapPath } from '@/router/routerConstant.ts';

const { confirm } = Modal;

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate();
  const { id, title, createdAt, answerCount, isPublished, isStar } = props;

  // 修改 标星
  const [isStarState, setIsStarState] = useState(isStar);
  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(id, { isStar: !isStarState });
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState); // 更新 state
        message.success('已更新');
      },
    },
  );

  // 复制
  const { loading: duplicateLoading, run: duplicate } = useRequest(
    // async () => {
    //   const data = await duplicateQuestionService(id)
    //   return data
    // },
    async () => await duplicateQuestionService(id),
    {
      manual: true,
      onSuccess(result) {
        message.success('复制成功');
        // `/question/edit/${result.id}`
        nav(wrapPath(QUESTION, EDIT, result.id)); // 跳转到问卷编辑页
      },
    },
  );

  // 删除
  const [isDeletedState, setIsDeletedState] = useState(false);
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(
    async () => await updateQuestionService(id, { isDeleted: true }),
    {
      manual: true,
      onSuccess() {
        message.success('删除成功');
        setIsDeletedState(true);
      },
    },
  );

  function del() {
    confirm({
      title: '确定删除该问卷？',
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestion,
    });
  }

  // 已经删除的问卷，不要再渲染卡片了
  if (isDeletedState) return null;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={
              isPublished
                ? `${wrapPath(QUESTION, STATUS, id)}`
                : `${wrapPath(QUESTION, EDIT, id)}`
            }
          >
            <Space>
              {isStarState && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`${wrapPath(QUESTION, EDIT, id)}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`${wrapPath(QUESTION, STATUS, id)}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              type="text"
              icon={<StarOutlined />}
              size="small"
              onClick={changeStar}
              disabled={changeStarLoading}
            >
              {isStarState ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button
                type="text"
                icon={<CopyOutlined />}
                size="small"
                disabled={duplicateLoading}
              >
                复制
              </Button>
            </Popconfirm>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              onClick={del}
              disabled={deleteLoading}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
