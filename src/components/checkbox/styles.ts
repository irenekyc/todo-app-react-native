import styled from "styled-components/native";
import { themeDarkTextLight } from "../../global-styles";

interface CheckboxProps {
  active: boolean;
  theme: "dark" | "light";
}

export const Checkbox = styled.View<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 24px;

  ${(props) =>
    props.active
      ? `border:none`
      : props.theme === "light"
      ? `border: 1px solid gray;`
      : `border: 1px solid ${themeDarkTextLight}`}
`;
