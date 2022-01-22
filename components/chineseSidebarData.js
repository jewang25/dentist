import React from "react";
import * as RiIcons from "react-icons/ri";
import { useTranslation } from 'react-i18next';


export const ChineseSidebarData = [
  {
    title: "诊所简介",
    path: "/ch",
    slideIndex: 0
  },
  {
    title: "图片浏览"
    ,
    path: "/ch/photos",
    slideIndex: 0
  },
  {
    title: "护齿手册",


    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "/ch/toothbrush",
    subNav: [
      {
        title: "牙齿的结构及功能",
        path: "/ch/toothbrush",
        slideIndex: 1
      },
      {
        title: "牙齿在口腔之排列",
        path: "/ch/toothbrush",
        slideIndex: 2
      },
      {
        title: "常见的牙患",
        path: "/ch/toothbrush",
        slideIndex: 3
      },
      {
        title: "蛀牙成因",
        path: "/ch/toothbrush",
        slideIndex: 4
      },
      {
        title: "蛀牙的过程，病及治疗",
        path: "/ch/toothbrush",
        slideIndex: 5
      },
      {
        title: "牙周病之形成及进度",
        path: "/ch/toothbrush",
        slideIndex: 6
      },
      {
        title: "牙周病的病症",
        path: "/ch/toothbrush",
        slideIndex: 7
      },
      {
        title: "牙周病的治疗和预防",
        path: "/ch/toothbrush",
        slideIndex: 8
      },
      {
        title: "预防蛀牙",
        path: "/ch/toothbrush",
        slideIndex: 9
      },
      {
        title: "良好口腔卫生习惯",
        path: "/ch/toothbrush",
        slideIndex: 10
      },
      {
        title: "牙线的使用",
        path: "/ch/toothbrush",
        slideIndex: 11
      },

      {
        title: "如何选择牙刷",
        path: "/ch/toothbrush",
        slideIndex: 12
      },

      {
        title: "正确的刷牙方法",
        path: "/ch/toothbrush",
        slideIndex: 13
      },

      {
        title: "牙齿矫正",
        path: "/ch/toothbrush",
        slideIndex: 14
      },

      {
        title: "为什么要镶牙",
        path: "/ch/toothbrush",
        slideIndex: 15
      },

      {
        title: "缺牙不镶可引致不良后果",
        path: "/ch/toothbrush",
        slideIndex: 16
      },

      {
        title: "智慧牙的问题",
        path: "/ch/toothbrush",
        slideIndex: 17
      },
      {
        title: "戴假牙者须知",
        path: "/ch/toothbrush",
        slideIndex: 18
      },
      {
        title: "常见的老人牙患",
        path: "/ch/toothbrush",
        slideIndex: 19
      },


      {
        title: "错误观念 -- 1",
        path: "/ch/toothbrush",
        slideIndex: 20
      },
      {
        title: "错误观念 -- 2",
        path: "/ch/toothbrush",
        slideIndex: 21
      },
      {
        title: "错误观念 -- 3",
        path: "/ch/toothbrush",
        slideIndex: 22
      },
      {
        title: "保障你的健康切勿求诊无牌牙医",
        path: "/ch/toothbrush",
        slideIndex: 23
      }
    ],
  },
  {
    title: "洁齿录像",
    path: "/ch/teethbrushvideo",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "正确刷牙方式",
        path: "/ch/teethbrushvideo"
      },
      {
        title: "正确使用牙线",
        path: "/ch/teethbrushvideo2"
      }
    ]
  },
  {
    title: "联络我们",
    path: "/ch/contact",

  },
  {
    title: "有用链接",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [

      {
        title: "香港牙医学会",
        path: "/ch/dentalInfo/education",

        cName: "sub-nav",
      },
      {
        title: "台中市牙医师工会",
        path: "/ch/dentalInfo/dentistry",

      },

    ],
  },


  {
    title: "语言选择",
    path: "/",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "English",
        path: "/",

        cName: "sub-nav",
      },
      {
        title: "中文简体",
        path: "/ch",

        cName: "sub-nav",
      },
      {
        title: "中文繁体",
        path: "",

        cName: "sub-nav",
      }]
  }

]
