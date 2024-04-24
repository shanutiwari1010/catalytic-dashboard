// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout/index";
import Dashboard from "@/pages/dashboard";
import InTheft from "@/pages/intheft";
import DeviceForm from "@/pages/devices";
import VehicleForm from "@/pages/vehicles";
import CustomerForm from "@/pages/customers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path="/intheft" element={< InTheft/>} />
          <Route path="/devices" element={< DeviceForm/>} />
          <Route path="/vehicles" element={< VehicleForm/>} />
          <Route path="/customers" element={< CustomerForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// intheft devices vehicles customers