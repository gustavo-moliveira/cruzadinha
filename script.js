var quantidade = 0;
var palavra = {ram: 0, address_bus: 0, eprom: 0, data_bus: 0, rom: 0, registradores: 0, memoria_de_massa: 0, cpu: 0, i7:0, i5:0, quad_core:0, dual_core:0, flash:0, cs:0, dma:0, ula:0}
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
    i7 = {i: ipt_i4.value.toUpperCase(), sete: ipt_sete.value.toUpperCase()}
    i5 = {i: ipt_i3.value.toUpperCase(), cinco: ipt_cinco.value.toUpperCase()}
    quad_core = {q: ipt_q11.value.toUpperCase(), u:ipt_u7.value.toUpperCase(), a:ipt_a11.value.toUpperCase(), d:ipt_d11.value.toUpperCase(), c:ipt_c11.value.toUpperCase(), o:ipt_o11.value.toUpperCase(), r:ipt_r6.value.toUpperCase(), e:ipt_e11.value.toUpperCase()}
    dual_core = {d: ipt_d12.value.toUpperCase(),u: ipt_u15.value.toUpperCase(),a:ipt_a15.value.toUpperCase(),l:ipt_l15.value.toUpperCase(),c:ipt_c15.value.toUpperCase(),o:ipt_o15.value.toUpperCase(),r:ipt_r3.value.toUpperCase(),e:ipt_e15.value.toUpperCase()}
    flash = {f: ipt_f13.value.toUpperCase(),l:ipt_l13.value.toUpperCase(),a:ipt_a15.value.toUpperCase(),s:ipt_s13.value.toUpperCase(),h:ipt_h13.value.toUpperCase()}
    cs = {c: ipt_c1.value.toUpperCase(), s: ipt_s12.value.toUpperCase()}
    dma = {d: ipt_d5.value.toUpperCase(), m: ipt_m5.value.toUpperCase(), a: ipt_a3.value.toUpperCase()}
    ula = {u: ipt_u1.value.toUpperCase(), l:ipt_l2.value.toUpperCase(),a:ipt_a2.value.toUpperCase()}

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
    }if(registradores.r == "R" && registradores.e == "E" && registradores.g == "G" && registradores.i == "I" && registradores.s == "S" && registradores.t == "T" && registradores.rr == "R" && registradores.a == "A" && registradores.d == "D" && registradores.o == "O" && registradores.rrr == "R" && registradores.ee == "E" && registradores.ss == "S" && palavra.registradores == 0){
        palavra.registradores = 1; 
        quantidade++;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_3').style.transition = "0.8s";
        document.getElementById('dica_3').style.color = "#5eff00";
    }else if(palavra.registradores == 1 && registradores.r != "R" ||palavra.registradores == 1 && registradores.e != "E" ||palavra.registradores == 1 && registradores.g != "G" ||palavra.registradores == 1 && registradores.i != "I" ||palavra.registradores == 1 && registradores.s != "S" ||palavra.registradores == 1 && registradores.t != "T" ||palavra.registradores == 1 && registradores.rr != "R" ||palavra.registradores == 1 && registradores.a != "A" ||palavra.registradores == 1 && registradores.d != "D" ||palavra.registradores == 1 && registradores.o != "O" ||palavra.registradores == 1 && registradores.rrr != "R" ||palavra.registradores == 1 && registradores.ee != "E" ||palavra.registradores == 1 && registradores.ss != "S"){ 
        palavra.registradores = 0;
        quantidade --; 
        console.log('Testando123')
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
    }if(i7.i == "I" && i7.sete == "7" && palavra.i7 == 0){
        quantidade++;
        palavra.i7 = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_8').style.transition = "0.8s";
        document.getElementById('dica_8').style.color = "#5eff00";
    }else if(palavra.i7== 1 && i7.i != "I" || palavra.i7 == 1 && i7.sete != "7"){ 
        quantidade--;
        console.log('erro')
        palavra.i7 = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_8').style.color = "#fa0000";
    }if(i5.i == "I" && i5.cinco == "5" && palavra.i5 == 0){
        quantidade++;
        palavra.i5 = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_10').style.transition = "0.8s";
        document.getElementById('dica_10').style.color = "#5eff00";
    }else if(palavra.i5== 1 && i5.i != "I" || palavra.i5 == 1 && i5.cinco != "5"){ 
        quantidade--;
        console.log('erro')
        palavra.i5 = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_10').style.color = "#fa0000";
    }if(quad_core.q == "Q" && quad_core.u == "U" && quad_core.a == "A" && quad_core.d == "D" && quad_core.c == "C" && quad_core.o == "O" && quad_core.r == "R" && quad_core.e == "E" && palavra.quad_core == 0){
        quantidade++;
        palavra.quad_core = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_11').style.transition = "0.8s";
        document.getElementById('dica_11').style.color = "#5eff00";
    }else if(palavra.quad_core== 1 && quad_core.q != "Q" || palavra.quad_core == 1 && quad_core.u != "U" || palavra.quad_core == 1 && quad_core.a != "A" || palavra.quad_core== 1 && quad_core.d != "D" || palavra.quad_core== 1 && quad_core.c != "C" || palavra.quad_core== 1 && quad_core.o != "O" || palavra.quad_core== 1 && quad_core.r != "R" || palavra.quad_core== 1 && quad_core.e != "E"){ 
        quantidade--;
        console.log('erro');
        palavra.quad_core = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_11').style.color = "#fa0000";
    }if(dual_core.d == "D" && dual_core.u == "U" && dual_core.a == "A" && dual_core.l == "L" && dual_core.c == "C" && dual_core.o == "O" && dual_core.r == "R" && dual_core.e == "E" && palavra.dual_core == 0){
        quantidade++;
        palavra.dual_core = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_15').style.transition = "0.8s";
        document.getElementById('dica_15').style.color = "#5eff00";
    }else if(palavra.dual_core== 1 && dual_core.d != "D" || palavra.dual_core == 1 && dual_core.u != "U" || palavra.dual_core== 1 && dual_core.a != "A"||palavra.dual_core== 1 && dual_core.l != "L" || palavra.dual_core== 1 && dual_core.c != "C" || palavra.dual_core== 1 && dual_core.o != "O" || palavra.dual_core== 1 && dual_core.r != "R" || palavra.dual_core== 1 && dual_core.e != "E"){ 
        quantidade--;
        console.log('erro')
        palavra.dual_core = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_15').style.color = "#fa0000";
    }if(cs.c == "C" && cs.s == "S" && palavra.cs == 0){
        quantidade++;
        palavra.cs = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_16').style.transition = "0.8s";
        document.getElementById('dica_16').style.color = "#5eff00";
    }else if(palavra.cs== 1 && cs.c != "C" || palavra.cs == 1 && cs.s != "S"){ 
        quantidade--;
        console.log('erro')
        palavra.cs = 0; 
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_16').style.color = "#fa0000";
    }if(flash.f == "F" && flash.l == "L" && flash.a == "A" && flash.s == "S" && flash.h == "H" && palavra.flash == 0){
        quantidade++;
        palavra.flash = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_13').style.transition = "0.8s";
        document.getElementById('dica_13').style.color = "#5eff00";
    }else if(palavra.flash== 1 && flash.f != "F" ||palavra.flash== 1 && flash.l != "L" || palavra.flash == 1 && flash.a != "A" || palavra.flash== 1 && flash.s != "S"||palavra.flash== 1 && flash.h != "H"){ 
        quantidade--;
        console.log('erro')
        palavra.flash = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_13').style.color = "#fa0000";
    }if(dma.d == "D" && dma.m == "M" && dma.a == "A" && palavra.dma == 0){
        quantidade++;
        palavra.dma = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_5').style.transition = "0.8s";
        document.getElementById('dica_5').style.color = "#5eff00";
    }else if(palavra.dma == 1 && dma.d != "D" || palavra.dma == 1 && dma.m != "M"|| palavra.dma == 1 && dma.a != "A"){ 
        quantidade--;
        console.log('erro')
        palavra.dma = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_5').style.color = "#fa0000";
    }if(ula.u == "U" && ula.l == "L" && ula.a == "A" && palavra.ula == 0){
        quantidade++;
        palavra.ula = 1;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_2').style.transition = "0.8s";
        document.getElementById('dica_2').style.color = "#5eff00";
    }else if(palavra.ula == 1 && ula.u != "U" || palavra.ula == 1 && ula.l != "L"|| palavra.ula == 1 && ula.a != "A"){ 
        quantidade--;
        console.log('erro')
        palavra.ula = 0;
        span_quantidade.innerHTML = quantidade;
        document.getElementById('dica_2').style.color = "#fa0000";
    }if(quantidade == 16){
        alert('Parabéns! Você completou todas as palavras.')
    }
}