import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SortDropdown from './components/SortDropdown';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';

// TODO: useState, useMemo를 import 하세요
// TODO: ThemeProvider를 styled-components에서 import 하세요
// TODO: lightTheme, darkTheme를 import 하세요
// TODO: GlobalStyles를 import 하세요
// TODO: useLocalStorage 커스텀 훅을 import 하세요
// TODO: ThemeContextProvider, useThemeContext를 import 하세요
// TODO: todo.json 데이터를 import 하세요

// HINT: Stage 3는 두 개의 컴포넌트로 구성됩니다
// 1. Stage3 (외부) — ThemeContextProvider로 감싸는 역할
// 2. Stage3Inner (내부) — 실제 로직과 UI를 담당

function Stage3Inner() {
  // TODO: useThemeContext에서 isDark 값을 가져오세요

  // TODO: useLocalStorage 훅으로 todos 상태를 관리하세요
  // HINT: key는 'todo-list', 초기값은 todo.json 데이터

  // TODO: sortBy, filter, searchTerm 상태를 선언하세요

  // TODO: 할 일 추가 함수를 만드세요 (priority 포함)

  // TODO: 할 일 토글, 삭제, 이름 변경 함수를 만드세요

  // TODO: 검색 + 필터 + 정렬된 목록을 계산하세요
  // HINT: useMemo를 사용하세요
  // HINT: 검색 → 필터 → 정렬 순서로 적용하세요

  return (
    // TODO: ThemeProvider로 감싸고 isDark에 따라 theme을 전환하세요
    // TODO: GlobalStyles를 포함하세요
    <Container>
      <TopBar>
        <Description>
          영속성 + 다크모드 + 검색 — localStorage, 테마 전환, 실시간 검색
        </Description>
        {/* TODO: ThemeToggle을 렌더링하세요 */}
      </TopBar>
      {/* TODO: TodoForm에 onAdd를 전달하세요 */}
      {/* TODO: SearchBar에 searchTerm과 onSearchChange를 전달하세요 */}
      <Toolbar>
        {/* TODO: FilterBar와 SortDropdown에 props를 전달하세요 */}
      </Toolbar>
      {/* TODO: TodoList에 필터링+정렬된 목록과 핸들러들을 전달하세요 */}
    </Container>
  );
}

export default function Stage3() {
  // TODO: ThemeContextProvider로 Stage3Inner를 감싸서 반환하세요
  return null;
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.section``;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.85rem;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;
