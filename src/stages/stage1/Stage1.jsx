import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import * as todoData from "../../data/todo.json";
import { useState } from "react";

export default function Stage1() {
  const [datas, setDatas] = useState(todoData.default);

  function onAdd(title) {
    setDatas([
      ...datas,
      {
        id: datas.length && datas[datas.length - 1].id + 1,
        title,
        completed: false,
        priority: "medium",
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  function onToggle(id) {
    setDatas(
      datas.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data,
      ),
    );
  }

  function onDelete(id) {
    setDatas(datas.filter((data) => data.id !== id));
  }

  function onRename(id, newTitle) {
    setDatas(
      datas.map((data) =>
        data.id === id ? { ...data, title: newTitle } : data,
      ),
    );
  }

  return (
    <Container>
      <Description>
        기본 CRUD — 할 일 추가, 삭제, 완료 토글, 이름 변경
      </Description>
      <TodoForm onAdd={onAdd} />
      <TodoList
        todos={datas}
        onToggle={onToggle}
        onDelete={onDelete}
        onRename={onRename}
      />
    </Container>
  );
}
// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.section``;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.85rem;
  margin-bottom: 20px;
`;
