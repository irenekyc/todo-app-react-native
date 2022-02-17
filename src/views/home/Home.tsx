import React, { FunctionComponent, useEffect } from "react";
import * as Styled from "./styles";
import Header from "../../components/header";
import TaskList from "../../components/task-list";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import getLocalStorage from "../../helpers/getLocalStorage";
import { loadTodo } from "../../reducer/task/actions";
import { updateTheme } from "../../reducer/theme/actions";

const Home: FunctionComponent = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const { tasks: savedTasks, theme: savedTheme } = await getLocalStorage();
      dispatch(loadTodo(savedTasks));
      dispatch(updateTheme(savedTheme));
    };
    loadData();
  }, [dispatch]);

  return (
    <Styled.Container theme={theme}>
      <Header />
      <TaskList />
    </Styled.Container>
  );
};

export default Home;
