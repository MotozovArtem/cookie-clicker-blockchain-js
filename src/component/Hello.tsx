import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    private showAlert() {
        alert("Motherfucking alert, TS is just JS on steroids");
    };

    private showDialog() {
        const vex = require('vex-js');
        try{
            vex.registerPlugin(require('vex-dialog'));
        } catch (e) {
            console.log('that\'s not a bug, that\'s a feature')
        }
        vex.dialog.prompt({
            className: 'vex-theme-wireframe',
            label: 'New Block Created!',
            message: 'Write your message here:',
            placeholder: 'I love sitting on bottles!',
            callback: function (value:any) {
                console.log(value)
            }
        })
        }

    render(){
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
                    <button color="success" onClick={this.showDialog}>
                        Промпт
                    </button>
                </div>
            </div>
        );
    }

}