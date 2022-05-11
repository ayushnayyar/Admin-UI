import React from "react";

import "../styles/pagination-bar.scss";

const PaginationBar = ({
  paginationGroup,
  goToFirstPage,
  goToNextPage,
  goToPreviousPage,
  goToLastPage,
  changePage,
  page,
  lastPage,
}) => {
  return (
    <div className="pagination__bar">
      <button>Delete Selected</button>
      <div className="pagination__buttons">
        <button
          disabled={page === 1}
          className="pagination__button"
          onClick={goToFirstPage}
        >
          {"<<"}
        </button>
        <button
          disabled={page === 1}
          className="pagination__button"
          onClick={goToPreviousPage}
        >
          {"<"}
        </button>
        {paginationGroup.map((pageIndex) => {
          return (
            <button
              className={`pagination__button ${
                page === pageIndex ? "pagination__button__active" : ""
              }`}
              key={pageIndex}
              onClick={(event) => {
                changePage(event);
              }}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          disabled={page === lastPage}
          className="pagination__button"
          onClick={goToNextPage}
        >
          {">"}
        </button>
        <button
          disabled={page === lastPage}
          className="pagination__button"
          onClick={goToLastPage}
        >
          {">>"}
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default PaginationBar;
