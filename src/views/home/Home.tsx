import React, { FunctionComponent } from "react";
import * as Styled from "./styles";
import Header from "../../components/header";
import TaskList from "../../components/task-list";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home: FunctionComponent = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Styled.Container theme={theme}>
      <Header />
      <TaskList />
    </Styled.Container>
  );
};

export default Home;
