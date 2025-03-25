const SubjectTopBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Subjects</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium">
            + Add Subject
          </button>
          <button className="flex items-center gap-1 border border-gray-300 text-gray-400 px-4 py-2 rounded-md font-medium cursor-not-allowed">
            Remove{" "}
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                />
              </svg>
            </span>
          </button>

          <button className="bg-gray-300 text-gray-500 px-6 py-2 rounded-full font-medium cursor-not-allowed">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectTopBar;
