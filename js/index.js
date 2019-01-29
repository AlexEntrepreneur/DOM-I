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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


(function loadNavLinkContent() {
  let headerNav = document.querySelector('header nav');
  let headerNavLinks = document.querySelectorAll('header nav a');

  function createNewLink(textContent, placement) {
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#');
    let newNavLink = newAnchor.cloneNode(true);
    newNavLink.textContent = textContent;
    newNavLink.setAttribute('style', 'color: darkseagreen;');
    switch (placement) {
      case 'append':
      headerNav.appendChild(newNavLink);
        break;
      case 'prepend':
      headerNav.prepend(newNavLink);
        break;
    }
    return newNavLink;
  }

  let newLink1 = createNewLink('Test Link 1', 'prepend');
  let newLink2 = createNewLink('Test Link 2', 'append');

  for (let i = 0; i < headerNavLinks.length; i++) {
    headerNavLinks[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
    headerNavLinks[i].setAttribute('style', 'color: darkseagreen;');
  }
})();

(function loadHeaderSectionContent() {
  let siteHeading = document.querySelector('.cta-text h1');
  let siteHeadingBtn = document.querySelector('.cta-text button');
  let siteHeadingImage = document.getElementById('cta-img');

  siteHeading.textContent = siteContent['cta']['h1'];
  siteHeadingBtn.textContent = siteContent['cta']['button'];
  siteHeadingImage.setAttribute('src', siteContent['cta']['img-src']);
})();

(function loadMiddleSectionContent() {
  let topContent = document.querySelectorAll('.top-content .text-content');
  let bottomContent = document.querySelectorAll('.bottom-content .text-content');
  let middleImage = document.getElementById('middle-img');

  function loadElementContent(element, selector, sectionNamesArray) {
    for (let i = 0; i < element.length; i++) {
      switch (selector) {
        case 'h4':
        element[i].querySelector(selector).textContent = siteContent['main-content'][`${sectionNamesArray[i]}-h4`];
          break;
        case 'p':
          element[i].querySelector(selector).textContent = siteContent['main-content'][`${sectionNamesArray[i]}-content`];
          break;
      }
    }
  }

  middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
  loadElementContent(bottomContent, 'h4', ['services', 'product', 'vision']);
  loadElementContent(bottomContent, 'p', ['services', 'product', 'vision']);
  loadElementContent(topContent, 'h4', ['features', 'about']);
  loadElementContent(topContent, 'p', ['features', 'about']);
})();

(function loadBottomSection() {
  let contactTitle = document.querySelector('.contact h4');
  let contactAddressLines = document.querySelectorAll('.contact p');
  let footerText = document.querySelector('footer p');

  contactTitle.textContent = siteContent['contact']['contact-h4'];
  contactAddressLines[0].textContent = siteContent['contact']['address'];
  contactAddressLines[1].textContent = siteContent['contact']['phone'];
  contactAddressLines[2].textContent = siteContent['contact']['email'];
  footerText.textContent = siteContent['footer']['copyright'];
})();
