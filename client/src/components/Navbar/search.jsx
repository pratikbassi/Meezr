import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import theme from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { TextField, Input } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchBar from "material-ui-search-bar";

export default function SearchBox(props) {
  const [state, setState] = React.useState(props.search || "");
  let history = useHistory();

  const search = (data) => {
    console.log("search hit");
    history.push(`/search/${data}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchBar
        value={state}
        onChange={(newValue) => setState(newValue)}
        onRequestSearch={() => search(state)}
      />
    </ThemeProvider>
  );
}
