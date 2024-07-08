import Navbar from "../Sections/Navbar";
import { useNavigate } from "react-router-dom";
import "./Genres.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const Genres = () => {
  const [genresinfo, setGenresInfo] = useState([
    {
      title: "Action",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    },
    {
      title: "Adventure",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    },
    {
      title: "Comediya",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
    },
    {
      title: "Drama",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    },
    {
      title: "Fantastika",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    },
    {
      title: "Qorqinchli",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
    },
    {
      title: "Mahou Shoujo",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9756-d5M8NffgJJHB.jpg",
    },
    {
      title: "Mecha",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99423-xu78CeWOO5FW.jpg",
    },
    {
      title: "Musiqiy",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-j4kSsfhfkM24.jpg",
    },
    {
      title: "masterskoy",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21234-7lfSSPoMmwr2.jpg",
    },
    {
      title: "Fizikaviy",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
    },
    {
      title: "Romantika",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-XIr3PeczUjjF.png",
    },
    {
      title: "Sci-fi",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
    },
    {
      title: "Koz yoshli ",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg",
    },
    {
      title: "Sportivniy",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20464-PpYjO9cPN1gs.jpg",
    },
    {
      title: "Naturalniy",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20447-nlgQQzcgWbgw.jpg",
    },
    {
      title: "Treller",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108632-yeLbrgPN4Oni.jpg",
    },
  ]);
  const [formatsInfo, setFormatsInfo] = useState([
    {
      title: "TV",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    },
    {
      title: "OVA",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
    },
    {
      title: "TV SHORT",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    },
    {
      title: "ONA",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    },
    {
      title: "MOVIE",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    },
    {
      title: "SPECIAL",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    },
    {
      title: "MUSIC",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    },
  ]);
  const [seasonsInfo, setSeasonsInfo] = useState([
    {
      title: "Qish",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
    },
    {
      title: "Baxor",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
    },
    {
      title: "Yoz",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20997-nE9VyUa08vS0.jpg",
    },
    {
      title: "Kuz",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-1URQdQ4U1a0b.jpg",
    },
  ]);
  const [statusesInfo, setStatusesInfo] = useState([
    {
      title: "RELEASING",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
    },
    {
      title: "Tugalangan",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg",
    },
    {
      title: "Bekor qilingan",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <h1 className="genres-title">Genres</h1>
      <div className="genresdiv">
        {genresinfo.map((genreinfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                navigate(
                  "/filtered/genre/" + e.target.innerText.toLowerCase(),
                  {
                    state: { type: "genre", value: e.target.innerText },
                  }
                );
              }}
              className="genre"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${genreinfo.image})`,
              }}
            >
              {genreinfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="formats-title">Format</h1>
      <div className="formatsdiv">
        {formatsInfo.map((formatInfo) => {
          return (
            <div
              onClick={(e) => {
                navigate(
                  "/filtered/format/" +
                    e.target.innerText.replaceAll(" ", "_").toLowerCase(),
                  {
                    state: {
                      type: "format",
                      value: e.target.innerText.replaceAll(" ", "_"),
                    },
                  }
                );
              }}
              key={uuidv4()}
              className="format"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${formatInfo.image})`,
              }}
            >
              {formatInfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="seasons-title">Sezonlar</h1>
      <div className="seasonsdiv">
        {seasonsInfo.map((seasonInfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                navigate(
                  "/filtered/season/" + e.target.innerText.toLowerCase(),
                  {
                    state: { type: "season", value: e.target.innerText },
                  }
                );
              }}
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${seasonInfo.image})`,
              }}
              className="season"
            >
              {seasonInfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="statuses-title">Status</h1>
      <div className="statusesdiv">
        {statusesInfo.map((statusInfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                navigate(
                  "/filtered/status/" +
                    e.target.innerText.replaceAll(" ", "_").toLowerCase(),
                  {
                    state: {
                      type: "status",
                      value: e.target.innerText.replaceAll(" ", "_"),
                    },
                  }
                );
              }}
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${statusInfo.image})`,
              }}
              className="status"
            >
              {statusInfo.title}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Genres;
