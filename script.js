var quantidade = 0;
var palavra = {ram: 0, address_bus: 0, eprom: 0, data_bus: 0, rom: 0, registradores: 0, memoria_de_massa: 0, cpu: 0}
function validar(){
    ram = {r:ipt_r9.value.toUpperCase(), a:ipt_a9.value.toUpperCase(), m:ipt_m9.value.toUpperCase()};
    address_bus = {a: ipt_a9.value.toUpperCase(), d: ipt_d7.value.toUpperCase(), dd: ipt_dd7.value.toUpperCase(), r: ipt_r7.value.toUpperCase(),
                       e: ipt_e7.value.toUpperCase(), s: ipt_s7.value.toUpperCase(), ss: ipt_ss7.value.toUpperCase(), b: ipt_b7.value.toUpperCase(), u: ipt_u7.value.toUpperCase(),
                       sss: ipt_sss7.value.toUpperCase()};
    eprom = {e: ipt_e14.value.toUpperCase(), p: ipt_p14.value.toUpperCase(), r: ipt_r7.value.toUpperCase(), o: ipt_o14.value.toUpperCase(), m: ipt_m14.value.toUpperCase()};
    data_bus = {d:ipt_d12.value.toUpperCase(), a:ipt_a12.value.toUpperCase(), t:ipt_t12.value.toUpperCase(), aa:ipt_aa12.value.toUpperCase(), b:ipt_b12.value.toUpperCase(), u:ipt_u12.value.toUpperCase(), s:ipt_s12.value.toUpperCase()};
    rom = {r:ipt_r6.value.toUpperCase(), o:ipt_o6.value.toUpperCase(), m:ipt_m6.value.toUpperCase()};
    registradores = {r: ipt_r3.value.toUpperCase(), e: ipt_e3.value.toUpperCase(), g: ipt_g3.value.toUpperCase(), i: ipt_i3.value.toUpperCase(), s: ipt_s3.value.toUpperCase(), t: ipt_t3.value.toUpperCase(), rr:ipt_rr3.value.toUpperCase(), a:ipt_a3.value.toUpperCase(), d:ipt_d3.value.toUpperCase(), o:ipt_o3.value.toUpperCase(), rrr:ipt_rrr3.value.toUpperCase(), ee:ipt_ee3.value.toUpperCase(), ss:ipt_ss3.value.toUpperCase()};
    memoria_de_massa = {m:ipt_m4.value.toUpperCase(), e:ipt_e4.value.toUpperCase(), mm:ipt_mm4.value.toUpperCase(), o:ipt_o4.value.toUpperCase(), r:ipt_r4.value.toUpperCase(), i:ipt_i4.value.toUpperCase(), a:ipt_a4.value.toUpperCase(), d:ipt_d4.value.toUpperCase(), e:ipt_ee4.value.toUpperCase(), mmm:ipt_mmm4.value.toUpperCase(), aa:ipt_aa4.value.toUpperCase(), s:ipt_ss3.value.toUpperCase(), ss:ipt_s4.value.toUpperCase(), aaa:ipt_aaa4.value.toUpperCase()};
    cpu = {c: ipt_c1.value.toUpperCase(), p: ipt_p1.value.toUpperCase(), u: ipt_u1.value.toUpperCase()}

    if(ram.r == "R" && ram.a == "A" && ram.m == "M" && palavra.ram == 0){
        quantidade++;
        palavra.ram = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_9').style.transition = "0.8s";
        document.getElementById('dica_9').style.color = "#5eff00";
    }else if(palavra.ram == 1 && ram.r != "R" ||palavra.ram == 1 && ram.a != "A" || palavra.ram == 1 && ram.m != "M"){ 
        quantidade--;
        palavra.ram = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_9').style.color = "#fa0000";
    }if(address_bus.a == "A" && address_bus.d == "D" && address_bus.dd == "D" && address_bus.r == "R" && address_bus.e == "E" && address_bus.s == "S" && address_bus.ss == "S" && address_bus.b == "B" && address_bus.u == "U" && address_bus.sss == "S" && palavra.address_bus == 0){
        palavra.address_bus = 1;
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_7').style.transition = "0.8s";
        document.getElementById('dica_7').style.color = "#5eff00";
    }else if(palavra.address_bus == 1 && address_bus.a != "A" ||palavra.address_bus == 1 && address_bus.d != "D" ||palavra.address_bus == 1 && address_bus.dd != "D" ||palavra.address_bus == 1 && address_bus.r != "R" ||palavra.address_bus == 1 && address_bus.e != "E" ||palavra.address_bus == 1 && address_bus.s != "S" ||palavra.address_bus == 1 && address_bus.ss != "S" ||palavra.address_bus == 1 && address_bus.b != "B" ||palavra.address_bus == 1 && address_bus.u != "U" ||palavra.address_bus == 1 && address_bus.sss != "S"){ 
        palavra.address_bus = 0;
        quantidade--;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_7').style.color = "#fa0000";
    }if(eprom.e == "E" && eprom.p == "P" && eprom.r == "R" && eprom.o == "O" && eprom.m == "M" && palavra.eprom == 0){
        palavra.eprom = 1;
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_14').style.transition = "0.8s";
        document.getElementById('dica_14').style.color = "#5eff00";
    }else if(palavra.eprom == 1 && eprom.e != "E"||palavra.eprom == 1 && eprom.p != "P"||palavra.eprom == 1 && eprom.r != "R"||palavra.eprom == 1 && eprom.o != "O"||palavra.eprom == 1 && eprom.m != "M"){ 
        palavra.eprom = 0;
        quantidade --;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_14').style.color = "#fa0000";
    }if(data_bus.d == "D" && data_bus.a == "A" && data_bus.t == "T" && data_bus.aa == "A" && data_bus.b == "B" && data_bus.u == "U" && data_bus.s == "S" && palavra.data_bus == 0){
        palavra.data_bus = 1;
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_12').style.transition = "0.8s";
        document.getElementById('dica_12').style.color = "#5eff00";
    }else if(palavra.data_bus == 1 && data_bus.d != "D" || palavra.data_bus == 1 && data_bus.a != "A" || palavra.data_bus == 1 && data_bus.t != "T"||palavra.data_bus == 1 && data_bus.aa != "A"||palavra.data_bus == 1 && data_bus.b != "B"||palavra.data_bus == 1 && data_bus.u != "U"||palavra.data_bus == 1 && data_bus.s != "S"){ 
        palavra.data_bus = 0;
        quantidade --;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_12').style.color = "#fa0000";
    }if(rom.r == "R" && rom.o == "O" && rom.m == "M" && palavra.rom == 0){
        palavra.rom = 1;
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_6').style.transition = "0.8s";
        document.getElementById('dica_6').style.color = "#5eff00";
    }else if(palavra.rom == 1 && rom.r != "R" ||palavra.rom == 1 && rom.o != "O"||palavra.rom == 1 && rom.m != "M"){ 
        palavra.rom = 0;
        quantidade --;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_6').style.color = "#fa0000";
    }if(registradores.r == "R" && registradores.e == "E" && registradores.g == "G" && registradores.i == "I" && registradores.s == "S" && registradores.t == "T" && registradores.rr == "R" && registradores.a == "A" && registradores.d == "D" && registradores.o == "O" && registradores.rr == "R" && registradores.ee == "E" && registradores.ss == "S" && palavra.registradores == 0){
        palavra.registradores = 1;
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_3').style.transition = "0.8s";
        document.getElementById('dica_3').style.color = "#5eff00";
    }else if(palavra.registradores == 1 && registradores.r != "R" ||palavra.registradores == 1 && registradores.e != "E" ||palavra.registradores == 1 && registradores.g != "G" ||palavra.registradores == 1 && registradores.i != "I" ||palavra.registradores == 1 && registradores.s != "S" ||palavra.registradores == 1 && registradores.t != "T" ||palavra.registradores == 1 && registradores.rr != "R" ||palavra.registradores == 1 && registradores.a != "A" ||palavra.registradores == 1 && registradores.d != "D" ||palavra.registradores == 1 && registradores.o != "O" ||palavra.registradores == 1 && registradores.rr != "R" ||palavra.registradores == 1 && registradores.ee != "E" ||palavra.registradores == 1 && registradores.ss != "S"){ 
        palavra.registradores = 0;
        quantidade --;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_3').style.color = "#fa0000";
    }if(memoria_de_massa.m == "M" && memoria_de_massa.e == "E" && memoria_de_massa.mm == "M" && memoria_de_massa.o == "O" && memoria_de_massa.r == "R" && memoria_de_massa.i == "I" && memoria_de_massa.a == "A" && memoria_de_massa.d == "D" && memoria_de_massa.e == "E" && memoria_de_massa.mmm == "M" && memoria_de_massa.aa == "A" && memoria_de_massa.s == "S" && memoria_de_massa.ss == "S" && memoria_de_massa.aaa == "A" && palavra.memoria_de_massa == 0){
        palavra.memoria_de_massa = 1;
        quantidade++;
        console.log('sucesso')
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_4').style.transition = "0.8s";
        document.getElementById('dica_4').style.color = "#5eff00";
    }else if(palavra.memoria_de_massa == 1 && memoria_de_massa.m != "M" ||palavra.memoria_de_massa == 1 && memoria_de_massa.e != "E" ||palavra.memoria_de_massa == 1 && memoria_de_massa.mm != "M" ||palavra.memoria_de_massa == 1 && memoria_de_massa.o != "O" ||palavra.memoria_de_massa == 1 && memoria_de_massa.r != "R" ||palavra.memoria_de_massa == 1 && memoria_de_massa.i != "I" ||palavra.memoria_de_massa == 1 && memoria_de_massa.a != "A" ||palavra.memoria_de_massa == 1 && memoria_de_massa.d != "D" ||palavra.memoria_de_massa == 1 && memoria_de_massa.e != "E" ||palavra.memoria_de_massa == 1 && memoria_de_massa.mmm != "M" ||palavra.memoria_de_massa == 1 && memoria_de_massa.aa != "A" ||palavra.memoria_de_massa == 1 && memoria_de_massa.s != "S" ||palavra.memoria_de_massa == 1 && memoria_de_massa.ss != "S" ||palavra.memoria_de_massa == 1 && memoria_de_massa.aaa != "A"){ 
        palavra.memoria_de_massa = 0;
        quantidade --;
        console.log('erro')
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_4').style.color = "#fa0000";
    }if(cpu.u == "U" && cpu.p == "P" && cpu.u == "U" && palavra.cpu == 0){
        quantidade++;
        palavra.cpu = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_1').style.transition = "0.8s";
        document.getElementById('dica_1').style.color = "#5eff00";
    }else if(palavra.cpu == 1 && cpu.c != "C" || palavra.cpu == 1 && cpu.p != "P" || palavra.cpu == 1 && cpu.u != "U"){ 
        quantidade--;
        console.log('erro')
        palavra.cpu = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_1').style.color = "#fa0000";
    }
}