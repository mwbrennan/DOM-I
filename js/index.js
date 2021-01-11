const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent['cta']['img-src'])


let bodyImg = document.getElementById('middle-img');
bodyImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let navi = document.querySelectorAll("nav a");
const linksRealArray = Array.from(navi);
navi.forEach(a => {
  a.textContent = siteContent["nav"]["nav-item-" + (linksRealArray.indexOf(a) + 1)]
});

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

const more = document.createElement('a');
more.textContent = 'More';
more.href = '#';
document.querySelector('nav').appendChild(more);

///

let mainText = document.querySelector('h1');
mainText.innerHTML = siteContent['cta']['h1'];

let btn = document.querySelector('button');
btn.innerHTML = siteContent['cta']['button'];

///

let features = document.querySelectorAll('.top-content h4');
features[0].innerHTML = siteContent['main-content']['features-h4']

let featuresText = document.querySelectorAll('.top-content .text-content p');
featuresText[0].innerHTML = siteContent['main-content']['features-content']

let about = document.querySelectorAll('.top-content h4');
about[1].innerHTML = siteContent['main-content']['about-h4']

let aboutText = document.querySelectorAll('.top-content .text-content p');
aboutText[1].innerHTML = siteContent['main-content']['about-content']

let service = document.querySelectorAll('.bottom-content h4');
service[0].innerHTML = siteContent['main-content']['services-h4']

let serviceText = document.querySelectorAll('.bottom-content .text-content p');
serviceText[0].innerHTML = siteContent['main-content']['services-content'];

let product = document.querySelectorAll('.bottom-content h4');
product[1].innerHTML = siteContent['main-content']['product-h4']

let productText = document.querySelectorAll('.bottom-content .text-content p');
productText[1].innerHTML = siteContent['main-content']['product-content'];

let vision = document.querySelectorAll('.bottom-content h4');
vision[2].innerHTML = siteContent['main-content']['vision-h4']

let visionText = document.querySelectorAll('.bottom-content .text-content p');
visionText[2].innerHTML = siteContent['main-content']['vision-content'];

////

let contact_h4 = document.querySelector('.contact h4');
contact_h4.innerHTML = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('.contact p')
address[0].innerHTML = siteContent['contact']['address'];

let phone = document.querySelectorAll('.contact p')
phone[1].innerHTML = siteContent['contact']['phone'];

let mail = document.querySelectorAll('.contact p')
mail[2].innerHTML = siteContent['contact']['email'];


///

let copyBottom = document.querySelector('footer');
copyBottom.innerHTML = siteContent['footer']['copyright'];


let header = document.querySelectorAll('header a');

header.forEach(a => {
  a.setAttribute('style', 'color: green')
});

