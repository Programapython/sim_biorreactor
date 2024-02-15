const simulacion = document.querySelector('.simulacion');
const cubierta_simulacion = document.querySelector('.cubierta_simulacion');
const nombre_pag = document.querySelector('.nombre_pag')

var monitores = [];
var titulos = ["SISTEMA DE CONTROL DE VELOCIDAD","SISTEMA DE SUMINISTRO DE GAS",
                "SISTEMA DE CONTROL DE TEMPERATURA","MEDICION Y CONTROL DEL PH",
                "MEDICION Y CONTROL DEL OXIGENO DISUELTO","ESPUMA FORMADAD EN EL CULTIVO"]

for (var i = 1; i <= 6; i++){
    monitores.push(document.querySelector(`.monitor${i}`));
}

const biorreactor = document.querySelector('.biorreactor');
const contenedor = document.querySelector('.contenedor');
const contenedor2 = document.querySelector('.contenedor2');
const contenedor1 = document.querySelector('.contenedor1');
const liquido = document.querySelector('.liquido');
const chaquetas = document.querySelector('.chaquetas');
const sensor_ph = document.querySelector('.sensor_ph');
const sensor_temperatura = document.querySelector('.sensor_temperatura');
const sensor_o2 = document.querySelector('.sensor_o2');
const sensor_espuma = document.querySelector('.sensor_espuma');
const conducto_acido_base = document.querySelector('.conducto_acido_base');
const receptor_tuberias = document.querySelector('.receptor_tuberias');
const conducto_astiespumante = document.querySelector('.conducto_astiespumante');
const conducto_aire = document.querySelector('.conducto_aire');
const esparcidor = document.querySelector('.esparcidor');
const sistema_de_agitacion = document.querySelector('.sistema_de_agitacion');
const pala_central = document.querySelector('.pala_central');
// const pala1 = document.querySelector('.pala1');
// const pala2 = document.querySelector('.pala2');
const pala3 = document.querySelector('.pala3');
const cubierta_pala_central = document.querySelector('.cubierta_pala_central');
const motor = document.querySelector('.motor');
const rayas_motor = document.querySelector('.rayas_motor');
const filtro = document.querySelector('.filtro');
const tapa = document.querySelector('.tapa');
const tapa1 = document.querySelector('.tapa1');
const tapa2 = document.querySelector('.tapa2');
const aire = document.querySelector('.aire');
const agua = document.querySelector('.agua');
const recipientes = document.querySelector('.recipientes');
const acido = document.querySelector('.acido');
const base = document.querySelector('.base');
const antiespumante = document.querySelector('.antiespumante');
const rotometro = document.querySelector('.rotometro');
const indicador_rotometro = document.querySelector('.indicador_rotometro');
const b_simulacion = document.querySelector('.b_simulacion');


function env_vel(){
    var vel_i = parseFloat(document.getElementsByName('vel_i')[0].value);
    var vel_s = parseFloat(document.getElementsByName('vel_s')[0].value);
    var vel_a = parseFloat(document.getElementsByName('vel_a')[0].value);
    var vel_paletas = 60/vel_a;
    if (vel_a>=vel_i && vel_a<=vel_s && vel_a>=0 && vel_i>=0 && vel_s>=0){
        // pala1.style.animation =`rotar ${vel_paletas}s linear infinite`;
        // pala2.style.animation = `rotar ${vel_paletas}s linear infinite`;
        pala3.style.animation = `rotar ${vel_paletas}s linear infinite`;
    } else {
        alert("Algun valor ingresado es incorreto, ingrese valores válidos.");
    }
}

for (var i = 0; i < 6; i++){
    let monitor = monitores[i]; monitor.style.display = 'none';
}

sensor_ph.style.display = 'none';
sensor_temperatura.style.display = 'none';
sensor_o2.style.display = 'none';
sensor_espuma.style.display = 'none';
conducto_acido_base.style.display = 'none';
receptor_tuberias.style.display = 'none';
conducto_astiespumante.style.display = 'none';
conducto_aire.style.display = 'none';
esparcidor.style.display = 'none';


biorreactor.style.display = 'none';

aire.style.display = 'none';

recipientes.style.display = 'none';
antiespumante.style.display = 'none';

agua.style.display = 'none';

rotometro.style.display = 'none';

function iniciar_simulacion(){
    simulacion.removeChild(cubierta_simulacion);
    b_simulacion.style.display = 'none';

    monitores[0].style.display = '';
    biorreactor.style.display = '';
}

function ir_pagina(num, tipo){
    monitores[num-1].style.display = '';
    nombre_pag.innerHTML = titulos[num-1]
    if (tipo == "retroceso"){
        monitores[num].style.display = 'none';
    } else if (tipo == "avance"){
        monitores[num-2].style.display = 'none';
    }

    let elementos_2 = [esparcidor, conducto_aire,aire, rotometro]
    let elementos_3 = [sensor_temperatura,agua,receptor_tuberias]
    let elementos_4 = [sensor_ph, receptor_tuberias,conducto_acido_base, recipientes]
    let elementos_5 = [sensor_o2]
    let elementos_6 = [sensor_espuma,antiespumante,conducto_astiespumante]

    if (num == 1){
        for (var i = 0; i < 4; i++){elementos_2[i].style.display = 'none';}
    } 
    else if (num == 2){
        for (var i = 0; i < 4; i++){elementos_2[i].style.display = '';}
        for (var i = 0; i < 3; i++){elementos_3[i].style.display = 'none';}
    }
    else if (num == 3){
        for (var i = 0; i < 3; i++){elementos_3[i].style.display = '';}
        for (var i = 0; i < 4; i++){elementos_4[i].style.display = 'none';}
    }
    else if (num == 4){
        for (var i = 0; i < 4; i++){elementos_4[i].style.display = '';}
        for (var i = 0; i < 1; i++){elementos_5[i].style.display = 'none';}
    }
    else if (num == 5){
        for (var i = 0; i < 1; i++){elementos_5[i].style.display = '';}
        for (var i = 0; i < 3; i++){elementos_6[i].style.display = 'none';}
    }
    else if (num == 6){
        for (var i = 0; i < 3; i++){elementos_6[i].style.display = '';animacion_antiespuma();}
    }
}

