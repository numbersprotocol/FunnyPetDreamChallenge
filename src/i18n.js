import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "HashTag": "#FunnyPetDreamChallenge",
      "Voting": "Voting and Raffle Information",
      "Demo": "Charity Demo Vidoe", 
      "DemoSet": "Demo Videos From Taipei Zoo",
      "EventName": "Funny Pet Dream", 
      "Entries": "Entries",
      "VotingPeriod": "Voting Period",
      "HowToVote": "How to vote", 
      "": "", 
      "": "",
    }
  },
  zh: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "HashTag": "#FunnyPetDreamChallenge",
      "Voting": "投票辦法",
      "Demo": "公益示範賽", 
      "DemoSet": "臺北市立動物園公益示範賽", 
      "EventName": "廢寵入選睡播大挑戰",
      "Entries": "入選作品", 
      "VotingPeriod": "投票時間",
      "HowToVote": "參加辦法", 

      "": '從下方入選的 15 個參賽作品中選一個最喜歡的，點選 " 愛心 "',
      "": "追蹤 IG:@only.truephotos 即完成投票 活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎 金。", 
      "": "投票僅限 IG 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)， 唯每個帳號僅有一次抽獎機會。",
  
 
      "": "",
      "": "", 
      "": "",
    
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: 'en',     
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
