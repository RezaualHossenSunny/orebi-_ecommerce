import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Producat from './Producat';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='w-[32%]'>
            <Producat badge={true}/>
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>


    <div className='flex flex-wrap justify-between'>
    <Items currentItems={currentItems} />
    </div>
   
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4"
        pageClassName="inline-block border-2 border-[#F0F0F0] p-4 font-dm text-sm font-bold text-[#767676] "
        activeClassName="bg-primary text-white "
      />
    </div>
  )
}

export default Pagination