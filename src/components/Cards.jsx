import {motion,useAnimate} from 'framer-motion'
function Cards() {
    const cards = [useAnimate(),useAnimate()]
    const handleHover = (index)=>{
        cards[index].start({y:"0"});
    }
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" >
      <div className='pt-32 pb-10 mb-[50px] text-5xl pl-10 border-b-[1px] border-slate-500 font-[Neue Montreal] antialiased '>Featured Projects</div>
      <div className="cards relative flex gap-3 px-14 font-[Neue Montreal] text-sm antialiased">
      <motion.div onHoverStart={()=>handleHover} className='card1'>
        <div className='flex gap-2 mb-5'>
            <div className='flex items-center'>
        <div className='dot bg-slate-900 w-3 h-3 rounded-full'></div>
            </div>
        <div>FYDE</div>
        </div>
        <div initial={{y:"100%"}} animate={cards[0]} className='absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[130px] font-[FoundersGrotesk] font-semibold font- uppercase '>Vise</div>
        <img className = "rounded-xl" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
        <div className='flex gap-3 uppercase text-sm'>
        {
            ["Audit" , "Copywriting", "SalesDeck" ,"Slides Design"].map((ele,key)=>(
                <div key={key} className = {'mt-3 border-[1px] rounded-full py-1 px-2 border-slate-700'} >{ele} </div>
            ))
        }
        </div>
      </motion.div>
      <div className='card2'>
        <div className='flex gap-2 mb-5'>
            <div className='flex items-center'>
        <div className='dot2 bg-slate-900 w-3 h-3 rounded-full'></div>
            </div>
        <div className=''>VISE</div>
        </div>
        <img className = "rounded-xl" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
        <div className='flex gap-3 uppercase text-sm'>
        {
            ["Agency","company presentation"].map((ele,key)=>(
                <div key={key} className = {'mt-3 border-[1px] rounded-full py-1 px-2 border-slate-700'} >{ele} </div>
            ))
        }
        </div>
      </div>
      </div>
      <div className="cards1 mt-7 flex gap-3 px-14 font-[Neue Montreal] text-sm antialiased">
      <div className='card3'>
        <div className='flex gap-2 mb-5'>
            <div className='flex items-center'>
        <div className='dot3 bg-slate-900 w-3 h-3 rounded-full'></div>
            </div>
        <div>TRAWA</div>
        </div>
        <img className = "rounded-xl" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
        <div className='flex gap-3 uppercase text-sm'>
        {
            ["Brand Identity","Design research","Investor Deck"].map((ele,key)=>(
                <div key={key} className = {'mt-3 border-[1px] rounded-full py-1 px-2 border-slate-700'} >{ele} </div>
            ))
        }
        </div>
      </div>
      <div className='card4'>
        <div className='flex gap-2 mb-5'>
            <div className='flex items-center'>
        <div className='dot4 bg-slate-900 w-3 h-3 rounded-full'></div>
            </div>
        <div className='uppercase'>Premium Blend</div>
        </div>
        <img className = "rounded-xl" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
        <div className='flex gap-3 uppercase text-sm'>
        {
            ["branded Template"].map((ele,key)=>(
                <div key={key} className = {'mt-3 border-[1px] rounded-full py-1 px-2 border-slate-700'} >{ele} </div>
            ))
        }
        </div>
      </div>
      </div>
      <div className='flex justify-center mt-10'>
        <button className='border-1px w-[250px] text-sm py-4 uppercase bg-black flex text-slate-200 text-center justify-evenly rounded-full'>
            <div className='tracking-wider'>View All case studies</div>
            <div className='dot w-2 h-2 bg-white mt-[6px] rounded-full'></div>
        </button>
      </div>
    </div>
  )
}

export default Cards

