/* eslint-disable react/style-prop-object */
import "./Lab.css";
import PostGeneral from "../../component/PostGeneral";
import Post from "../../component/Post";
import IGPost from "../../component/IGPost";
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
  {id:1,url:'https://www.instagram.com/p/CQajcz1MiR1/',enableDescription:true},
  {id:2,url:'https://www.instagram.com/p/CQVou06sUgm/',enableDescription:true },
  {id:3,url:'https://www.instagram.com/p/CQV3wUKLc7F/',enableDescription:true},
  {id:4,url:'https://www.instagram.com/p/CQQufsdr2nC/',enableDescription:false},
  {id:5,url:'https://www.instagram.com/p/CQQ5_8js/',enableDescription:false},
  {id:6,url:'https://www.instagram.com/p/CPxYpR0lq95/',enableDescription:false},
  {id:7,url:'https://www.instagram.com/p/CPsli4rL8-Z/',enableDescription:false},
  {id:8,url:'https://www.instagram.com/p/CQQufsdr2nC/',enableDescription:true},
  {id:9,url:'https://www.instagram.com/p/CQTEDJaM8AB/',enableDescription:false},
];
// ,corwn:true
// ,corwn:true
function Lab() {
  return (
    <div className="Lab" class="	items-center">

      <div class="bg-gray-400 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-20 xl:grid-cols-4  xl:mx-10  pt-6">
        {items.map((item) =>
        <PostGeneral id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          // <div class="bg-white w-full max-w-min	mx-auto  rounded-md shadow-md overflow-hidden">
          //   <IGPost url={item}/>
          //   <div class="px-5 py-3">
          //     <h3 class="text-gray-700 uppercase">Chanel</h3>
          //     <span class="text-gray-500 mt-2">$12</span>
          //   </div>
          // </div>
        )}
        {/* <div class="w-full max-w-min		 mx-0 rounded-md shadow-md overflow-hidden">
          <IGPost url={"https://www.instagram.com/p/CQa_giBLIrF/"} />
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Chanel</h3>
            <span class="text-gray-500 mt-2">$12</span>
          </div>
        </div> */}
        {/* <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div class="flex items-end justify-end h-56 w-full bg-cover">
            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Chanel</h3>
            <span class="text-gray-500 mt-2">$12</span>
          </div>
        </div> */}
      </div>
    
      <iframe
        src="https://www.example.com/show?data..."
        width="540"
        height="450"
      ></iframe>
      <div></div>
      <IGPost url={"https://www.instagram.com/p/CQa_giBLIrF/"} />
      <InstagramEmbed
        className="instagram-embed"
        url="https://instagr.am/p/Zw9o4/"
        maxWidth={320}
        hideCaption={false}
        clientAccessToken="|IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD"
      />

    </div>
  );
}

export default Lab;

// https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD
