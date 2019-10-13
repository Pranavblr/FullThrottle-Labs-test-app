import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader-backdrop">
            <div className={"align-center"}>
                <div className="loader"></div>
            </div>
        </div>
        );
    }
}

export default Loader;