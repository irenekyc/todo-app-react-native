import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "./components/header";
import TaskList from "./components/task-list";
import * as Styled from "./global-styles";
import { THEME_DEFAULT } from "./constans/theme";

export default function App() {
  return (
    <Styled.Container theme={THEME_DEFAULT}>
      <Header />
      <TaskList />
    </Styled.Container>
  );
}
