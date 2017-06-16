import React, { Component } from "react";
import Logo from "../../../assets/icons/logo.png";
import Cart from "./components/cart";
import Orders from "./components/orders";
import "./index.css";
class App extends Component {
    state = { type: "cart" };
    render() {
        return (
            <div>
                <div
                    className="flex flex-center width-full flex-column"
                    style={{ paddingBottom: 50 }}
                >
                    <img
                        onClick={() => {
                            this.props.history.push("/");
                        }}
                        src={Logo}
                        style={{ width: 100, height: 100, marginBottom: 10 }}
                    />
                </div>
                <div>
                    <div styleName="type-btns">
                        <div
                            onClick={() => this.setState({ type: "cart" })}
                            style={{
                                background: this.state.type === "cart" &&
                                    "#5877ff",
                                transform: this.state.type === "cart" &&
                                    "initial",
                                color: this.state.type === "cart" && "white"
                            }}
                        >
                            КОРЗИНА
                        </div>
                        <div
                            style={{
                                background: this.state.type === "orders" &&
                                    "#5877ff",
                                transform: this.state.type === "orders" &&
                                    "initial",
                                color: this.state.type === "orders" && "white"
                            }}
                            onClick={() => this.setState({ type: "orders" })}
                        >
                            ВАШИ ЗАКАЗЫ
                        </div>
                    </div>
                    {this.state.type === "cart" &&
                        <Cart history={this.props.history} />}
                    {this.state.type === "orders" &&
                        <Orders history={this.props.history} />}
                </div>
            </div>
        );
    }
}

export default App;
