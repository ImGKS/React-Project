import React from 'react';
import { useGlobalContext } from './Context';

const Page = () => {
  const {page, nbPages, getPreviousPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className='Pagination_btn'>
        <button onClick={()=> getPreviousPage()}>Prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={()=> getNextPage()}>Next</button>
      </div>
    </>
  )
}

export default Page