const ticket=document.getElementById("pick_number");
let result=document.getElementById("result");
let lotterySheetContainer = document.getElementById("lotterySheetContainer");
let tick=new Audio('tap.wav');
let win = new Audio('win.wav');

let gifts=[
    "₹100 Cash",
    "Toy Car",
    "Chocolate Box",
    "₹500 Cash",
    "SmartPhone Cover",
    "Book",
    "HeadPhones",
    "₹50 Cash",
    "Gift Voucher",
    "Watch",
    "Teddy Bear",
    "Bluetooth Speaker",
    "Movie Ticket",
    "₹200 Cash",
    "Puzzle Game",
    "Perfume",
    "Sunglasses",
    "₹1000 Cash",
    "Board Game",
    "Fitness Band",
    "Digital Clock",
    "Lamp",
    "Shopping Voucher",
    "Laptop Bag",
    "Wireless Mouse",
    "Travel Mug",
    "Notebook Set",
    "Gaming MousePad",
    "₹250 Cash",
    "Keychain",
    "Water Bottle",
    "Portable Charger",
    "Desk Organizer",
    "Cooking Set",
    "Action Figure",
    "₹300 Cash",
    "Travel Pillow ",
    "Mini Backpack",
    "Personalized Mug",
    "Gaming Controller",
    "Camera Strap ",
    "Toy Robot",
    "₹750 Cash",
    "Sports Equipment",
    "Pen Set",
    "Bluetooth Earbuds",
    "Digital Photo Frame",
    "wallet",
    "Backpack ",
    "Gift Hamper"
]



ticket.addEventListener("click",function(){
    for (let i=1;i<=50;i++){
        document.getElementById(i).classList.remove("winning-box");
    }
    item.innerHTML = "please wait...."
    // setTimeout(function(){
       
    // },5000);
    let secondcount =0;
    let intervalId = setInterval(function(){
        tick.play();
        const randomBox = Math.floor(Math.random()*50)+1;
        console.log(randomBox);
        secondcount++;
        for (let j=1;j<=50;j++){
            if(j===randomBox){
                document.getElementById(j).classList.add("highlighted-box");
            }
            else{
                document.getElementById(j).classList.remove("highlighted-box");
            }
        }
    
        if (secondcount === 5){
            let randnum = Math.random();
            let floornum = Math.floor((randnum*50)+1);
            item.innerHTML = `You have got ${floornum} Congratulations You Won "${gifts[floornum-1]}"`;
            document.getElementById(randomBox).classList.remove("highlighted-box");
            document.getElementById(floornum).classList.add("winning-box");
            clearInterval(intervalId);
            win.play();

        }
    },1000);
});

gifts.forEach(function(value,i){
    let boxelement=`<div class="Box" id=${i+1}>${i+1}. ${value}<div>`
    console.log(boxelement);
    lotterySheetContainer.insertAdjacentHTML("beforeend",boxelement);
})