import "../styles/Home.css";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const handlePageChange = (e) => {
    // console.log(e);
    setPage(e);
  };
  return (
    <div>
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => handlePageChange(page)}
            className="page-btns"
            disabled={page === currentPage ? true : false}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
