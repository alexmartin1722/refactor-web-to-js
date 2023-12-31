import Head from "next/head";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import HomePage from "@/Components/RightChildren/HomePage/HomePage";
import Publications from "@/Components/RightChildren/Publication/Publication";

const metadata = {
  title: "Alex Martin",
  description: "Generated by create next app",
};

export default function Homepage({
  children,
  showNavBar = true, // Default value is true, meaning NavBar will be shown by default.
}) {
  const [componentIndex, setComponentIndex] = useState(0);

  const componentsList = [
    <HomePage key="home" />,
    <Publications key="publications" />,
  ];
  return (
    <div lang="en" className="min-h-screen">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <div className="border- antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        {showNavBar && (
          <Sidebar setComponentIndex={setComponentIndex} componentIndex={componentIndex} />
        )}{" "}
        {/* Conditionally render the NavBar */}
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {componentsList[componentIndex]}
        </main>
        <footer
          className="ml-2 mb-1 md:ml-0"
          style={{
            fontSize: "0.75rem",
            position: "fixed",
            bottom: "0",
          }}
        >
          <p> @ Copyright 2023 Alex Martin. Contact: amart50@u.rochester.edu</p>
        </footer>
      </div>{" "}
    </div>
  );
}
