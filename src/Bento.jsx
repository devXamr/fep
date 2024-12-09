import fivest from "./assets/assets/images/illustration-five-stars.webp";
import inst from "./assets/assets/images/illustration-multiple-platforms.webp";
import schedule from "./assets/assets/images/illustration-consistent-schedule.webp";
import sposts from "./assets/assets/images/illustration-schedule-posts.webp";
import agrowth from "./assets/assets/images/illustration-audience-growth.webp";
import growf from "./assets/assets/images/illustration-grow-followers.webp";
import cposts from "./assets/assets/images/illustration-create-post.webp";
import ai from "./assets/assets/images/illustration-ai-content.webp";

export default function Bento() {


    return <div className='lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-row lg:auto-rows-min lg:gap-4'>

        <div
            className='bg-[#7650dc] pt-7 rounded-lg px-5 shadow-sm lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-end-auto'>
            <div className='font-semibold text-white text-4xl px-12 pb-4 lg:text-5xl'>Social Media <span
                className='text-[#ffcb6b]'>10x</span> <span className='italic'>Faster</span> <br/> with AI
            </div>
            <img src={fivest} className='w-2/4 mx-auto pb-2'/>
            <div className='text-white pb-8'>Over 4000+ 5-star reviews</div>
        </div>


        <div className='rounded-lg mt-5 shadow-md px-4 py-4 lg:col-start-2'>
            <img src={inst} className='mb-3'/>
            <div className='text-left font-semibold text-2xl'>Manage multiple accounts and platforms.</div>
        </div>


        <div className='rounded-lg bg-[#ffcb6b] px-4 mt-5 lg:mt-0 lg:col-start-3'>
            <div className='font-semibold text-left text-2xl pb-3 pt-4'>Maintain a consistent posting schedule.</div>
            <img src={schedule} className='w-52'/>
        </div>


        <div
            className='bg-[#dacffc] px-4 rounded-lg w-full shadow-sm mt-5 lg:mt-0 lg:row-start-1 lg:col-start-4 lg:row-span-2 lg:overflow-hidden'>
            <div className='font-bold text-2xl pt-6 pb-4 lg:text-3xl lg:text-left lg:ml-9'>Schedule to social media.
            </div>
            <img src={sposts} className='lg:scale-150 lg:pt-12 lg:ml-24 lg:'/>
            <div className='pt-4 lg:pt-20 pb-6 px-3 lg:ml-6 lg:text-left'>Optimize post timings to publish content at
                the perfect time for your
                audience.
            </div>
        </div>


        <div className='bg-[#ffffff] shadow-md mt-5 py-8 px-5 rounded-lg lg:col-start-2 '>
            <div className='text-left text-4xl font-bold pb-3'>{'>'}56%</div>
            <div className='text-left pb-4'>faster audience growth</div>
            <img src={agrowth} className='w-1/2'/>

        </div>


        <div className='bg-[#7650dc] mt-5 lg:mt-0 py-6 rounded-lg shadow-sm lg:col-start-3 lg:col-span-2 lg:flex'>

            <img src={growf} className='w-3/4 mx-auto lg:w-2/4 lg:px-4'/>
            <div className='text-white font-bold text-2xl px-16 pt-6 lg:pt-8'>Grow followers with non-stop content.
            </div>
        </div>


        <div className='lg:col-start-1 lg:row-start-1 lg:row-span-3'>
            <div className='bg-[#f9eee1] pl-7 pr-3 mt-5 lg:mt-0 rounded-lg shadow-sm lg:h-1/2 lg:mb-1'>
                <div className='text-left text-2xl font-semibold pt-5 mb-3 lg:mb-6 lg:text-4xl lg:pt-16'>Create and
                    schedule content <span
                        className='italic text-[#7650dc]'>quicker.</span></div>
                <img src={cposts} className='w-1/2 lg:w-3/4 lg:mx-auto pb-7'/>
            </div>


            <div className='bg-[#ffcb6b] pl-5 pt-4 pb-6 mt-5 lg:mt-1 rounded-lg lg:h-1/2 '>
                <div className='font-semibold text-3xl text-left mb-5'>Write your content using AI.</div>
                <img src={ai} className='w-2/4'/>
            </div>
        </div>


    </div>


}