import styled from "styled-components/native";
import { CheckboxActiveBackground } from "../../global-styles";

interface CheckboxProps {
  active: boolean;
}

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 24px;

  ${(props) => (props.active ? `border:none` : `  border: 1px solid gray;`)}
`;
