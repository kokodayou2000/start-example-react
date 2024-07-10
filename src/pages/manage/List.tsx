import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from 'ahooks';

const List: FC = () => {
  useTitle('问卷网');
  const questionList = [
    { id: 'q1', name: 'q1' },
    { id: 'q2', name: 'q2' },
    { id: 'q3', name: 'q3' },
    { id: 'q4', name: 'q4' },
    { id: 'q5', name: 'q5' },
  ];
  const nav = useNavigate();
  function gotoQuestionEdit(id: string) {
    nav({
      pathname: '/question/edit',
      search: 'id=' + id,
    });
  }
  return (
    <>
      <div>
        {questionList.map((item) => {
          return (
            <button key={item.id} onClick={() => gotoQuestionEdit(item.id)}>
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default List;
