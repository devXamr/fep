import SingleFinishPageItem from "./cafe-components/SingleFinishPageItem.jsx";
import SingleSM from "./SingleSM.jsx";
import jessica from './assets/assets-profilepage/images/avatar-jessica.jpeg'

export default function Profile(){
     return <div className='bg-[#1f1f1f] w-[90%] mx-auto mt-20 px-4 py-7 rounded-lg lg:w-1/5'>
         <img src={jessica} className='mx-auto w-1/3 rounded-full'/>
         <div className='text-white font-black text-center text-2xl pt-4'>Jessica Randall</div>
         <div className='text-[#c5f82a] text-center pt-2 mb-5'>London, United Kingdom</div>
         <div className='text-center text-white'>"Front-end developer and avid reader"</div>
         <SingleSM name='Github'/>
         <SingleSM name='Frontend Mentor'/>
         <SingleSM name='Linkedin'/>
         <SingleSM name='Twitter'/>
         <SingleSM name='Instagram'/>



    </div>
}