import PropTypes from "prop-types";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <form
      className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_auto] sm:items-end"
      onSubmit={handleAddButtonClicked}
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          What needs doing?
        </span>
        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
            />
          </svg>
          <input
            type="text"
            placeholder="e.g. Plan the week"
            value={todoName}
            required
            maxLength={120}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            onChange={handleNameChange}
          />
        </div>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Due date
        </span>
        <input
          type="date"
          value={dueDate}
          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
          onChange={handleDateChange}
        />
      </label>
      <button
        type="submit"
        className="cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-px sm:min-w-28"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m-7-7h14"
          />
        </svg>
        Add task
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};

export default AddTodo;
