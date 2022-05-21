import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { useState } from "react";

const ToDoListItem = [
  {
    title: "playing game",
    id: Math.random() * 1000,
  },
  {
    title: "do Homework",
    id: Math.random() * 1000,
  },
  {
    title: "make Excersies",
    id: Math.random() * 1000,
  },
  {
    title: "Reading book",
    id: Math.random() * 1000,
  },
];
function Home() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState(ToDoListItem);

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleAdd = () => {
    setItem([
      {
        title: value,
        id: Math.random() * 10000,
      },
      ...item,
    ]);
    setValue("")
  };
  const handleDelete = (id) => {
    setItem(item.filter((item) => item.id !== id));
  };
  return (
    <div className={"inner-container"}>
      <h1>To Do List App</h1>
      <InputBox
        value={value}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <List items={item} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
