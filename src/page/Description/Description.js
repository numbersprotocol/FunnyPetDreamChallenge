import './Description.css';
import { withTranslation, Trans } from 'react-i18next';

function Description({ t }) {
  const { name } = 'person';
  const count = 4;
  return (
    // <div className="Description" class="grid place-items-center  h-screen-1/2 mx-auto p-10 my-20 sm:w-max sm:my-auto rounded-xl space-y-5 text-center">
    <div className="Description" class="flex flex flex-col items-center	 place-items-center font-mono  mx-auto py-5 my-20 text-center sm:text-left">
      <div className="DemoSetTitle" class=" text-4xl sm:text-4xl font-nanifont my-12 p-4 text-center rounded-2xl m-5 z-40 -mb-16 violet text-white shadow-gl w-7/12	sm:w-5/12">
        {t('Voting')}
      </div>
      <div class="relative py-3 w-9/12 mx-auto my-10" >
        <div class="absolute inset-0 violet  bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-0 -rotate-3 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:px-20">
          <div class="w-full md:w-auto">
            <h3 class="text-2xl">{t('VotingPeriod')} : 2021/7/12 10:00 - 2021/7/16 23:59 (UTC+8)</h3>
            <h3 class="text-2xl">{t('HowToVote')}:</h3>
            {/* <p class="I155:22;107:587">
              1. 從下方入選的 15 個參賽作品中選一個最喜歡的，點選 " 愛心 "
              <ul />
              <br />
              2. 追蹤 IG:@only.truephotos 即完成投票 活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎 金。
              投票僅限 IG 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)， 唯每個帳號僅有一次抽獎機會。
            </p> */}

            {/* 參加辦法 (使用 IG 帳號投票)：<br />
            <li>從下方 9 個參賽作品中選一個最廢的，進入 IG 作品展示頁面，點選 "愛心"</li>
            <li>追蹤 IG：@only.truephotos</li>
            <li>完成！</li>
            參加辦法 (使用 Twitter 帳號投票)：
            <li>追蹤 @onlytruephotos</li>
            <li>進入投票討論串 (2021/7/12 10:00 發布)</li>
            <li>從 9 個參賽作品中選一個最廢的，點選 "愛心"</li>
            <li>完成！</li><br />

            活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎金。<br />
            投票僅限 IG/Twitter 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)，唯每個帳號 (包含 IG 與 Twitter 帳號) 僅有一次抽獎機會<br /> */}
            {t('VotingDescriptions.title_IG')}
            <br />
            <li>{t('VotingDescriptions.1')}</li>
            <li>{t('VotingDescriptions.2')}</li>
            <li>{t('VotingDescriptions.3')}</li>
            {t('VotingDescriptions.title_Twitter')}
            <br />
            <li>{t('VotingDescriptions.4')}</li>
            <li>{t('VotingDescriptions.5')}</li>
            <li>{t('VotingDescriptions.6')}</li>
            <li>{t('VotingDescriptions.7')}</li>
            <Trans i18nKey="VotingDescription">
            </Trans>
          </div>
        </div>
      </div>
      <div className="DemoSetTitle" class=" text-4xl sm:text-4xl font-nanifont my-12 p-4 text-center rounded-2xl m-5 z-40 -mb-16 violet text-white shadow-gl w-7/12	sm:w-5/12">
        {t('Demo')}
      </div>
      <div class="relative py-3  w-9/12 mx-auto my-10" >
        <div class="absolute inset-0 violet   bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-0 -rotate-3 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
          <div class="w-full md:w-auto">
            <h3 class="text-2xl">{t('demo')}</h3>
            <p class="I155:22;107:587">
              <Trans i18nKey="demoDescription">
              </Trans>
              <li>{t('VotingDescriptions.1')}</li>
              <li>{t('VotingDescriptions.2')}</li>
              <li>{t('VotingDescriptions.3')}</li>
              {t('demoDescriptionEnd')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Description);
