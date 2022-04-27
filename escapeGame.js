const canvas =  document.getElementById('myCanvas');
const context = canvas.getContext('2d');


// brick 정보 
const brickWidth = 59;      // 가로크기
const brickHeight = 59;     // 세로크기
const brickY = 10;     // 세로
const brickX = 10;     // 가로
let bricks = [];    

// Brick의 구조 잡아주기 클래스로 만들면 중복되는 코드를 조금더 간편하게 쓸수있음
// 벽돌들을 그릴때 x, y값 그러니까 left와 top의 값으로 위치를 확인할것이다.
class Brick {
    constructor(left, top, color) {
        this.left = left;
        this.top = top;
        this.color = color;
    }
    draw() {
        context.rect(this.left, this.top, brickWidth, brickHeight);
        context.fillStyle = this.color;
        context.fill();
    }
}

// 이중배열로 Y라는 배열에 X 배열을 넣어서 10 * 10 의 이중배열을 만든다.
// 가로부터 찍겠다는 식이다 Y값이 0일때 X값을 증가해서 0.0, 0.1, 0.2 ... 뭐 이런식으로
function setBricks() {
    for(let i = 0; i < brickY; i++){
        bricks[i] = [];
        for(let j = 0; j < brickX; j++) {
            bricks[i][j]= new Brick (
                j * (brickWidth+1),     
                i * (brickHeight + 1),
                'gray' 
                )
            };
        }
    }

function drawBricks() {
    for(let i = 0; i < brickY; i++) {
        for(let j = 0; j < brickX; j++) {
            context.beginPath();
            bricks[i][j].draw();        // class를 쓰는 이유 기능적인것들을 그냥 가져올수있다!!
            context.closePath();
        }
    }
}

function draw() {
    context.beginPath();
    drawBricks();
    context.closePath();
}


setBricks();
setInterval(draw, 10)