// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       actors: [
//         {
//           id: 1,
//           name: "Vijay Deverakonda",
//           photo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vijay_Deverakonda_at_NOTA_pressmeet_%28cropped%29.jpg",
//           movies: [
//             {
//               title: "Mahanati",
//               rating: 8.4,
//               image: "https://i.ytimg.com/vi/Y4Jg-pXzvz0/maxresdefault.jpg",
//             },
//             {
//               title: "Pelli Choopulu",
//               rating: 8.2,
//               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lI7vVFflLkC4XOl9lfoPhbkLEjkOAXCjV5HdrQ1rIFbCQIr1rBNDzrvK-p9pCrKgOxTLTw",
//             },
//             {
//               title: "Arjun Reddy",
//               rating: 7.9,
//               image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Arjun_Reddy_poster.jpg",
//             },
//             {
//             title: "Geetha Govindam",
//               rating: 7.7,
//               image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//             },
//             {
//               title: "Yevade Subramanyam",
//                 rating: 7.5,
//                 image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//               },
//               {
//         title: "Dear Comrade",
//           rating: 7.3,
//           image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//         },
//         {
//           title: "Taxiwala ",
//             rating: 6.8,
//             image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//           },
//           {
//             title: "Nota ",
//               rating: 6.2,
//               image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//             },
//             {
//               title: " Kushi",
//                 rating: 5.4,
//                 image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//               },

//               {
//                 title: "The Family Star ",
//                   rating: 5.4,
//                   image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pelli_Choopulu_poster.jpg",
//                 },

//   ],
//   showMovies: false,
// },
// {
//   id: 2,
//   name: "Hrithik Roshan",
//   photo: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/hrithik-roshan--pritish-nandy-105703136-3x4.jpg?VersionId=W0gTHb9QzF4LdanbTCExdde4TKigaZko",
//   movies: [
//     {
//       title: "Zindagi Na Milegi Dobara",
//       rating: 8.2,
//       image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Zindaginamilegidobara.jpg/220px-Zindaginamilegidobara.jpg",
//     },
//     {
//       title: "Super 30",
//       rating: 7.9,
//       image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Super_30_film_poster.jpg/220px-Super_30_film_poster.jpg",
//     },
//     "3. Lakshya 7.8",
//     "4. Jodhaa Akbar 7.5",
//     "5. Guzaarish 7.4",
//     "6. Kabhi Khushi Kabhie Gham... 7.4",
//     "7. Kaabil. 7.1",
//     "8. Koi... Mil Gaya 7.1",
//     "9. Vikram Vedha 7.1",
//     "11. Kaho Naa... Pyaar Hai. 6.9",
//   ],
//   showMovies: false,
// },
// {
//   id: 3,
//   name: "MAHESH BABU",
//   photo: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/01/12154524/Net-worth-of-Mahesh-Babu-1600x900.jpg",
//   movies: [
//     "1. 1: Nenokkadine 8.2",
//     "2. Athadu 8.0",
//     "3. Pokiri 8.0",
//     "4. Okkadu 8.0",
//     "5. Murari 7.8",
//     "6. Bharath Ane Nenu 7.4",
//     "7. Khaleja 7.6",
//     "8. Seethamma Vaakitlo Sirimalle Chettu 7.5",
//     "9. Srimanthudu 7.5",
//     "10. Dookudu 7.4",
//   ],
//   showMovies: false,
// },
// {
//   id: 4,
//   name: "Shah Rukh Khan",
//   photo: "https://i.scdn.co/image/ab67616d0000b27303a2cd8ec7e02d4be3e93f48",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },
// {
//   id: 5,
//   name: "Thalapathy Vijay",
//   photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjCqYJB9IuHNHHRAL9j4dIg_k_frLYEyoWJEwJc8fh9e-u6wYxEOeJ64xNhD1_CYSBFo&usqp=CAU",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },
// {
//   id: 6,
//   name: "SALMAN KHAN",
//   photo: "https://cdn.britannica.com/54/256354-050-C19887AD/bollywood-actor-salman-khan-at-nika-mukesh-ambani-cultural-center-nmacc-mumbai-india.jpg",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },
// {
//   id: 7,
//   name: "ALLU ARJUN",
//   photo: "https://images.javatpoint.com/biography/images/allu-arjun.jpg",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },

