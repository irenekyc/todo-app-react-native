import React, { FunctionComponent, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import * as Styled from "./styles";
import lightThemeBg from "../../assets/bg-mobile-light.jpg";
import darkThemeBg from "../../assets/bg-mobile-dark.jpg";
import Icon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Checkbox from "../checkbox";
import { ThemeType, THEME_DEFAULT, THEME_LIGHT } from "../../constans/theme";

const Header: FunctionComponent = () => {
  const [newTaskInput, setNewTaskInput] = useState<string>("");
  const [theme, setTheme] = useState<ThemeType>(THEME_DEFAULT);

  const onSubmitHandler = () => {
    if (newTaskInput === "") return;
    // TODO: add to do
    setNewTaskInput("");
  };

  return (
    <Styled.HeaderBackgroundImage
      source={theme === THEME_LIGHT ? lightThemeBg : darkThemeBg}
      resizeMode="cover"
    >
      <SafeAreaView>
        <Styled.HeaderRow>
          <Styled.HeaderOne>TODO</Styled.HeaderOne>
          <Styled.ThemeToggleButton>
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
