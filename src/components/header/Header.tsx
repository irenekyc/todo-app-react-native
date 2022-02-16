import React, { FunctionComponent, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import * as Styled from "./styles";
import lightThemeBg from "../../assets/bg-mobile-light.jpg";
import Icon from "react-native-vector-icons/Ionicons";
import Checkbox from "../checkbox";

const Header: FunctionComponent = () => {
  const [newTaskInput, setNewTaskInput] = useState<string>("");

  const onSubmitHandler = () => {
    if (newTaskInput === "") return;
    // TODO: add to do
    setNewTaskInput("");
  };

  return (
    <Styled.HeaderBackgroundImage source={lightThemeBg} resizeMode="cover">
      <SafeAreaView>
        <Styled.HeaderRow>
          <Styled.HeaderOne>TODO</Styled.HeaderOne>
          <Styled.ThemeToggleButton>
            <Icon name="moon" color="white" size={30} />
          </Styled.ThemeToggleButton>
        </Styled.HeaderRow>
        <Styled.InputDiv>
          <Checkbox active={false} />
          <Styled.NewTaskInput
            onChangeText={setNewTaskInput}
            value={newTaskInput}
            placeholder="Create a new todo"
            keyboardType="default"
            onSubmitEditing={onSubmitHandler}
          />
        </Styled.InputDiv>
      </SafeAreaView>
    </Styled.HeaderBackgroundImage>
  );
};

export default Header;
