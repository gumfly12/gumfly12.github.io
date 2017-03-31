This is the code for the deathtrooper who we temp change to panda.
     image.src = "img/panda.png";
        image.onload = function () {
            ctx.drawImage(image, 0, 0, 64, 64,
                          Math.floor(stfp.SCREEN_WIDTH * 0.2), 80, 64, 64)
this code is curently broken because the sprite bugs out and takes damage when unhit.
