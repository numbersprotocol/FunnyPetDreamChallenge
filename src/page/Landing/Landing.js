import "./Landing.css";
import React, { useState, useEffect } from "react";

import benner from '../../img/benner.png';
import benner_zh from '../../img/benner_zh.png';

import benner_mobile from '../../img/benner_mobile.png'
import benner_mobile_zh from '../../img/benner_mobile_zh.png'


import logo_capture from '../../img/logo-capture.svg';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import MoreShare from '../../component/MoreShare/MoreShare'

const MySwal = withReactContent(Swal);

function Landing() {
  const { t } = useTranslation();

  const showModal = () => {
    MySwal.fire({
      title: <MoreShare />,
    }).then(value => {
      console.log(value, "value");
    });
  };

  const showNav = () => {
    MySwal.fire({
      title: <nav class="font-nanifont  text-indigo-800 dark:text-white uppercase text-3xl	flex flex-col items-center ">
      <a href="http://petdream.numbersprotocol.io/" class="py-2 px-6 flex hover:text-black">
        {t('EventHomepage')}
      </a>
      <button class="py-2 px-6 flex hover:text-black" type="button" onClick={() => changeLanguage('zh-TW')}>
        中文
      </button>
      <button class="py-2 px-6 flex hover:text-black" type="button" onClick={() => changeLanguage('en')}>
        EN
      </button>
    </nav>,
    }).then(value => {
      console.log(value, "value");
    });
  };


  /* 切換語系 */
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  //React hook
  const [lang, setLang] = useState('en');
  // useEffect(() => {
  //   if (lang !== null) i18n.changeLanguage(lang.value);
  // }, [i18n, lang]);

  // setLang('en');
  // setLang('ja-JP');
  return (
    <main className="Landing" class="font-mono  w-full overflow-hidden sm:overflow-visible">
      <header class="bg-white  h-12 iphone:h-18 sm:h-24 flex items-center z-30 w-full">
        <div class=" w-full mx-auto px-6 flex items-center justify-between">
          <div class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
            <img src={logo_capture} class="h-10 iphone:h-12 iphone:py-2 sm:h-24  sm:py-4" alt="logo" />
          </div>
          <div class="flex justify-between items-center">
            <nav class="font-nanifont  text-indigo-800  text-gray-800 dark:text-white uppercase text-3xl	 lg:flex items-center hidden">
              <a href="http://petdream.numbersprotocol.io/" class="py-1 px-6 flex hover:text-black">
                {t('EventHomepage')}
              </a>
              <button class="py-1 px-6 flex hover:text-black" type="button" onClick={() => changeLanguage('zh-TW')}>
                中文
              </button>
              <button class="py-1 px-6 flex hover:text-black" type="button" onClick={() => changeLanguage('en')}>
                EN
              </button>
            </nav>
            <button class="lg:hidden flex flex-col m-4" onClick={showNav}>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>

      <img class="hidden sm:block  mt-10" src={lang === 'zh-TW' ? benner_zh: benner} alt="Background" />
      <img class="sm:hidden mx-10 " src={lang === 'zh-TW' ? benner_mobile_zh: benner_mobile} alt="Background" />

      

      <div class="flex relative z-20 items-center">
        <div class="hidden sm:block absolute top-1 -left-32 w-96 h-96">
          <div class="absolute pl-32 flex flex-col  text-extrabold text-xl right-12 z-20 text-end top-1/4">
            <button class=" text-2xl sm:text-4xl font-nanifont  text-center text-white " onClick={showModal}>
              {/* You can click */}
              {t('click')}
              <br />
            #Tag ---->
              <br />
              {/* share this page ～ */}
              {t('share')}
              <br />
            </button>
          </div>
          <svg
            viewBox="0 0 200 200"
            class="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#7900ff"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
              transform="translate(100 100)"
            ></path>
          </svg>
        </div>
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div class="flex flex-col pt-10 bg-">

            {/* <div class="flex items-center justify-center mt-4">
                <a
                  href="#"
                  class="uppercase text-6xl  py-2 my-2 px-4 md:mt-16 bg-transparent text-white-800 bg-white hover:dark:bg-white-100 border-2 border-white-800 text-white-800 dark:text-white hover:bg-white-800 hover:text-white text-md"
                >
                  ! click  ME !
                </a>
              </div> */}
            {/* Hi, I&#x27;m 廢 🤘 */}

            <button class="text-2xl sm:text-4xl font-nanifont my-12 text-center text-indigo-800 " onClick={showModal}> {t('HashTag')}</button>
            <p class="sm:hidden  text-xl font-nanifont -my-1 text-center text-indigo-800 ">
              {t('link')}
              </p>
          </div>
        </div>
      </div>
      {/*         
        <div class="flex relative z-20 items-center">
          <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col pt-10">
              <p class="text-3xl my-6 text-center dark:text-white">
                Hi, I&#x27;m Charlie 🤘
              </p>
              <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                Building digital products, brands, and experiences.
              </h2>
              <div class="flex items-center justify-center mt-4">
                <a
                  href="#"
                  class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div> */}
    </main>
  );
}

export default Landing;
