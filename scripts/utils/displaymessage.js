let addMessageTime;
export function displayAddedMessage(productId)
{
  const addMessage=document.querySelector(`.js-added-to-cart-${productId}`);
  addMessage.classList.add('added-to-cart-visible');
      if(addMessageTime)
      {
        clearTimeout(addMessageTime);
      }
      const settime=setTimeout(()=>{
        addMessage.classList.remove('added-to-cart-visible');
      },2000);
      addMessageTime=settime;
}