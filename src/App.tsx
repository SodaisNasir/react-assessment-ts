import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Medications, NotFound } from "@/pages";
import { Layout } from "@/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
