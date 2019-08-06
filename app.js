//función para calcular la letra del DNI
function definirDNIentero()
{
    //Recuperar el número DNI del formulario
    var num = document.getElementById('numero').value;

    // validar número correcto PERO no ejecutar resto de función si no válido
    if (num<0||num>99999999)
    {
        alert("Numero fuera de rango [0;99999999]");
        return; //se podría hacer con un else y el resto dentro, pero return "" es más explicito
    }
    
    //determinar el numero definidio [0-22] por resto de modulo 23.
    var resta = num%23;

    //Buscar la letra que corresponda al numero [0-22] por su posición según el valor 
    
    /* Con Array es mucho más corto que con switch
    // MEJOR crear el Array de letras (fuera de la función para no recargar el Array cada vez que lanzamos la función)
    var letrasPosibles = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var letra= letrasPosibles[resta];
    */

    switch(resta)
    {
        case 0 :
            var letra = "T";
            break;
        case 1 :
            var letra = "R";
            break;
        case 2 :
            var letra = "W";
            break;
        case 3 :
            var letra = "A";
            break;
        case 4 :
            var letra = "G";
            break;
        case 5 :
            var letra = "M";
            break;
        case 6 :
            var letra = "Y";
            break;
        case 7 :
            var letra = "F";
            break;
        case 8 :
            var letra = "P";
            break;
        case 9 :
            var letra = "D";
            break;
        case 10 :
            var letra = "X";
            break;
        case 11 :
            var letra = "B";
            break;
        case 12 :
            var letra = "N";
            break;
        case 13 :
            var letra = "J";
            break;
        case 14 :
            var letra = "Z";
            break;
        case 15 :
            var letra = "S";
            break;
        case 16 :
            var letra = "Q";
            break;
        case 17 :
            var letra = "V";
            break;
        case 18 :
            var letra = "H";
            break;
        case 19 :
            var letra = "L";
            break;
        case 20 :
            var letra = "C";
            break;
        case 21 :
            var letra = "K";
            break;
        case 22 :
            var letra = "E";
            break;
    }

    // Verificar si el numero es de 8digits o completarlo con "0" a izquierda de lo contrario (hay metodo javascript para ello también)
    var numtext = num.toString();
    var digitsNum = numtext.length;
    
    while (digitsNum <8)
    {
        numtext="0"+numtext;
        digitsNum++;
    }

    // Concatenar la Letra obtenida al final de la serie númerica
    var dniEntero = numtext + letra;

    //exportar valor dni Completo al formulario
    document.getElementById('dniCompleto').value = dniEntero;
}