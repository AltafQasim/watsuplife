// Pagination.js
import React, { useState } from "react";

const CustomPagination = ({
  count,
  pageLength,
  currentPage,
  setCurrentPage,
}) => {
  let totalPages = Math.ceil(count / pageLength);
  const calculatePages = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftEllipsis = currentPage > 2;
      const rightEllipsis = currentPage < totalPages - 1;

      if (leftEllipsis) {
        pageNumbers.push(1, "...");
      }

      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (rightEllipsis) {
        pageNumbers.push("...", totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePaginationClick = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="join gap-x-5">
        {calculatePages().map((pageNumber, index) => (
          <button
            className={`join-item btn ${
              pageNumber === currentPage
                ? "bg-sky-500 text-white"
                : pageNumber === "..."
                ? "pointer-events-none color-cream"
                : "color-cream text-black"
            } text-base font-normal rounded-none border-none hover:bg-sky-500 hover:text-white`}
            key={index}
            onClick={() => handlePaginationClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={`join-item btn color-cream text-black text-base font-normal rounded-none border-none hover:bg-sky-500 hover:text-white`}
          onClick={() => {
            if (totalPages === currentPage) return;
            handlePaginationClick(currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
