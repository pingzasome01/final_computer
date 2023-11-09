import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditComputer = () => {
  const { id } = useParams();
  const [computer, setComputer] = useState({
    brand: "",
    model: "",
    price: "",
    CPU_type: "",
    image: "https://source.unsplash.com/random/200x200/?tech",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/Computer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComputer(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setComputer({ ...computer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/Computer/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(computer),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/computer/detail/" + id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit Computer</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={computer.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={computer.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        required
                        name="price"
                        id="price"
                        value={computer.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CPU_type">CPU Type</label>
                      <input
                        type="text"
                        required
                        name="CPU_type"
                        id="CPU_type"
                        value={computer.CPU_type}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to={`/computer/detail/${id}`} className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditComputer;
