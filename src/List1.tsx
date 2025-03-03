import React from "react";
import type { FC } from "react";
import "./List1.css";
import QuestionCard from "./components/QuestionCard";
const List1: FC = () => {
  const questionList = [
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
  ];
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question;
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
            ></QuestionCard>
          );
        })}
      </div>
    </div>
  );
};
export default List1;
