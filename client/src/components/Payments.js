import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../actions';

class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        amount={500} // currency in cents
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Eamily"
        description="$5 for 5 credits"
      >
        <button className="btn">
          Add Credit
        </button>
      </StripeCheckout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleToken: token => dispatch(handleToken(token))
});

export default connect(null, mapDispatchToProps)(Payments);