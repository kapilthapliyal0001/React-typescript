import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import homePage from "./components/homePage";
import Book from "./types/book";
import FormComponent from "./components/FormComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  // like componentDidMount
  useEffect(() => {
    const getBooks = async () => {
      try {
        let res = await fetch(
          `https://striveschool-api.herokuapp.com/food-books`
        );
        console.log(res);
        let data = (await res.json()) as Book[];
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" component={homePage} />
          <Route
            path="/form"
            render={(routerProps) => (
              <FormComponent {...routerProps} user="Stefano" books={books} />
            )}
          />
          {/* <FunctionalComponent
            title="Strive Schook"
            subTitle="Another String"
          /> */}
          {/* <Route path="/check" render={(routerProps) => <FormComponent {...routerProps} user="Stefano" books={books}/> */}
        </header>
      </div>
    </Router>
  );
}

export default App;
