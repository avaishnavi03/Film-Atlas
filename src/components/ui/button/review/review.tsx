import { useState } from "react";
import "./review.css";

function Review() {
  const [rating, setRating] = useState(0);

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Product Rating</h2>

      <div className="card">
        <div className="card-body">
          <div className="row">

            <div className="col-md-4 text-center">
              <h1 className="display-4 mt-3 mb-4">4.8</h1>

              <div className="mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
              </div>

              <h6 className="text-muted">Based on 245 reviews</h6>
            </div>

            <div className="col-md-8">
              {[70,20,5,3,2].map((val, idx) => (
                <div className="mb-3" key={idx}>
                  <div className="d-flex justify-content-between mb-1">
                    <span>{5 - idx} stars</span>
                    <small>{val}%</small>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: `${val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <hr />

          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ratingModal"
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div className="modal fade" id="ratingModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Write a Review</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <label className="form-label">Your Rating</label>

              <div className="star-rating">
                {[1,2,3,4,5].map(num => (
                  <i
                    key={num}
                    className={`bi ${
                      num <= rating ? "bi-star-fill" : "bi-star"
                    }`}
                    onClick={() => setRating(num)}
                  ></i>
                ))}
              </div>

              <textarea className="form-control mt-3" rows={3}></textarea>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
