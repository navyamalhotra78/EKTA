const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var restaurant;

if(state == "Karnataka"){

 restaurant = {
    data:[
   {
        rname: "Vidyarthi Bhawan",
        location: "Address : Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004",
        price: "Approx Cost : Rs.100",
        dish: "Speciality : Masala Dosa",
        image: "../assets/img/exp1.jpeg",
   },
   {
    rname: "Machali",
    location: "Sharada Vidyalaya Rd, Kodailbail, Mangaluru, Karnataka 575003",
    price: "Approx Cost : Rs.200",
    dish: "Speciality : Fish curry, Neer Dosa, Manglore Buns",
    image: "../assets/img/exp2.jpeg",
   },
   {
    rname: "Sagar Benne Dose",
    location: "Address : Jayachamaraja Wodeyar, Hadadi Rd, PravasiMandir road, Davanagere-02",
    price: "Approx Cost : Rs.100",
    dish: "Speciality : Benne Dose, Vada ",
    image: "../assets/img/exp3.jpeg",
   },
   {
    rname: "Central Tiffin Room",
    location: "Address : 7th Cross Rd, Malleshwaram, Bengaluru, Karnataka",
    price: "Approx Cost : Rs.150",
    dish: "Speciality : Khali Dosa,Idly Sambar",
    image: "../assets/img/exp4.jpeg",
   },
   {
    rname: "Udupi Shri Krishna Bhavan",
    location: "Address : Balepet Road, Chickpet, Bengaluru",
    price: "Approx Cost : Rs.150",
    dish: "Speciality : Ghee Dosa,Maddur Vada",
    image: "../assets/img/exp5.jpeg",
   },
],
};
}

else if (state == "Jammu and Kashmir")
{
     restaurant = {
        data:[
       {
            rname: "Kundan Da Dhaba",
            location: "Address : Shalamar, Prem Nagar, Old Heritage City, Jammu and Kashmir 180001",
            price: "Approx Cost : Rs.200",
            dish: "Speciality : Phulka and Curry",
            image: "../assets/img/exp2.1.jpeg",
       },
       {
        rname: "Vaishno Dhaba",
        location: "Address : City Centre Road, Near Sangam Cinema, Jammu and Kashmir 143001",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Lachedar Paratha and Dal Makhani",
        image: "../assets/img/exp2.2.jpeg",
       },
       {
        rname: "Pahalwan’s",
        location: "Address : Gandhi Nagar, Jammu, Jammu and Kashmir 180004",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Khaladi Kulcha, Chole Bature",
        image: "../assets/img/exp2.3.jpeg",
       },
       {
        rname: "ZAMINDARA DHABA",
        location: "Address : Raya Morh, Jakh, Bari Brahmana, Samba, Jammu and Kashmir 181133",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Butter Naan and Paneer Makhani",
        image: "../assets/img/exp2.4.jpeg",
       },
       {
        rname: "Jammu Darbar",
        location: "Address : Stadium Morh, Channi Himmat, Bye Pass, Jammu, Jammu and Kashmir 180015",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Kashmiri Pulav",
        image: "../assets/img/exp2.5.jpeg",
       },
    ],
    };
}

else if (state == "Telangana"){
     restaurant = {
        data:[
       {
            rname: "Hotel Shadab",
            location: "Address : High Court Road, Charminar, Ghansi Bazaar, Hyderabad",
            price: "Approx Cost : Rs.200",
            dish: "Speciality : Nihari, Payas, Biryani",
            image: "../assets/img/exp4.1.jpeg",
       },
       {
        rname: "Hotel Nayab",
        location: "Address : Nayapul Road, Nassir Complex, Chatta Bazar, Darulshifa, Hyderabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Paya, Khichdi, Keema",
        image: "../assets/img/exp4.2.jpeg",
       },
       {
        rname: "Cafe Niloufer",
        location: "Address : Redhills, Lakdikapul, Hyderabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Irani chai, Hyderabadi Biryani,Mutton Haleem ",
        image: "../assets/img/exp4.3.webp",
       },
       {
        rname: "ZAMINDARA DHABA",
        location: "Address : Raya Morh, Jakh, Bari Brahmana, Samba, Hyderabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Butter Naan and Paneer Makhani",
        image: "../assets/img/exp2.4.jpeg",
       },
       {
        rname: "Moti Mahal",
        location: "Address : Kalupur Rd, near Railway Station, Kapasia Bazar, Sakar Bazzar, Kalupur, Hyderabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Chicken Tangri and Biriyani",
        image: "../assets/img/exp3.2.jpeg",
       },
    ],
    };
}

