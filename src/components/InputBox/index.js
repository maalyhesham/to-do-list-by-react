import "./style.css";
import Button from "../Button";

function InputBox(props) {
  return (
    <div className={"flex input-box"}>
      <input
        onChange={(e) => props.handleChange(e)}
        value={props.value}
        type="text"
        placeholder={"Enter task"}
        max={150}
      />
      <Button
        disabled={!props.value}
        isWhite={true}
        onClick={props.handleAdd}
        id={"add"}
        style={{
          background: !props.value && "lightgray",
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default InputBox;
