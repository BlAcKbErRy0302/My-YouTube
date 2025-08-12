import { IoIosHome } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const headerMenus =[

    {
        title:"홈",
        icon:<IoIosHome />,
        src:"/"
    },
    {
        title:"추천 영상",
        icon:<BiSolidCameraMovie />,
        src:"/today"
    },
    {
        title:"추천 음악",
        icon:<IoIosMusicalNotes />,
        src:"/music"
    },
    {
        title:"추천 영화",
        icon:<BiMoviePlay />,
        src:"/movie"
    },
    {
        title:"추천 도서",
        icon:<IoBook />,
        src:"/book"
    },
    {
        title:"추천 애니",
        icon:<FaImages />,
        src:"/anime"
    },
    {
        title:"유튜브 사이트",
        icon:<FaYoutube />,
        src:"/youtube"
    }

];


export const searchKeyword =[
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"MyYoutube",
        src:"/search/youtube"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    },
];

export const snsLink =[
    {
        icon: <FaGithub />,
        src:"https://github.com"
    },
    {
        icon: <FaYoutube />,
        src:"https://youtube.com"
    },
    {
        icon: <FaGoogle />,
        src:"https://google.com"
    },
    {
        icon: <FaInstagram />,
        src:"https://instagram.com"
    },
]
