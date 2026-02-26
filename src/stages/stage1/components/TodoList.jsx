import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onRename }) {
  if (!todos.length) return <EmptyMessage>todos.length === 0</EmptyMessage>;

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onRename={onRename}
        />
      ))}
    </List>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.95rem;
  padding: 40px 0;
`;
