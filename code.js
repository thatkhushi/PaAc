let c1 = 1;
function transitionimg(f) {
  if (c1 == 1 && f == 1) {
    document.getElementById("box-1").style.display = "none";
    document.getElementById("box-5").style.display = "block";
    c1++;
  } else if (c1 == 2 && f == 1) {
    document.getElementById("box-2").style.display = "none";
    document.getElementById("box-6").style.display = "block";
    c1++;
  } else if (c1 == 3 && f == 1) {
    document.getElementById("box-3").style.display = "none";
    document.getElementById("box-7").style.display = "block";
    c1++;
  } else if (c1 == 4 && f == 1) {
    document.getElementById("box-4").style.display = "none";
    document.getElementById("box-8").style.display = "block";
    c1++;
  } else if (c1 == 5 && f == 1) {
    document.getElementById("box-5").style.display = "none";
    document.getElementById("box-9").style.display = "block";
    c1++;
  } else if (c1 == 6 && f == 1) {
    document.getElementById("box-6").style.display = "none";
    document.getElementById("box-10").style.display = "block";
    c1++;
  } else if (c1 == 2 && f == 0) {
    document.getElementById("box-5").style.display = "none";
    document.getElementById("box-1").style.display = "block";
    c1--;
  } else if (c1 == 3 && f == 0) {
    document.getElementById("box-6").style.display = "none";
    document.getElementById("box-2").style.display = "block";
    c1--;
  } else if (c1 == 4 && f == 0) {
    document.getElementById("box-7").style.display = "none";
    document.getElementById("box-3").style.display = "block";
    c1--;
  } else if (c1 == 5 && f == 0) {
    document.getElementById("box-8").style.display = "none";
    document.getElementById("box-4").style.display = "block";
    c1--;
  } else if (c1 == 6 && f == 0) {
    document.getElementById("box-9").style.display = "none";
    document.getElementById("box-5").style.display = "block";
    c1--;
  } else if (c1 == 7 && f == 0) {
    document.getElementById("box-10").style.display = "none";
    document.getElementById("box-6").style.display = "block";
    c1--;
  }
}
let c = 1;
function zoomimg(k) {
  if (c == 1) {
    let x = document.getElementById(`box-${k}`);
    x.style.transform = "scale(1.5,1.5)";
    x.style.margin = "-26px 570px 10px 570px";
    x.style.width = "480px";
    x.style.height = "474px";

    for (let i = 1; i <= 10; i++) {
      if (i == k) continue;
      const element = document.getElementById(`box-${i}`);
      element.style.display = "none";

      c = 2;
    }
  } else if (c == 2) {
    let x = document.getElementById(`box-${k}`);
    x.style.transform = "scale(1,1)";

    x.style.margin = "10px";
    x.style.width = "390px";
    x.style.height = "387px";

    for (let i = c1; i <= c1+3; i++) {
      if (i == k) continue;
      const element = document.getElementById(`box-${i}`);
      element.style.display = "block";
      c = 1;
    }
  }
}
function hoverfun(k) {
  if (c == 1) {
    let hbox = document.getElementById(`box-${k}`);
    hbox.style.transform = "scale(1.1,1.1)";
  }
}
function leavehover(k) {
  if (c == 1) {
    let hbox = document.getElementById(`box-${k}`);
    hbox.style.transform = "scale(1,1)";
  }
}
