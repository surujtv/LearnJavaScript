/*  
  CallBack Hell - 
  *Callback hell is a phenomenon in asynchronous programming where multiple callbacks are nested within one another, making the code difficult to read and maintain. This is also known as the "pyramid of doom" because the indentation resembles a pyramid on its side. 

  *Code grows horizontally that is note good for developers and too difficult to be understand.

  there are to types of problems we are facing when we use callbacks - 
  1. difficult to maintain and read.
  2. Inversion of control.  
*/

// ek request ka jo response h use dusri request m use karna hai...

/*

const url1 = "https://jsonplaceholder.typicode.com/users";

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("Success:", xhr);
      //calling callback function here and passing data inside it-
    } else {
      console.error(`Error ${xhr.status}:-`, `Something went wrong`);
    }
  };

  xhr.open(method, url);
  xhr.send();
}

*/

// Example - 1

console.log("Start.........");

function addCart(cart, paymentCallback) {
  setTimeout(()=>{
    if(cart && cart.length != 0){
      console.log('Cart Recieved !', cart)
      let orderId = '12345XYZ'
      paymentCallback(orderId)
    }else{
      console.log('Your cart is empty ! please add product !')
    }
  }, 5000)
}


function payment(orderId, OrderPlacedCallback) {
  setTimeout(()=>{
    if(!orderId){
      console.log('Invalid OrderId ! ')
    }else{
      //payment success
      console.log('Payment Success ! '+orderId)
      // payment Info - 
      var paymentInfo = {
        status : true ,
        paymentId: 1246646
      }
      OrderPlacedCallback(paymentInfo)
    }
  },3000)
}

function OrderPlaced(paymentInfo, callback){
  setTimeout(()=>{
    if(paymentInfo.status){
      console.log('Order Confirmed ! ')
      callback()
    }else{
      console.log('Payment failed !')
    }
  }, 1000)
}


addCart(['kurti', 'payal', 'earings'], (orderId)=>{

    payment(orderId, (paymentInfo)=>{

      OrderPlaced(paymentInfo, ()=>{

        console.log('All Done !')

      })

    })

});


console.log("End.........");

// Example - 2





