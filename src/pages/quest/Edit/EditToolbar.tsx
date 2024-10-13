import { FC } from 'react';
import { Button, Space, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  changeVisibleComponent,
  removeSelectedComponent, toggleComponentLocked,
} from '@/store/componentsReducer';
import useGetComponentInfo from '@/hooks/useGetComponentInfo.ts';

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent } = useGetComponentInfo();


  function handleDelete() {
    dispatch(removeSelectedComponent());
  }
  function handleHidden() {
    dispatch(changeVisibleComponent({ fe_id: selectedId, hidden: true }));
  }
  function handleLocked() {
    dispatch(toggleComponentLocked({ fe_id: selectedId }));
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
      <Tooltip title="锁定">
        <Button
          shape="circle"
          icon={<LockOutlined />}
          type={selectedComponent?.locked ? 'primary' : 'default'}
          onClick={() => handleLocked()}
        />
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
