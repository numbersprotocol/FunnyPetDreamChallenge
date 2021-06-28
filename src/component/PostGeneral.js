/* eslint-disable react/style-prop-object */

import React, { useState, useEffect } from "react";
import IGPost from "./IGPost";
import Corwn from "./Corwn";

function PostGeneral(props) {
  return (
    <div class="post ">
      {props.corwn === true ? (
        <Corwn />
      ) : props.id == null ? null : (
        <div class="shadow-lg rounded-2xl w-36  my-5 bg-yellow-300 dark:bg-gray-800">
          <div class="flex flex-col justify-start">
            <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
              NO.{props.id}
            </p>
          </div>
        </div>
      )}
      <IGPost captioned={false} url={props.url} />
    </div>
  );
}

export default PostGeneral;
