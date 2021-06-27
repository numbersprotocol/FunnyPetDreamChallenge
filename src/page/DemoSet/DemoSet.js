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
  { id: 1, url: 'https://www.instagram.com/p/CQltfGNszUj/', enableDescription: true },
  { id: 2, url: 'https://www.instagram.com/p/CQf_RowslCj/', enableDescription: true },
  { id: 3, url: 'https://www.instagram.com/p/CQax24FMGcW/', enableDescription: true },
];
function DemoSet() {
  return (
    <div className="DemoSet" class="flex flex-col center w-full 	items-center backdrop-brightness-200 bg-yellow-400 sm:bg-transparent 	">
      <div className="DemoSetTitle" class=" text-2xl sm:text-4xl font-nanifont my-12 p-4 text-center rounded-2xl m-5  mb-5 bg-yellow-400 w-6/12	">
        示範賽作品
      </div>
      <div className="DemoSetImg" class=" rounded-2xl  m-auto p-auto sm:p-2   lg:p-4 lg:m-5  mb-5 bg-yellow-400 ">
        <div class="flex flex-col  m-auto  items-center	self-center	 lg:flex-row sm:p-5 flex-w-min  md:space-x-4  pt-6 ">

          {/* <div class="flex flex-wrap gap-1 md:space-x-4 lq:gap-10 md:px-5  grid-flow-col auto-cols-min md:auto-cols-max  pt-6"> */}

          {/* <div class=" grid gap-1  grid-flow-col auto-cols-min md:auto-cols-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 px-5  pt-6"> */}
          {items.map((item) =>
            <Post id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoSet;

// https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD
