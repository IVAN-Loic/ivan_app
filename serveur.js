const exress= require("express");
const path= require('path');

const app = express();

app.use(express.static(__dirname + '/dist/workshop-1'));

app.get('/*', function(req,res){
    res.sendFile(path.json(__dirname+'/dist/workshop-1/index.html'));
})

app.listen(process.env.PORT);