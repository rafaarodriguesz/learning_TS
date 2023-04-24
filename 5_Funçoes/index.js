"use strict";
// ao inves de colocar number ou boolean coloquei os apenas os valores que podem ser utilizados na review
function usersReview(review) {
    if (typeof review === "number") {
        if (review == 1) {
            console.log("não gostei");
        }
        else if (review === 2) {
            console.log("mais ou menos");
        }
        else if (review === 3) {
            console.log("bom!");
        }
        else if (review === 4) {
            console.log("muito bom!");
        }
        else if (review === 5) {
            console.log("excelente!");
        }
    }
    else {
        console.log("O usuario não colocou uma review");
    }
}
usersReview(1);
usersReview(2);
usersReview(3);
usersReview(4);
usersReview(5);
usersReview(false);
