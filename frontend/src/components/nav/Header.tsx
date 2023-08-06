export const Header = () => (
  <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20 z-50">
    <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
      <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
        <svg
          className="absolute left-2 block h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" className=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
        </svg>
        <input
          type="name"
          name="search"
          className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
          placeholder="Search for anything"
        />
      </div>

      <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
        <li className="">
          <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </header>
);
