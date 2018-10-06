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
        let link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'shortcut icon';
        link.href = 'public/ethereum-icon.png';
        document.head.appendChild(link);
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