var clothes = [
    {title: "پیراهن مردانه", price: "100000 تومان", image: "shirt.jpg"},
    {title: "کت زنانه", price: "150000 تومان", image: "coat.jpg"},
    {title: "شلوار جین", price: "80000 تومان", image: "jeans.jpg"}
  ];
  
  var shoes = [
    {title: "کفش ورزشی", price: "120000 تومان", image: "sport.jpg"},
    {title: "کفش رسمی", price: "90000 تومان", image: "formal.jpg"},
    {title: "کفش زنانه", price: "70000 تومان", image: "women.jpg"}
  ];
  
  var bags = [
    {title: "کوله پشتی", price: "60000 تومان", image: "backpack.jpg"},
    {title: "کیف دستی", price: "50000 تومان", image: "handbag.jpg"},
    {title: "کیف لپ تاپ", price: "40000 تومان", image: "laptop.jpg"}
  ];
  
  // تابع برای نمایش کالاهای لباس
  function showClothes() {
    // پاک کردن محتوای قبلی
    var items = document.getElementById("items");
    items.innerHTML = "";
    // اضافه کردن کالاهای لباس به صفحه
    for (var i = 0; i < clothes.length; i++) {
      var item = clothes[i];
      var itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = `
        <div class="item-title">${item.title}</div>
        <div class="item-price">${item.price}</div>
        <img class="item-image" src="${item.image}">
      `;
      items.appendChild(itemDiv);
    }
  }
  
  // تابع برای نمایش کالاهای کفش
  function showShoes() {
    // پاک کردن محتوای قبلی
    var items = document.getElementById("items");
    items.innerHTML = "";
    // اضافه کردن کالاهای کفش به صفحه
    for (var i = 0; i < shoes.length; i++) {
      var item = shoes[i];
      var itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = `
        <div class="item-title">${item.title}</div>
        <div class="item-price">${item.price}</div>
        <img class="item-image" src="${item.image}">
      `;
      items.appendChild(itemDiv);
    }
  }
  
  // تابع برای نمایش کالاهای کیف
  function showBags() {
    };

    var header = document.getElementById("but");
var btns = header.getElementsByClassName("bbt");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}