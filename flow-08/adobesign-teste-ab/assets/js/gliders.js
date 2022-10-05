// BRANDS
new Glider(document.querySelector(".glider"), {
    slidesToScroll: 2,
    slidesToShow: 2,
    draggable: true,
    dots: ".dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            // screens greater than >= 1024px
            breakpoint: 650,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            // screens greater than >= 1024px
            breakpoint: 850,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
    ],
});

// VIDEOS
new Glider(document.querySelector(".glider-videos"), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
        prev: ".glider-prev-videos",
        next: ".glider-next-videos",
    },
    responsive: [
        {
            // screens greater than >= 1024px
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            // screens greater than >= 1024px
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
});
