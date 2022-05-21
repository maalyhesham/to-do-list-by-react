import * as ComponentStyled from './style'
import "./style.js";


function Button({ isWhite, ...props }) {
  return (
    <ComponentStyled.StyledButton {...props} isWhite={"isWhite"}>
      {props.children}
    </ComponentStyled.StyledButton>
  );
}

export default Button;