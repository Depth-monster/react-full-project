import React from 'react';
import { getPagesArray } from '../../components/utils/pages';

 const Pagination = ({changePage, totalPages, page}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className="pagination__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={()=>changePage(p)}
            key={p}
            className={
              page === p ? "pagination pagination__current" : "pagination"
            }
          >
            {p}
          </span>
        ))}
      </div>
    );
};

export default Pagination;