// ResultsModal.js for Forms and Modals

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// TODO: Import React Bootstrap components

// TODO: Convert to use React Bootstrap components
function ModalResults(props) {
  return (
    <Modal show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Loan Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            Monthly payment:{' '}
            <span className="fw-bold fs-4">{props.monthlyPayment}</span>
          </p>
          <p>
            Total interest:{' '}
            <span className="fw-bold fs-4">{props.totalInterest}</span>
          </p>
          <p>
            Total payment:{' '}
            <span className="fw-bold fs-4">{props.totalPayment}</span>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => props.hide()}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalResults;
