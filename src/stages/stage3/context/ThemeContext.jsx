// TODO: createContext, useContext를 import 하세요
// TODO: useLocalStorage 훅을 import 하세요

// TODO: ThemeContext를 createContext로 생성하세요

export function ThemeContextProvider({ children }) {
  // TODO: useLocalStorage로 isDark 상태를 관리하세요
  // HINT: key는 'todo-theme-dark', 초기값은 false

  // TODO: toggleTheme 함수를 만드세요 (isDark를 반전)

  // TODO: ThemeContext.Provider로 children을 감싸세요
  // HINT: value로 { isDark, toggleTheme }을 전달하세요
  return null;
}

export function useThemeContext() {
  // TODO: useContext로 ThemeContext 값을 가져와 반환하세요
  return {};
}
