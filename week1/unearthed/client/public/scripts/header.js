const header = document.querySelecter('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerContainer.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = "/logo.png";

const headerTitle = document.createElement('h1');
headerTitle.textContent = "UnEarthed";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.className- = "header-right";

