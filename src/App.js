import React from "react";
import Container from "@material-ui/core/Container";
import NewsLetterFormController from "./controllers/NewsLetterFormController";
import NewsLetterFormView from "./pages/NewsLetterFormView";

const App = () => (
  <Container maxWidth="sm" justify="center">
    <NewsLetterFormController>
      <NewsLetterFormView />
    </NewsLetterFormController>
  </Container>
);

export default App;
