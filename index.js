// Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado ** 2;
}

console.groupEnd();

// Código del Tríangulo
console.group("Triángulos");

function heightByHeron(a, b, c) {
  s = (a + b + c) / 2;
  hC = (2 / c) * (s * (s - a) * (s - b) * (s - c)) ** (1 / 2);
  return hC;
}

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Diánmetro
function diametroCirculo(radio) {
  return radio * 2;
}

// Pi
const PI = Math.PI;

// Cicunferencia
function perimetroCirculo(radio) {
  const diamentro = diametroCirculo(radio);
  return diamentro * PI;
}

// Área
function areaCirculo(radio) {
  return radio ** 2 * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimentroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimentroTriangulo() {
  const input1 = document.getElementById("InputTriángulo1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("InputTriángulo2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("InputTriángulo3");
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputTriángulo1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("InputTriángulo2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("InputTriángulo3");
  const value3 = parseInt(input3.value);

  const altura = heightByHeron(value1, value2, value3);

  const area = areaTriangulo(value3, altura);
  alert(area);
}

function calcularPerimentroCirculo() {
  const input = document.getElementById("InputCírculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCírculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

// Función para calcular la altura de un isósceles

const isoscelesHeight = (a, b, c) => {
  const isIso =
    a * 3 === a + b + c ? false : a === b || b === c || c === a ? true : false;

  let legNh = [];
  a === b
    ? legNh.push(c, a)
    : b === c
    ? legNh.push(a, b)
    : c === a
    ? legNh.push(b, c)
    : false;

  const height = (legNh[1] ** 2 - legNh[0] ** 2 / 4) ** (1 / 2);

  const isi = `El triángulo es Isósceles? ${isIso}`;
  const ht = isIso == true ? `Su altura es: ${height}` : ":)";

  const listo = `${isi}
${ht}`;

  return listo;
};

function calcularIso() {
  const input1 = InputTriángulo1;
  const value1 = parseInt(input1.value);
  const input2 = InputTriángulo2;
  const value2 = parseInt(input2.value);
  const input3 = InputTriángulo3;
  const value3 = parseInt(input3.value);

  const altura = isoscelesHeight(value1, value2, value3);

  alert(altura);
}
