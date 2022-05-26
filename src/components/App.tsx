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
            <div className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                         alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus/>
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                   required/>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>
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