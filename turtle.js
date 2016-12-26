function Turtle(context, maxx, maxy) {
    
    var len = 5;
    var angle = 0;
    var startX = maxx / 2;
    var startY = maxy / 2;
    var stack = [];
    
    this.setLen = function (lenght) {
        len = lenght;
    };
    
    this.getLen = function () {
        return len;
    };
    
    this.setAngle = function (ang) {
        angle = ang;
    };
    
    this.startUp = function () {
        startY = startY - 10;
    };
    
    this.startDown = function () {
        startY = startY + 10;
    };
    
    this.startLeft = function () {
        startX = startX - 10;
    };
    
    this.startRight = function () {
        startX = startX + 10;
    };
    
    state = {
        "x": startX, 
        "y": startY, 
        "originX": startX,
        "originY": startY,
        "angle": 0
    };
        
    fn = {
        "f": function () {
            let newState = {
                "x": state.x + (len * Math.cos(state.angle)),
                "y": state.y + (len * Math.sin(state.angle)),
                "originX": state.x,
                "originY": state.y,
                "angle" : state.angle
            };
            state = newState;
        },
        "F": function () {
            let newState = {
                "x": state.x + (len * Math.cos(state.angle)),
                "y": state.y + (len * Math.sin(state.angle)),
                "originX": state.x,
                "originY": state.y,
                "angle" : state.angle
            };
            context.beginPath();
            context.strokeStyle = "#000000";
            context.moveTo(newState.originX, newState.originY);
            context.lineTo(newState.x, newState.y);
            context.stroke();
            state = newState;
        },
        "+": function () {
            let newState = {
                "x": state.x,
                "y": state.y,
                "angle" : state.angle + angle
            };
            state = newState;
        },
        "-": function () {
            let newState = {
                "x": state.x,
                "y": state.y,
                "angle" : state.angle - angle
            };
            state = newState;
        },
        "\\": function () {
        }, 
        "M": function () {
            let newState = {
                "x": state.x + (len * Math.cos(state.angle)),
                "y": state.y + (len * Math.sin(state.angle)),
                "originX": state.x,
                "originY": state.y,
                "angle" : state.angle
            };
            context.beginPath();
            context.strokeStyle = "#00FF00";
            context.moveTo(newState.originX, newState.originY);
            context.lineTo(newState.x, newState.y);
            context.stroke();
            state = newState;
        },
        "S": function () {
            let newState = {
                "x": state.x + (len * Math.cos(state.angle)),
                "y": state.y + (len * Math.sin(state.angle)),
                "originX": state.x,
                "originY": state.y,
                "angle" : state.angle
            };
            context.beginPath();
            context.strokeStyle = "#D2691E";
            context.moveTo(newState.originX, newState.originY);
            context.lineTo(newState.x, newState.y);
            context.stroke();
            state = newState;
        },
        "[": function () {
            stack.push(state);
        },
        "]": function () {
            state = stack.pop();
        },
    };
    
    this.draw = function (sentence) {
        let splitted = sentence.split("");
        context.beginPath();
        this.init();
        splitted.forEach(function (v, i) {
            let func = fn[v];
            if (func != undefined) {
                func();    
            }
        });
    };
    
    this.init = function () {
        state = {
            "x": startX, 
            "y": startY, 
            "angle": 0
        };
        context.clearRect(0, 0, maxx, maxy);
        context.moveTo(startX, startY);
    };
    
    this.init();
}