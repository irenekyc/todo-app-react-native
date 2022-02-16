import React, { FunctionComponent } from "react";
import * as Styled from "./styles";
import { CheckboxActiveBackground } from "../../global-styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { THEME_DEFAULT } from "../../constans/theme";

interface CheckboxProps {
  active: boolean;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  active,
}: CheckboxProps) => {
  return (
    <Styled.Checkbox active={active} theme={THEME_DEFAULT}>
      {active && (
        <CheckboxActiveBackground>
          <Icon name="check" size={14} color="white" />
        </CheckboxActiveBackground>
      )}
    </Styled.Checkbox>
  );
};

export default Checkbox;
