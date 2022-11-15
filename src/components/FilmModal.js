import React from "react";

const FilmModal = ({ data }) => {
  return (
    <div
      class="modal fade"
      id="filmModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {data.title}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <img
            src={data.movie_banner}
            alt="Movie Banner"
            style={{ width: "100%" }}
          />
          <div class="modal-body">
            <ul class="list-group list-group-vertical-lg">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Original Title:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.original_title}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Japanese Title:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.original_title_romanised}
                </span>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                Producer:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.producer}
                </span>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                Release Date:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.release_date}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Running Time:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.running_time}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Rotten Tomatos Score:
                <span
                  class="badge bg-primary rounded-pill"
                  style={{ fontSize: "1em" }}
                >
                  {data.rt_score}
                </span>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
