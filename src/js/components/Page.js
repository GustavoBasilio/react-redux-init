import React, {Component} from "react";
import ReactDOM from "react-dom";
import Dumb from "./presentational/Dumb";

// Example of a Smart Component rendering a Dumb component
class Page extends Component {

    constructor () {

        super();
        this.state = {
            "title": "New React/Redux 2"
        };
        
    }

    render () {

        return (
            <Dumb
                title={this.state.title}
            />
        );

    }

}

export default Page;