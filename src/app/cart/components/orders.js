import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../business/actions/index.js";
import OrderItem from './orderItem';
import reverse from "lodash/reverse";
import values from "lodash/values";
class Orders extends Component {


    render() {
        let {...orders} = this.props.order;
        console.log("orders", orders)
        console.log("values", values(orders))
        let data = reverse(values(orders));
        console.log("reverse(values(orders))", data)
        if (data.length<1) {
            return (
                <div>Вы еще не делали заказов</div>
            )
        }
        return (

            <div>
            {
                data.map((item,i)=> (
                    <OrderItem key={i} order={item} actions={this.props.actions} />
                ))
            }
            </div>

        );
    }
}



const mapStateToProps = state => ({
    order: state.order
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);