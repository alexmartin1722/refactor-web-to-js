import { useState } from "react";

const ReadMoreComponent = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore((prevIsReadMore) => !prevIsReadMore);
  };

  return (
    // Your JSX/HTML here
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {isReadMore ? text.slice(0, 320) : text}

      <span onClick={toggleReadMore} className="cursor-pointer text-blue-500">
        {isReadMore ? (
          <>
            <a className="text-gray-500 dark:text-gray-400">...</a>{" "}
            <a className="font-bold"> read more</a>
          </>
        ) : (
          <a className="font-bold"> show less</a>
        )}
      </span>
    </p>
  );
};

export default ReadMoreComponent;