// {
//   id: 8,
//   name: "RANBIR KAPOOR",
//   photo: "https://img.indiaforums.com/person/480x360/0/1033-ranbir-kapoor.jpg?c=1vF2D7",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },
// {
//   id: 9,
//   name: "PRABHAS",
//   photo: "https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-19-at-12.35.58-PM.jpeg?fit=878%2C1280&ssl=1",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],
//   showMovies: false,
// },
// {
//   id: 10,
//   name: "AJAY DEVGN",
//   photo: "https://www.thesun.co.uk/wp-content/uploads/2023/07/bollywood-actor-filmmaker-ajay-devgn-832719607.jpg?strip=all&w=640",
//   movies: [
//     "Black Widow",
//     "Marriage Story",
//     "Lost in Translation",
//     "Avengers: Endgame",
//     "Jojo Rabbit",
//     "Lucy",
//     "Her",
//     "Captain Marvel",
//     "Avengers: Infinity War",
//     "The Prestige",
//   ],

//           showMovies: false,
//         },
//       ],
//     };
//   }

//   handleCardClick = (actorId) => {
//     this.setState((prevState) => ({
//       actors: prevState.actors.map((actor) =>
//         actor.id === actorId
//           ? { ...actor, showMovies: !actor.showMovies }
//           : actor
//       ),
//     }));
//   };

//   renderActors = () => {
//     return this.state.actors.map((actor) => (
//       <div className="actor-card" key={actor.id} onClick={() => this.handleCardClick(actor.id)}>
//         <img src={actor.photo} alt={actor.name} className="actor-photo" />
//         <p>{actor.name}</p>
//         {actor.showMovies && (
//           <div className="movie-list">
//             <h4>Top Movies:</h4>
//             <ul>
//               {actor.movies.map((movie, index) => (
//                 <li key={index} className="movie-item">
//                   <img src={movie.image} alt={movie.title} className="movie-photo" />
//                   <div className="movie-details">
//                     <p>{movie.title}</p>
//                     <p>Rating: {movie.rating}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     ));
//   };

//   render() {
//     return (
//       <div className="actors">
//         <h1>Actors and Their Top Movies</h1>
//         <div className="actor-list">{this.renderActors()}</div>
//       </div>
//     );
//   }
// }

