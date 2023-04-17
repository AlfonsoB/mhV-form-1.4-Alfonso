import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Table,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './searchForm.scss';
import { FaSearch, FaMinusCircle } from 'react-icons/fa';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const entriesState = useSelector((state: RootState) => state.entries);
  const [results, setResults] = useState(entriesState.entries);

  const handleSearch = () => {
    const filteredItems = entriesState.entries.filter((item) => {
      if (searchBy === 'name') {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === 'email') {
        return item.email.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return item.message.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setResults(filteredItems);
  };

  const handleClear = () => {
    setSearchBy('');
    setSearchTerm('');
  };

  const handleSelect = (eventKey) => {
    setSearchBy(eventKey);
  };

  return (
    <div>
      <div className="card-top">
        <h1 style={{ textAlign: 'center' }}>Message Query</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
          velit, bibendum tristique commodo ut, cursus id libero.
        </p>
      </div>
      <Form>
        <div className="search-bar-container">
          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title={<i className="bi bi-chevron-down"></i>}
              id="input-dropdown"
              placeholder="Search by parameter"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="name">Name</Dropdown.Item>
              <Dropdown.Item eventKey="email">Email</Dropdown.Item>
              <Dropdown.Item eventKey="message">Message</Dropdown.Item>
            </DropdownButton>
            <FormControl
              id="input-form-control"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="input-group">
            <FormControl
              id="input-form-control"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="clear-btn" onClick={handleClear}>
              <FaMinusCircle size={15} className="mx-3" />
            </Button>
            <Button className="search-submit-btn" onClick={handleSearch}>
              <FaSearch size={20} className="mx-3" />
            </Button>
          </InputGroup>
        </div>
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
