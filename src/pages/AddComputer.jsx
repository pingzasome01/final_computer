import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddComputer = () => {
  const [Computer, setComputer] = useState({
    id: "",
    brand: "",
    model: "",
    price: "",
    CPU_type: "",
    image: "https://source.unsplash.com/random/200x200/?portrait",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setComputer({ ...Computer, [id]: value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const computerData = {
      id: Computer.id,
      brand: Computer.brand,
      model: Computer.model,
      price: Computer.price,
      CPU_type: Computer.CPU_type,
      image: Computer.image,
    };
    fetch("http://localhost:3000/Computer",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(computerData)  
      }).then(
        (res)=>{
          alert("Seve sucessfully")
          navigate("/")
        }
      ).catch((err) =>{
        console.log(err);
      });
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Computer</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">id</label>
                      <input
                        type="text"
                        required
                        name="id"
                        id="id"
                        value={Computer.id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={Computer.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={Computer.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">price</label>
                      <input
                        type="text"
                        required
                        name="price"
                        id="price"
                        value={Computer.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CPU_type">CPU_type</label>
                      <input
                        type="text"
                        required
                        name="CPU_type"
                        id="CPU_type"
                        value={Computer.CPU_type}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="img">image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        value={Computer.image}
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
                      <Link to="/" className="btn btn-danger">
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

export default AddComputer;
