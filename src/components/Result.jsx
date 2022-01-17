import { React, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

export const Result = ({data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className='result-card'>
      { data && <Card style={{ minHeight: '180px' }}>
        <Card.Body>
          <Card.Title className="link" onClick={handleShow}>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{data.full_name}</Card.Subtitle>
          <Card.Text >{data.description && data.description.slice(0,100) }</Card.Text>
          {/* <Card.Link href={data.url}>Repo Link</Card.Link> */}
        </Card.Body>
        <Card.Footer className="text-muted">{data.language}</Card.Footer>
      </Card> }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}