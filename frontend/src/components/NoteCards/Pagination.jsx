import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from "./Cards";

// Example items, to simulate fetching from another resources.
const items = [
  {
    _id: 1,
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines.",
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    _id: 2,
    title: "Grocery List",
    content: "Buy milk, eggs, and bread.",
    timestamp: "2024-07-09T12:05:00Z",
  },
  {
    _id: 3,
    title: "Workout Plan",
    content: "30 minutes of cardio and 15 minutes of strength training.",
    timestamp: "2024-07-09T12:10:00Z",
  },
  {
    _id: 4,
    title: "Reading List",
    content: "Finish reading 'To Kill a Mockingbird'.",
    timestamp: "2024-07-09T12:15:00Z",
  },
  {
    _id: 5,
    title: "Recipe Ideas",
    content: "Try making homemade pasta.",
    timestamp: "2024-07-09T12:20:00Z",
  },
  {
    _id: 6,
    title: "Travel Plans",
    content: "Plan a weekend trip to the mountains.",
    timestamp: "2024-07-09T12:25:00Z",
  },
  {
    _id: 7,
    title: "Birthday Reminder",
    content: "Buy a gift for Sarah's birthday.",
    timestamp: "2024-07-09T12:30:00Z",
  },
  {
    _id: 8,
    title: "Work Tasks",
    content: "Complete the monthly report.",
    timestamp: "2024-07-09T12:35:00Z",
  },
  {
    _id: 9,
    title: "Shopping List",
    content: "Purchase a new pair of running shoes.",
    timestamp: "2024-07-09T12:40:00Z",
  },
  {
    _id: 10,
    title: "Event Planning",
    content: "Organize the company's annual picnic.",
    timestamp: "2024-07-09T12:45:00Z",
  },
];

function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="cards-pagination">
      <Cards notes={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
