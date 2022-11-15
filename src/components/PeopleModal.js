import React from "react";

const PeopleModal = ({ species, data, title }) => {
  data.forEach((person) => {
    species.forEach((specie) => {
      const specId = person.species.split("/");
      if (specId[specId.length - 1] === specie.id) {
        person.specie = specie.name;
      }
    });
  });

  return (
    <div
      class="modal fade"
      id="peopleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-fullscreen-lg-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {title}{" "}
              <span
                class="badge bg-primary rounded-pill"
                style={{ fontSize: "1em", marginLeft: "10em" }}
              >
                People
              </span>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {data.length === 0 ? (
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div class="modal-body">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Name
                    </th>

                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Gender
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Age
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Eye Color
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Hair Color
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "15px",
                        textAlign: "left",
                      }}
                    >
                      Specie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.gender}
                        </td>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.age}
                        </td>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.eye_color}
                        </td>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.hair_color}
                        </td>
                        <td
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                            padding: "15px",
                            textAlign: "left",
                          }}
                        >
                          {item.specie}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
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

export default PeopleModal;
