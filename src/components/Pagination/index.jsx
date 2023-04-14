import { useEffect, useState } from 'react';
import './styles.scss';

export default function Pagination({ totalPages = 1 }) {
  const [pageActive, setPageActive] = useState(1);
  const DOTSL = ' ...';
  const DOTSR = '... ';

  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (pageActive >= 5 && pageActive < totalPages - 3) {
      setPages([1, DOTSL, pageActive - 1, pageActive, pageActive + 1, DOTSR, totalPages]);
    } else if (pageActive < 5) {
      setPages([1, 2, 3, 4, 5, DOTSR, totalPages]);
    } else if (pageActive > totalPages - 4) {
      setPages([
        1,
        DOTSL,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]);
    }
  }, [pageActive]);

  console.log(pages);

  return (
    <main>
      <div className="page-body-wrapper">
        <div className="pagination">
          <div className="pagination-controller">
            <button
              disabled={pageActive === 1}
              onClick={() => {
                if (pageActive > 1) {
                  setPageActive(pageActive - 1);
                }
              }}
            >
              ◀
            </button>
            {pages.map((page) => (
              <div className="number-item" key={page}>
                <button
                  className={pageActive === page ? 'active' : ''}
                  style={page === DOTSL || page === DOTSR ? { pointerEvents: 'none' } : {}}
                  onClick={() => setPageActive(page)}
                >
                  {page}
                </button>
              </div>
            ))}
            <button
              disabled={pageActive === totalPages}
              onClick={() => {
                if (pageActive < totalPages) {
                  setPageActive(pageActive + 1);
                }
              }}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
