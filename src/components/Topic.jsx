import Sidebar from "./Sidebar";

function Topic({ title }) {
  return (
    <div className="flex">
      <Sidebar />
      <div>{title}</div>
    </div>
  );
}

export default Topic;
