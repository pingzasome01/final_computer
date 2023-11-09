import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ComputerDetail = () => {
  const { id } = useParams();
  const [computerData, setComputerData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/Computer/" + id)
      .then((res) => res.json())
      .then((data) => {
        setComputerData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Computer Detail</h2>
            </div>
            {computerData && ( // Corrected variable name to computerData
              <div className="card-body">
                <img src={computerData.image} alt="Computer" />
                <div className="card-text">
                  <h3>
                    {computerData.brand} - {computerData.model} ({computerData.id})
                  </h3>
                  <h5>Price: {computerData.price}</h5>
                  <h5>CPU Type: {computerData.CPU_type}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerDetail;
