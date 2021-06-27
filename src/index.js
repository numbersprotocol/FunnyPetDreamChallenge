import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './page/Landing/Landing';
import App from './page/App/App';
import Lab from './page/Lab/Lab';
import Footer from './page/Footer/Footer';
import Description from './page/Description/Description';
import DemoSet from './page/DemoSet/DemoSet';
import AwardedSet from './page/AwardedSet/AwardedSet';
import EntriesSet from './page/EntriesSet/EntriesSet';


import reportWebVitals from './reportWebVitals';
import InstagramEmbed from 'react-instagram-embed';
import './i18n';
import SEOWithQuery from './component/SEO'
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <div class="flex flex-col	items-center backdrop-brightness-100 overflow-y-auto	">
    <SEOWithQuery />
      <Landing />
      <Description />
      <DemoSet />
      <AwardedSet />
      {/* <div className="DemoSet" class="flex flex-col	items-center	">
        <div className="DemoSetTitle" class=" text-2xl sm:text-4xl font-nanifont my-12 p-4 text-center rounded-2xl m-5  mb-5 bg-yellow-400 w-6/12	">
          入選作品  
         </div>
      </div> */}
      <EntriesSet />
      {/* <Lab /> */}
      <InstagramEmbed
        className="instagram-embed"
        url="https://instagr.am/p/Zw9o4/"
        maxWidth={320}
        hideCaption={false}
        clientAccessToken="|IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD"
      />
    </div>
    <Footer />


    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// access_token={app-id}|{client-token}



