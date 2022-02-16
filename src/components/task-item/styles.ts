import styled from "styled-components/native";
import {
  ItemRowStyles,
  ItemRowStylesDark,
  themeDarkTextLight,
  themeLightTextDark,
  themeDarkTextDark,
} from "../../global-styles";

export const TaskItem = styled.View`
  ${(props) =>
    props.theme === "light"
      ? `
  ${ItemRowStyles};
  border-bottom-color: lightgray;
  `
      : `${ItemRowStylesDark};
  border-bottom-color: ${themeDarkTextLight};
  `}

  border-bottom-width: 1px;
`;

export const TaskItemContent = styled.Text`
  color: ${(props) =>
    props.theme === "light" ? themeLightTextDark : themeDarkTextDark};
  flex: 1;
  text-align: left;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 18px;
  line-height: 24px;
`;

export const TaskItemDeleteButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
