import React, { useState } from "react";
import "./assets/scss/style.scss";
import Header from "./components/Header";
import Pagination from "./components/NoteCards/Pagination";

function App() {
  return (
    <>
      {/* =========================================== */}
      <Header />
      {/* =========================================== */}
      <main className="py-9">
        {/* ================ Card with pagination =========================== */}
        <Pagination itemsPerPage={6} />
        {/* =========================================== */}
      </main>
      {/* =========================================== */}
    </>
  );
}

export default App;
