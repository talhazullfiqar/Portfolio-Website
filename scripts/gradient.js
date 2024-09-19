function gradient() {
    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
        moveX(blur, 1);
        moveY(blur, -1);
        rotate(blur, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, {
            rotation: random(-30, 150)(direction),
            ease: "sine.inOut",
            duration: random(5, 12)(),
            onComplete: rotate,
            onCompleteParams: [target, direction * -1],
        });
    }

    function moveX(target, direction) {
        gsap.to(target, {
            x: random(-400, 400)(direction),
            ease: "sine.inOut",
            duration: random(20, 40)(),
            onComplete: moveX,
            onCompleteParams: [target, direction * -1],
        });
    }

    function moveY(target, direction) {
        gsap.to(target, {
            y: random(-200, 200)(direction),
            ease: "sine.inOut",
            duration: random(20, 40)(),
            onComplete: moveY,
            onCompleteParams: [target, direction * -1],
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
   
}

export default gradient;