function animacion_gas(){
    var vel_aire = parseFloat(document.getElementsByName('vel_aire')[0].value);
    
    var poy = 68-54*(vel_aire/400);
    indicador_rotometro.style.top=`${poy}px`;
    var ct=1;
    var ct2=1
    var n_gas=1;
    if (vel_aire>2){
        let gases = ()=>{
            if (ct<21){
                var a = document.querySelector(`.gas${ct}`);
                a.style.animation = `mov_gas${n_gas} ${vel_aire*2}s linear infinite`;
                console.log(n_gas);
                if (n_gas==12){n_gas}else{n_gas++;}
                ct++;
            } else{clearInterval(gases);}
        }
        let burbujas = ()=>{
            if (ct>10 && ct2<5){
                var a = document.querySelector(`.burbujas${ct2*3-2}${ct2*3-1}${ct2*3}`);
                a.style.animation = `burbugear ${vel_aire/2}s linear infinite`;
                console.log(`.burbujas${ct2*3-2}${ct2*3-1}${ct2*3}`);
                ct2++;
            } else{clearInterval(burbujas);}
        }
        setInterval(gases,parseInt(vel_aire)*200);
        setInterval(burbujas,parseInt(vel_aire)*200);
    }

}
function animacion_agua(){
    var t_deseada = parseFloat(document.getElementsByName('t_deseada')[0].value);
    document.getElementsByName('t_medida')[0].value=t_deseada

    var ct=1;
    setInterval(()=>{
        let estado = Math.random();
        if (estado < 0.5){
            document.getElementsByName('t_medida')[0].value=t_deseada-estado
            var a = document.querySelector(`.agua${ct}`);
            a.style.animation = `mov_aguac 10s linear infinite`;
            ct++;
            if (ct==31){ct=1;}
        } else if (estado > 0.5){
            document.getElementsByName('t_medida')[0].value=t_deseada+estado
            var a = document.querySelector(`.agua${ct}`);
            a.style.animation = `mov_aguaf 10s linear infinite`;
            ct++;
            if (ct==31){ct=1;}
        } else {
            console.log("el estado es correcto");
        }
    },1000)
}
function animacion_acido_base(){
    var ph_deseado = parseFloat(document.getElementsByName('ph_deseado')[0].value);
    document.getElementsByName('ph_medido')[0].value=5;
    var caso = 0;
    var estado_ac = 5;
    setInterval(()=>{
        if (caso==1){
            document.getElementsByName('ph_medido')[0].value=estado_ac.toFixed(3);
            ph_deseado = parseFloat(document.getElementsByName('ph_deseado')[0].value);
        }
        if (estado_ac>ph_deseado){
            estado_ac = estado_ac-0.05;
            var a = document.querySelector(`.acido1`);
            var b = document.querySelector(`.base2`);
            a.style.animation = `mov_acido 3s linear infinite`;
            b.style.animation = `none`;
            console.log("mayor");
        } else if (estado_ac<ph_deseado){
            estado_ac = estado_ac+0.05;
            var a = document.querySelector(`.acido1`);
            var b = document.querySelector(`.base2`);
            a.style.animation = `none`;
            b.style.animation = `mov_base 5s linear infinite`;
            console.log("menor");
        } else {
            var a = document.querySelector(`.acido1`);
            var b = document.querySelector(`.base2`);
            a.style.animation = `none`;
            b.style.animation = `none`;
            estado_ac = estado_ac-0.01;
            console.log("el estado es correcto");
        }
        caso=1;
    },4000)
}
function animacion_antiespuma(){
    setInterval(()=>{
        let estado = Math.random();
        document.querySelector(`.espuma`).style.background = "linear-gradient(transparent,rgba(152, 155, 153, 0.623))";
        var a = document.querySelector(`.antiespumante1`);
        if (estado>0.5){
            a.style.animation = `mov_antiespuma 3s linear infinite`;
            document.querySelector(`.espuma`).style.opacity = `${estado}`;
        } else if (estado<=0.5){
            a.style.animation = `none`;
            document.querySelector(`.espuma`).style.opacity = `${estado}`;
        }
    },3000)
}
function ver_oxigeno(){
    var o2_deseado = parseFloat(document.getElementsByName('o2_deseado')[0].value);
    document.getElementsByName('o2_medido')[0].value = o2_deseado;
    setInterval(()=>{
        let estado = Math.random();
        if (estado>0.5){
            document.getElementsByName('o2_medido')[0].value = o2_deseado+estado;
        } else if (estado<=0.5){
            document.getElementsByName('o2_medido')[0].value = o2_deseado-estado;
        }
    },2000)
}