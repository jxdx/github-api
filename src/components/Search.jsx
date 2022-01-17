import { React, useState, useEffect } from 'react'
import { Results } from './Results'
import { getRepositories } from '../services/api'

export const Search = () => {
  const [query, setQuery] = useState('netflix')
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://api.github.com/orgs/netflix/repos');
  // const [url, setUrl] = useState('https://api.github.com/repos/netflix/astyanax/commits');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRepositories(query)
        setData(result);
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div className = "left-nav-container">
        <div className ="search-box-container">
          <div className="input-group mb-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setQuery(event.target.value)}/>
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => setUrl(`https://api.github.com/orgs/${query}/repos`)}
            >Search</button>
          </div>
        </div>
      </div>
      <Results data={data} query={query} />
    </>
  )
}
