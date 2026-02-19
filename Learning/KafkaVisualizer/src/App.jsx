import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TopicDetails from "./pages/TopicDetails";
import Header from "./components/Header";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
        <div className="grid min-h-screen transition-all duration-300"
         style={{ gridTemplateColumns: collapsed ? "70px 1fr" : "240px 1fr" }}>
      
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/topic/:topic" element={<TopicDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
