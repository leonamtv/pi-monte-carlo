let canvas = document.getElementById("canvas");
let offset = 15;
let total = document.getElementById("numPontos").value
let insideNums = 0

const draw = () => {
    insideNums = 0
    let total = document.getElementById("numPontos").value
    let inside = document.getElementById("inside")
    let outside = document.getElementById("outside")
    let pi = document.getElementById("pi")
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        const point = (x, y, canvas, color) => {
            ctx.strokeStyle = color;
            canvas.beginPath();
            canvas.arc(x, y, 1, 0, 2 * Math.PI, true);
            canvas.stroke();
        }
    
        const normalize = ( p, m ) => {
            return {
                x : p.x / m.x * canvas.width,
                y : p.y / m.y * canvas.height,
            }
        }
    
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let radius = Math.min(centerX, centerY);
    
        let outerCircle = new Path2D();
    
        outerCircle.arc(centerX, centerY, Math.min(centerX, centerY), 0, 2 * Math.PI);
    
        ctx.strokeStyle = "#3794e6";
        ctx.lineWidth = 1;
        ctx.stroke(outerCircle);
    
        ctx.strokeStyle = "#5d37e6"
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.stroke();
    
        for ( let i = 0; i < total; i++ ) {
            let x = Math.random() * [ -1, 1 ][ Math.random() * 2 | 0];  
            let y = Math.random() * [ -1, 1 ][ Math.random() * 2 | 0];  
            let d = Math.sqrt( Math.pow(( x ), 2) + Math.pow(( y ), 2) )
            if ( d <= 1 ){
                insideNums = parseInt(insideNums) + 1
            } 
            np = normalize ({ x, y }, { x : 2, y : 2 })
            if ( d <= 1 )
                point(centerX + np.x + 1, centerY + np.y, ctx, "#e660c9")
            else
                point(centerX + np.x + 1, centerY + np.y, ctx, "#32a852")
        }

        inside.innerText = "Inside: " + insideNums.toString()
        outside.innerText = "Outside: " + ( total - insideNums ).toString()
        pi.innerText = "Pi Aprox.: " + (4 * insideNums / total ).toString()
    
    }
}

