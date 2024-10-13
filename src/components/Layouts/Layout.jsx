// components/Layout/index.js
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FloatingActionButton from "./FloatingActionButton";

function Layout({ children }) {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-[#f7f8fb]">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f7f8fb] p-6">
          {children}
        </main>
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default Layout;
