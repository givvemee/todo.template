import styled from "styled-components";

const SORT_OPTION = [
  { value: "createdAt", label: "최신순" },
  { value: "priority", label: "우선순위순" },
  { value: "title", label: "제목순" },
];

export default function SortDropdown({ orderBy, setOrderBy }) {
  return (
    <Select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
      {SORT_OPTION.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;
