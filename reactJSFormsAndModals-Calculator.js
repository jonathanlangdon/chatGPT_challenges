// Calculator.js for Forms and Modals

import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import ResultsModal from './ResultsModal';

function Calculator() {
  const [isModalVisible, SetIsModalVisible] = useState(false);

  // Results to display
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: ''
  });

  // Provide some default values
  const [inputs, setInputs] = useState({
    amount: 2000,
    apr: 5,
    years: 10
  });

  function showModal() {
    SetIsModalVisible(true);
  }

  function hideModal() {
    SetIsModalVisible(false);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      isNumeric(inputs.amount) &&
      isNumeric(inputs.apr) &&
      isNumeric(inputs.years)
    ) {
      // Calculate loan payments and interest
      const amount = parseFloat(inputs.amount);
      const interest = parseFloat(inputs.apr) / 1200;
      const numPayments = parseFloat(inputs.years) * 12;
      const x = Math.pow(1 + interest, numPayments);
      const monthly = (amount * x * interest) / (x - 1);

      // Currency formatter for displaying dollars
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      // Show results
      setResults({
        monthlyPayment: formatter.format(monthly),
        totalPayment: formatter.format(monthly * numPayments),
        totalInterest: formatter.format(monthly * numPayments - amount)
      });

      showModal();
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Amount $:</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={inputs.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>APR %:</Form.Label>
          <Form.Control
            type="text"
            name="apr"
            value={inputs.apr}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Years:</Form.Label>
          <Form.Control
            type="text"
            name="years"
            value={inputs.years}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" onClick={handleSubmit}>
          Calculate
        </Button>
      </Form>

      <ResultsModal
        show={isModalVisible}
        hide={hideModal}
        monthlyPayment={results.monthlyPayment}
        totalInterest={results.totalInterest}
        totalPayment={results.totalPayment}
      />
    </>
  );
}

export default Calculator;
