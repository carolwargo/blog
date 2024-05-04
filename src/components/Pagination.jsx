import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <nav aria-label='...'>
      <MDBPagination className='mb-0 text-black'>
        <MDBPaginationItem disabled>
          <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true' >
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' className='text-black'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active aria-current='page'>
          <MDBPaginationLink href='#' className='bg-black text-white'>
            2 <span className='visually-hidden border border-black'>(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' className='text-black'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' className='text-black'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}