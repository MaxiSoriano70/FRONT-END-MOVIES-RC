function AppPeliculas() {}

AppPeliculas.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = carruselList.querySelector('#track-movie');
    const carrusel = track.querySelectorAll('.card-movie-carrusel');

    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left.slice(0, -2)) * -1;

    if (btn.dataset.button === "button-prev") {
        this.prevAction(leftPosition, carruselWidth, track);
    } else {
        this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
};

AppPeliculas.prototype.prevAction = function (leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
};

AppPeliculas.prototype.nextAction = function (leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
};