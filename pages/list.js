export default function list() {
  return (
    <div>
      <div className="container" style={{ fontFamily: "Sf Pro Display" }}>
        <div className="row g-6">
          <div className="col-md-2 col-lg-2">
            <img className="mb-3 d-flex" src="0.png" width="140" height="45" />
          </div>
          <div className="cold-md-3 col-lg-9">
            <h4 className="mb-3 d-flex justify-content-end">Property Info</h4>
            <h5 className="d-flex justify-content-start align-items-right mt-2 mb-2">
              <span className="text-primary bold">New Listing Title</span>
            </h5>
            <div className="col-sm-7">
              <input
                className="form-control"
                id="title"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
              />
            </div>
            <h5 className="d-flex justify-content-end" id="displayresult" />
          </div>
        </div>
      </div>
    </div>
  );
}
