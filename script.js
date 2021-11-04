var quantidade = 0;
function validar(){
    ram = {r:ipt_r9.value.toUpperCase(), a:ipt_a9.value.toUpperCase(), m:ipt_m9.value.toUpperCase()};
    address_bus = {a: ipt_a9.value.toUpperCase(), d: ipt_d7.value.toUpperCase(), dd: ipt_dd7.value.toUpperCase(), r: ipt_r7.value.toUpperCase(),
                       e: ipt_e7.value.toUpperCase(), s: ipt_s7.value.toUpperCase(), ss: ipt_ss7.value.toUpperCase(), b: ipt_b7.value.toUpperCase(), u: ipt_u7.value.toUpperCase(),
                       sss: ipt_sss7.value.toUpperCase()};
    eprom = {e: ipt_e14.value.toUpperCase(), p: ipt_p14.value.toUpperCase(), r: ipt_r7.value.toUpperCase(), o: ipt_o14.value.toUpperCase(), m: ipt_m14.value.toUpperCase()};

    if(ram.r == "R" && ram.a == "A" && ram.m == "M"){
        quantidade++;
        span_quantidade.innerHTML = quantidade
        document.getElementById('dica_9').style.transition = "0.8s";
        document.getElementById('dica_9').style.color = "#5eff00";
    }else{
        if(quantidade == 0){
            quantidade = 0;
        }else if(quantidade!=0){
            quantidade --;
        }
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_9').style.color = "#fa0000";
    }
    if(address_bus.a == "A" && address_bus.d == "D" && address_bus.dd == "D" && address_bus.r == "R" && address_bus.e == "E" && address_bus.s == "S" && address_bus.ss == "S"
    && address_bus.b == "B" && address_bus.u == "U" && address_bus.sss == "S"){
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_7').style.transition = "0.8s";
        document.getElementById('dica_7').style.color = "#5eff00";
    }else{
        if(quantidade == 0){
            quantidade = 0;
        }else if(quantidade>1){
            quantidade --;
        }
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_7').style.color = "#fa0000";
    }
    if(eprom.e == "E" && eprom.p == "P" && eprom.r == "R" && eprom.o == "O" && eprom.m == "M"){
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_14').style.transition = "0.8s";
        document.getElementById('dica_14').style.color = "#5eff00";
    }else{
        if(quantidade == 0){
            quantidade = 0;
        }else if(quantidade>1){
            quantidade --;
        }
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_14').style.color = "#fa0000";
    }
}