param = "one";

function showParam(){
        console.log(" (1): " + param);
}
function getParam(){
        console.log(" (2): " + param);
        var param = "two";
        return param;
}


