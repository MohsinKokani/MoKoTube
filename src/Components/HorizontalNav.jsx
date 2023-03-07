
import React, { useEffect } from "react";
import { Feed } from './';
let categories = [
    'New',
    'Live',
    'Music',
    'Cricket',
    'News',
    'Comedy',
    'Science',
    'Gaming',
    'Stand up comedy',
    'Travel',
    'Cooking',
    'Meditation',
    'Technology',
    'Weather'
]
// let videooo = [
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#channel",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww"
//         },
//         "snippet": {
//             "publishedAt": "2018-04-28T14:50:54Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "CodeWithHarry",
//             "description": "Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://yt3.ggpht.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s88-c-k-c0xffffffff-no-rj-mo"
//                 },
//                 "medium": {
//                     "url": "https://yt3.ggpht.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s240-c-k-c0xffffffff-no-rj-mo"
//                 },
//                 "high": {
//                     "url": "https://yt3.ggpht.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s800-c-k-c0xffffffff-no-rj-mo"
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "upcoming",
//             "publishTime": "2018-04-28T14:50:54Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ICbU6zAKtqQ"
//         },
//         "snippet": {
//             "publishedAt": "2023-03-04T15:23:27Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Multithreading in Python | Python Tutorial - Day #97",
//             "description": "Access the Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg Link to the Repl: ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ICbU6zAKtqQ/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ICbU6zAKtqQ/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ICbU6zAKtqQ/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-03-04T15:23:27Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
//         },
//         "snippet": {
//             "publishedAt": "2019-12-25T08:11:38Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript &amp; More",
//             "description": "This Website development course will teach you about how to create a website from scratch. This web development course is ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/6mbwJ2xhgzM/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/6mbwJ2xhgzM/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2019-12-25T08:11:38Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR"
//         },
//         "snippet": {
//             "publishedAt": "2019-04-20T07:11:58Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "C Language Tutorials In Hindi",
//             "description": "In this latest course on C language tutorials in 2019 in Hindi , we will learn how to write efficient and powerful C programs using ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/7Dh73z3icd8/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/7Dh73z3icd8/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/7Dh73z3icd8/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2019-04-20T07:11:58Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
//         },
//         "snippet": {
//             "publishedAt": "2022-11-28T08:39:03Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Python for Beginners (Full Course) | #100DaysOfCode Programming Tutorial in Hindi",
//             "description": "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/7wnove7K-ZQ/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/7wnove7K-ZQ/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-11-28T08:39:03Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
//         },
//         "snippet": {
//             "publishedAt": "2022-07-14T12:51:40Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "JavaScript Tutorials for Beginners in Hindi",
//             "description": "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-07-14T12:51:40Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "gfDE2a7MKjA"
//         },
//         "snippet": {
//             "publishedAt": "2020-09-24T11:34:17Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Python Tutorial For Beginners In Hindi (With Notes) 🔥",
//             "description": "Learn Python One Video in Hindi: This Python Programming in Hindi tutorial is a complete python course in Hindi comprising of ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/gfDE2a7MKjA/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/gfDE2a7MKjA/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/gfDE2a7MKjA/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-09-24T11:34:17Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"
//         },
//         "snippet": {
//             "publishedAt": "2020-08-30T15:55:04Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Java Tutorials For Beginners In Hindi",
//             "description": "In this complete Core + Advance Java tutorial for beginners in hindi, we will see complete java topics covered in hindi. This java ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ntLJmHOJ0ME/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ntLJmHOJ0ME/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-08-30T15:55:04Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "ZSPZob_1TOk"
//         },
//         "snippet": {
//             "publishedAt": "2020-07-28T11:30:03Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "C Language Tutorial For Beginners In Hindi (With Notes) 🔥",
//             "description": "Download Free Notes + Code + Practice Sheets Here: ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/ZSPZob_1TOk/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/ZSPZob_1TOk/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/ZSPZob_1TOk/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-07-28T11:30:03Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "BsDoLVMnmZs"
//         },
//         "snippet": {
//             "publishedAt": "2021-03-17T02:55:23Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "HTML Tutorial For Beginners In Hindi (With Notes) 🔥",
//             "description": "Learn HTML in One Video: In this video, we will see how to create beautiful websites using Html. HTML is the language used for ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/BsDoLVMnmZs/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/BsDoLVMnmZs/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/BsDoLVMnmZs/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-03-17T02:55:23Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL"
//         },
//         "snippet": {
//             "publishedAt": "2020-01-11T13:50:44Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "C++ Tutorials In Hindi",
//             "description": "This C++ tutorials for beginners will teach you all the c plus plus concepts from the very starting to the end. This Cpp course will ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/j8nAHeVKL08/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/j8nAHeVKL08/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/j8nAHeVKL08/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-01-11T13:50:44Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
//         },
//         "snippet": {
//             "publishedAt": "2018-11-24T14:10:37Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Python Tutorials For Absolute Beginners In Hindi",
//             "description": "This Latest 2020 Python series covers Python programming in hindi and starts by giving a brief introduction of python to a ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/aqvDTCpNRek/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/aqvDTCpNRek/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/aqvDTCpNRek/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2018-11-24T14:10:37Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#playlist",
//             "playlistId": "PLnccP3XNVxGrWkKFJMCtL5mDEcOnrjjib"
//         },
//         "snippet": {
//             "publishedAt": "2022-08-23T09:12:05Z",
//             "channelId": "UCD0gBMFG94e8LoOM9ROmv5A",
//             "title": "LINKED LIST- Code With Harry(in C)",
//             "description": "",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/TWMCMvfEAv4/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/TWMCMvfEAv4/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/TWMCMvfEAv4/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Aditya Prasad",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-08-23T09:12:05Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "Tto8TS-fJQU"
//         },
//         "snippet": {
//             "publishedAt": "2022-11-29T11:30:07Z",
//             "channelId": "UCeVMnSShP_Iviwkknt83cww",
//             "title": "Some Amazing Python Programs - The Power of Python | Python Tutorial - Day #2",
//             "description": "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/Tto8TS-fJQU/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/Tto8TS-fJQU/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/Tto8TS-fJQU/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "CodeWithHarry",
//             "liveBroadcastContent": "none",
//             "publishTime": "2022-11-29T11:30:07Z"
//         }
//     }
// ]

const HorizontalNav = ({ category, setCategory, categoryVideos }) => {

    useEffect(() => {
        //for horizontal scroll 
        const container = document.querySelector(".train");
        container.addEventListener("wheel", (e) => {
            if (e.deltaY > 0)
                container.scrollLeft += 550;
            else
                container.scrollLeft -= 550;
            e.preventDefault();
        });
    }, []);

    
    return (
        <>
            <div className="train">
                {
                    categories.map((element) =>
                        <div
                            key={element}
                            className="coach"
                            onClick={() => { setCategory(element) }}
                            style={{ background: element === category && "#fc1503" }}
                        >
                            {element}
                        </div>
                    )
                }
            </div>
            <Feed videos={categoryVideos} />
        </>
    )
}

export default HorizontalNav;