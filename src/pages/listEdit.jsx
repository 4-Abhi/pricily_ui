import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Listedit = ({ match, location }) => {
  // console.log("match isss", match);
  const { item } = location.state;
  useEffect(() => {
    const callserver = async () => {};
    callserver();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.patch(
      `http://localhost:4004/api/event/${item._id} `,
      {
        name: data.name,
        desc: data.desc,
        organizer: data.organizer,
        location: data.location,
        eventstatus: data.eventstatus,
      }
    );
    if (response.data) {
      alert("Update Successfull");
      window.location = "/list";
    }
  };
  const error = "";

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{error && <p className="alert alert-danger">{error}</p>}</h2>

        <div className="form_group">
          <label htmlFor="Name">Event title</label>
          <input
            defaultValue={item.name}
            {...register("name", { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="eventstatus">Event Status</label>
          <select {...register("eventstatus")} defaultValue={item.eventstatus}>
            <option value="created">Created </option>
            <option value="done">Done</option>
            <option value="pending">pending</option>
          </select>
        </div>

        <div className="form_group">
          <label htmlFor="organizer">Organizer</label>
          <input
            {...register("organizer", { required: true })}
            defaultValue={item.organizer}
          />
          {errors.organizer && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="Name">Event Location</label>
          <input
            {...register("location", { required: true })}
            defaultValue={item.location}
          />
          {errors.location && <p>This field is required</p>}
        </div>
        <div className="form_group">
          <label htmlFor="desc">eventticket Description</label>
          <textarea
            cols="60"
            rows="5"
            {...register("desc")}
            defaultValue={item.desc}
          ></textarea>
        </div>

        <button className="submit">Save Event</button>
      </form>
    </div>
  );
};

export default Listedit;
