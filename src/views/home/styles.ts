import styled from "styled-components/native";
import { THEME_LIGHT } from "../../constans/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
  background: ${(props) =>
    props.theme === THEME_LIGHT ? "hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)"};
`;
