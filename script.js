function validar(){
    var ram = {r:ipt_r9.value.toUpperCase(), a:ipt_a9.value.toUpperCase(), m:ipt_m9.value.toUpperCase()};

    if(ram.r == "R" && ram.a == "A" && ram.m == "M"){
        document.getElementById('dica_9').style.transition = "0.8s";
        document.getElementById('dica_9').style.color = "#5eff00";
    }else{
        document.getElementById('dica_9').style.color = "#fa0000";
    }
}