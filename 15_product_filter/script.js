

var mockData = fetch('https://shoppingcontent.googleapis.com/content/v2.1/merchantId/products/')
.then(res =>{
    return res.json();
})
.then(data =>{
    console.log(data)
})

var products = document.querySelector('.products');

products.innerHTML = '';
mockData.forEach(item =>{

    var newProduct  = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.innerHTML = `<img src="${item.picture}" alt="">
    <div class="info">
        <div class="name">${item.name}</div>
        <div class="price">${item.price} $</div>
    </div>`

    products.appendChild(newProduct);
})