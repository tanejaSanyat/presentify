

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='about'>
    <div className="w-full p-20 bg-[#CDEA68] leading-[4vw] font-[Neue Montreal] text-black text-[52px]">
            Presentify is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
    </div>
    <div className='info h-[300px] pt-4 bg-[#CDEA68] border-y-[1px] border-[#adba7f] flex justify-around'>
        <div>What you can expect:</div>
       <div className='w-[275px] h-[96px]'>
       <div className='mb-10'>
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
<div>
We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
       </div>
       <div className='flex h-[280px] flex-col items-center justify-center'>
        <div >S.</div>
        <div className='flex flex-col'>
        {
            ["Instagram","Behance","Facebook","Linkden"].map((ele,index)=>(
                <a key = {index} href="http://google.com">{ele}</a>
            ))
        }
        </div>
       </div>
       
    </div>
    <div>
        <div className='flex justify-around bg-[#CDEA68] py-5'>

        <div>
    <h1 className='text-5xl mb-6 '>Our approach:</h1>
    <button className='bg-black w-[172px] font-[Neue Montreal] text-white px-6 py-5 rounded-[25px] flex justify-between items-center group'>
        <div className='uppercase antialiased text-sm '>read more</div>
        <div className='w-2 h-2 bg-white rounded-full group-hover:w-6 group-hover:h-6 transition-all ease-in-out duration-300'></div>
    </button>
        </div>

        <img className= "w-[552px] h-[392px] rounded-lg bg-sky-100" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />

        </div>
        
    </div>
    </div>
  )
}

export default About
