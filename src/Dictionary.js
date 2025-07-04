import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defintion`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    let apiKey = "fbeo6b3af9d08bb94a5d7e475ct03604";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={word}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
