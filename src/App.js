import JSONDATA from "./docData.json";
import React, { useState } from "react";
import Header from "./components/header";
import Doctor from "./components/doctor";
import Summary from "./components/summary";
import Categories from "./components/categories";
import Images from "./components/images";
import Nav from "./components/nav";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@mui/material";
import "./style/Nav.css";

function App() {
  const [searchDr, setSearchDc] = useState("");
  const [doctors, setDoctors] = useState(null);
  const [summary, setSummary] = useState(null);

  const getDoc = (e) => {
    if (!searchDr) {
      setDoctors(null);
      setSummary(null);
      return;
    }
    const selectedDocs = JSONDATA.filter((doc) => doc.name.includes(searchDr));
    setDoctors(() => (selectedDocs.length > 0 ? [...selectedDocs] : null));
    if (selectedDocs.length > 0) {
      setSummary({ sum: selectedDocs.length, terms: searchDr });
    } else {
      setSummary(null);
    }
  };

  return (
    <div className="container">
      <Header />
      <Nav />
      <TextField
        className="text_field"
        type="text"
        onChange={(e) => {
          setSearchDc(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={getDoc}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      ></TextField>
      <Categories />
      <Summary summary={summary} />
      <Images />

      {doctors?.map((doc, index) => (
        <Doctor key={index} doc={doc} />
      ))}
    </div>
  );
}

export default App;
