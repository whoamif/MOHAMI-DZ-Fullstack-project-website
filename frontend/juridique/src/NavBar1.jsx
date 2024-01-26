import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function NavBar1() {
  const [isConnexionDropdownVisible, setConnexionDropdownVisible] = useState(false);
  const [isAnnuaireDropdownVisible, setAnnuaireDropdownVisible] = useState(false);

  const toggleConnexionDropdown = () => {
    setConnexionDropdownVisible(!isConnexionDropdownVisible);
  };

  const toggleAnnuaireDropdown = () => {
    setAnnuaireDropdownVisible(!isAnnuaireDropdownVisible);
  };

  return (
    <div className='flex justify-between w-full h-20 fixed quicksand p-10 shadow-md items-center relative'>
      <div>
        <img src="./elements/DZ-Mouhami.svg" alt="" />
      </div>
      <div className='flex gap-7 mr-72'>
        <div
          className='relative'
          onMouseEnter={toggleAnnuaireDropdown}
          onMouseLeave={toggleAnnuaireDropdown}
        >
          <a className='text-black hover:text-orange-500' href="">
          دليل
          </a>
          {isAnnuaireDropdownVisible && (
            <div className='flex absolute top-full left-0 mt-1 '>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              القانون الإداري
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون العمل
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حق البنك
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              القانون المدني
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              القانون التجاري
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الاندماج والاستحواذ
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون البيئة
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الهجرة
              </a>
              
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">DROIT MARITIME</a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">DROIT PÉNAL</a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
            قانون العقارات
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون حماية المستهلك
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الصحافة
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الملكية الفكرية
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الرياضة
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق العمل
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              القانون الدولي الخاص
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الأسرة
              </a>
              
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              القانون المروري
              </a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق التأمين
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق العقود
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الطاقة
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الشركات
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الأجانب
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الاندماج والاستحواذ
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الاستثمار
              </a>
            <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROIT FONCIER</a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROITS DE L'HOMME</a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
            حقوق الخصخصة            </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون استرداد الديون
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الشركات
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              قانون الاتصالات/تكنولوجيا المعلومات والاتصالات
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق النقل
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الجمارك
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              حقوق الصحة
              </a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROIT JUDICIAIRE</a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">  DROIT SOCIAL
</a>

            </div>
            </div>
          )}
        </div>
        <a className='text-black hover:text-orange-500' href="">
        البطاقة القضائية
        </a>
        <a className='text-black hover:text-orange-500' href="">
        الخدمات
        </a>
        <a className='text-black hover:text-orange-500' href="">
        اتصل بنا
        </a>
      </div>
      <div
        className='flex flex-col absolute top-4 right-4 mt-1'
        onMouseEnter={toggleConnexionDropdown}
        onMouseLeave={toggleConnexionDropdown}
      >
        <button
          className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'
        >
          اتصال
        </button>
        {isConnexionDropdownVisible && (
          <div className='flex flex-col rounded-b-lg bg-gray-200'>
            <Link to={'/login'} className='text-black  rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
            تسجيل الدخول
            </Link>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
            التسجيل
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar1;
