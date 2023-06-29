function convert() {
    var valueInput = document.getElementById("value");
    var resultInput = document.getElementById("result");
    var unitFromSelect = document.getElementById("unitFrom");
    var unitToSelect = document.getElementById("unitTo");
  
    var value = parseFloat(valueInput.value);
    var unitFrom = unitFromSelect.value;
    var unitTo = unitToSelect.value;
    var result;
  
    if (unitFrom === unitTo) {
      result = value;
    } else if (unitFrom === "m") {
      if (unitTo === "ft") {
        result = value * 3.28084;
      } else if (unitTo === "in") {
        result = value * 39.3701;
      } else if (unitTo === "cm") {
        result = value * 100;
      } else if (unitTo === "yd") {
        result = value * 1.09361;
      } else if (unitTo === "km") {
        result = value * 0.001;
      }
    } else if (unitFrom === "ft") {
      if (unitTo === "m") {
        result = value * 0.3048;
      } else if (unitTo === "in") {
        result = value * 12;
      } else if (unitTo === "cm") {
        result = value * 30.48;
      } else if (unitTo === "yd") {
        result = value * 0.333333;
      } else if (unitTo === "km") {
        result = value * 0.0003048;
      }
    } else if (unitFrom === "in") {
      if (unitTo === "m") {
        result = value * 0.0254;
      } else if (unitTo === "ft") {
        result = value * 0.0833333;
      } else if (unitTo === "cm") {
        result = value * 2.54;
      } else if (unitTo === "yd") {
        result = value * 0.0277778;
      } else if (unitTo === "km") {
        result = value * 0.0000254;
      }
    } else if (unitFrom === "cm") {
      if (unitTo === "m") {
        result = value * 0.01;
      } else if (unitTo === "ft") {
        result = value * 0.0328084;
      } else if (unitTo === "in") {
        result = value * 0.393701;
      } else if (unitTo === "yd") {
        result = value * 0.0109361;
      } else if (unitTo === "km") {
        result = value * 0.00001;
      }
    } else if (unitFrom === "yd") {
      if (unitTo === "m") {
        result = value * 0.9144;
      } else if (unitTo === "ft") {
        result = value * 3;
      } else if (unitTo === "in") {
        result = value * 36;
      } else if (unitTo === "cm") {
        result = value * 91.44;
      } else if (unitTo === "km") {
        result = value * 0.0009144;
      }
    } else if (unitFrom === "km") {
      if (unitTo === "m") {
        result = value * 1000;
      } else if (unitTo === "ft") {
        result = value * 3280.84;
      } else if (unitTo === "in") {
        result = value * 39370.1;
      } else if (unitTo === "cm") {
        result = value * 100000;
      } else if (unitTo === "yd") {
        result = value * 1093.61;
      }
    } else if (unitFrom === "kg") {
      if (unitTo === "lb") {
        result = value * 2.20462;
      } else if (unitTo === "oz") {
        result = value * 35.274;
      } else if (unitTo === "g") {
        result = value * 1000;
      }
    } else if (unitFrom === "lb") {
      if (unitTo === "kg") {
        result = value * 0.453592;
      } else if (unitTo === "oz") {
        result = value * 16;
      } else if (unitTo === "g") {
        result = value * 453.592;
      }
    } else if (unitFrom === "oz") {
      if (unitTo === "kg") {
        result = value * 0.0283495;
      } else if (unitTo === "lb") {
        result = value * 0.0625;
      } else if (unitTo === "g") {
        result = value * 28.3495;
      }
    } else if (unitFrom === "g") {
      if (unitTo === "kg") {
        result = value * 0.001;
      } else if (unitTo === "lb") {
        result = value * 0.00220462;
      } else if (unitTo === "oz") {
        result = value * 0.035274;
      }
    } else if (unitFrom === "c") {
      if (unitTo === "f") {
        result = (value * 9/5) + 32;
      }
    } else if (unitFrom === "f") {
      if (unitTo === "c") {
        result = (value - 32) * 5/9;
      }
    }
  
    resultInput.value = isNaN(result) ? "" : result.toFixed(2);
  }
  