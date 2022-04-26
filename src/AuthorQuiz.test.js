import { render, screen } from '@testing-library/react';
import  ReactDOM from "react-dom";
import AuthorQuiz from './AuthorQuiz';

xtest('renders learn react link', () => {
  render(<AuthorQuiz />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Author Quiz", () =>{
  it("renderiza sem quebrar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  })
})
