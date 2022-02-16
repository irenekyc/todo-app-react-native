import React, { FunctionComponent, useState } from "react";
import { SafeAreaView } from "react-native";
import * as Styled from "./styles";
import lightThemeBg from "../../assets/bg-mobile-light.jpg";
import darkThemeBg from "../../assets/bg-mobile-dark.jpg";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Checkbox from "../checkbox";
import { THEME_LIGHT, THEME_DARK } from "../../constans/theme";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateTheme } from "../../reducer/theme/actions";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { TASK_STATUS_ACTIVE } from "../../constans/task";
import { TaskItemType } from "../../typings/Task";
import { addTask } from "../../reducer/task/actions";

const Header: FunctionComponent = () => {
  const [newTaskInput, setNewTaskInput] = useState<string>("");
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    if (newTaskInput === "") return;
    // TODO: add to do
    const newTask: TaskItemType = {
      id: uuidv4(),
      content: newTaskInput,
      status: TASK_STATUS_ACTIVE,
    };

    dispatch(addTask(newTask));
    setNewTaskInput("");
  };

  const onPressThemeToggleButton = () => {
    if (theme === THEME_LIGHT) {
      dispatch(updateTheme(THEME_DARK));
    } else {
      dispatch(updateTheme(THEME_LIGHT));
    }
  };

  return (
    <Styled.HeaderBackgroundImage
      source={theme === THEME_LIGHT ? lightThemeBg : darkThemeBg}
      resizeMode="cover"
    >
      <SafeAreaView>
        <Styled.HeaderRow>
          <Styled.HeaderOne>TODO</Styled.HeaderOne>
          <Styled.ThemeToggleButton onPress={onPressThemeToggleButton}>
            {theme === THEME_LIGHT ? (
              <Icon name="moon" color="white" size={30} />
            ) : (
              <FeatherIcon name="sun" size={30} color="white" />
            )}
          </Styled.ThemeToggleButton>
        </Styled.HeaderRow>
        <Styled.InputDiv theme={theme}>
          <Checkbox active={false} />
          <Styled.NewTaskInput
            onChangeText={setNewTaskInput}
            value={newTaskInput}
            placeholder="Create a new todo"
            keyboardType="default"
            onSubmitEditing={onSubmitHandler}
            theme={theme}
          />
        </Styled.InputDiv>
      </SafeAreaView>
    </Styled.HeaderBackgroundImage>
  );
};

export default Header;
