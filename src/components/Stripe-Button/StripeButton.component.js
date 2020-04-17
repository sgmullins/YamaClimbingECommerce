import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hfcvPLWvsWjso3N8ckiTwLUb00G5qWZ6Bp';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  };
  return (
    <StripeCheckout
      label='Pay Now 💳'
      name='YAMA Climbing'
      billingAddress
      shippingAddress
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now 💳'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
