import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const IndexingSetup = () => {
  return (
    <div>
      <div className="form-container">
        <h3 style={{ margin: "20px" }}>i-Search</h3>

        <h4 style={{ textAlign: "center" }}>Indexing Setup</h4>

        <form style={{ maxWidth: "700px", margin: "0 auto" }}>
          <hr
            style={{
              borderTop: "4px solid #2d302d",
            }}
          />
          <p>
            Indexing well be performed for product data and corresponding media
            in the folder paths provided below on the connection setup. In case
            there is change in cloud service, please <a href="">click here</a>.
          </p>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label fw-bold">
              Product Folder Path
            </label>

            <div className="col-sm-8">
              <input type="text" className="form-control col-sm-4" />

              <p className="fst-italic" style={{ fontSize: "12px" }}>
                Product folder is parent folder for product data. All subfolders
                will be ignored
              </p>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label fw-bold">
              Data Folder
            </label>

            <div className="col-sm-8">
              <input type="text" className="form-control" />

              <p className="fst-italic" style={{ fontSize: "12px" }}>
                Data folder is parent folder for media (pdf/images/videos). All
                Subfolders will be indexed
              </p>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label fw-bold">
              Indexing Mode
            </label>

            <div className="col-sm-8">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                />

                <label className="form-check-label" htmlFor="inlineRadio1">
                  Offline Indexing
                </label>
              </div>

              <div className="form-check form-check-inline ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                />

                <label className="form-check-label" htmlFor="inlineRadio2">
                  Online Indexing
                </label>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "50px" }}>
            <Button
              variant="primary"
              style={{ width: "120px", height: "40px" }}
            >
              Submit
            </Button>{" "}
            <Button variant="danger" style={{ width: "120px", height: "40px" }}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndexingSetup;
