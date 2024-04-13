/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

export default function Pagination( { limit, handlePage } ) {

    const handleChange = (event) => {
        handlePage(event.selected);
      };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      previousLabel="< previous"
      pageCount={limit}
      onPageChange={handleChange}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      renderOnZeroPageCount={null}
    />
  );
}
