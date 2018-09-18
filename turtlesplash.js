var app = new PIXI.Application({
    width: window.outerWidth,
    height: window.outerHeight
});

app.renderer.backgroundColor = 0xffffff;

document.body.appendChild(app.view);

PIXI.loader
    .load(setup);

function setup() {

    var particleContainer = new PIXI.Container();

    var splash = function (e) {

        var x = e.clientX;
        var y = e.clientY;

        var emitter = new PIXI.particles.Emitter(particleContainer, "turtle.png", {

            scale: {
                list: [
                    {
                        value: 0.8,
                        time: 0
				},
                    {
                        value: 0.1,
                        time: 1
				}
			],
                isStepped: false
            },
            speed: {
                list: [
                    {
                        value: 200,
                        time: 0
				},
                    {
                        value: 100,
                        time: 1
				}
			],
                isStepped: false
            },
            startRotation: {
                min: 0,
                max: 360
            },
            lifetime: {
                min: 1,
                max: 1
            },
            rotationSpeed: {
                min: 0,
                max: 500
            },
            frequency: 0.01,
            particlesPerWave: 1,
            emitterLifetime: 0.31,
            maxParticles: 10,
            pos: {
                x: x,
                y: y
            },
            autoUpdate: true
        });

    };

    app.stage.addChild(particleContainer);

    document.body.addEventListener("mouseup", splash, false);
    document.body.addEventListener("touchend", splash, false);

}