else if (state == "Gujarat") {
     restaurant = {
        data:[
       {
            rname: "Chandravilas Restaurant",
            location: "Address : Gandhi Rd, near Ratan pol, Old City, Danapidth, Khadia, Ahmedabad",
            price: "Approx Cost : Rs.200",
            dish: "JSpeciality : alebi, Rasmalai",
            image: "../assets/img/exp3.1.jpeg",
       },
       {
        rname: "Moti Mahal",
        location: "Address : Kalupur Rd, near Railway Station, Kapasia Bazar, Sakar Bazzar, Kalupur, Ahmedabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Chicken Tangri and Biriyani",
        image: "../assets/img/exp3.2.jpeg",
       },
       {
        rname: "Raipur Bhajiya House",
        location: "Address : Opposite Radhe Mall, Khokhra Circle, Ahmedabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Bhajiyas and Jalebi",
        image: "../assets/img/exp3.3.jpeg",
       },
       {
        rname: "The Jungle Bhookh",
        location: "Address : Wall Street-1, 103/B,, Shahid Veer Kinariwala Marg, opp. Orient Club, Ellis Bridge, Ahmedabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Malai Kofta, Paneer Butter Masala",
        image: "../assets/img/exp3.4.jpeg",
       },
       {
        rname: "Agashiye",
        location: "Address : The House of Mangaldas Girdhardas, Opp. Sidi Saiyad Jali, Lal Darwaja,, Ahmedabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Farsan, Kadhi, Sweets",
        image: "../assets/img/exp3.5.jpeg",
       },
    ],
    };
}

else{
     restaurant = {
        data:[
       {
            rname: "Mahamaya",
            location: "Address : Matilal Nehru Road and, Ananda Ram Baruah Rd, Pan Bazaar, Guwahati, Assam 781001",
            price: "Approx Cost : Rs.200",
            dish: "Speciality : Paratha Sabji, Fish Thali",
            image: "../assets/img/exp5.1.jpeg",
       },
       {
        rname: "Reboti Chat House",
        location: "Address : Gopinath Bordoloi Rd, Pan Bazaar, Guwahati, Assam 781001",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Reboti Special Chowmein",
        image: "../assets/img/exp5.2.jpeg",
       },
       {
        rname: "Ashoka Restaurant",
        location: "Address : H B Road, Pan Bazaar, Guwahati - 781001 ",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Kalakand, Kheer Pitha, and Kata Nimkee",
        image: "../assets/img/exp5.4.jpeg",
       },
       {
        rname: "Lakhi Cabin",
        location: "Address : Hem Baruah Rd, Kamarpatty, Fancy Bazaar, Guwahati, Assam 781001",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Aloo-Matar Samosa, Masala Kachori",
        image: "../assets/img/exp5.3.jpeg",
       },
       {
        rname: "Hotel Nayab",
        location: "Address : Nayapul Road, Nassir Complex, Chatta Bazar, Darulshifa, Hyderabad",
        price: "Approx Cost : Rs.200",
        dish: "Speciality : Paya, Khichdi, Keema",
        image: "../assets/img/exp4.2.jpeg",
       },
    ],
    };
}

for(let i of restaurant.data){
    let card = document.createElement("div");
    card.classList.add("card");
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h4");
    name.classList.add("rest-name");
    name.innerText = i.rname.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h5");
    price.innerText = i.price;
    container.appendChild(price);

    let dish = document.createElement("h5");
    dish.innerText = i.dish;
    container.appendChild(dish);

    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);


    card.appendChild(container);
    document.getElementById("restaurant").appendChild(card);
}


document.getElementById("search").addEventListener("click",()   => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll("rest-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach( (element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }

            else{
                cards[index].classList.add("hide");
            }

        }
);
});

