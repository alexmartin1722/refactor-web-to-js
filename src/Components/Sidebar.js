import Link from "next/link";
import { usePathname } from "next/navigation";
import HomePage from "./RightChildren/HomePage/HomePage";
import Publications from "./RightChildren/Publication/Publication";
import classNames from "classnames";

export default function Sidebar({ setComponentIndex, componentIndex }) {
  // function isActive(yo) {
  //   if (component == yo) {
  //     return "";
  //   } else {
  //     return "text-neutral-500";
  //   }
  // }

  return (
    <aside className="border- md:w-[155px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <nav className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
          <a
            className={classNames(
              "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 pl-[17px] pr-[10px] py-[5px] md:px-[10px]",
              componentIndex === 0 ? "" : "text-neutral-500"
            )}
            onClick={() => setComponentIndex(0)}
          >
            About
          </a>
          {/* <Link
            className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] ${isActive(
              "/projects"
            )}`}
            href="/projects"
          >
            Project Pages
          </Link> */}
          <a
            className={classNames(
              "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 pl-[17px] pr-[10px] py-[5px] md:px-[10px]",
              componentIndex === 1 ? "" : "text-neutral-500"
            )}
            onClick={() => setComponentIndex(1)}
          >
            Publications
          </a>

          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
            href="CV.pdf"
            target="_blank"
          >
            Short CV
          </Link>
          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
            href="Alexander_Martin_CV_Long.pdf"
            target="_blank"
          >
            Long CV
          </Link>
        </div>
      </nav>
    </aside>
  );
}
