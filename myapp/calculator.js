const express = require("express");
const res =  require("express/lib/response");
const app = express();

const add = (n1, n2) =>{
    let result = n1 + n2;
    console.log(result);
    return result;
}

const sub = (n1, n2) =>{
    let result = n1 - n2;
    console.log(result);
    return result;
}

const multi = (n1, n2) =>{
    let result = n1 * n2;
    console.log(result);
    return result;
}

const div = (n1, n2) =>{
    let result = n1 / n2;
    console.log(result);
    return result;
}

app.get("/add", (req, res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if(isNaN(n1)){
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 incorrectly defined");
        }
        const result = add(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    }
    catch(error){
        console.error(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
});

app.get("/sub", (req, res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if(isNaN(n1)){
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 incorrectly defined");
        }
        const result = sub(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    }
    catch(error){
        console.error(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
});

app.get("/multi", (req, res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if(isNaN(n1)){
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 incorrectly defined");
        }
        const result = multi(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    }
    catch(error){
        console.error(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
});

app.get("/div", (req, res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if(isNaN(n1)){
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 incorrectly defined");
        }
        const result = div(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    }
    catch(error){
        console.error(error)
        res.status(500).json({statuscode: 500, msg: error.toString()})
    }
});

app.get("/", (req, res)=>{
    res.send("<h1> Calculator </h1>");
});

const PORT = 8080;
const HOST = '0.0.0.0';

var a = add(5, 8)
var b = sub(5, 8)
var c = multi(5, 8)
var d = div(5, 8)

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});