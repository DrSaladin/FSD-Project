'use strict';

(function () {
  var serviceSubminuButtom = document.querySelector('.main-nav__item-link--services');
  var serviceSubmenuList = document.querySelector('.main-nav__expanded-menu--services');

  var agreementSubmenuButton = document.querySelector('.main-nav__item-link--agreements');
  var agreementSubmenuList = document.querySelector('.main-nav__expanded-menu--agreements');


  serviceSubminuButtom.addEventListener('click', function (evt) {
    evt.preventDefault();

    serviceSubmenuList.classList.toggle('main-nav__expanded-menu--services-closed');
  });

  agreementSubmenuButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    agreementSubmenuList.classList.toggle('main-nav__expanded-menu--agreements-closed');
  });

})();
