import React from 'react';
import axios from "axios"

import theme from "theme"
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Input } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchBar from 'material-ui-search-bar'






export default function SearchBox(props) {

  const [state, setState] = React.useState(props.search || "")


  const search = (data) => {
    if (data) {
      axios({
        method: "get",
        url: `/api/search/${data}`,
      }).then((res) => {
        console.log(res)
      }).catch((err) => {console.log(err)})
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <SearchBar
        value={state}
        onChange={(newValue) => setState(newValue)}
        onRequestSearch={() => search(state)}
      />

    </ThemeProvider>

  )
  
}


