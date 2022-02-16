import React, { FunctionComponent } from "react";
import * as Styled from "./styles";
import { CheckboxActiveBackground } from "../../global-styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { TouchableOpacityProps } from "react-native";

interface CheckboxProps extends TouchableOpacityProps {
  active: boolean;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  active,
}: CheckboxProps) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Styled.Checkbox active={active} theme={theme}>
      {active && (
        <CheckboxActiveBackground>
          <Icon name="check" size={14} color="white" />
        </CheckboxActiveBackground>
      )}
    </Styled.Checkbox>
  );
};

export default Checkbox;
