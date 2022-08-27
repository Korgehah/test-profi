import ArrowLeftIcon from '../../assets/images/arrow_left.svg';
import ArrowRightIcon from '../../assets/images/arrow_right.svg';

interface PaginationProps {
  totalElements: number;
  elementsOnPage: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  totalElements,
  elementsOnPage,
  activePage,
  setActivePage,
}: PaginationProps) => {
  const pagesArr = [];
  const pagesCount = Math.ceil(totalElements / elementsOnPage);

  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }

  let pageList;

  if (activePage > pagesArr[pagesArr.length - 1] - 2) {
    pageList = pagesArr.slice(
      pagesArr[pagesArr.length - 4],
      pagesArr[pagesArr.length - 1]
    );
  } else if (activePage === 1) {
    pageList = pagesArr.slice(0, 3);
  } else {
    pageList = pagesArr.slice(activePage - 2, activePage + 1);
  }

  return (
    <div className='pagination'>
      <div
        className={`pagination__item${activePage === 1 ? ' --disabled' : ''}`}
        onClick={() => setActivePage(activePage - 1)}
      >
        <img className='pagination__img' src={ArrowLeftIcon} />
      </div>
      {pageList.map((item, index) => (
        <div
          className={`pagination__item${
            activePage === item ? ' --active' : ''
          }`}
          key={index}
          onClick={() => setActivePage(item)}
        >
          {item}
        </div>
      ))}
      <div
        className={`pagination__item${
          activePage === pagesArr.length ? ' --disabled' : ''
        }`}
        onClick={() => setActivePage(activePage + 1)}
      >
        <img className='pagination__img' src={ArrowRightIcon} />
      </div>
    </div>
  );
};

export { Pagination };
