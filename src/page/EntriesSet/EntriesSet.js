/* eslint-disable react/style-prop-object */
import PostGeneral from "../../component/PostGeneral";

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
  {id:1,url:'https://www.instagram.com/p/CQSqN-4tcsm/',enableDescription:true},
  {id:2,url:'https://www.instagram.com/p/CQVFcBarfBQ/',enableDescription:true },
  {id:3,url:'https://www.instagram.com/p/CQRAuv0L6_8/',enableDescription:true},
  {id:4,url:'https://www.instagram.com/p/CQWE8gzD3qQ/',enableDescription:false},
  {id:5,url:'https://www.instagram.com/p/CQV9Y4epD1e/',enableDescription:false},
  {id:6,url:'https://www.instagram.com/p/CQbDU3QqUku/',enableDescription:false},
  {id:7,url:'https://www.instagram.com/p/CQSkwKSpCJ4/',enableDescription:false},
  {id:8,url:'https://www.instagram.com/p/CQZkTbHBl1B/',enableDescription:true},
  {id:9,url:'https://www.instagram.com/p/CQAptCEryir/',enableDescription:false},
];
function EntriesSet() {
  return (
    <div className="EntriesSet" class="flex flex-col center w-full  justify-center 	items-center  lg:bg-transparent 	">
      <div className="EntriesSetTitle" class=" text-2xl sm:text-4xl items-center font-nanifont my-12 p-4 text-center rounded-2xl m-auto sm:m-5  mb-5  w-6/12 text-white violet">
      入選作品
      </div>
      <div className="EntriesSetImg" class="flex-col sm:flex  sm:flex-row  justify-center flex-wrap rounded-2xl p-auto center iphone:p-5 sm:p-5 m-auto mb-5  ">

          {/* <div class="flex flex-wrap gap-1 md:space-x-4 lq:gap-10 md:px-5  grid-flow-col auto-cols-min md:auto-cols-max  pt-6"> */}

          {/* <div class=" grid gap-1  grid-flow-col auto-cols-min md:auto-cols-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 px-5  pt-6"> */}
          {items.map((item) =>
                  <PostGeneral id={item.id} corwn={item.corwn} url={item.url} enableDescription={item.enableDescription} />
          )}
      </div>
    </div>
  );
}

export default EntriesSet;

// https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYN2hKckZAmZAzZAWcUlTOVVmQnF4aks3Qk1pMGRBWDJORW05TnMyNHB6VDMzSFJVbV9fQ2tmR1lWdjhEUnNvUncxT1hQYU5fRzhFelJHajFfS2tVUFJqdXVFbldXLW1SNy13QVMwZAE55Tng3RnVzOQZDZD
