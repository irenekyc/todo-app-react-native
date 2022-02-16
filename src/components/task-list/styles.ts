import styled from "styled-components/native";
import {
  ItemRowStyles,
  BoxShadowStyle,
  TextLightStyles,
} from "../../global-styles";

interface FilterButtonTextProps {
  active: boolean;
}

export const TaskList = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  z-index: 2;
  flex: 1;
  margin-top: -40px;
`;

export const TaskListContent = styled.View`
  width: 100%;
  ${BoxShadowStyle}
`;

export const TaskListWrapper = styled.View`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
`;

export const SettingRow = styled.View`
  ${ItemRowStyles}
`;

export const ClearCompletedButton = styled.TouchableOpacity`
  color: gray;
`;

export const FilterRow = styled.View`
  ${ItemRowStyles};
  border-radius: 12px;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 24px;
  ${BoxShadowStyle}
`;

export const FilterButton = styled.TouchableOpacity`
  font-size: 18px;
`;

export const FilterButtonText = styled.Text<FilterButtonTextProps>`
  ${TextLightStyles}
  ${(props) => props.active && "color: blue"};
  text-transform: capitalize;
`;
