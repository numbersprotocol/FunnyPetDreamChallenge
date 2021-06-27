import './Footer.scss';

function Footer() {
  let compList = [];  //<-- 宣告一個空的array list, 準備儲存重複的
  for (var i = 0;i < 128; i++){
    console.log(i);
    // div.bubble(style=`--size:; --distance:; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`)
    compList.push( <div class="bubble" style={{'--size':`${2+Math.random()*4}rem`,'--distance':`${6+Math.random()*4}rem`,'--position':`${-5+Math.random()*110}%`,'--time':`${2+Math.random()*2}s`,'--delay':`--delay:${-1*(2+Math.random()*2)}s;`}}></div>);
  } //Small numbers looks nice too
  return (
    <div className="Footer">
      <div class="main"></div>
      <div class="footer">
        <div class="bubbles">
          {
            compList
          }
          {/* <div class="bubble" style={{'--size':'5.745916999691551rem','--distance':'8.777582021413389rem','--position':'84.86970920488244%','--time':'2.1741388949422573s','--delay':'-3.0517442840627886s'}}></div> */}
          
        </div>
        <div class="content">
          {/* <div>
            <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
            <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
            <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
            <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
          </div>
          <div><a class="image" href="https://codepen.io/z-" target="_blank" style={{'background-image': 'url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)'}}></a>
            <p>©2019 Not Really</p>
          </div> */}
        </div>
      </div>
      <svg style={{'position':'fixed', 'top':'100vh'}}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <div class="pt-2 w-full h-1/10 bg-black">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-white text-white text-lg 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 2019-2021. All Rights Reserved.
            </div>

            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-twitter-alt"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-youtube"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    </div>

  );
}

export default Footer;
