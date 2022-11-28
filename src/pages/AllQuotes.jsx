import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
  {id: 'q2', author: 'Maximilian', text: 'Learning react is great'},
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes