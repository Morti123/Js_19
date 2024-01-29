/* let person = Object.create({},{
    name:{
        value:'Alex',
        enumerable: true,
        configurable: true,
        writable: true,
    },
    ageValue:{
        value: 20,
        enumerable: true,
        configurable: true,
        writable: true,
    },
    age:{
        get: function(){
            return this.ageValue
        },
        set: function(value){
           if(value>0){
            this.ageValue = value;
           }
        }
    }
}) */

/* Object.preventExtensions(person); */ /* запрет на добавление новых свойств */
/* Object.seal(person) */ /* ==  configurable  */
/* Object.freeze(person) */ /* полный запрет */

/* true or false */
/* Object.isExtensible() */ 
/* Object.isSealed() */
/* Object.isFrozen() */

/* function Person(nameV,ageV){
this.name = nameV;
this.age = ageV;
this.human = '';
this.h = "";
this.changeH = function(h){
 this.h = h;
}
}
let person1 = new Person('Костя', 15);
let person2 = new Person('Тимур', 16);
let person3 = new Person('Артём', 17); */

/* function Construct(width, height, color){
    this.block = document.createElement('div');
    this.width = width + 'px';
    this.height = height + 'px';
    this.background = color;

    this.block.style.width = this.width;
    this.block.style.height = this.height;
    this.block.style.background = this.background;

    document.body.append(this.block);
}
let obj = new Construct(100,100,'red'); */

function Drop(num){
    this.generateRandom = function(min,max){
        return Math.trunc(Math.random()*(max-min)+max);

    }
    this.el;
    this.timer;
    this.coordY = -50;
    this.speed = this.generateRandom(5,10);
    this.maxHeight = document.documentElement.clientHeight;
    this.createDrop = function(){
        let el = document.createElement('i');
        el.classList.add('bi');
        el.classList.add('bi-droplet-fill');
        el.id = `drop${num}`;
        el.style.left = `${this.generateRandom(0, document.documentElement.clientWidth)}px`
        el.style.fontSize = `${this.generateRandom(8,50)}px`
        document.body.append(el);
        this.el = el;
    }
    this.moverop = function(){
        this.el.style.top = `${this.coordY}px`
        this.coordY += this.speed;
        if(this.coordY > this.maxHeight){
            clearInterval(this.timer);
            this.el.remove();
        }
    }
    this.drDrop = function(){
        this.timer = setInterval(this.moveDrop.blind(this),50);
    }
    this.stopDrop = function(){
        clearInterval(this.timer);
    }
}
let rain = [];
let timer1, timer2;
/* document.addEventListener('click',stopRain);  */
setTimeout(()=> startRain(),2000);
function startRain(){
    let numDrop = 1;
    timer1 = setInterval(function(){
        rain.push(new Drop(numDrop));
        rain[numDrop-1].createDrop();
        rain[numDrop-1].drDrop();
        numDrop++;
    },50)
    dropInfo(document.getElementsByTagName('i'),document.getElementById('count'))
}
 /* function stopRain(){
    clearInterval(timer1);
    clearInterval(timer2);
    document.getElementById('count').innerHTML =0
    for(let el of rain);
    el.stopDrop();
    el.el.remove();
}  */
 function dropInfo(){
    timer2 = setInterval(function(){
        el2.inerHTML = el1.leght;
    },100)
 }
