import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SortDropdown from "./components/SortDropdown";
import FilterBar from "./components/FilterBar";

// TODO: todo.json 데이터를 import 하세요
import init from "../../data/todo.json";
// TODO: useState, useMemo를 import 하세요
import { useState, useMemo } from "react";

// HINT: 우선순위 정렬을 위한 순서 매핑이 필요합니다
// 예) { high: 0, medium: 1, low: 2 }
const PRIORITY_ORDER = {
  high: 0,
  medium: 1,
  low: 2,
};

export default function Stage2() {
  // TODO: todos 상태를 선언하세요
  const [todos, setTodos] = useState(init);
  // TODO: 정렬 기준(sortBy) 상태를 선언하세요 (기본값: 'createdAt')
  const [sortBy, setSortBy] = useState("createdAt");
  // TODO: 필터(filter) 상태를 선언하세요 (기본값: 'all')
  const [filter, setFilter] = useState("all");

  // TODO: 할 일 추가 함수를 만드세요 (Stage 1과 유사하지만 priority 파라미터 추가)
  const handleAddTodo = (title, priority) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const newTodo = {
      id: newId,
      title,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  // TODO: 할 일 완료/미완료 토글 함수를 만드세요
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // TODO: 할 일 삭제 함수를 만드세요
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // TODO: 할 일 이름 변경 함수를 만드세요
  const handleChangeName = (id, title) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  // TODO: 필터링 + 정렬된 목록을 계산하세요
  // HINT: useMemo를 활용하면 성능 최적화에 도움이 됩니다
  // HINT: 필터 → 'all'이면 전체, 'active'이면 미완료, 'completed'이면 완료
  // HINT: 정렬 → 'createdAt'이면 날짜순, 'priority'이면 우선순위순, 'title'이면 가나다순
  // HINT: 한글 정렬에는 localeCompare를 활용하세요
  const filteredAndSortedTodos = useMemo(() => {
    let result = todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

    return [...result].sort((a, b) => {
      if (sortBy === "priority") {
        return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
  }, [todos, filter, sortBy]);
    


  return (
    <Container>
      <Description>
        정렬 & 필터 — 우선순위 선택, 정렬 기준 변경, 상태별 필터
      </Description>
      {/* TODO: TodoForm에 onAdd를 전달하세요 */}
      <TodoForm onAdd={handleAddTodo} />
      <Toolbar>
        {/* TODO: FilterBar와 SortDropdown에 필요한 props를 전달하세요 */}
        <FilterBar
          filter={filter}
          onFilterChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <SortDropdown
          sortBy={sortBy}
          onSortChange={(e) => setSortBy(e.target.value)}
        />
      </Toolbar>
      {/* TODO: TodoList에 필터링+정렬된 목록과 핸들러들을 전달하세요 */}
      <TodoList todos={filteredAndSortedTodos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} onRename={handleChangeName}/>
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

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;
