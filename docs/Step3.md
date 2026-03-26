# Stage 3 힌트 — 영속성 + 다크모드 + 검색

> 코드 내 `TODO` 주석을 먼저 확인하세요. 아래 힌트는 주석만으로 해결이 어려울 때 참고하세요.

---

## 1. useLocalStorage 커스텀 훅 (hooks/useLocalStorage.js)
- `useState`와 동일한 인터페이스(`[값, 세터]`)를 반환하되, 값이 `localStorage`에 자동 저장됩니다.
- 초기값 설정 시 `localStorage`에 이미 데이터가 있으면 그것을 사용하세요.
  - `localStorage.getItem(key)`로 읽고, `JSON.parse()`로 파싱합니다.
  - 저장된 데이터가 없으면 `initialValue`를 사용합니다.
- 값이 변경될 때마다 `localStorage`에 저장하려면 어떤 Hook을 사용하나요?
  - `localStorage.setItem(key, JSON.stringify(값))`
- `try/catch`로 에러를 처리하면 더 안전합니다.

## 2. ThemeContext (context/ThemeContext.jsx)
- React의 Context API를 사용하여 테마 상태를 전역으로 공유합니다.
- `createContext()`로 컨텍스트를 만들고, `Provider`로 값을 제공합니다.
- `useLocalStorage`를 활용하면 테마 선택이 새로고침 후에도 유지됩니다.
- 커스텀 훅(`useThemeContext`)을 만들면 다른 컴포넌트에서 편하게 사용할 수 있습니다.
  - `useContext(ThemeContext)`를 내부에서 호출하는 형태입니다.

## 3. 다크모드 적용 (Stage3.jsx)
- `styled-components`의 `ThemeProvider`를 활용합니다.
- `isDark` 값에 따라 `lightTheme` 또는 `darkTheme`을 `ThemeProvider`에 전달하세요.
- `GlobalStyles`도 함께 포함해야 배경색 등이 반영됩니다.
- Stage3는 두 레이어로 구성됩니다:
  - 외부: `ThemeContextProvider`로 감싸기
  - 내부: 실제 UI와 로직

## 4. ThemeToggle (components/ThemeToggle.jsx)
- `useThemeContext()`에서 `isDark`와 `toggleTheme`을 가져옵니다.
- 버튼 클릭 시 `toggleTheme`을 호출하세요.
- `isDark` 값에 따라 버튼 텍스트를 변경하세요.

## 5. 검색 기능 (SearchBar.jsx → Stage3.jsx)
- 검색어를 state로 관리하세요.
- 할 일 목록을 필터링할 때 검색어 포함 여부를 확인합니다.
- 대소문자를 구분하지 않으려면 `toLowerCase()`를 활용하세요.
- 문자열에 특정 문자열이 포함되어 있는지 확인하는 메서드를 찾아보세요.

## 6. 전체 데이터 흐름
- 검색 → 필터 → 정렬 순서로 처리하면 자연스럽습니다.
- `useMemo`로 계산 결과를 메모이제이션하되, 의존성 배열에 `searchTerm`도 포함하세요.

---

> 💡 검색 키워드: `localStorage`, `React Context API`, `createContext useContext`, `styled-components ThemeProvider`, `커스텀 훅`
