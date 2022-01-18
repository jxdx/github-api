import { React } from 'react'
import { Result } from './Result'

export const Results = ({data, organization}) => {
  return(
    <>
      <div className='repo-title'><h1>{organization}</h1></div>
      <div className="results-container">
        {data && data.map((repo) =>
          <Result
            repo={repo}
            organization={organization}
          />
        )}
      </div>
    </>
  )
}
