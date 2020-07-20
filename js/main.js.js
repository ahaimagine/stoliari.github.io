$(document).ready(function(){

});

$(window).on("scroll" , function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('a').addClass('black');
        $('navbar-brand').addClass('black');
        $('.navbar-light .navbar-toggler').addClass('black');
    }

    else {
        $('nav').removeClass('black');
        $('a').removeClass('black');
        $('navbar-brand').removeClass('black');
        $('.navbar-light .navbar-toggler').removeClass('black');
    }
})


(function() {
    const formEl = document.querySelector("#contactForm");
    formEl.addEventListener("submit", function(event) {
        event.preventDefault();

        const body = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }

        fetch("https://stoliari-node.herokuapp.com/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"  
            },
            body: JSON.stringify(body)
        }).then(r => r.text()).then(response => {
            // TODO add alert about successful submit 
            console.log(response, "from server")
        });
    });
})();