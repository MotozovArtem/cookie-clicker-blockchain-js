import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    showAlert() {
        alert("Motherfucking alert, TS is just JS on steroids");
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button color="danger" onClick={this.showAlert}>
                        Тык
                    </button>
                </div>
            </div>
        );
    }
}