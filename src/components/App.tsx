import React, { Component, PureComponent } from "react";
import {IMyComponentRequiredProps} from "../interface/requiredInterface";



const defaultProps: IMyComponentRequiredProps ={
    color: "red"

}

type MyProps = typeof defaultProps & {
    // using `interface` is also ok
    message: string;
};
type MyState = {
    count: number; // like this
};
export class App extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        count: 0,
    };
    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}

//
// const AppComponent = ({message}: MyProps & typeof defaultProps) => (
//
//     <div>{`fdsfsdf ${message}`}</div>
// );
//
//
// const TestComponent = (props: React.ComponentProps<typeof AppComponent>) => {
//     return <h1 />;
// };
//
// const el = <TestComponent message="foo" />;
//
//
// AppComponent.defaultProps = defaultProps