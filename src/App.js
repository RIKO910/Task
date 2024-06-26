import Faq from "./component/faq/Faq";

const faqS = [
  {
    qus: 'Promotions',
    ans: 'Campaigns'
  },
  {
    qus: 'Account Management',
    ans: 'My Account, Account Security'
  },
  {
    qus: 'Daraz Categories',
    ans: 'Daraz Like New, Daraz Mall, Daraz Games'
  },
  {
    qus: 'Orders',
    ans: 'Best Price Guaranteed'
  },
  {
    qus: 'Shipping',
    ans: 'Shipping Journey'
  },
  {
    qus: 'Payments',
    ans: 'Payment Method'
  },
  {
    qus: 'Returns',
    ans: 'Return Process'
  },
  {
    qus: 'Sell on Daraz',
    ans: 'Become a Seller'
  },
  {
    qus: 'Refund',
    ans: 'Refund Policy'
  },  
  {
    qus: 'Delivery',
    ans: 'Daraz Pick up Points'
  },
];

function App() {
  return (
    <div>
      <Faq qaList={faqS} />
    </div>
  )
}

export default App;
