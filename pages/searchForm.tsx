import * as React from 'react';
import { useState } from 'react';
import { Form, FormControl, Button, Table } from 'react-bootstrap';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [results, setResults] = useState([]);

  // const handleSearch = () => {
  //   const filteredItems = items.filter((item) => {
  //     if (searchBy === 'name') {
  //       return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  //     } else if (searchBy === 'email') {
  //       return item.email.toLowerCase().includes(searchTerm.toLowerCase());
  //     } else {
  //       return item.message.toLowerCase().includes(searchTerm.toLowerCase());
  //     }
  //   });
  //   setResults(filteredItems);
  // };

  return (
    <div>
      <Form>
        <Form.Group controlId="searchTerm">
          <FormControl
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="searchBy">
          <Form.Label>Search By:</Form.Label>
          <Form.Control
            as="select"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="message">Message</option>
          </Form.Control>
        </Form.Group>
        {/* <Button variant="primary" onClick={handleSearch}>
          Search
        </Button> */}
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
