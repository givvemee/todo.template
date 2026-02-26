import styled from "styled-components";
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(inputText);
    setInputText("");
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputText}
        onChange={handleChange}
      />
      <AddButton type="submit">추가</AddButton>
    </Form>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
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
