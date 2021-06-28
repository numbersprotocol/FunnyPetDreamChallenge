/* eslint-disable react/style-prop-object */
import IGPost from "../../component/IGPost";
import Post from "../../component/Post";

import InstagramEmbed from "react-instagram-embed";
let arr = [1, 2, 3, 4, 5, 6, 7];
// const items = [
//   'https://www.instagram.com/p/CQa_giBLIrF/',
//   'https://www.instagram.com/p/CQYnNS6rq9M/',
//   'https://www.instagram.com/p/CQV3wUKLc7F/',
//   'https://www.instagram.com/p/CQThvQbrqkE/',
//   'https://www.instagram.com/p/CQNaysoFP9b/',
//   'https://www.instagram.com/p/CPxYpR0lq95/',
//   'https://www.instagram.com/p/CPsli4rL8-Z/',
//   'https://www.instagram.com/p/CQQufsdr2nC/',
//   'https://www.instagram.com/p/CQTEDJaM8AB/',
// ];
const items = [
  { id: 1, url: 'https://www.instagram.com/p/CQajcz1MiR1/', enableDescription: true, corwn: true },
  { id: 2, url: 'https://www.instagram.com/p/CQVou06sUgm/', enableDescription: true },
  { id: 3, url: 'https://www.instagram.com/p/CQiPPolqaPx/', enableDescription: true },
];
function AwardedSet() {
  return (
    <div className="AwardedSet" class="flex flex-col	items-center bg-yellow-400 sm:bg-transparent w-full ">
      <div className="AwardedSetTitle" class=" text-4xl sm:text-6xl text-white font-nanifont my-12 p-4 text-center rounded-2xl m-5  mb-5 violet w-6/12  md:w-3/12">
      得獎作品
      </div>
      {/* <div className="AwardedSetImg" class=" p-2 lg:rounded-2xl lg:m-2  mb-5 violet "> */}
      <div className="AwardedSetImg" class=" sm:p-2   lg:m-2 rounded-2xl  mb-5 bg-yellow-400 ">

        {/* <div class="flex flex-wrap  justify-between  space-x-0 lg:space-x-2 mix-w-mix bg-blue-400 pt-6"> */}
        <div class="flex flex-col sm:p-5 lg:flex-row md:space-x-4 lq:gap-10 md:px-5  grid-flow-col auto-cols-min md:auto-cols-max  pt-6">

          {/* <div class="flex flex-wrap gap-1 md:space-x-4 lq:gap-10 md:px-5  grid-flow-col auto-cols-min md:auto-cols-max  pt-6"> */}
          {/* <div class="flex flex-col min-w-screen lg:flex-row md:space-x-4 lq:gap-10 md:px-5  grid-flow-col auto-cols-min md:auto-cols-max  pt-6"> */}

          {/* <div class=" grid gap-1  grid-flow-col auto-cols-min md:auto-cols-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 px-5  pt-6"> */}
          {/* <div class="flex flex-row flex-wrap   bg-yellow-500">
          
           {items.slice(0,2).map((item) =>
            <Post id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          )}
          </div>
          {items.slice(2).map((item) =>
            <Post id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          )} */}
          {items.map((item) =>
            <Post id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AwardedSet;

// https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD
