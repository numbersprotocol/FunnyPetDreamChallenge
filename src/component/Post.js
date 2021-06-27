/* eslint-disable react/style-prop-object */

import React, { useState, useEffect } from "react";
import IGPost from "./IGPost";
import Corwn from "./Corwn";


function Post(props) {
  return (
    <div class="post min-w-min">
      {props.corwn === true ? <Corwn /> : !props.id == null ? null :
        <div class="shadow-lg rounded-2xl w-36  my-5 bg-yellow-300 dark:bg-gray-800">
          <div class="flex flex-col justify-start">
            <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
              NO.{props.id}
            </p>
          </div>
        </div>
      }
      <div class="bg-white w-full max-w-min	 rounded-md shadow-md overflow-hidden">
        <IGPost url={props.url} />
        {!props.enableDescription ? null :
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Chanel</h3>
            <span class="text-gray-500 mt-2">$12</span>
          </div>
        }
      </div>
    </div>
  );
}

export default Post;
