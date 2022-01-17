import { React } from 'react'
import { Result } from './Result'
// import { useQuery } from 'react-query'
// import { getRepositories } from '../services/api'

export const Results = ({data, query}) => {
  // const { isLoading, error, data } = useQuery('repositories', getRepositories)

  //  if (isLoading) return 'Loading...'

  //  if (error) return 'An error has occurred: ' + error.message

  return(
    <>
      <div className="results-container">
        {data.map((repo) =>
          <Result data={repo} />
        )}
      </div>
    </>
  )
}
