import styled from "styled-components";

const FILTER_OPTION = [
  { value: "all", label: "전체" },
  { value: "active", label: "진행 중" },
  { value: "completed", label: "완료" },
];

export default function FilterBar({ filter, setFilter }) {
  return (
    <Container>
      {FILTER_OPTION.map((option) => (
        <FilterButton
          key={option.value}
          $active={filter === option.value}
          onClick={() => setFilter(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 4px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ $active, theme }) =>
    $active ? theme.accent.primary : theme.bg.secondary};
  color: ${({ $active, theme }) =>
    $active ? "#ffffff" : theme.text.secondary};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.accent.primary : theme.border)};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.accent.primaryHover : theme.bg.hover};
  }
`;
