import React, { useEffect, useState } from "react";
import axios from "axios";

import Film from "./Film";
import FilmModal from "./FilmModal";
import PeopleModal from "./PeopleModal";
import Logo from "../../src/ghibli_logo.svg";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [filmModalData, setFilmModalData] = useState({});
  const [people, setPeople] = useState([]);
  const [peopleModalData, setPeopleModalData] = useState([]);
  const [title, setTitle] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const baseUrl = "https://ghibliapi.herokuapp.com/";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.get(baseUrl + "films", config).then((res) => setFilms(res.data));
  }, []);

  useEffect(() => {
    const baseUrl = "https://ghibliapi.herokuapp.com/";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get(baseUrl + "locations", config)
      .then((res) => setLocations(res.data));
  }, [films]);

  useEffect(() => {
    setPeopleModalData([]);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const persons = [];
    const handleGetPeople = () => {
      people.forEach((person) => {
        axios.get(person, config).then((res) => persons.push(res.data));
      });
    };
    handleGetPeople();
    setTimeout(() => {
      setPeopleModalData(persons);
    }, 500);
  }, [people]);

  console.log(films);
  console.log(locations);

  // locations.forEach((loc) => {
  //   loc.films.forEach((film) => {
  //     const locFilms = [];
  //     films.forEach((item) => {
  //       if (film === item.url) {
  //         locFilms.push(item.title);
  //       }
  //     });
  //   });
  // });

  return (
    <div>
      <img
        src={Logo}
        alt="Ghibli Logo"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      />

      <div class="row row-cols-1 row-cols-md-2 g-4">
        {films.map((item, index) => {
          return (
            <Film
              film={item}
              key={index}
              setFilmModalData={setFilmModalData}
              setPeople={setPeople}
              setTitle={setTitle}
            />
          );
        })}
      </div>
      <FilmModal data={filmModalData} />
      <PeopleModal data={peopleModalData} title={title} />
    </div>
  );
};

export default HomePage;
