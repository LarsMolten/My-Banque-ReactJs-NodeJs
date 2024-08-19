import Sidebar from "./components/sidebar/sidebar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Clients from "./components/Client/Clients";
import Transaction from "./components/Transaction/Transaction";
import ClientNew from "./components/newClient/ClientNew";



export default function App() {
  return (
    <div className="  flex flex-row bg-blue-gray-50">
      <BrowserRouter>
        <Sidebar />
        <div className=" grow flex flex-col w-full">
          <div className="bg-blue-gray-900 text-light-green-50 h-[40px]">
            header
          </div>
          <div className=" p-8">
            <Routes>
              <Route path={'/'} element={<Clients/>}/>
              <Route path={'/client'} element={<Clients/>}/>
              <Route path={'/transaction'} element={<Transaction/>}/>
              <Route path={'/ClientNew'} element={<ClientNew/>}/>
            </Routes>
          </div>   
        </div> 
      </BrowserRouter>   
    </div>
  );
}
