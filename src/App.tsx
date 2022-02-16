import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "./components/header";
import TaskList from "./components/task-list";
import * as Styled from "./global-styles";

export default function App() {
  return (
    <Styled.Container>
      <Header />
      <TaskList />
    </Styled.Container>
  );
}
