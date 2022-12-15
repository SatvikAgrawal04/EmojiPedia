import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";

function createEntry(element) {
  return (
    <Entry
      key={element.id}
      img={element.emoji}
      title={element.name}
      mean={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
