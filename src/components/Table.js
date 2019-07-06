import React from 'react';
import './Table.css';

function Table(props) {

  const { options } = props;

  const tbody = options.map(function (arrayItem) {

    return (

      <tr>
        <td title='Transaction/project/id'>{arrayItem.transaction.project.id}</td>
        <td title='Transaction/project/name'>{arrayItem.transaction.project.name}</td>
        <td title='Transaction/payment method/id'>{arrayItem.transaction.payment_method.id}</td>
        <td title='Transaction/payment method/name'>{arrayItem.transaction.payment_method.name}</td>
        <td title='Transaction/transfer date'>{arrayItem.transaction.transfer_date}</td>
        <td title='Transaction/id'>{arrayItem.transaction.id}</td>
        <td title='Transaction/refund reason'>{arrayItem.transaction.refund_reason}</td>
        <td title='Transaction/status'>{arrayItem.transaction.status}</td>
        <td title='Transaction/external id'>{arrayItem.transaction.external_id}</td>
        <td title='Transaction/dry run'>{arrayItem.transaction.dry_run}</td>
        <td title='Transaction/is refund allowed'>{arrayItem.transaction.is_refund_allowed}</td>
        <td title='User/id'>{arrayItem.user.id}</td>
        <td title='User/name'>{arrayItem.user.name}</td>
        <td title='User/email'>{arrayItem.user.email}</td>
        <td title='User/phone'>{arrayItem.user.phone}</td>
        <td title='User/country'>{arrayItem.user.country}</td>
        <td title='Payment details/payment/currency'>{arrayItem.payment_details.payment.currency}</td>
        <td title='Payment details/payment/amount'>{arrayItem.payment_details.payment.amount}</td>
        <td title='Payment details/payment/amount from ps'>{arrayItem.payment_details.payment.amount_from_ps}</td>
        <td title='Payment details/sales tax/percent'>{arrayItem.payment_details.sales_tax.percent}</td>
        <td title='Payment details/sales tax/amount'>{arrayItem.payment_details.sales_tax.amount}</td>
        <td title='Purchase/virtual currency/amount'>{arrayItem.purchase.virtual_currency.amount}</td>
        <td title='Purchase/virtual currency/name'>{arrayItem.purchase.virtual_currency.name}</td>
        <td title='Purchase/virtual items'>{arrayItem.purchase.virtual_items}</td>
        <td title='Purchase/simple checkout/amount'>{arrayItem.purchase.simple_checkout.amount}</td>
        <td title='Purchase/simple checkout/currency'>{arrayItem.purchase.simple_checkout.currency}</td>
        <td title='Purchase/pin codes/amount'>{arrayItem.purchase.pin_codes.amount}</td>
        <td title='Purchase/pin codes/currency'>{arrayItem.purchase.pin_codes.currency}</td>
        <td title='Purchase/pin codes/content'>{arrayItem.purchase.pin_codes.content}</td>
        <td title='Purchase/subscription/name'>{arrayItem.purchase.subscription.name}</td>
      </tr>
    )
  });

  return (

    <div className="Table">

      <table>
        <colgroup span="11">
          <colgroup span="2">
            <col></col>
            <col></col>
          </colgroup>
          <colgroup span="2">
            <col></col>
            <col></col>
          </colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <colgroup span="5"></colgroup>
        <colgroup span="5">
          <colgroup span="3"></colgroup>
          <colgroup span="2"></colgroup>
        </colgroup>
        <colgroup span="9">
          <colgroup span="2"></colgroup>
          <col></col>
          <colgroup span="2"></colgroup>
          <colgroup span="3"></colgroup>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th colSpan="11" scope="colgroup">Transaction</th>
            <th colSpan="5" scope="colgroup">User</th>
            <th colSpan="5" scope="colgroup">Payment details</th>
            <th colSpan="9" scope="colgroup">Purchase</th>
          </tr>
          <tr>
            <th colSpan="2" scope="colgroup">Project</th>
            <th colSpan="2" scope="colgroup">Payment method</th>
            <th rowSpan="2" scope="col">Transfer date</th>
            <th rowSpan="2" scope="col">Id</th>
            <th rowSpan="2" scope="col">Refund reason</th>
            <th rowSpan="2" scope="col">Status</th>
            <th rowSpan="2" scope="col">External id</th>
            <th rowSpan="2" scope="col">Dry run</th>
            <th rowSpan="2" scope="col">Is refund allowed</th>
            <th rowSpan="2" scope="col">Id</th>
            <th rowSpan="2" scope="col">Name</th>
            <th rowSpan="2" scope="col">Email</th>
            <th rowSpan="2" scope="col">Phone</th>
            <th rowSpan="2" scope="col">Country</th>
            <th colSpan="3" scope="colgroup">Payment</th>
            <th colSpan="2" scope="colgroup">Sales tax</th>
            <th colSpan="2" scope="colgroup">Virtual currency</th>
            <th rowSpan="2" scope="col">Virtual items</th>
            <th colSpan="2" scope="colgroup">Simple checkout</th>
            <th colSpan="3" scope="colgroup">Pin codes</th>
            <th scope="col">Subscription</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Id</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Amount from ps</th>
            <th>Percent</th>
            <th>Amount</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Content</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>

          {tbody}

        </tbody>

      </table>

    </div>

  );

};

export default Table;