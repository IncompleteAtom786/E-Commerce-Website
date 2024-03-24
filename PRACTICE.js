var cat = new Map([
    ['electronics', new Map([
        ['Laptop', 544.33],
        ['Boat Rockerz', 20.44],
        ['KeyBoard', 25.44]
    ])],
    ['books', new Map([
        ['Harry Potter', 12.43],
        ['Hannibal', 34.34],
        ['Lord Of The Rings', 25.5]
    ])],
    ['clothes', new Map([
        ['Shirt', 7.66],
        ['Jeans', 8.88],
        ['Trousers', 10.33]
    ])],
    ['toys', new Map([
        ['Lego', 33.22],
        ['Mario', 22.22],
        ['PinBall', 100]
    ])],
    ['food', new Map([
        ['Pizza', 15],
        ['Burgers', 6],
        ['Pasta', 5.55]
    ])]
]);


var category;
var amount = parseFloat(document.getElementById('total').innerHTML);
var count = parseInt(document.getElementById('count').innerHTML);

function showItems()
{
    category = document.getElementById('category').value;
    var ele = document.getElementById('show-items');
    ele.innerHTML = "";
    ele.style.opacity = '1';


    for(let [key, value] of cat)
    {
        if(key == category)
        {
            var item, index = 0;
            for(let [k, v] of value)
            {   
                item = document.createElement("div");
                item.innerHTML = `<span> ${k} <br> Price : ${v} $</span><br><br> <button onclick="addToCart(${index})">Add To Cart</button>`;
                document.getElementById('show-items').appendChild(item);
                index++;
            }
        }
    }
    if(category == "") 
    {
        ele.innerHTML = "Selected Category Items will be displayed here!";
        ele.style.opacity = '0.5';
    }
}

function addToCart(idx)
{
    var add = Array.from(cat.get(category).keys());
    var item = document.createElement("li");
    item.innerHTML = add[idx];
    document.getElementById('select-list').appendChild(item);

    amount += parseFloat(Array.from(cat.get(category).values())[idx]);
    document.getElementById('total').innerHTML = amount.toFixed(2);

    count++;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('clear-cart').addEventListener("click", function() {
    document.getElementById('count').innerHTML = 0;
    document.getElementById('total').innerHTML = 0;
    document.getElementById('select-list').innerHTML = "";
});