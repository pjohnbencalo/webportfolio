let cardFooterText = document.getElementsByClassName("card-footer-text"); 

const postedDate = moment([2023, 4, 17]);
const updatedPostedDate = postedDate.add(22, "hours").add(26, "minutes");

cardFooterText[0].innerText = `Last updated ${updatedPostedDate.fromNow()}`;
cardFooterText[1].innerText = `Last updated ${updatedPostedDate.fromNow()}`;
cardFooterText[2].innerText = `Last updated ${updatedPostedDate.fromNow()}`;