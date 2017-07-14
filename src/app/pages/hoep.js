import React, { Component, PropTypes } from "react";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';
import html2canvas from "html2canvas"
import jsPDF from "jsPDF"
export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/jpg",parseFloat((100).toFixed(2)));
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          id="divToPrint"
          className="flex flex-center"
          style={{
            height: 500,
            width: 500,
            background: "blue"
          }}
        >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </div>
    );
  }
}
