import React from "react";
import type { FC } from "react";

type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
};

const QuestionCard: FC<PropsType> = (props) => {
  function edit(id: string): void {
    console.log("edit", id);
  }
  const { id, title, isPublished } = props;
  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: "green" }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button
        onClick={() => {
          edit(id);
        }}
      >
        编辑问卷
      </button>
    </div>
  );
};
export default QuestionCard;
