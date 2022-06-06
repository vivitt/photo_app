import ReactDOM from "react-dom";
import { Ring } from "react-awesome-spinners";
const { Wrapper } = require("../styledComponents");

const Spinner = ({color}) => {

    
  return (
      <Wrapper>
      <Ring color={color} />
      </Wrapper>
  );
}

export default Spinner