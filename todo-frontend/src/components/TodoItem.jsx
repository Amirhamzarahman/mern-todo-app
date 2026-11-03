import PropTypes from "prop-types";

function TodoItem({ id, todoName, todoDate,completed, onDeleteClick, onCompleteClick }) {
  return (
    <li className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex min-w-0 items-start gap-3">
        <button
  type="button"
  onClick={() => onCompleteClick(id)}
  className={`cursor-pointer flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
    completed
      ? "border-indigo-500 bg-indigo-500 text-white"
      : " border-indigo-200 bg-white"
  }`}
>
  {completed && "✓"}
</button>
        <span
  className={`break-words font-medium ${
    completed
      ? "text-slate-400 line-through"
      : "text-slate-800"
  }`}
>
  {todoName}
</span>
      </div>
      <div className="flex items-center justify-between gap-4 pl-8 sm:pl-0">
        <span className="text-sm text-slate-500">
          {todoDate ? (
            <>
              <span className="text-slate-400">Due </span>
              <time dateTime={todoDate}>{todoDate}</time>
            </>
          ) : (
            <span className="italic text-slate-400">No due date</span>
          )}
        </span>
        <button
          type="button"
          aria-label={`Delete ${todoName}`}
          className="cursor-pointer inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-500/15"
          onClick={() => onDeleteClick(id)}
        >
          <svg
    
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 7h12m-10 0 .7 12h6.6L16 7m-6 0V4h4v3m-5 3v6m4-6v6"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;
