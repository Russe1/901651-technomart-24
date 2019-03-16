//модальное окно покупок для каталога

        var buy = document.querySelectorAll(".button-buy");
        var Buy = console.log(buy);


        var popupBuy = document.querySelector(".modal-buy");
        var closeBuy = popupBuy.querySelector("[name=modal-close]");

        
        
        buy.forEach(function(element) {
            element.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupBuy.classList.add("modal-show");

        });

        });

        closeBuy.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupBuy.classList.remove("modal-show");
        });
