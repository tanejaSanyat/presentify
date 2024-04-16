
const NavBar = () => {
  return (
    <div className=' mb-5 z-[999] width-full h-106 font-[Neue Montreal] px-10 py-5 flex justify-between items-center'>
        <div className='logo'>
        <h1 className=' text-[40px] uppercase font-[FoundersGrotesk]  font-bold'>Presentify</h1>
        </div>
        <div className='links flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact us"].map((ele, index) => (
          <a
            key={index}
            className="text-md capitalize antialiased hover:font-bold hover:scale-110 transition-all after:content-[''] after:absolute relative after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:w-full after:h-px after:bg-black after:bottom-0 after:left-0 cursor-pointer"
          >
            {ele}
          </a>
        ))}
        </div>
    </div>
  )
}

export default NavBar
