import React, { Component } from "react"
import "./PaymentInfo.css"

class PaymentInfo extends Component {
    state = {
    }

    buttonStyle = {
        backgroundColor: 'blue'
    }
    render() {
        return (<div className="Container fluid">
        <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" buttonStyle></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover" ></i>
            </div>
        </div>
        </div>
        )

    }
}

export default PaymentInfo