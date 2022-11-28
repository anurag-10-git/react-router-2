import React, { Fragment } from 'react'
import { useParams,Route} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
  {id: 'q2', author: 'Maximilian', text: 'Learning react is great'},
]

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote Found!</p>
  }

  return (
    <Fragment>
       <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={`/quotes/${params.quoteId}/comments`}>
         <Comments/>
        </Route>
       
    </Fragment>
  )
}

export default QuoteDetail