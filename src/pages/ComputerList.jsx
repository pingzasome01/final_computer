import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const ComputerList = () => {
  const [computerData, setComputerData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/Computer") // Modify the endpoint to 'computers'
      .then((res) => res.json())
      .then((response) => {
        setComputerData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const editComputer = (id) => {
    navigate(`/computer/edit/${id}`);
  };

  const viewComputerDetail = (id) => {
    navigate(`/computer/detail/${id}`);
  };

  const deleteComputer = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`http://localhost:3000/Computer/${id}`, {
        method: "DELETE"
      })
        .then((res) => {
          alert("Computer removed successfully");
          setComputerData(computerData.filter((computer) => computer.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Computer List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/computer/create" className="btn btn-success">
              Add New(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>   
                <td>Brand</td>
                <td>Model</td>
                <td>Price</td>
                <td>CPU_type</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {computerData &&
                computerData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td>{item.CPU_type}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => editComputer(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteComputer(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => viewComputerDetail(item.id)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComputerList;
