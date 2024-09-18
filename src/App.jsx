import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PageNav from "./components/PageNav";
import { useState, useEffect } from "react";
import content from "./data/data";

function App() {
  const [topic, setTopic] = useState("");
  const [section, setSection] = useState("");
  const [mySteps, setMySteps] = useState([]);

  console.log(topic);
  console.log(section);
  console.log(content);

  useEffect(
    function () {
      if (section === "titration") {
        setMySteps(
          () => content.filter((item) => item.title === topic)[0].titration
        );
      } else {
        setMySteps([]);
      }
    },
    [section, topic]
  );

  return (
    <div className="h-screen flex flex-col">
      <PageNav topic={topic} setTopic={setTopic} setSection={setSection} />
      <div className="flex flex-1 mt-20">
        <Sidebar section={section} setSection={setSection} />
        <div className="flex-1 overflow-auto ml-20 p-4">
          <MainContent topic={topic} section={section} mySteps={mySteps} />
        </div>
      </div>
    </div>
  );
}

export default App;
