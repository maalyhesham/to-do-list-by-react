import ListItem from "../ListIem";
import "./style.css";

function List(props) {
  return (
    <section className={"list flex"}>
      {props.items.map((item, id) => (
        <ListItem title={item.title} key={`${item.id}`}
          handleDelete={props.handleDelete}
          id={item.id}

        />
      ))}
    </section>
  );
}

export default List;
