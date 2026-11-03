import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick , onCompleteClick, completed }) => {
  return (
    <ul className="space-y-3" aria-label="Todo tasks">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          completed={item.completed}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </ul>
  );
};



export default TodoItems;
