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
        console.log(vel_paletas)
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

    if (num == 1){;} 
    else if (num == 2){esparcidor.style.display = '';conducto_aire.style.display = '';
                        aire.style.display = ''; rotometro.style.display = '';}
    else if (num == 3){sensor_temperatura.style.display = ''; agua.style.display = '';
                        receptor_tuberias.style.display = '';}
    else if (num == 4){sensor_ph.style.display = ''; receptor_tuberias.style.display = '';
                        conducto_acido_base.style.display = ''; recipientes.style.display = '';}
    else if (num == 5){sensor_o2.style.display = '';}
    else if (num == 6){sensor_espuma.style.display = '';antiespumante.style.display = '';}

}

