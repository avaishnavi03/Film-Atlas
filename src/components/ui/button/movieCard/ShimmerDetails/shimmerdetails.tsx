import "./shimmerdetails.css";
function ShimmerDetails() {
  return (
    <div className="details-page">
      <div className="details-backdrop shimmer-bg">
        <div className="backdrop-overlay">
          <div className="details-content">
            <div className="shimmer-poster shimmer"></div>

            <div className="details-info">
              <div className="shimmer-title shimmer"></div>
              <div className="shimmer-line shimmer"></div>
              <div className="shimmer-line small shimmer"></div>

              <div className="shimmer-btn-row">
                <div className="shimmer-btn shimmer"></div>
                <div className="shimmer-btn shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="details-extra">
        <div className="details-layout">
          <div className="details-main">
            <div className="shimmer-section-title shimmer"></div>
            <div className="shimmer-para shimmer"></div>
            <div className="shimmer-para shimmer"></div>

            <div className="shimmer-cast-row">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="shimmer-cast-card shimmer"></div>
              ))}
            </div>
          </div>

          <div className="movie-info-card">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="shimmer-info-line shimmer"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="media-section">
        <div className="shimmer-media-row">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="shimmer-media shimmer"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShimmerDetails;
