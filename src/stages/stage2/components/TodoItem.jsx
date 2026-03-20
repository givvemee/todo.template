import styled from "styled-components";
import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onRename }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleBlur() {
    if (editValue) onRename(todo.id, editValue);

    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleBlur();
    else if (e.key === "Escape") {
      setEditValue(todo.title);
      setIsEditing(false);
    }
  }

  return (
    <Container completed={todo.completed}>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <EditInput
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <Title completed={todo.completed} onDoubleClick={handleDoubleClick}>
          {todo.title}
        </Title>
      )}

      <DeleteButton onClick={() => onDelete(todo.id)}>삭제</DeleteButton>
    </Container>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.accent.primary};
`;

const Title = styled.span`
  flex: 1;
  font-size: 0.95rem;
  color: ${({ $completed, theme }) =>
    $completed ? theme.text.completed : theme.text.primary};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  cursor: default;
  user-select: none;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.accent.primary};
  border-radius: 4px;
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.95rem;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background: ${({ theme }) => theme.accent.danger};
  color: #ffffff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.accent.dangerHover};
  }
`;
