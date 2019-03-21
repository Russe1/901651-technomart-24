    var letter = document.querySelector(".letter");
    var map = document.querySelector(".big-map");
    var buy = document.querySelectorAll(".button-buy");
    var mark = document.querySelectorAll(".button-pack")

    //модальное окно отправки письма
    if (letter) {
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

    }

    //модальное окно карты

    if (map) {
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
    }


    //модальное окно покупок

    if (buy) {
        var popupBuy = document.querySelector(".modal-buy");
        var closeBuy = popupBuy.querySelector("[name=modal-close]");
        var cart = document.querySelector(".cart")



        buy.forEach(function(element) {
            element.addEventListener("click", function(evt) {
                evt.preventDefault();
                popupBuy.classList.add("modal-show");
                cart.classList.add("red")


            });

        });

        closeBuy.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupBuy.classList.remove("modal-show");
        });

    }

    //добавоение товара в закладки

    if (mark) {
        var bookmark = document.querySelector(".bookmarks");

        mark.forEach(function(element) {
            element.addEventListener("click",function(evt) {
                evt.preventDefault();
                bookmark.classList.add("on")
            });
        });
    }
