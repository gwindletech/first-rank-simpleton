import Sidebar from "./Sidebar";

function Topic({ title, titration }) {
  return (
    <div className="flex">
      <Sidebar />
      <div>{title}</div>
      <div>{titration}</div>
    </div>
  );
}

export default Topic;
