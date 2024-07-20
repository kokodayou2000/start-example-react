import { FC } from 'react';
import { Button, Typography } from 'antd';
import { LIST, MANAGE, wrapPath } from '@/router/routerConstant.ts';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';


const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <Title>问卷调查 | 在线投票 </Title>
          <Paragraph>已经调查数量</Paragraph>
          <div>
            <Button
              type="default"
              onClick={() => {
                nav(wrapPath(MANAGE, LIST));
              }}
            >
              开始使用
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
