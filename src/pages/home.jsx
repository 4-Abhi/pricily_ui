import { useForm } from "react-hook-form";
import axios from "axios";

import "./home.css";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("datatata", data);

    const result = await axios.post("http://localhost:4004/api/event", {
      name: data.name,
      desc: data.desc,
      organizer: data.organizer,
      location: data.location,
    });
    if (result.data) {
      alert("Event Created ");
      console.log("Datatat", result.data);
      window.location = "/";
    } else {
      console.log("Reeeee", result.error);
    }
  };

  const error = "";

  return (
    <div>
      <div className="container">
        <h2 className="title">Event Todo list</h2>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>
                  {error && <p className="alert alert-danger">{error}</p>}
                </h2>

                <div className="form_group">
                  <label htmlFor="Name">Event title</label>
                  <input {...register("name", { required: true })} />
                  {errors.name && <p>This field is required</p>}
                </div>

                <div className="form_group">
                  <label htmlFor="organizer">Organizer</label>
                  <input {...register("organizer", { required: true })} />
                  {errors.organizer && <p>This field is required</p>}
                </div>
                <div className="form_group">
                  <label htmlFor="Name">Event Location</label>
                  <input {...register("location", { required: true })} />
                  {errors.location && <p>This field is required</p>}
                </div>
                <div className="form_group">
                  <label htmlFor="desc">Event Description</label>
                  <textarea cols="60" rows="5" {...register("desc")}></textarea>
                </div>

                <button className="submit">Save Event</button>
              </form>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="content">
              <h2>Welocome to The Event Creator</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                architecto in animi adipisci nemo voluptas laborum eveniet
                doloremque laboriosam quia nesciunt odio minima commodi aut
                provident obcaecati? Iste, ducimus architecto?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
