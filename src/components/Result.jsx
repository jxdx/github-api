import { React, useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { getCommits } from '../services/api'
// import { useQuery } from 'react-query'

export const Result = ({repo, organization}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [commits, setCommits] = useState([])

  const handleShow = async () => {
    // TODO: Error with useQuery
    // Invalid hook call. Hooks can only be called inside of the body of a function component.

    // const { isLoading, error, result } = useQuery('commits', getCommits)
    //  if (isLoading) return 'Loading...'
    //  if (error) return 'An error has occurred: ' + error.message

    try {
      const result = await getCommits(organization, repo.name)
      setCommits(result);
      setShow(true);
    } catch (err) {
      // TODO: Handle errors
      console.log(err)
    }
  }

  // TODO: UseEffect will make an API to every repo on page load, this seems unnecessary
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getCommits(organization,repo)
  //       setCommits(result);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  return(
    <div className='result-card'>
      { repo && <Card style={{ minHeight: '180px', background: '#23272e', borderColor: '#aebac7' }}>
        <Card.Body>
          <Card.Title className="link" onClick={handleShow}>{repo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{repo.full_name}</Card.Subtitle>
          <Card.Text >{repo.description && repo.description.slice(0,100) }</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{repo.language}</Card.Footer>
      </Card> }

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{repo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <strong>Latest 10 commits...</strong>
          </div>
          <ul>
            { commits.slice(0,9).map((commit) =>
              <li>
                <a href={commit.url} target="_blank"> {commit.commit.message}</a>
              </li> )
            }
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}