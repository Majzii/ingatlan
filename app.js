document.getElementById('propertyForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const title = document.getElementById('propertyTitle').value;
    const description = document.getElementById('propertyDescription').value;
    const image = document.getElementById('propertyImage').value;

    
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
    
    newCard.innerHTML = `
        <div class="card">
            <img src="${image}" class="card-img-top" alt="Új ingatlan">
            <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <p class="card-text">${description}</p>
                <a href="mailto:majben686@hengersor.hu?subject=Érdeklődés az ingatlan iránt&body=Érdeklődöm az adott ingatlan iránt." class="btn btn-primary">Érdekel</a>
            </div>
        </div>
    `;

   
    document.getElementById('propertyList').appendChild(newCard);

    
    var myModal = new bootstrap.Modal(document.getElementById('addPropertyModal'));
    myModal.hide();
    document.getElementById('propertyForm').reset();
});