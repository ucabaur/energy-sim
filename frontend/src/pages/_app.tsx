import { Header } from "@/components/nav/Header";
import { NavItem } from "@/components/nav/NavItem";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-200 flex h-screen">
      <aside className="fixed z-50 md:relative">
        <input type="checkbox" className="peer hidden" id="sidebar-open" />
        <label
          className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
          htmlFor="sidebar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72"
        >
          <div className="bg-slate-800 mt-0 py-6 pl-10 md:mt-0">
            <span className="">
              <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">
                E
              </span>
              <span className="text-xl">nergy Simulator</span>
            </span>
          </div>
          <ul className="mt-2 space-y-3">
            <NavItem
              navItemName="Overview"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              }
            />
          </ul>
        </nav>
      </aside>

      <div className="flex h-full w-full flex-col">
        <Header />
        <div className="h-full overflow-hidden">
          <main
            id="dashboard-main"
            className="h-[calc(100vh-10rem)] overflow-auto px-0 py-0"
          >
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  );
}
