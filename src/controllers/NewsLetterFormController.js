import React, { useState, useEffect, useReducer, createContext } from "react";
import initialModel from "../models/NewsLetterFormModel";
import actions from "../models/actions/NewsLetterFormAction";
import reducer from "../models/reducers/NewsLetterFormReducer";
// import View from "../pages/NewsLetterFormView";

const news = [
  {
    code: "christmasSpecials",
    name: "Christmas Specials 2020",
  },
  {
    code: "springSpecials",
    name: "Spring Specials 2021",
  },
  {
    code: "bestDeals",
    name: "Best deals",
  },
];

const toNewsletterOption = (newsletter) => {
  const { code, name } = newsletter;
  return {
    label: name,
    value: code,
  };
};

const NewsLetterFormController = ({ children }) => {
  const [model, dispatch] = useReducer(reducer, initialModel);
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    setNewsletters(news);
  }, []);

  useEffect(() => {
    const newsletterOptions = newsletters.map(toNewsletterOption);
    dispatch({
      type: actions.SET_NEWSLETTERS_OPTIONS,
      payload: { newsletterOptions },
    });
  }, [newsletters]);

  const handleFieldChange = (change) => {
    dispatch({
      type: actions.CHANGE_FIELD,
      payload: change,
    });
  };

  const submit = () => {
    window.alert("hello!");
  };

  return (
    <ControllerContext.Provider value={{ model, handleFieldChange, submit }}>
      {children}
    </ControllerContext.Provider>
  );
};

export const ControllerContext = createContext();
export default NewsLetterFormController;
