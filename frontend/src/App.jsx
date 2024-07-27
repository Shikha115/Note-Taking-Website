import React, { useState } from "react";
import "./assets/scss/style.scss";
import Header from "./components/Header";
import Pagination from "./components/NoteCards/Pagination";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      {/* =========================================== */}
      <Header />
      {/* input={input} setInput={setInput} */}
      {/* =========================================== */}
      <main className="py-9">
        {/* ================ Card with pagination =========================== */}
        <Pagination itemsPerPage={6} />
        {/* input={input} */}
        {/* =========================================== */}
      </main>
      {/* =========================================== */}
    </>
  );
}

export default App;
