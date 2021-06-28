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
      "EventHomepage": "Event homepage",
      "click": "You can click",
      "share": "share this page ～",
      "link": "You can click ☝️ #Tag ☝️ ,share this page ～",
      'VotingDescriptions': {
        "title_IG":"How to vote with IG account：",
        "title_Twitter":"How to vote with Twitter account:",
        "1":'Choose one of the 9 entries you like the most below,get into the IG post and click "Like"',
        "2":"Follow @only.truephotos",
        "3":"All set!",
        "4":"Follow @onlytruephotos",
        "5":"Enter the voting thread (tweet at 10:00 on July 12, 2021)",
        "6":'Choose one of the 9 entries you like the most, and click "Like"',
        "7":"All set!",
      },
      "VotingDescription":`<p class="I155:22;107:587">After the event, 5 people from the voting audience will be selected at random, and each will receive a 30 USDT bonus.<br/>Voting is limited to IG/Twitter accounts, and there is no limit to the number of votes (if you like every work, you are welcome to support all of them), but each account(including IG & Twitter) has only one chance to draw a lottery. <br/></p>`,
      "demo":"★Special charity demonstration competition★",
      "demoDescription":"The charity demonstration competition is open for animal conservation related organizations or KOLs to join. <br/> Once the charity demonstration competition works are selected, the charity organization will receive:<br/>",
      "demoDescriptions":{
        "1":'Basic donation: Donate $8,500(TWD) to the corresponding organization once the work of the demonstration competition is selected.',
        "2":"Voting reward: the demonstration competition can also win the top three prizes of the community vote.",
        "3":"Extra donation: We will donate the corresponding amount (1 TWD per vote) to the organization to contribute to animal conservation.",
      },"demoDescriptionEnd":"Please don’t forget to support the charity demonstration videos when you vote!"
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
      "EventHomepage": "活動主頁",
      "click": "點擊右側",
      "share": "分享活動",
      "link": "點擊上方 ☝️ #Tag ☝️ ,分享活動 ～",
      // 'VotingDescription':`<p class="I155:22;107:587">1. 從下方入選的 15 個參賽作品中選一個最喜歡的，點選 " 愛心 "<br/>2. 追蹤 IG:@only.truephotos 即完成投票 活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎 金。投票僅限 IG 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)， 唯每個帳號僅有一次抽獎機會。</p>`,
      "userMessagesUnread": " 哈偻 <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",
      "userMessagesUnread_plural": "  哈偻 <1>{{name}}</1>, you have {{count}} unread messages.  <5>Go to messages</5>.",
      'VotingDescriptions': {
        "title_IG":"參加辦法 (使用 IG 帳號投票)：",
        "title_Twitter":"參加辦法 (使用 Twitter 帳號投票):",
        "1":'從下方 9 個參賽作品中選一個最廢的，進入 IG 作品展示頁面，點選 "愛心"',
        "2":"追蹤 IG：@only.truephotos",
        "3":"完成！",
        "4":"追蹤 @onlytruephotos",
        "5":"進入投票討論串 (2021/7/12 10:00 發布)",
        "6":'從 9 個參賽作品中選一個最廢的，點選 "愛心"',
        "7":"完成！",
      },
      "VotingDescription":`<p class="I155:22;107:587">活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎金。<br/>投票僅限 IG/Twitter 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)，唯每個帳號 (包含 IG 與 Twitter 帳號) 僅有一次抽獎機會。<br/></p>`,
      "demo":"★加開！公益示範賽★",
      "demoDescription":"為了讓大家除了拍睡播讓廢寵賺罐頭外，為了讓沒有家的動物 / 野生動物也能安心生活，本次特別開放 #公益示範賽<br/>公益示範賽開放讓動物保育相關組織或 KOL 加入，公益示範賽作品一經入選，公益組織即獲：<br/>歡迎大家在投票的時候也別忘了給公益示範賽一點支持唷！<br/>",
      "demoDescriptions":{
        "1":'基本捐款：示範賽作品一經入選即捐款 $8,500 給相應組織',
        "2":"額外捐款：示範賽亦可爭取社群投票前三名獎金，即 NFT 發行機會s",
        "3":"加碼捐款：示範賽獲得多少投票票數，即捐出相應金額 (一票 1 元) 給該組織，為動物保育盡一份心力！",
      },
      "demoDescriptionEnd":"歡迎大家在投票的時候也別忘了給公益示範賽一點支持唷！"
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
