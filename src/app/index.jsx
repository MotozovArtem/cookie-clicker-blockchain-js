import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Alert} from "react-native"
import {Button} from "reactstrap";

class App extends Component {
    render() {
        const showAlert = () => {Alert.alert("Motherfucking alert", "TS is just JS on steroids")};
        return (
            <div className="container">
                <div className="row">
                    <Button color="danger" onClick={showAlert}>
                        Тык
                    </Button>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input name="reciveAddr" className="form-control" type="text"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));