import styled from "styled-components";
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("medium");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText.trim()) return;

    onAdd(inputText, priority);
    setInputText("");
    setPriority("medium");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputRow>
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <PrioritySelect
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">높음</option>
          <option value="medium">보통</option>
          <option value="low">낮음</option>
        </PrioritySelect>
        <AddButton type="submit">추가</AddButton>
      </InputRow>
    </Form>
  );
}

const Form = styled.form`
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.95rem;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;

const PrioritySelect = styled.select`
  padding: 12px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.85rem;
  cursor: pointer;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  background: ${({ theme }) => theme.accent.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.95rem;
  font-weight: 600;
  transition: background ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.accent.primaryHover};
  }
`;
