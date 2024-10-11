import { FC } from 'react';
import { Button, Space, Tooltip } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  changeVisibleComponent,
  removeSelectedComponent,
} from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo.ts';

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useGetComponentInfo();
  function handleDelete() {
    dispatch(removeSelectedComponent());
  }
  function handleHidden() {
    dispatch(changeVisibleComponent({ fe_id: selectedId, hidden: true }));
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete()}
        />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={() => handleHidden()}
        />
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
