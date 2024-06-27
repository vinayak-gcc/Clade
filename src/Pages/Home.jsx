import Navbar from "./Navbar"
import Pageoptions from './Pageoptions'
import Jobpreview from './Jobpreview'
import Sidebar from './Sidebar'

function Home() {
  return (
    <>
    <div className="w-full font-[Poppins] overflow-hidden bg-[#FFFFFF] m-0 ">
      <Navbar />
      <Pageoptions />
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-3/4'>
        <Jobpreview />
        </div>
        <div className='md:w-1/4'>
        <Sidebar />
        </div>
      </div>
    
    </div>
    </>
  );
}

export default Home;
