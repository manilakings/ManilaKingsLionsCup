/* =========================================
   NEW KINGS PLAYER CARDS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const playerCards =
        document.querySelectorAll(".player-card");


    playerCards.forEach(function (card) {


        /* =====================================
           MOBILE TAP
        ===================================== */

        card.addEventListener("click", function (event) {

            /*
             * Only use tap behavior on mobile.
             */

            if (window.innerWidth > 600) {
                return;
            }


            /*
             * Prevent the click from affecting
             * other elements.
             */

            event.stopPropagation();


            /*
             * Close every other player.
             */

            playerCards.forEach(function (otherCard) {

                if (otherCard !== card) {

                    otherCard.classList.remove(
                        "active"
                    );

                }

            });


            /*
             * Toggle this player.
             */

            card.classList.toggle("active");

        });

    });


    /* =========================================
       TAP OUTSIDE CARD
    ========================================= */

    document.addEventListener("click", function () {

        if (window.innerWidth > 600) {
            return;
        }

        playerCards.forEach(function (card) {

            card.classList.remove(
                "active"
            );

        });

    });


    /* =========================================
       RESIZE
    ========================================= */

    window.addEventListener("resize", function () {

        /*
         * Remove mobile active states when
         * switching back to desktop.
         */

        if (window.innerWidth > 600) {

            playerCards.forEach(function (card) {

                card.classList.remove(
                    "active"
                );

            });

        }

    });

});
/* =========================================
   PLAYER CARD INTERACTION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const playerCards =
        document.querySelectorAll(".player-card");


    playerCards.forEach(function (card) {

        card.addEventListener("click", function (e) {

            /*
             * Desktop:
             * Normal hover already handles stats.
             */

            if (window.innerWidth > 600) {
                return;
            }


            /*
             * Mobile:
             * Close every other card first.
             */

            playerCards.forEach(function (otherCard) {

                if (otherCard !== card) {
                    otherCard.classList.remove("show-stats");
                }

            });


            /*
             * Toggle this player's stats.
             */

            card.classList.toggle("show-stats");

        });

    });

});