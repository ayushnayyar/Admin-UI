import React from "react";
import PaginationButton from "./PaginationButton";
import {
  deleteSelectedButtonText,
  goToFirstPageText,
  goToPreviousPageText,
  goToNextPageText,
  goToLastPageText,
} from "../../constants/strings";

import "./pagination-bar.scss";

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
      <PaginationButton
        text={deleteSelectedButtonText}
        disabled={checked.filter((check) => check === true).length === 0}
        classNames={"pagination__delete-button"}
        onClick={deleteSelected}
      />
      <div className="pagination__buttons">
        <PaginationButton
          text={goToFirstPageText}
          disabled={page === 1}
          classNames={"pagination__button"}
          onClick={goToFirstPage}
        />
        <PaginationButton
          text={goToPreviousPageText}
          disabled={page === 1}
          classNames={"pagination__button"}
          onClick={goToPreviousPage}
        />
        {paginationGroup.map((pageIndex) => {
          const activeClassnameEnabled =
            page === pageIndex ? "pagination__button__active" : "";
          return (
            <PaginationButton
              key={pageIndex}
              text={pageIndex}
              classNames={`pagination__button ${activeClassnameEnabled}`}
              onClick={(event) => {
                changePage(event);
              }}
              disabled={pageIndex > lastPage || pageIndex < 1}
            />
          );
        })}
        <PaginationButton
          text={goToNextPageText}
          disabled={page === lastPage}
          classNames={"pagination__button"}
          onClick={goToNextPage}
        />
        <PaginationButton
          text={goToLastPageText}
          disabled={page === lastPage}
          classNames={"pagination__button"}
          onClick={goToLastPage}
        />
      </div>
      <div className="pagination__spacer"></div>
    </div>
  );
};

export default PaginationBar;
