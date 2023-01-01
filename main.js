$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let z = document.forms["myForm"]["emailaddres"].value;
  let s = document.forms["myForm"]["Subject"].value;
  let d = document.forms["myForm"]["EstimatedBudget"].value;
  let f = document.forms["myForm"]["Message"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (z == "") {
    alert("emailaddres  must be filled out");
    return false;
  }
    else if (s == "") {
    alert("Subject  must be filled out");
    return false;
  }

  else if (d == "") {
    alert("Estimated Budget  must be filled out");
    return false; 
  }

  else if (f == "") {
    alert("Message  must be filled out");
    return false;
  }

  else if ( x&&z&&s&&d&&f== "") {
    alert("fill the all inputs");
    return false;
  }

}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}