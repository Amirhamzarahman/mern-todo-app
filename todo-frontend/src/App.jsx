import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemComplete } from "./services/itemsService";
import { useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  
const handleCompleteItem = async (id) => {
  try {
    const updatedItem = await markItemComplete(id);

    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  } catch (error) {
    console.error("Failed to complete todo:", error);
  }
};




  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/50 to-violet-100 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-3xl">
        <header className="mb-8 flex items-center gap-4 sm:mb-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25">
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 12.5 2.5 2.5L16 9.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <AppName />
        </header>

        <section className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                Your list
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Make today count
              </h2>
            </div>
            <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
              {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          <AddTodo onNewItem={handleNewItem} />

          {todoItems.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <TodoItems
              todoItems={todoItems}
              onDeleteClick={handleDeleteItem}
              onCompleteClick={handleCompleteItem}
            />
          )}
        </section>

        <p className="mt-6 text-center text-sm text-slate-500">
          One step at a time. You&apos;ve got this.
        </p>
      </div>
    </main>
  );
}

export default App;
