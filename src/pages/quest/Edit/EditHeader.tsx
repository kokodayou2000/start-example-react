import { FC } from 'react';
import style from './EditHeader.module.scss';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Typography, Space } from 'antd';
import EditToolbar from "@/pages/quest/Edit/EditToolbar.tsx";

const { Title } = Typography;
const EditHeader: FC = () => {
  const nav = useNavigate();
  return (
    <>
      <div className={style['header-wrapper']}>
        <div className={style['header']}>
          <div className={style['left']}>
            <Space>
              <Button
                type="link"
                icon={<LeftOutlined />}
                onClick={() => nav(-1)}
              >
                返回
              </Button>
              <Title>问卷标题</Title>
            </Space>
          </div>
          <div className={style['main']}>
            <EditToolbar />
          </div>
          <div className={style['right']}>
            <Space>
              <Button>保存</Button>
              <Button type={'primary'}>发布</Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHeader;
