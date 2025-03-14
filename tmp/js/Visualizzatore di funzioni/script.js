google.charts.load('current', { packages: ['corechart', 'line'] });

function drawChart(dati) {
  var data = google.visualization.arrayToDataTable(dati);

  var options = {
    curveType: 'function',
    legend: { position: 'none' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('pianoCartesiano'));

  chart.draw(data, options);
}

function dati() {
  const scelta = document.getElementById('funzione').value;
  const datiDiv = document.getElementById('dati');
  
  datiDiv.innerHTML = '';

  if (scelta === 'retta') {
    datiDiv.innerHTML = `
      <h3>Funzione Retta</h3>
      <p>Equazione generale della retta: y = mx + q</p>
      <label for="m">Coefficiente angolare (m):</label>
      <input type="number" id="m" name="m" step="any"><br>
      <label for="q">Intercetta (q):</label>
      <input type="number" id="q" name="q" step="any"><br>
      <button onclick="retta()">invia</button>
    `;
  }
  else if (scelta === 'parabola') {
    datiDiv.innerHTML = `
      <h3>Funzione Parabola</h3>
      <p>Equazione generale della parabola: y = ax^2 + bx + c</p>
      <label for="a">Coefficiente a:</label>
      <input type="number" id="a" name="a" step="any"><br>
      <label for="b">Coefficiente b:</label>
      <input type="number" id="b" name="b" step="any"><br>
      <label for="c">Coefficiente c:</label>
      <input type="number" id="c" name="c" step="any"><br>
      <button onclick="parabola()">invio</button>
    `;
  } 
}

function retta() {
  // y = mx + q
  let punti = [['x', 'y']];
  let m = parseFloat(document.getElementById("m").value);
  let q = parseFloat(document.getElementById("q").value);

  // Generate a few more points for the line (e.g., -10 to 10 for x values)
  for (let x = -10; x <= 10; x++) {
    let y = m * x + q;
    punti.push([x, y]);
  }

  drawChart(punti);
}

function parabola(){
    //y = ax^2 + bx + c
    let punti = [['x', 'y']];
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    for (let x = -10; x <= 10; x++) {
        let y = a*Math.pow(x,2) + b * x +c;
        punti.push([x, y]);
    }

    drawChart(punti);
}