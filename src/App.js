import logo from './logo.svg';
import './App.css';
import Sidenav from './Component/SideNav/Sidenav';
import Home from './Page/Home/Home';
import { useState } from 'react';

function App() {
  const [isOpens, setIsOpens] = useState(true);
  const [openHome,setopenHome]=useState(false);
  const [openAbout,setopenAbout]=useState(false);
  const[projectopen,setprojectopen]=useState(false)

  const showall=(valu)=>{
    setprojectopen(valu)
  }

  const setsidenav=(valu)=>{
    setIsOpens(valu)
  }
  const sethome = (valu)=>{
    setopenHome(valu)
    console.log("home",openHome)
  }
  const setabout = (valu)=>{
    setopenAbout(valu)
    console.log("about' :" , openAbout)
  }
  return (
    <div className='App'>
  <Sidenav setIsOpen={setsidenav} isOpen={isOpens} isHomes={sethome} isAbouts={setabout}
   openHome={openHome} openAbout={openAbout} isProject={showall}
  />
  <Home isOpen={isOpens} isHome={openHome} isAbout={openAbout}  projectopen={projectopen} showall={showall}/>
  </div>
  );
}

export default App;
