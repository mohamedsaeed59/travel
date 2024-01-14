import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { format } from 'date-fns';
import { getSearchResult } from '../utils/api';
import { SearchResultData } from '../types/app';
import ListingCard from '../components/ListingCard';

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchResult = async ({searchParams: { location, startDate, endDate, numOfGuests }, }: { searchParams: SearchParams}) => {
  let formatedStartDate;
  let formatedEndDate;
  if(startDate && endDate){
    formatedStartDate = format(new Date(startDate), "dd, MMMM, yy");
    formatedEndDate = format(new Date(endDate), "dd, MMMM, yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const searchResultData: SearchResultData = await getSearchResult();
  return (
    <>
     <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
     <main>
      <section className='pt-14'>
        <p className='text-xs'>300+ stays - {range} - for {numOfGuests} guests</p>
        {searchResultData.map((listing) => (
          <ListingCard key={listing.title} img={listing.img} title={listing.title} description={listing.description} location={listing.location} star={listing.star} price={listing.price} total={listing.total} long={listing.long} lat={listing.lat} />
        ))}
      </section>
     </main>
     <Footer />
    </>
  )
}

export default SearchResult;