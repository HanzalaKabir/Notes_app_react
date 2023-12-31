import { createContext, useContext } from "react";
import React from "react";
import { useState } from "react";
const { v4: uuid } = require("uuid");
const NotesContext = createContext();
const NotesProvider = (props) => {
  const [title, setTitle] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider
      value={{
        title,
        setTitle,
        inputNote,
        setInputNote,
        notes,
        setNotes,
        uuid,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
