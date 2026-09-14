import "./Pagination.css";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 3);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <div className="pagination justify-content-center pt-2 pb-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <a
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </a>
          {pages.map((page) => (
            <li key={page} className="page-item">
              <a
                className={`page-link ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </a>
            </li>
          ))}

          <a
            className={`page-link ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </a>
        </ul>
      </nav>
    </div>
  );
}
