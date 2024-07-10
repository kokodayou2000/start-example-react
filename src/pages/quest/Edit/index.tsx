import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

const Edit: FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div>编辑</div>
      {searchParams}
    </>
  );
};

export default Edit;
