//  ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
console.log("connected");

// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const heading = document.getElementsByTagName("h2");
for(const headingColour of heading){
    headingColour.style.color="lightblue"
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const backpackId = document.getElementById("backpack").style.backgroundColor="tomato";

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

const cardClass = document.getElementsByClassName("card");
for(const element of cardClass){
    element.style.borderRadius = "30px"
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

function logMessage() {
    console.log("Button clicked");
  }
  const myButton = document.getElementById("myButton");
  myButton.addEventListener("click", logMessage);

//   ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

// For one card  
// document.getElementById("btn-remove").addEventListener('click', function(){
//    let card= document.getElementById("card").style.display="none";
// })

// for Different card 
const btnRemove = document.getElementsByClassName("btn-remove");
for(const btn of btnRemove){
    btn.addEventListener('click', function(e){
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(e){
    const text = e.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled');
    }
    
})

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।

let img = document.getElementById('myImage');

img.addEventListener('mouseenter', function() {
  img.src = './images/bags/bag-3.png';
});

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
function changeColor() {
    var stayInTouch = document.getElementById("stay-in-touch");
    stayInTouch.style.backgroundColor = "red";
  }
  