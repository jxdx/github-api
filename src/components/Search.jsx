import { React, useState, useEffect } from 'react'
import { Results } from './Results'
import { getRepositories } from '../services/api'

export const Search = () => {
  const [query, setQuery] = useState('netflix')
  const [searchString, setSearchString] = useState('netflix')
  const [data, setData] = useState(null)
  const [url, setUrl] = useState('https://api.github.com/orgs/netflix/repos');
  const [error, setError] = useState('');

  // TODO: How could I used a form rather than useEffect?
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRepositories(query)
        setData(result);
        setSearchString(query)
      } catch (err) {
        // TODO: How should I properly handle errors?
        setError(err)
        console.log(error)
      }
    };

    fetchData();
  }, [url]);

  // TODO: Error state isn't working properly when left nav doesn't load
  return (
    <>
      <div className = "left-nav-container">
        <h4>Github Explorer</h4>
        <div className ="search-box-container">
          <div className="input-group mb-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setQuery(event.target.value)}/>
            <button
              className="btn"
              style={{borderColor: "#aebac7", color: "#aebac7"}}
              type="submit"
              onClick={() => setUrl(`https://api.github.com/orgs/${query}/repos`)}
            >Search</button>
          </div>
        </div>
      </div>
      { data && <Results
        data={data}
        organization={searchString}
      />}
    </>
  )
}
