let train = document.getElementById('train');
let animationFrameId;
let position = 0;
const speed = 2; // pixels per frame

function moveTrain() {
    position += speed;
    train.style.left = position + 'px';
    animationFrameId = requestAnimationFrame(moveTrain);
}

function startAnimation() {
    if (!animationFrameId) {
        moveTrain();
    }
}

function stopAnimation() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}