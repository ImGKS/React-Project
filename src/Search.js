import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
    const {query, searchPost} =useGlobalContext();
  return (
   <div>
    <h1>News On the Go</h1>
        <form onSubmit={ (event) => event.preventDefault()}>
            <div>
            <input type="text" placeholder='search here'
                    value={query}
                     onChange={ (event) => searchPost(event.target.value)}
                />
            </div>
        </form>
   </div>
  )
}

export default Search