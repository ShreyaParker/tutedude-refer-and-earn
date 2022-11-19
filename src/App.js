import Navbar from "./components/Navbar";
import Referandearn from "./pages/Referandearn";
import PageIndex from "./components/PageIndex";
import {useState} from "react";
import FriendsReferred from "./pages/FriendsReferred";

function App() {
  const [show,setShow]=useState(true)
  return (

      <div className="App">
        <div className="bg-white">
          <Navbar/>
          <div className="flex flex-col mt-2 px-4 md:px-11 lg:px-48 " >
            <PageIndex show={show} setShow={setShow}/>
            {show?<Referandearn />:<FriendsReferred/>}

            <div className="text-start text-sm font-medium text-fuchsia-900 mt-16 md:mt-7 mb-10 space-y-5 md:space-y-2">

              {show? <button onClick={()=> setShow(
                  false
              )} >
                Friend who enrolled
              </button> : ""}
              <h1 >Tearms And condition
              </h1>
            </div>
          </div>
        </div>


      </div>
  );
}

export default App;
