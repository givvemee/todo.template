import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SortDropdown from "./components/SortDropdown";
import FilterBar from "./components/FilterBar";
import * as todoData from "../../data/todo.json";
import { useState, useMemo } from "react";

const ORDER = { high: 0, medium: 1, low: 2 };

export default function Stage2() {
  const [datas, setDatas] = useState(todoData.default);
  const [orderBy, setOrderBy] = useState("createdAt");
  const [filter, setFilter] = useState("all");

  function onAdd(title, priority) {
    setDatas([
      ...datas,
      {
        id: datas.length ? datas[datas.length - 1].id + 1 : 1,
        title,
        completed: false,
        priority,
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

  const filterSort = useMemo(() => {
    return datas
      .filter((data) => {
        if (filter === "active") return !data.completed;
        if (filter === "completed") return data.completed;
        return true;
      })
      .sort((a, b) => {
        if (orderBy === "priority") {
          return ORDER[a.priority] - ORDER[b.priority];
        }
        if (orderBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [datas, filter, orderBy]);

  return (
    <Container>
      <Description>
        정렬 & 필터 — 우선순위 선택, 정렬 기준 변경, 상태별 필터
      </Description>
      <TodoForm onAdd={onAdd} />
      <Toolbar>
        <FilterBar filter={filter} setFilter={setFilter} />
        <SortDropdown orderBy={orderBy} setOrderBy={setOrderBy} />
      </Toolbar>
      <TodoList
        todos={filterSort}
        onToggle={onToggle}
        onDelete={onDelete}
        onRename={onRename}
      />
    </Container>
  );
}

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
