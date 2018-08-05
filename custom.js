//alert();
function showVal(value){
    //alert(value);
    document.getElementById("readout").value = value;
    // or more concisely
    var sys = require('sys')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("redshift -O"+value, puts);
    document.getElementById("start").value = value;
    document.getElementById("readout").value = value;
}

function reset(){
    //alert("reset");
    var sys = require('sys')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("redshift -x", puts);
    document.getElementById("start").value = 6500;
    document.getElementById("readout").value = "6500";
}
document.getElementById("start").value = 6500;
document.getElementById("readout").value = "6500";