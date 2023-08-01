var os = require("os") 

var app = os();

app.get("/",(req,res)=>{
    console.log("cpu architecture:"+ os.arch());
})

const port = 3000;

app.listen(port,()=>{
    console.log("this sever is running at",port);
})