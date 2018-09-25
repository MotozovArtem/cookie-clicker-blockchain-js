import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
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