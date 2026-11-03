const WelcomeMessage = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-10 text-center sm:py-12">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
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
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        Your day is wide open
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Add a task above and turn your plans into progress.
      </p>
    </div>
  );
};

export default WelcomeMessage;
