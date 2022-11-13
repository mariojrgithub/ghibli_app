import React from "react";

const Film = ({ film, setFilmModalData, setPeople, setTitle }) => {
  return (
    <>
      <div class="card text-center" style={{ width: "50em" }}>
        <div class="card-header">
          <h5 class="card-title">{film.title}</h5>
        </div>
        <img src={film.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text">{film.description}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#filmModal"
            onClick={() => {
              setFilmModalData(film);
            }}
          >
            Details
          </button>
          {film.people[0] !== "https://ghibliapi.herokuapp.com/people/" && (
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#peopleModal"
              onClick={() => {
                setPeople(film.people);
                setTitle(film.title);
              }}
              style={{ marginLeft: "1em" }}
            >
              People
            </button>
          )}
        </div>
        <div class="card-footer">
          <small class="text-muted">Director: {film.director}</small>
        </div>
      </div>
    </>
  );
};

export default Film;
