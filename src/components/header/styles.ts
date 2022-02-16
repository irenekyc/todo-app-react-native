import styled from "styled-components/native";
import {
  ItemRowStyles,
  ItemRowStylesDark,
  themeDarkTextDark,
  themeLightTextLight,
  themeLightTextDark,
  themeDarkTextLight,
} from "../../global-styles";

export const HeaderBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 250px;
  padding: 50px 30px;
  padding-bottom: 0;
`;

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const HeaderOne = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: 700;
  letter-spacing: 5px;
`;

export const ThemeToggleButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
`;

export const InputDiv = styled.View`
  ${(props) => (props.theme === "light" ? ItemRowStyles : ItemRowStylesDark)};
  border-radius: 12px;
`;

export const NewTaskInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: `${
    props.theme === "light" ? themeLightTextLight : themeDarkTextLight
  }`,
}))`
  flex: 1;
  margin-left: 12px;
  font-size: 18px;

  color: ${(props) =>
    props.theme === "light" ? themeLightTextDark : themeDarkTextDark};
`;
