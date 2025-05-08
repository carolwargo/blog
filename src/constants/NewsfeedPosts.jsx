// constants/NewsfeedPosts.jsx
import Avatar1 from "../assets/images/Avatar/Avatar1.png";
import Avatar2 from "../assets/images/Avatar/Avatar2.png";
import Avatar3 from "../assets/images/Avatar/Avatar3.png";
import Avatar4 from "../assets/images/Avatar/Avatar4.png";
import Avatar5 from "../assets/images/Avatar/Avatar5.png";
import Avatar6 from "../assets/images/Avatar/Avatar6.png";

import Post1 from '../assets/images/Newsfeed/Post1.png';
import Post2 from '../assets/images/Newsfeed/Post2.png';
import Post3 from '../assets/images/Newsfeed/Post3.png';
import Post4 from '../assets/images/Newsfeed/Post4.png';
import Post5 from '../assets/images/Newsfeed/Post5.png';
import Post6 from '../assets/images/Newsfeed/Post6.png';

export const newsfeedPosts = [
    {
      id: 1,
      avatar: {Avatar1},
      name: "John Doe",
      time: "1 min",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
   {Post1},
    {Post2},
      ],
    },
    {
      id: 2,
      avatar: {Avatar2},
      name: "John Doe",
      time: "1 min",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [],
    },
    {
      id: 3,
      avatar: {Avatar3},
      name: "John Doe",
      time: "32 min",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [   {Post4},],
    },

    {
        id: 4,
        avatar: {Avatar4},
        name: "John Doe",
        time: "32 min",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [   {Post5},],
      },
      {
        id: 5,
        avatar: {Avatar5},
        name: "John Doe",
        time: "32 min",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [   {Post5}],
      },
      {
        id: 6,
        avatar: {Avatar6},
        name: "John Doe",
        time: "32 min",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [   {Post6}],
      },
  ];
  