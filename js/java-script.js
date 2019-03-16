	//модальное окно отправки письма
	    var letter = document.querySelector(".letter");
        var popupLetter = document.querySelector(".modal-letter");
        var closeLetter = popupLetter.querySelector("[name=modal-close]");


        letter.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupLetter.classList.add("modal-show");

        });
        closeLetter.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupLetter.classList.remove("modal-show");
        });

        //модальное окно карты

        var map = document.querySelector(".big-map");
        var popupMap = document.querySelector(".modal-map");
        var closeMap = popupMap.querySelector("[name=modal-close]");


        map.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupMap.classList.add("modal-show");

        });
        closeMap.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
        });



        //модальное окно покупок

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
