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
  checked,
  deleteSelected,
}) => {
  return (
    <div className="pagination__bar">
      <button
        disabled={checked.filter((check) => check === true).length === 0}
        onClick={deleteSelected}
      >
        Delete Selected
      </button>
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
