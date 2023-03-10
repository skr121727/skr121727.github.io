(function () {
    const sarees = [
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/1-1.jpg", "price": "1050" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/1-2.jpg", "price": "1050" },
        { "name": "Linen Cotton", "desc": "Green and Jerry Border", "iurl": "img/1-3.jpg", "price": "1050" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/1-4.jpg", "price": "1050" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/2-1.jpg", "price": "1590" },
        { "name": "Chappa Silk", "desc": "Green and Jerry Border", "iurl": "img/2-2.jpg", "price": "1590" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/3-1.jpg", "price": "650" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/3-2.jpg", "price": "650" },
        { "name": "Digital Print", "desc": "Green and Jerry Border", "iurl": "img/3-3.jpg", "price": "650" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/3-4.jpg", "price": "650" },
        { "name": "Organja Butta", "desc": "Green and Jerry Border", "iurl": "img/3-5.jpg", "price": "650" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/3-6.jpg", "price": "650" },
        { "name": "Tussar Embose", "desc": "Green and Jerry Border", "iurl": "img/4-1.jpg", "price": "350" },
        { "name": "Tussar Digital", "desc": "Green and Jerry Border", "iurl": "img/5-1.jpg", "price": "750" },
        { "name": "Tussar Digital", "desc": "Green and Jerry Border", "iurl": "img/5-2.jpg", "price": "750" },
        { "name": "Tussar Digital", "desc": "Green and Jerry Border", "iurl": "img/5-3.jpg", "price": "750" },
        { "name": "Softy Silk", "desc": "Green and Jerry Border", "iurl": "img/6-1.jpg", "price": "850" },
        { "name": "Softy Silk", "desc": "Green and Jerry Border", "iurl": "img/6-2.jpg", "price": "850" }
    ];

    setTimeout(() => {
        for (let item of sarees) {
            let _html = `            
            <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gallery-item h-100">
              <img src="${item.iurl}" class="img-fluid" alt="">
              <div class="gallery-links d-flex align-items-center justify-content-center">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="card-text" data-price="${item.price}">&#8360;&nbsp;${item.price}</p>
                    <p>
                    <a href="${item.iurl}" title="${item.name}" class="glightbox preview-link">
                     <i class="bi bi-arrows-angle-expand"></i>
                    </a>
                    </p>
                </div>
              </div>
            </div>
          </div><!-- End Gallery Item -->
            
            `;
            document.querySelector("#gallery .row").insertAdjacentHTML('beforeend', _html);
        }
    });

    

})();



