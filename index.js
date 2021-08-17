const selectFixed = document.querySelectorAll("select.select_fixed");
const selectFixed2 = document.querySelectorAll("select.select_fixed2");

for (select of selectFixed) {
  for (let i = 26; i >= -26; i -= 0.25) {
    let opt = document.createElement("option");
    let strOpt = i.toFixed(2);
    opt.value = strOpt;
    opt.innerHTML = strOpt;

    if (i == 0) {
      opt.defaultSelected = true;
    }
    select.appendChild(opt);
  }
}

for (select of selectFixed2) {
  for (let i = 26; i >= 0; i -= 0.25) {
    let opt = document.createElement("option");
    let strOpt = i.toFixed(2);
    opt.value = strOpt;
    opt.innerHTML = strOpt;

    if (i == 0) {
      opt.defaultSelected = true;
    }
    select.appendChild(opt);
  }
}

sphereN.onchange = () => {
  let floatSphere = parseFloat(sphereN.value);
  let floatCylinder = parseFloat(cylinderN.value);
  sphereP.value = (floatSphere - floatCylinder).toFixed(2);
  sphere1.value = sphereN.value;
  sphere2.value = sphereP.value;
};

cylinderN.onchange = () => {
  let floatSphere = parseFloat(sphereN.value);
  let floatCylinder = parseFloat(cylinderN.value);
  sphereP.value = (floatSphere - floatCylinder).toFixed(2);
  cylinderP.value = cylinderN.value;
  sphere1.value = sphereN.value;
  sphere2.value = sphereP.value;
};

sphereP.onchange = () => {
  let floatSphere = parseFloat(sphereP.value);
  let floatCylinder = parseFloat(cylinderP.value);
  sphereN.value = (floatSphere + floatCylinder).toFixed(2);
  sphere1.value = sphereN.value;
  sphere2.value = sphereP.value;
};

cylinderP.onchange = () => {
  let floatSphere = parseFloat(sphereP.value);
  let floatCylinder = parseFloat(cylinderP.value);
  sphereN.value = (floatSphere + floatCylinder).toFixed(2);
  cylinderN.value = cylinderP.value;
  sphere1.value = sphereN.value;
  sphere2.value = sphereP.value;
};

axisN.onchange = () => {
  let intAxisN = parseInt(axisN.value);

  if (intAxisN > 0 && intAxisN <= 180) {
    if (intAxisN <= 90) {
      axisP.value = intAxisN + 90;
    } else {
      axisP.value = intAxisN - 90;
    }
  } else {
    axisN.value = 0;
    axisP.value = 0;
  }

  axis1.value = axisP.value;
  axis2.value = axisN.value;
};

axisP.onchange = () => {
  let intAxisP = parseInt(axisP.value);

  if (intAxisP > 0 && intAxisP <= 180) {
    if (intAxisP <= 90) {
      axisN.value = intAxisP + 90;
    } else {
      axisN.value = intAxisP - 90;
    }
  } else {
    axisN.value = 0;
    axisP.value = 0;
  }

  axis1.value = axisP.value;
  axis2.value = axisN.value;
};

sphere1.onchange = () => {
  let floatSphere1 = parseFloat(sphere1.value);
  let floatSphere2 = parseFloat(sphere2.value);
  cylinderN.value = (floatSphere1 - floatSphere2).toFixed(2);
  cylinderP.value = cylinderN.value;
  sphereN.value = sphere1.value;
};

sphere2.onchange = () => {
  let floatSphere1 = parseFloat(sphere1.value);
  let floatSphere2 = parseFloat(sphere2.value);
  cylinderN.value = (floatSphere1 - floatSphere2).toFixed(2);
  cylinderP.value = cylinderN.value;
  sphereP.value = sphere2.value;
};

axis1.onchange = () => {
  let intAxis1 = parseInt(axis1.value);

  if (intAxis1 > 0 && intAxis1 <= 180) {
    if (intAxis1 <= 90) {
      axis2.value = intAxis1 + 90;
    } else {
      axis2.value = intAxis1 - 90;
    }
  } else {
    axis1.value = 0;
    axis2.value = 0;
  }

  axisN.value = axis2.value;
  axisP.value = axis1.value;
};

axis2.onchange = () => {
  let intAxis2 = parseInt(axis2.value);

  if (intAxis2 > 0 && intAxis2 <= 180) {
    if (intAxis2 <= 90) {
      axis1.value = intAxis2 + 90;
    } else {
      axis1.value = intAxis2 - 90;
    }
  } else {
    axis1.value = 0;
    axis2.value = 0;
  }

  axisP.value = axis1.value;
  axisN.value = axis2.value;
};
