import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
export const Pag = ({ info, setpageNumber, pageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style>
        {`
        .page-link.active, .active > .page-link {
          z-index: 3;
          color: var(--bs-pagination-active-color);
          background-color: #0dcbf0;
          border-color: #0dcbf0;
      } 
        [role=button] {
          cursor: pointer;
          text-decoration: none;
        }
        .nextLabel.previousLabel{
          color: red;
        }
        @media (max-width :768px; ){
            .next, .prev{
                display: none;
            }
            .pagination{
                font-sixe : 14px;
            }
            [role=button] {
              cursor: pointer;
              text-decoration: none;
        }`}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-3 my-4"
        breakLabel="..."
        nextLabel="&#8594;"
        previousLabel="&#8592;"
        nextClassName="btn btn-info Next"
        previousClassName="btn btn-info PRev"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(datos) => {
          setpageNumber(datos.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};
