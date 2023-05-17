let cardFooterText1 = document.getElementById("card-footer-text-1");
let cardFooterText2 = document.getElementById("card-footer-text-2");
let cardFooterText3 = document.getElementById("card-footer-text-3");

const postedDate = moment([2023, 4, 17]);
const updatedPostedDate = postedDate.add(22, "hours").add(26, "minutes");

cardFooterText1.innerText = `Last updated ${updatedPostedDate.fromNow()}`;
cardFooterText2.innerText = `Last updated ${updatedPostedDate.fromNow()}`;
cardFooterText3.innerText = `Last updated ${updatedPostedDate.fromNow()}`;