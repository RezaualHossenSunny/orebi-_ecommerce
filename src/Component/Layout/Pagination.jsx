import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Producat from './Producat';

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,

];

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

  const [itemOffset, setItemOffset] = useState(0);
  const [select, Setselect]=useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    Setselect(event.selected)
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
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4 py-12"
        pageClassName="inline-block border-2 border-[#F0F0F0] p-4 font-dm text-sm font-bold text-[#767676] "
        activeClassName="bg-primary text-white "
        previousClassName="hidden"
        nextClassName="page-item"
      />
         <p className='text-[#767676] font-dm font-normal text-base absolute bottom-[50px] right-0'>Products from {select} to {itemOffset +itemsPerPage} of {items.length}</p>
    </div>
  )
}

export default Pagination