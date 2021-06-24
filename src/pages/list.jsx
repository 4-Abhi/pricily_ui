import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [list, setList] = useState([]);

  const [dataitem, setDataItem] = useState([]);

  useEffect(() => {
    const callServer = async () => {
      const { data } = await axios.get("http://localhost:4004/api/event");
      if (data) {
        setList(data.data);
        setDataItem(data.data);
      } else {
        console.log("Reeeee", data);
      }
    };
    callServer();
  }, []);

  const handelRemove = async (item) => {
    if (item._id) {
      const response = await axios.delete(
        `http://localhost:4004/api/event/${item._id}`
      );
      window.location = "list";
      console.log("eevvevve", response);
    } else {
      console.log("Something Wrong");
    }
  };
  const FilterHandler = (itemstatus) => {
    const filterItem = itemstatus
      ? dataitem.filter((item) => item.eventstatus === itemstatus)
      : dataitem;
    setList(filterItem);
  };

  return (
    <div className="container">
      <h2>Event List </h2>
      <div className="row">
        <div className="col order-md-2  col-lg-3 my-2">
          <h4 className="px-4">Filter Item</h4>
          <ul class="list-group px-4">
            <li class="list-group-item" onClick={() => FilterHandler()}>
              All Item
            </li>
            <li class="list-group-item" onClick={() => FilterHandler("done")}>
              Done
            </li>
            <li
              class="list-group-item"
              onClick={() => FilterHandler("pending")}
            >
              Pending
            </li>
            <li
              class="list-group-item"
              onClick={() => FilterHandler("created")}
            >
              Created
            </li>
          </ul>
        </div>
        <div className="col order-md-1  col-lg-9 my-2">
          <div className="list_table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Event Description</th>
                  <th scope="col">EVENT Location</th>
                  <th scope="col">EVENT STATUS</th>
                  <th scope="col">EVENT Organizer</th>
                  <th scope="col">EDIT LIST</th>
                  <th scope="col">DELETE LIST</th>
                </tr>
              </thead>
              <tbody>
                {list.length !== 0 ? (
                  <>
                    {list.map((item) => {
                      return (
                        <tr key={item._id}>
                          <th scope="row">{item.name}</th>
                          <td>{item.desc}</td>
                          <td>{item.location}</td>
                          <td>
                            <span
                              className={
                                (item.eventstatus === "created" &&
                                  "btn btn-secondary") ||
                                (item.eventstatus === "pending" &&
                                  "btn btn-warning") ||
                                (item.eventstatus === "done" &&
                                  "btn btn-primary")
                              }
                            >
                              {item.eventstatus}
                            </span>
                          </td>
                          <td>{item.organizer}</td>
                          <td>
                            <span className="alert-success px-3">
                              <Link
                                to={{
                                  pathname: `/list/${item._id}`,
                                  state: { item: item },
                                }}
                              >
                                Edit
                              </Link>
                            </span>
                          </td>
                          <td>
                            <span
                              className="alert-danger px-3"
                              onClick={() => handelRemove(item)}
                            >
                              DELETE
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