// export default MyComponent;
import React from "react";
import "./MyComponent.css";



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: null,
      actors: [
        {
          id: 1,
          name: "Vijay Deverakonda",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vijay_Deverakonda_at_NOTA_pressmeet_%28cropped%29.jpg",
          movies: [
            {
              title: "Mahanati",
              rating: 8.4,
              image:
                "https://live.staticflickr.com/1936/30029863937_bdea02b6d4_b.jpg",
            },
            {
              title: "Pelli Choopulu",
              rating: 8.2,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lI7vVFflLkC4XOl9lfoPhbkLEjkOAXCjV5HdrQ1rIFbCQIr1rBNDzrvK-p9pCrKgOxTLTw",
            },
            {
              title: "Arjun Reddy",
              rating: 7.9,
              image:
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9RAzGqpHpGOa0lq6nhML7QwFhRhB1HpI0A1_S2t3AXcGJhkjC-Sd8D4WuG7HiuQsGwJLntg",
            },
            {
              title: "Geetha Govindam",
              rating: 7.7,
              image:
                "https://images.indianexpress.com/2018/08/geetha-govindam-review-759.jpg",
            },
            {
              title: "Yevade Subramanyam",
              rating: 7.5,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxV0mOHZFgnmuSzcV-gE8d29e0mh0HBSnFQ&s",
            },
            {
              title: "Dear Comrade",
              rating: 7.3,
              image:
                "https://m.media-amazon.com/images/M/MV5BYTE1YTgxYWUtMjZlMS00ZWEzLWI1MGMtOWRmZTQ5NjM0NGVhXkEyXkFqcGc@._V1_.jpg",
            },
            {
              title: "Taxiwala ",
              rating: 6.8,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNALuZOKOXg3wmfIMHmMMEOhNYn5FXpom4KQ&s",
            },
            {
              title: "Nota ",
              rating: 6.2,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WBaUKCvdeeLfCDebR0VyTTIDPDeR_c3zDg&s",
            },
            {
              title: " Kushi",
              rating: 5.4,
              image:
                "https://static.toiimg.com/photo/103272997.cms?imgsize=75170",
            },

            {
              title: "The Family Star ",
              rating: 5.4,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbeC0upArGe-HbbTeYMyLL8odAVCdvP0o7g&s",
            },
          ],
        },
        {
          id: 2,
          name: "Hrithik Roshan",
          photo:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/hrithik-roshan--pritish-nandy-105703136-3x4.jpg?VersionId=W0gTHb9QzF4LdanbTCExdde4TKigaZko",
          movies: [
            {
              title: "Zindagi Na Milegi Dobara",
              rating: 8.2,
              image:
                "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
            },
            {
              title: "Super 30",
              rating: 7.9,
              image:
                "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
            },
            {
            title: "Lakshya ",
            rating: 7.8,
            image:
              "https://static.toiimg.com/thumb/msid-111080230,width-1070,height-580,imgsize-67968,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          },
          {
            title: "Jodhaa Akbar ",
            rating: 7.5,
            image:
              "https://m.media-amazon.com/images/M/MV5BNzg5YWI5YjMtMjhmNi00MDQxLTlmNWUtM2IzOWMzMDNhOTMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            title: "Guzaarish ",
            rating: 7.4,
            image:
              "https://m.media-amazon.com/images/S/pv-target-images/5f536cac939867648da27f55d2afd3575747dd1847c3c7bcd71e368f7c1cafdd.jpg",
          },
          {
            title: "Kabhi Khushi Kabhie Gham... ",
            rating: 7.4,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgd-_yxeoDyTwqGLCo8p4xk-YQJpn_fRANw&s",
          },
          {
            title: "Kaabil. ",
            rating: 7.1,
            image:
              "https://upload.wikimedia.org/wikipedia/en/c/ce/Kaabil_Movie_Poster.jpg",
          },
          {
            title: "Koi... Mil Gaya. ",
            rating: 7.1,
            image:
              "https://m.media-amazon.com/images/M/MV5BMjkwM2IyZmUtNjdmZi00MWY5LWFiZWYtM2E0NmU3ZjQ4OWUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            title: "Vikram Vedha ",
            rating: 7.1,
            image:
              "https://m.economictimes.com/thumb/msid-94647104,width-1200,height-900,resizemode-4,imgsize-134620/vikram-vedha-canva.jpg",
          },
          {
            title: "Kaho Naa... Pyaar Hai ",
            rating: 6.9,
            image:
              "https://i.scdn.co/image/ab67616d0000b2739b374358709e3d0bf1a0f9de",
          },
          
            
          ],
        },
        {
          id: 3,
          name: "MAHESH BABU",
          photo:
          "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/01/12154524/Net-worth-of-Mahesh-Babu-1600x900.jpg",
          movies: [
            {
              title: "Nenokkadine ",
              rating: 8.2,
              image:
                "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
            },
            {
              title: "Athadu",
              rating: 8.0,
              image:
                "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
            },
            {
            title: "Pokiri ",
            rating: 8.0,
            image:
              "https://static.toiimg.com/thumb/msid-111080230,width-1070,height-580,imgsize-67968,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          },
          {
            title: "Okkadu ",
            rating: 8.0,
            image:
              "https://m.media-amazon.com/images/M/MV5BNzg5YWI5YjMtMjhmNi00MDQxLTlmNWUtM2IzOWMzMDNhOTMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            title: "Murari ",
            rating: 7.8,
            image:
              "https://m.media-amazon.com/images/S/pv-target-images/5f536cac939867648da27f55d2afd3575747dd1847c3c7bcd71e368f7c1cafdd.jpg",
          },
          {
            title: "Bharath Ane Nenu ",
            rating: 7.4,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgd-_yxeoDyTwqGLCo8p4xk-YQJpn_fRANw&s",
          },
          {
            title: "Khaleja ",
            rating: 7.6,
            image:
              "https://upload.wikimedia.org/wikipedia/en/c/ce/Kaabil_Movie_Poster.jpg",
          },
          {
            title: "Seethamma Vaakitlo Sirimalle Chettu ",
            rating: 7.5,
            image:
              "https://m.media-amazon.com/images/M/MV5BMjkwM2IyZmUtNjdmZi00MWY5LWFiZWYtM2E0NmU3ZjQ4OWUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            title: "Srimanthudu  ",
            rating: 7.5,
            image:
              "https://m.economictimes.com/thumb/msid-94647104,width-1200,height-900,resizemode-4,imgsize-134620/vikram-vedha-canva.jpg",
          },
          {
            title: "Dookudu ",
            rating: 7.4,
            image:
              "https://i.scdn.co/image/ab67616d0000b2739b374358709e3d0bf1a0f9de",
          },
    
            
          ],
        },
        {
          id: 4,
          name: "Shah Rukh Khan",
          photo:
          "https://i.scdn.co/image/ab67616d0000b27303a2cd8ec7e02d4be3e93f48",
          movies: [
            {
              title: "1. Swades ",
              rating: 8.2,
              image:
                "https://upload.wikimedia.org/wikipedia/en/8/85/Swades_poster.jpg",
            },
            {
              title: "2. Chak De! India",
              rating: 8.1,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgnrNoqgbrSwcmI6-nBdF9GRX6l8TZwua1g&s",
            },
            {
            title: "3. Baazigar",
            rating: 7.9,
            image:
              "https://i.ytimg.com/vi/Ofk-Afykfwg/sddefault.jpg",
          },
          {
            title: "4. My Name Is Khan",
            rating: 7.6,
            image:
              "https://i.ytimg.com/vi/nqxgYT3TYzY/maxresdefault.jpg",
          },
          {
            title: "5. Dilwale Dulhania Le Jayenge ",
            rating: 8.0,
            image:
              "https://m.media-amazon.com/images/S/pv-target-images/5f536cac939867648da27f55d2afd3575747dd1847c3c7bcd71e368f7c1cafdd.jpg",
          },
          {
            title: "6. Veer-Zaara",
            rating: 7.8,
            image:
              "https://m.media-amazon.com/images/M/MV5BMmI0ODNhYmEtOWM4My00MmFlLTk4ZmEtYmQ2MmNjODcxNzU2XkEyXkFqcGc@._V1_QL75_UY281_CR7,0,190,281_.jpg",
          },
          {
            title: "7. Darr ",
            rating: 7.6,
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfdKJuQMCkcdHwf6JPCIGr2CSnJCXQCfZKw&s",
          },
          {
            title: "8. Devdas",
            rating: 7.5,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBssl0bHH_b1HY1qgqKQXLZAivfCHjQ-Cl2g&s",
          },
          {
            title: "9. Kabhi Haan Kabhi Naau  ",
            rating: 7.6,
            image:
              "https://i.ytimg.com/vi/XvsJd6tEyBE/maxresdefault.jpg",
          },
          {
            title: "10. Jawan",
            rating: 7.4,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7toqC1QsLPyvfjkW7n2pLGtNW8FVwLsNtA&s",
          },
    
          ],
        },
        {
          id: 5,
          name: "Thalapathy Vijay",
          photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjCqYJB9IuHNHHRAL9j4dIg_k_frLYEyoWJEwJc8fh9e-u6wYxEOeJ64xNhD1_CYSBFo&usqp=CAU",
          movies: [
            {
              title: "1. Thuppakki ",
              rating: 8.1,
              image:
                "https://i.ytimg.com/vi/BrgngXa84po/maxresdefault.jpg",
            },
            {
              title: "2. Mersal",
              rating: 7.5,
              image:
                "https://www.kaguje.com/upload/Mersal.jpg",
            },
         
          {
            title: "3. Kaththi",
            rating: 8.1,
            image:
              "https://static.moviecrow.com/gallery/20150115/53651-Kaththi%20Movie%20Posters%20(3).jpg",
          },
          {
            title: " 4. Ghilli",
            rating: 8.2,
            image:
              "https://i.ytimg.com/vi/org6GZFjL0I/maxresdefault.jpg",
          },
          {
            title: "5. Thulladha Manamum Thullum",
            rating: 8.3,
            image:
              "https://i.ytimg.com/vi/GV1QJSdNZJo/mqdefault.jpg",
          },
          {
            title: "6. Kadhalukku Mariyadhai",
            rating: 8.2,
            image:
              "https://i.ytimg.com/vi/fQk9ISpeRnQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuLKATKUQxRvtOMs9rnxN6pR6FzQ",
          },
          {
            title: "7. Bigil",
            rating: 8.6,
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ovwdpED7VSfVJfSQkX64284O11Q7n6ABXg&s",
          },
          {
            title: "8. Varisu",
            rating: 7.5,
            image:
              "https://i.ytimg.com/vi/Feu56Usia-A/maxresdefault.jpg",
          },
          {
            title: "9. Kushi  ",
            rating: 7.6,
            image:
              "https://i.ytimg.com/vi/orOtESSodOs/maxresdefault.jpg",
          },
          {
            title: "10. The Greatest of All Time " ,
            rating: 8.2,
            image:
              "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/The_Greatest_of_All_Time.jpg/220px-The_Greatest_of_All_Time.jpg",
          },
    
          ],
        },
        {
          id: 6,
          name: "SALMAN KHAN",
          photo:
          "https://cdn.britannica.com/54/256354-050-C19887AD/bollywood-actor-salman-khan-at-nika-mukesh-ambani-cultural-center-nmacc-mumbai-india.jpg",
          movies: [
            {
              title: "1.Hum Aapke Hain Koun..!",
              rating: 7.5,
              image:
                "https://i.ytimg.com/vi/Ixo1zLLmZNw/sddefault.jpg",
            },
            {
              title: "2. Hum Saath - Saath Hain",
              rating: 6.3,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaWCwbD_hobr6o5Fw4QrxZFQ1CX6bRZHcU-cWUh62Rr4OsnvcCP1Du0MdEoBv4x88Zcg&usqp=CAU",
            },
         
          {
            title: "3.  Jaanam Samjha Karo",
            rating: 4.8,
            image:
              "https://i.ytimg.com/vi/lbE0v6TLN5A/maxresdefault.jpg",
          },
          {
            title: " 4. Hello Brother",
            rating: 4.7,
            image:
              "https://i.ytimg.com/vi/p892Ycjk_Gg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-NnodZrppSyrlgb3MHtqX_zRdVg",
          },
          {
            title: "5. Biwi No. 1",
            rating: 5.7,
            image:
              "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/05/Biwi-No-1-1999-IMDb-3.jpg?size=*:900",
          },
          {
            title: "6. Kadhalukku Mariyadhai",
            rating: 8.2,
            image:
              "https://i.ytimg.com/vi/fQk9ISpeRnQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuLKATKUQxRvtOMs9rnxN6pR6FzQ",
          },
          {
            title: "7.Partner",
            rating: 8.6,
            image:
            "https://upload.wikimedia.org/wikipedia/en/4/43/Partner-01.jpg",
          },
          {
            title: "8.No Entry",
            rating: 7.5,
            image:
              "https://i.ytimg.com/vi/kCdPa_vcaIY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqI5S0-2nUvI6KoBA-j-RonIwmKQ",
          },
          {
            title: "9.Wanted ",
            rating: 7.6,
            image:
              "https://i.ytimg.com/vi/ZDLHAd7Yu88/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZUwbxtciZZvdmnfB9j7NIp8JRaA",
          },
          {
            title: "10.Bajrangi Bhaijaan" ,
            rating: 8.2,
            image:
              "https://i.ytimg.com/vi/VXzUue3v20k/maxresdefault.jpg",
          },
    
          ],
        },
        {
          id: 7,
          name: "ALLU ARJUN",
          photo:
          "https://images.javatpoint.com/biography/images/allu-arjun.jpg",
          movies: [
            {
              title: "1.Pushpa 2",
              rating: 4.7,
              image:
                "https://i0.wp.com/cinetvartistcard.com/wp-content/uploads/2024/12/img_8803-1.jpg",
            },
            {
              title: "2. Gangotri",
              rating: 6.3,
              image:
                "https://i.ytimg.com/vi/LfPzRDSlsHM/maxresdefault.jpg",
            },
         
          {
            title: "3. Happy",
            rating: 7.1,
            image:
              "https://i.ytimg.com/vi/GEsivbL8BBU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfBrw2v16ook6LjHi-2btAIvKHng",
          },
          {
            title: " 4. Vedam",
            rating: 8.1,
            image:
              "https://i.ytimg.com/vi/N8Zm4iuw2co/maxresdefault.jpg",
          },
          {
            title: "5.Badrinath",
            rating: 4.7,
            image:
              "https://i.ytimg.com/vi/Rp1ebWy_vr0/maxresdefault.jpg",
          },
          {
            title: "6. Pushpa: The Rise - Part 1",
            rating: 7.6,
            image:
              "https://i.ytimg.com/vi/qmYpDHUulms/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxdE06kzh0aTDgMPK1sDg8pwg5UA",
          },
          {
            title: "7. Sarrainodu",
            rating: 8.6,
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iUW2DoYlWsu3FfFlLZIFXjU6im0IQV9UEw&s",
          },
          {
            title: "8.Shankardada Zindabad",
            rating: 7.5,
            image:
              "https://i.ytimg.com/vi/XVof5zIBflM/sddefault.jpg",
          },
          {
            title: "9.Arya 2",
            rating: 7.6,
            image:
              "https://m.media-amazon.com/images/S/pv-target-images/4dcf4d71b799fba61d6d8ea9699462120a54bcb4526493517b51cdf286f5633d.jpg",
          },
          {
            title: "10. Bunny" ,
            rating: 8.2,
            image:
              "https://m.media-amazon.com/images/M/MV5BZDVlM2RmZTgtOWQwNi00NGVjLWExZTItMzlkYTBhN2Q2YTc5XkEyXkFqcGc@._V1_.jpg",
          },
    
          ],
        },
        {
          id: 8,
          name: "RANBIR KAPOOR",
          photo:
          "https://img.indiaforums.com/person/480x360/0/1033-ranbir-kapoor.jpg?c=1vF2D7",
          movies: [
            {
              title: "1. Rockstar",
              rating: 7.7,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Fsymd3zHr5_NJkwTpWluglAaYCeWhcpUw&s",
            },
            {
              title: "2. Barfi!",
              rating: 8.1,
              image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
            },
            {
              title: "3. Yeh Jawaani Hai Deewani",
              rating: 7.2,
              image: "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg",
            },
            {
              title: "4. Sanju",
              rating: 7.8,
              image: "https://m.media-amazon.com/images/M/MV5BYTVjMTE1YWEtMzAxMy00NmM4LTkxNzQtNDgwZmMxMTZiNTE2XkEyXkFqcGc@._V1_.jpg",
            },
            {
              title: "5. Tamasha",
              rating: 7.3,
              image: "https://m.media-amazon.com/images/M/MV5BMjA1MTc0Mjc4Ml5BMl5BanBnXkFtZTgwNjU5Nzk4NjE@._V1_.jpg",
            },
            {
              title: "6. Brahmāstra: Part One – Shiva",
              rating: 5.6,
              image: "https://m.media-amazon.com/images/M/MV5BMDIxMWZjODAtNmRjOC00OGExLWJjZTAtMmQ1MzRmYjhlNjk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            },
            {
              title: "7. Wake Up Sid",
              rating: 7.6,
              image: "https://m.media-amazon.com/images/S/pv-target-images/be94bc81a1d547b5f18ce6d5ca89446ac6b106cffd57e72873de2bc3425abd59.jpg",
            },
            {
              title: "8. Ajab Prem Ki Ghazab Kahani",
              rating: 6.3,
              image: "https://i.ytimg.com/vi/dbTkItiju1w/maxresdefault.jpg",
            },
            {
              title: "9. Rajneeti",
              rating: 7.1,
              image: "https://upload.wikimedia.org/wikipedia/en/1/14/Raajneeti_poster.jpg",
            },
            {
              title: "10. Animal",
              rating: 8.2,
              image: "https://m.media-amazon.com/images/M/MV5BZThmNDg1NjUtNWJhMC00YjA3LWJiMjItNmM4ZDQ5ZGZiN2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            },
    
          ],
        },
        {
          id: 9,
          name: "PRABHAS",
          photo:
          "https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-19-at-12.35.58-PM.jpeg?fit=878%2C1280&ssl=1",
          movies: [
            {
              title: "1. Baahubali: The Beginning",
              rating: 8.0,
              image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
            },
            {
              title: "2. Baahubali 2: The Conclusion",
              rating: 8.2,
              image: "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg",
            },
            {
              title: "3. Salaar: Part 1 – Ceasefire",
              rating: 7.8,
              image: "https://i.ytimg.com/vi/ehcQaL6fdZ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYbLOR22zMVObJCCKi5SYdbEEr9A",
            },
            {
              title: "4. Saaho",
              rating: 5.9,
              image: "https://m.media-amazon.com/images/M/MV5BYmNlM2NkNzEtODAwOS00MTFjLTljODAtNjJjODdhZjI5MGYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            },
            {
              title: "5. Mirchi",
              rating: 7.2,
              image: "https://m.media-amazon.com/images/S/pv-target-images/4f21c565b89102bc8c7e43edc017afb64321802949c052ca76a997f19a2b0ca5.jpg",
            },
            {
              title: "6. Varsham",
              rating: 7.1,
              image: "https://cinemachaat.com/wp-content/uploads/2011/10/varsham-poster.jpg?w=640",
            },
            {
              title: "7. Chatrapathi",
              rating: 7.6,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2wf163YeQW54fChBv45w1-OJ4mh84wRXcA&s",
            },
            {
              title: "8. Billa",
              rating: 6.0,
              image: "https://i.ytimg.com/vi/8h57YWobw2k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDh8-IeKe-xIpkCYOp4xwvt04q7XA",
            },
            {
              title: "9. Rebel",
              rating: 4.8,
              image: "https://m.media-amazon.com/images/M/MV5BYmIwZDdjMmItYmEwOS00ZGE4LWI1YjQtMjQ4Mzg4ODM5MzdjXkEyXkFqcGc@._V1_.jpg",
            },
            {
              title: "10. Radhe Shyam",
              rating: 5.3,
              image: "https://m.media-amazon.com/images/M/MV5BNGE3MmVlYmItZjA5Ny00YzNhLTg0ZGMtNWZhMmUwNjljN2IwXkEyXkFqcGc@._V1_.jpg",
            },
          ],
        },
        {
          id: 10,
          name: "AJAY DEVGN",
          photo:
          "https://www.thesun.co.uk/wp-content/uploads/2023/07/bollywood-actor-filmmaker-ajay-devgn-832719607.jpg?strip=all&w=640",
          movies: [
            {
              title: "1. Drishyam 2",
              rating: 8.2,
              image: "https://m.media-amazon.com/images/S/pv-target-images/46cda5d3b9ae2a2a6995b341dc212549364079e8eac037306ac7ae6a6a906576.jpg",
            },
            {
              title: "2. Tanhaji: The Unsung Warrior",
              rating: 7.6,
              image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg",
            },
            {
              title: "3. Singham",
              rating: 6.8,
              image: "https://upload.wikimedia.org/wikipedia/en/a/ac/Singham_%282011_Hindi_film%29_Theatrical_poster.jpg",
            },
            {
              title: "4. Singham Returns",
              rating: 5.8,
              image: "https://upload.wikimedia.org/wikipedia/en/8/83/Singham_Returns_Poster.jpg",
            },
            {
              title: "5. Golmaal Again",
              rating: 5.0,
              image: "https://upload.wikimedia.org/wikipedia/en/4/49/Ajay_Devgn%27s_Golmaal_Again_poster.jpg",
            },
            {
              title: "6. Raid",
              rating: 7.4,
              image: "https://upload.wikimedia.org/wikipedia/en/2/28/Ajay_Devgn%27s_Raid_poster.jpg",
            },
            {
              title: "7. Shivaay",
              rating: 6.2,
              image: "https://m.media-amazon.com/images/M/MV5BY2Q2NmRhMDEtODliMi00ZmE5LTkyN2EtODJlMGZhYzkzNTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            },
            {
              title: "8. Bol Bachchan",
              rating: 5.6,
              image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Bol_Bachchan.jpg",
            },
            {
              title: "9. Once Upon a Time in Mumbaai",
              rating: 7.4,
              image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Once_Upon_a_Time_in_Mumbaai.jpg",
            },
            {
              title: "10. Bhuj: The Pride of India",
              rating: 4.5,
              image: "https://upload.wikimedia.org/wikipedia/en/4/42/Bhuj-_The_Pride_of_India_film_poster.jpg",
            },
          ],
        },
      ],
    };
  }

  handleActorClick = (actor) => {
    this.setState({ selectedActor: actor });
  };

  renderActorsList = () => {
    return (
      <div className="actors-list">
        {this.state.actors.map((actor) => (
          <div
            key={actor.id}
            className={`actor-card ${
              this.state.selectedActor?.id === actor.id ? "active" : ""
            }`}
            onClick={() => this.handleActorClick(actor)}
          >
            <img src={actor.photo} alt={actor.name} className="actor-photo" />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    );
  };

  renderMoviesList = () => {
    const { selectedActor } = this.state;
    if (!selectedActor)
      return <p className="placeholder-text">Select an actor to view movies</p>;

    return (
      <div className="movies-list">
      <div class ="text">
        <h2>{selectedActor.name}'s Top Movies</h2></div>
        {selectedActor.movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-photo" />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p> {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <h1>Actors & Their Movies</h1>
        <div className="table-layout">
          <div className="left-column">{this.renderActorsList()}</div>
          <div className="right-column">{this.renderMoviesList()}</div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
