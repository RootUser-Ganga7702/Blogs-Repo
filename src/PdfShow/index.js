import React, { Component } from "react";

class PdfShow extends Component {
    state = {
      showPdf: false,
      pdfUrl: ""
    };

  handleToggleClick = async () => {
    const {showPdf} = this.state
    this.setState({ showPdf: !showPdf });
  };

  handleFileUpload = async (event) => {
    const {pdfUrl, showPdf} = this.state
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      this.setState({ pdfUrl: fileUrl });
    }

    const pdfShowFIles = {
        "pdfFile":pdfUrl,
    }
    const url = "http://localhost:4000/pdf-blog-post"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(pdfShowFIles),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 201) {
        alert("Uploaded Successfully");
    }else{
        alert("Please upload a PDF file first!");
    }
  };

  render() {
    const { showPdf, pdfUrl } = this.state;

    return (
      <div style={{ padding: "20px", marginTop: "110px" }}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={this.handleFileUpload}
          />
        </div>

        <button onClick={this.handleToggleClick}>
          {showPdf ? "Hide PDF" : "Show PDF"}
        </button>

        {showPdf && pdfUrl && (
          <div
            style={{
              marginTop: "20px",
              height: "100vh",
              marginLeft: "100px",
              marginRight: "100px"
            }}
          >
            <iframe
              src={pdfUrl}
              style={{ width: "100%", height: "100%" }}
              frameBorder="0"
              title="PDF Viewer"
            ></iframe>
          </div>
        )}
      </div>
    );
  }
}

export default PdfShow;
