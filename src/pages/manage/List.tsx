import { FC } from 'react';

const List1: FC = () => {
  const questionList = [
    { id: 'q1', name: 'q1' },
    { id: 'q2', name: 'q2' },
    { id: 'q3', name: 'q3' },
    { id: 'q4', name: 'q4' },
    { id: 'q5', name: 'q5' },
  ];
  return (
    <>
      <div>
        {questionList.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default List1;
