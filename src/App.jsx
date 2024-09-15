import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PageNav from "./components/PageNav";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [section, setSection] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <PageNav topic={topic} setTopic={setTopic} setSection={setSection} />
      <div className="flex flex-1 mt-20">
        <Sidebar section={section} setSection={setSection} />
        <div className="flex-1 overflow-auto ml-20 p-4">
          <MainContent topic={topic} section={section} />
        </div>
      </div>
    </div>
  );
}

export default App;
