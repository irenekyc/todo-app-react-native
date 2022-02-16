import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ItemRowStyles = css`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxShadowStyle = css`
shadow-color: #000;
shadow-offset: {width: 0, height: 10};
shadow-opacity: 0.1;
shadow-radius: 16px;`;

export const TextLightStyles = css`
  color: lightgray;
  font-size: 16px;
`;

//linear-gradient(135deg, #47daff, #e9bdff);

export const CheckboxActiveBackground = styled(LinearGradient).attrs({
  colors: ["#47daff", "#e9bdff"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
