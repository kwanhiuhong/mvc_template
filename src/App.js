import React from "react";
import Container from "@material-ui/core/Container";
import NewsletterFormController from "./controllers/NewsLetterFormController";

const App = () => (
  <Container maxWidth="sm" justify="center">
    <NewsletterFormController />
  </Container>
);

export default App;
