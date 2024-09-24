function fetchLanguages() {
    fetch('/api/languages')
        .then(response => response.json())
        .then(languages => {
            const container = document.getElementById('languageCards');
            languages.forEach(language => {
                const card = createCard(language);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching languages: ', error));
}

function createCard(language) {
    const card = document.createElement('article');
    card.innerHTML = `
        <img src="${language.logo_image}" alt="${language.name} logo">
        <h3>${language.name}</h3>
        <p>Created in ${language.created_in}</p>
        <p>Paradigm: ${language.paradigm}</p>
        <button class="outline" onclick="showDetails(${language.id})">More details</button>
    `;
    return card;
}

window.showDetails = function(id) {
    fetch(`/api/language/${id}`)
        .then(response => response.json())
        .then(language => {
            document.getElementById('modalTitle').innerHTML = `
<img src="${language.logo_image}" alt="${language.name}" class="modal-logo"> 
`;

            document.getElementById('modalContent').innerHTML = `
                <p><strong>Creator:</strong> ${language.creator}</p>
                <p><strong>Description:</strong> ${language.description}</p>
            `;
            openModal();
        });
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.showModal();
}

window.closeModal = function() {
    const modal = document.getElementById('modal');
    modal.close();
}

fetchLanguages();
