import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import LawyerSlides from './LawyerSlides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faLocationDot } from '@fortawesome/free-solid-svg-icons';

function App1() {

  return (
    <>
      <div className='flex flex-col w-screen min-h-screen  '>
        
        <NavBar />

        <div className='bg-cover bg-center w-screen min-h-96 ' style={{ backgroundImage: `url('./elements/bgimg.svg')`, height: '100%'}}>
          <div className='text-black w-2/5	mt-20 ml-16 flex flex-col gap-5'>
          <p className=' text-3xl	'>توجيه التميّز القانوني في الجزائر</p>
          
          <p
          className='text-2xl font-thin'>
            محاميوكم الموثوق بهم للعدالة والخبرة
                
              </p>
          
          
          </div>
          <div className='flex gap-2 place-items-baseline ml-10 mt-20'>
      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg' >
      <FontAwesomeIcon className='text-orange-500' icon={faMagnifyingGlass} />
      <input
        className='ml-2 w-80 h-full bg-transparent outline-none'
        type="text"
        placeholder='Search for your lawyer'
      />
      </div>
     
      

      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
        <FontAwesomeIcon className='text-orange-500' icon={faLocationDot} />
        <input
          className='ml-2 w-80 h-full bg-transparent outline-none'
          type="text"
          placeholder='Search for location'
        />
      </div>

      <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 place-items-center'>
      البحث
      </button>
    </div>
        </div>
        <div className='w-screen min-h-96 mt-32 flex flex-col gap-20 '>
        <p className='text-4xl text-black drop-shadow-2xl'> انظر إلى محامينا المفضلين لدينا</p>
        <div className='flex justify-center items-center w-4/5  m-auto'>
  <LawyerSlides />
</div>
<p className='ml-70 font-bold text-black text-3xl text-left pl-16'>البحث مباشرة حسب المدينة: </p>
<div className=' flex place-self-start p-10'>
  
<div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 1. أدرار</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 2. الشلف</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 3.  الأغواط</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 4.  أم البواقي</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 5. باتنة</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 6. بجاية</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 7. البسكرة</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 8. بشار</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 9. البليدة</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 10. بويرة</a>
  </div>
  <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 11. تامنراست</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 12. تبسة</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 13. تلمسان</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 14. تيارت</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 15.  تيزي وزو</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 16. الجزائر</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 17. الجلفة</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 18.  جيجل</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 19. سطيف</a>
    <a className='text-black hover:underline hover:text-black font-thin' href=""> 20.  سعيدة</a>
  </div>
  <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
  <a  className='text-black hover:underline hover:text-black font-thin'href=""> 21	.سكيكدة</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 22	.سيدي بلعباس</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 23.	عنابة</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 24	. قالمة</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 25	.قسنطينة</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 26	.المدية</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 27	.مستغانم</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 28	.المسيلة</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 29	.معسكر</a>
  <a className='text-black hover:underline hover:text-black font-thin'href="">30	.ورقلة</a>
  </div>
  <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 31	.وهران</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 32	.البيض</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 33	.إليزي</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 34	برج بوعريريج</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 35	بومرداس</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 36	 تارف</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 37	تندوف</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 38	تيسمسيلت</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 39	الوادي</a>
  <a className='text-black hover:underline hover:text-black font-thin'href="">40	 خنشلة</a>
  </div>
  <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 41	 سوق أهراس</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 42	تيبازة</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 43	ميلة</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 44	عين الدفلى</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 45	 النعامة</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 46	عين تيموشنت</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 47	 غرداية</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 48	لريليزان</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 49	تيميمون</a>
  <a className='text-black hover:underline hover:text-black font-thin'href="">50	برج باجي مختار</a>
  </div>
  <div className='flex flex-col text-black text-xl p-4 place-self-start  text-left gap-2'>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 51	أولاد جلال	</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 52	بني عباس</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 53	عين صالح</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 54	عين قزام</a>
  <a className='text-black hover:underline hover:text-black font-thin'href=""> 55	تقرت</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 56	 جانت</a>
  <a className='text-black hover:underline hover:text-black font-thin' href=""> 57	 المغير</a>
  <a  className='text-black hover:underline hover:text-black font-thin'href=""> 58	المنيعة </a>
  </div>
  
</div>
            
        </div>
         
       
        <Footer ></Footer>
       </div>
    </>
  )
}

export default App1;
