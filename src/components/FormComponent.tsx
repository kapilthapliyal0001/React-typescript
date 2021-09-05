import React, {ChangeEvent, FormEvent, useState} from "react";
import Book from "../types/book";
import Form from "react-bootstrap/Form";
import {RouteComponentProps} from "react-router-dom";
import {Button} from "react-bootstrap";

// if we want to merge two interfaces we need an intersection

// interface FormComponentProps extends RouteComponentProps {
// user : string
// books : Book[]
// }

interface FormComponentProps {
  user: string;
  books: Book[];
}

// another way of intersecting FormComponentProps and RouteComponentProps
// type MergedProps = RouteComponentProps & FormComponentProps

const FormComponent = ({
  history,
  location,
  match,
  user,
  books,
}: RouteComponentProps & FormComponentProps) => {
  const [name, setName] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h1>We are on {location.pathname}</h1>
      <h2>You are {user}</h2>
      {
        <ul>
          {books.map((b) => (
            <li key={b.id}>{b.title}</li>
          ))}
        </ul>
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormComponent;
