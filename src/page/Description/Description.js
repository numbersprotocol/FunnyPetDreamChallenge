import './Description.css';

function Description() {
  return (
    // <div className="Description" class="grid place-items-center  h-screen-1/2 mx-auto p-10 my-20 sm:w-max sm:my-auto rounded-xl space-y-5 text-center">
    <div className="Description" class="flex flex flex-col items-center	 place-items-center font-mono  mx-auto py-5 my-20 text-center sm:text-left">
      <div class="relative py-3 w-9/12 mx-auto my-10" >
        <div class="absolute inset-0 violet  bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-0 -rotate-3 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:px-20">
          <div class="w-full md:w-auto">
          <h3 class="text-2xl">投票時間: 2021/7/12 10:00 - 2021/7/16 23:59 (UTC+8)</h3>
            <h3 class="text-2xl">參加辦法:</h3>
            <p class="I155:22;107:587">
              1. 從下方入選的 15 個參賽作品中選一個最喜歡的，點選 " 愛心 "
              <ul/>
              <br/>
              2. 追蹤 IG:@only.truephotos 即完成投票 活動結束後將舉行抽獎，從參與投票的觀眾中抽出 5 名，各獲 30 USDT 獎 金。
              投票僅限 IG 帳號，不限投票數量 (如果每一個作品都喜歡，歡迎都愛心支持)， 唯每個帳號僅有一次抽獎機會。
            </p>
          </div>
        </div>
      </div>

      <div class="relative py-3  w-9/12 mx-auto my-10" >
        <div class="absolute inset-0 violet   bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-0 -rotate-3 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
          <div class="w-full md:w-auto">
            <h3 class="text-2xl">投票時間: 2021/7/12 10:00 - 2021/7/16 23:59 (UTC+8)</h3>
            <p class="I155:22;107:587">
              本次特別邀請臺北市立動物園參與公益示範賽，歡迎大家也給示範賽"愛心"， 投票完畢記得追蹤 IG 帳號:@only.truephotos 投給示範賽作品也可以抽獎唷!<ul/> <br/>示範賽獲得的愛心加總數目將化成實際金額捐出款項給臺北市立動物園。 <ul/><br/>示範賽作品將發行 NFT 進行公益拍賣，拍賣所得全額捐出給臺北市立動物園， 協助提昇圈養動物的照養、醫療、繁殖和族群管理技術，及原生棲地內的野生 動物研究。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
