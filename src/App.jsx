import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Lithium from "./pages/Lithium";
import Clozapine from "./pages/Clozapine";
import Ect from "./pages/Ect";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";

const content = {
  lithium: {
    title: "Lithium",
    titration: ["start low", "go slow"],
  },
  clozapine: {
    title: "Clozapine",
    titration: ["get chart", "follow chart"],
  },
};

function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="lithium" element={<Lithium />} />
        <Route path="clozapine" element={<Clozapine />} />
        <Route path="ect" element={<Ect />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
