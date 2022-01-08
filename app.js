
function Increase(){
   
    const mobileFiled = document.getElementById('mobileField').value;
    const value = parseFloat(mobileFiled);
    const increase = value + 1;

    const quantity =  document.getElementById('mobileField').value = increase; 

    const mobilePriceField = document.getElementById('MobiePriceField').innerText;
    const mobilePrice = parseFloat(mobilePriceField);
    const realprice = 1219;
    const increaseMobileprice = realprice + mobilePrice;
    
    document.getElementById('MobiePriceField').innerText = increaseMobileprice

    const subtotalFiedl = document.getElementById('sub__Total').innerText;
    const subtotalValue =  parseFloat(subtotalFiedl);
    
    const subgrandtotal = subtotalValue + realprice;
    
    document.getElementById('sub__Total').innerText = subgrandtotal;
    // console.log(value)

    const taxField = document.getElementById("taxField").innerText;
    const taxValue = parseFloat(taxField);
    const tax = Math.ceil(subgrandtotal / 5) 

    document.getElementById("taxField").innerText  = tax;

    const totlaField = document.getElementById('total').innerText
    const totlaFieldValeu = parseInt(totlaField);

    const total = subgrandtotal + tax;

    document.getElementById('total').innerText = total;
    // console.log(taxValue);
}

function Decrease(){
   
    const mobileFiled = document.getElementById('mobileField').value;
    const value = parseFloat(mobileFiled);
    const decrease = value - 1;
    const quantity =  document.getElementById('mobileField').value = decrease;

    // console.log(quantity);

     const mobilePriceField = document.getElementById('MobiePriceField').innerText;
    const mobilePrice = parseFloat(mobilePriceField);
    // console.log(mobilePrice);
    const realprice = 1219;
    const DecreaseMobileprice = mobilePrice - realprice;
    
    document.getElementById('MobiePriceField').innerText = DecreaseMobileprice

    const subtotalFiedl = document.getElementById('sub__Total').innerText;
    const subtotalValue =  parseFloat(subtotalFiedl);
    
    const subgrandtotal = subtotalValue - realprice;
    
    document.getElementById('sub__Total').innerText = subgrandtotal;

    const taxField = document.getElementById("taxField").innerText;
    const taxValue = parseFloat(taxField);
    const tax = Math.ceil(subgrandtotal / 5) 

    document.getElementById("taxField").innerText  = tax;
    // console.log(taxValue);

    const totlaField = document.getElementById('total').innerText
    const totlaFieldValeu = parseInt(totlaField);

    const total = subgrandtotal + tax;

    document.getElementById('total').innerText = total;
    // console.log(value)
}


function IncreaseCover(){
   
    const CoverFiled = document.getElementById('CoverField').value;
    const value = parseFloat(CoverFiled);
    const increase = value + 1;
    // console.log(increase)
      document.getElementById('CoverField').value = increase; 

    const CoverPriceField = document.getElementById('CoverPriceField').innerText;
    const CoverPrice = parseFloat(CoverPriceField);
    const realprice = 59;
    const increaseCovereprice = realprice + CoverPrice;
    
    document.getElementById('CoverPriceField').innerText = increaseCovereprice


    const subtotalFiedl = document.getElementById('sub__Total').innerText;
    const subtotalValue =  parseFloat(subtotalFiedl);
    
    const subgrandtotal = subtotalValue + realprice;
    
    document.getElementById('sub__Total').innerText = subgrandtotal;
    // console.log(value)

    const taxField = document.getElementById("taxField").innerText;
    const taxValue = parseFloat(taxField);
    const tax = Math.ceil(subgrandtotal / 5) 

    document.getElementById("taxField").innerText  = tax;
    console.log(taxValue);
    
    const totlaField = document.getElementById('total').innerText
    const totlaFieldValeu = parseInt(totlaField);

    const total = subgrandtotal + tax;

    document.getElementById('total').innerText = total;
    // console.log(value)
}


function DecreaseCover(){

    const CoverFiled = document.getElementById('CoverField').value;
    const value = parseFloat(CoverFiled);
    const Decrease = value - 1;
    // console.log(increase)
      document.getElementById('CoverField').value = Decrease; 

      const CoverPriceField = document.getElementById('CoverPriceField').innerText;
      const CoverPrice = parseFloat(CoverPriceField);
      const realprice = 59;
      const DecreaseCovereprice = CoverPrice -  realprice;
      
      document.getElementById('CoverPriceField').innerText = DecreaseCovereprice


      const subtotalFiedl = document.getElementById('sub__Total').innerText;
      const subtotalValue =  parseFloat(subtotalFiedl);
      
      const subgrandtotal = subtotalValue - realprice;
      
      document.getElementById('sub__Total').innerText = subgrandtotal;

      const taxField = document.getElementById("taxField").innerText;
      const taxValue = parseFloat(taxField);
      const tax = Math.ceil(subgrandtotal / 5) 
  
      document.getElementById("taxField").innerText  = tax;
      console.log(taxValue);

      const totlaField = document.getElementById('total').innerText
    const totlaFieldValeu = parseInt(totlaField);

    const total = subgrandtotal + tax;

    document.getElementById('total').innerText = total;
      // console.log(value)


}