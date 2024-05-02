import { ConnectionType } from "@devdocs/types/models/apps/Chat";

const connectionList: ConnectionType[] = [
  {
    id: 2,
    channelId: 2001,
    name: "Jubina Chawla",
    image: "/assets/images/avatar/A1.jpg",
    status: "online",
    username: "jubina.1",
    lastMessage: {
      id: 6,
      message: "ok, will do it",
      type: "received",
      time: "Sat, May 09, 2020 8:30 PM",
    },
  },
  {
    id: 3,
    channelId: 2002,
    name: "Crema Devs",
    username: "johnson.mark",
    image: "/assets/images/avatar/A10.jpg",
    status: "offline",
    lastMessage: {
      id: 6,
      message: "ok, will do it",
      type: "received",
      time: "Sat, May 09, 2020 8:30 PM",
    },
    isGroup: true,
    members: [
      {
        id: 1,
        name: "Jubina Chawla",
        image: "/assets/images/avatar/A1.jpg",
        status: "online",
      },
      {
        id: 2,
        name: "Mark Johnson",
        username: "johnson.mark",
        image: "/assets/images/avatar/A10.jpg",
        status: "away",
      },
      {
        id: 3,
        name: "Jubina Chawla",
        image: "/assets/images/avatar/A1.jpg",
        status: "online",
      },
      {
        id: 4,
        name: "Mark Johnson",
        username: "johnson.mark",
        image: "/assets/images/avatar/A10.jpg",
        status: "offline",
      },
    ],
  },
  {
    id: 4,
    channelId: 2003,
    name: "Shane Lee",
    username: "lee.shane",
    image: "/assets/images/avatar/A11.jpg",
    status: "online",
  },
  {
    id: 5,
    channelId: 2004,
    name: "Chris Crains",
    username: "chris.crains",
    image: "/assets/images/avatar/A12.jpg",
    status: "offline",
    lastMessage: {
      id: 6,
      message: "cheers!",
      type: "received",
      time: "Fri, May 08, 2020 8:30 PM",
    },
  },
  {
    id: 6,
    channelId: 2005,
    name: "Jonathan Trott",
    username: "trott.johnson",
    image: "/assets/images/avatar/A18.jpg",
    status: "online",
  },
  {
    id: 7,
    channelId: 2006,
    name: "Rohita Sharma",
    image: "/assets/images/avatar/A6.jpg",
    status: "online",
    username: "sharma.rohita",
    lastMessage: {
      id: 6,
      message: "what are you upto these days?",
      type: "received",
      time: "Fri, May 08, 2020 5:30 PM",
    },
  },
  {
    id: 8,
    channelId: 2007,
    name: "Mark Lee",
    username: "lee.1",
    image: "/assets/images/avatar/A19.jpg",
    status: "offline",
  },
  {
    id: 9,
    channelId: 2008,
    name: "Saina Williams",
    username: "williams.saina",
    image: "/assets/images/avatar/A8.jpg",
    status: "offline",
  },
  {
    id: 10,
    channelId: 2009,
    name: "Parth Aulins",
    username: "aulins.parth",
    image: "/assets/images/avatar/A21.jpg",
    status: "online",
    lastMessage: {
      id: 6,
      message: "No worries!",
      type: "received",
      time: "Fri, May 08, 2020 4:30 PM",
    },
  },
  {
    id: 11,
    channelId: 2010,
    name: "Rahul Bose",
    username: "bose.12",
    image: "/assets/images/avatar/A10.jpg",
    status: "offline",
    lastMessage: {
      id: 6,
      message: "cheers!",
      type: "received",
      time: "Thru, May 07, 2020 2:30 PM",
    },
  },
  {
    id: 12,
    channelId: 2011,
    name: "Rohan Bopanna",
    username: "thetennisfreak",
    image: "/assets/images/avatar/A11.jpg",
    status: "online",
  },
  {
    id: 13,
    channelId: 2012,
    name: "Nikita Panwar",
    username: "mrs.panwar",
    image: "/assets/images/avatar/A5.jpg",
    status: "offline",
  },
  {
    id: 14,
    channelId: 2013,
    name: "Vijaya Murli",
    username: "therealplayer",
    image: "/assets/images/avatar/A15.jpg",
    status: "online",
  },
  {
    id: 15,
    channelId: 2014,
    name: "David Boon",
    username: "david.boon",
    image: "/assets/images/avatar/A21.jpg",
    status: "offline",
  },
  {
    id: 16,
    channelId: 2015,
    name: "Saurabh Shukla",
    username: "shukla.ji",
    image: "/assets/images/avatar/A18.jpg",
    status: "online",
  },
  {
    id: 17,
    channelId: 2016,
    name: "Nick Taylor",
    username: "taylor",
    image: "/assets/images/avatar/A19.jpg",
    status: "online",
    lastMessage: {
      id: 6,
      message: "for what?",
      type: "received",
      time: "Tues, May 05, 2020 8:30 PM",
    },
  },
  {
    id: 18,
    channelId: 2017,
    name: "Nikita Suman",
    username: "nikita.rowdy",
    image: "/assets/images/avatar/A28.jpg",
    status: "offline",
    lastMessage: {
      id: 6,
      message: "Hi!",
      type: "sent",
      time: "Sun, May 03, 2020 8:30 PM",
    },
  },
  {
    id: 19,
    channelId: 2018,
    name: "Laura Lohan",
    username: "lohan.lora",
    image: "/assets/images/avatar/A22.jpg",
    status: "online",
  },
  {
    id: 20,
    channelId: 2019,
    name: "Jennifer John",
    username: "johnson.jen",
    image: "/assets/images/avatar/A15.jpg",
    status: "offline",
  },
  {
    id: 21,
    channelId: 2020,
    name: "Robert Key",
    username: "key.robert",
    image: "/assets/images/avatar/A21.jpg",
    status: "offline",
    lastMessage: {
      id: 6,
      message: "in India",
      type: "received",
      time: "Fri, May 01, 2020 8:30 PM",
    },
  },
];
export default connectionList;
