import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button } from "react-bootstrap";
import "../styles/connectionSetup.css";

function ConnectionSetup() {
  const [cloudProvider, setCloudProvider] = useState("");
  const [sasTokenUrl, setSasTokenUrl] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const handleCloudProviderChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCloudProvider(event.target.value);
  };

  const handleSasTokenUrlChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSasTokenUrl(event.target.value);
  };

  const handleAccessKeyChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAccessKey(event.target.value);
  };

  const handleTestButtonClick = () => {
    // Perform testing logic here
    console.log("Testing with:", cloudProvider, sasTokenUrl, accessKey);
  };

  const handleSubmitButtonClick = () => {
    // Perform submit logic here
    console.log("Form submitted:", cloudProvider, sasTokenUrl, accessKey);
  };

  const handleCancelButtonClick = () => {
    // Perform cancel logic here
    setCloudProvider("");
    setSasTokenUrl("");
    setAccessKey("");
  };

  return (
    <div>
      <h3 className="title">i-Search</h3>
      <div className="container">
        <div className="form-container">
          <p className="form-title">
            <h4>Connection Setup</h4>
          </p>
          <hr className="separator" />
          <div className="form-group-radio">
            <div className="label-container">
              <b>Cloud Provider</b>
            </div>
            <label className="input-label-radio">
              <input
                type="radio"
                value="azure"
                checked={cloudProvider === "azure"}
                onChange={handleCloudProviderChange}
                className="input-radio"
              />
              Azure
            </label>
            <label className="input-label-radio">
              <input
                type="radio"
                value="aws"
                checked={cloudProvider === "aws"}
                onChange={handleCloudProviderChange}
                className="input-radio"
              />
              AWS
            </label>
            <label className="input-label-radio">
              <input
                type="radio"
                value="gcp"
                checked={cloudProvider === "gcp"}
                onChange={handleCloudProviderChange}
                className="input-radio"
              />
              GCP
            </label>
          </div>
          <div className="form-group-text">
            <label className="input-label">
              <b style={{ marginRight: "20px" }}>SAS Token URL</b>
              <input
                type="text"
                className="input-field"
                value={sasTokenUrl}
                onChange={handleSasTokenUrlChange}
              />
            </label>
            <label className="input-label">
              <b style={{ marginRight: "50px" }}>Access Key</b>
              <input
                type="text"
                className="input-field"
                value={accessKey}
                onChange={handleAccessKeyChange}
              />
              <Button
                variant="secondary"
                style={{ height: "40px", marginLeft: "10px" }}
                onClick={handleTestButtonClick}
              >
                Test Connection
              </Button>{" "}
            </label>
          </div>
          <div className="button-group">
            <Button
              variant="secondary"
              className="button"
              onClick={handleSubmitButtonClick}
            >
              Submit
            </Button>{" "}
            <Button
              variant="secondary"
              className="button"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectionSetup;
