import instagram from '../../img/icon-instagram.svg'
import facebook from '../../img/icon-facebook.svg'
import twitter from '../../img/icon-twitter.svg'
import capture from '../../img/logo_capture.svg';
import captureClub from '../../img/logo-captureClub.svg';
import Numbers_Logo_white_border from '../../img/Numbers_Logo_white_border.png';



function Footer() {
  return (
    <footer className="Footer" class=" bg-black  pt-1 border-b-2 border-blue-700">
      <div class="Footer-container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col ">
              <span class="font-bold text-gray-700 uppercase mb-2">social media</span>
              <div class="flex flex-row" >
                <img src={instagram} class="w-16 mx-4" alt="logo-instagram" />
                <img src={facebook} class="w-16 mx-4" alt="logo-facebook" />
                <img src={twitter} class="w-16 mx-4" alt="logo-twitter" />
              </div>
            </div>

            <div class="flex flex-col ">
              <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Team & Products</span>
              <div class="flex flex-col sm:flex-row" >
                <a href="https://numbersprotocol.io/" class="flex flex-row"  > 
                  <img src={Numbers_Logo_white_border} class="max-w-screen-1/2 my-4 h-12 sm:mr-5" alt="logo-capture" />
                </a>
                <a href="https://numbersprotocol.io/capture" class="flex flex-row" >
                  <img src={capture} class="max-w-screen-1/2 my-4 h-12 sm:mr-5" alt="logo-capture" />
                </a>
                <a href="https://captureclub.cc/" class="flex flex-row" >
                  <img src={captureClub} class="max-w-screen-1/2 my-4 h-14 sm:mr-5" alt="logo-captureClub" />
                </a>
              </div>
            </div>
            {/* <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
              <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
              <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
              <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
            </div> */}
          </div>
        </div>
      </div>
      <div class="Footer-container mx-auto px-6 w-screen ">
        <div class="mt-5 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-white font-bold mb-2">
              Capture App /CaptureClub Powered by Numbers
              Copyright © 2021 Numbers Co., Ltd.
              Made with  ❤  in trustworthy Taiwan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
