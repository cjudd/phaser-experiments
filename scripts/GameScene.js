class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        this.type = 'gearhead'
        this.player
        this.speed = 16
        this.load.atlas(this.type, '../assets/sprites/gearhead.png', '../assets/sprites/gearhead.json');

    } //end preload

    create() {

        const {type} = this
        const {anims} = this

        anims.create({
            key: type + '-left',
            frames: anims.generateFrameNames(type, {
                prefix: type + '-walk-left-',
                suffix: '.png',
                start: 1,
                end: 9,
                zeroPad: 2
            }),
            frameRate: 6,
            repeat: -1
        });

        anims.create({
            key: type + '-right',
            frames: anims.generateFrameNames(type, {
                prefix: type + '-walk-right-',
                suffix: '.png',
                start: 1,
                end: 9,
                zeroPad: 2
            }),
            frameRate: 6,
            repeat: -1
        });

        anims.create({
            key: type + '-up',
            frames: anims.generateFrameNames(type, {
                prefix: type + '-walk-up-',
                suffix: '.png',
                start: 1,
                end: 9,
                zeroPad: 2
            }),
            frameRate: 6,
            repeat: -1
        });

        anims.create({
            key: type + '-down',
            frames: anims.generateFrameNames(type, {
                prefix: type + '-walk-down-',
                suffix: '.png',
                start: 1,
                end: 9,
                zeroPad: 2
            }),
            frameRate: 6,
            repeat: -1
        });

        anims.create({
            key: type + '-none',
            frames: anims.generateFrameNames(type, {
                prefix: type + '-walk-down-',
                suffix: '.png',
                start: 2,
                end: 2,
                zeroPad: 2
            }),
            frameRate: 0,
            repeat: -1
        });
        
        const ups = this.physics.add.group()
        ups.create(50, 50, type).setScale(0.25)
        ups.create(100, 50, type).setScale(0.5)
        ups.create(200, 50, type)
        ups.children.iterate((child) => {
            child.play(type + '-up', true)
        })

        const down = this.physics.add.group()
        down.create(100, 100, type).setScale(0.5)
        down.create(200, 100, type)
        down.children.iterate((child) => {
            child.play(type + '-down', true)
        })

        const left = this.physics.add.group()
        left.create(100, 150, type).setScale(0.5)
        left.create(200, 150, type)
        left.children.iterate((child) => {
            child.play(type + '-left', true)
        })

        const right = this.physics.add.group()
        right.create(100, 200, type).setScale(0.5)
        right.create(200, 200, type)
        right.children.iterate((child) => {
            child.play(type + '-right', true)
        })

    } //end create

    update() {
        const {anims} = this
        //scene.anims.play(this.type + '-up');
    } //end update

} //end gameScene