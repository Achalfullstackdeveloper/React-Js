import React, { Component } from "react";
import "./MyButton.css";

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableNumber: "", // Corrected state key
        };
    }
    
    tableMulti = (tableNumber, number) => {
        return (
            <div className="row" key={number}>
                <button className="btn">{tableNumber}</button>
                <span>X</span> {/* Use span instead of text */}
                <button className="btn">{number}</button>
                <span>=</span> {/* Use span instead of text */}
                <button className="btn">{tableNumber * number}</button>
            </div>
        );
    };

    renderTable = () => {
        let i = 1;
        let tableCellArray = [];
        while (i <= 10) {
            tableCellArray.push(this.tableMulti(this.state.tableNumber, i));
            i++;
        }
        return <div className="table-container">{tableCellArray}</div>;
    }; 

    tablebuttons = () => {
        let i = 1;
        let array = [];
        while (i <= 10) {
            let index = i;
            array.push(
                <button
                    key={index}
                    className="btns"
                    style={this.props.bgColor}
                    onClick={() => this.buttonClicked(index)}
                >
                    {index}
                </button>
            );
            i++;
        }
        return <div className="button-container">{array}</div>;
    };

    // Function to handle button click
    buttonClicked = (index) => {
        console.log("Button==>", index);
        this.setState({ tableNumber: index }); // Corrected state key
    };

    render() {
        return (
            <div>
                {this.tablebuttons()}
                {this.renderTable()} {/* Call the renderTable function to display the multiplication tables */}
            </div>
        );
    }
}

export default TableComponent;