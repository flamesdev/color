"use strict";

var hexElement;
var nameElement;
var hexCode = "";

// Booleans
var fruit_mode = false;

var colorURL = "https://raw.githubusercontent.com/flamesdev/color-namer/master/color pallets/";

var colors;
var standard_colors;
$.getJSON(colorURL + "standard.json", function (json) {
    standard_colors = json;
    colors = standard_colors;
});
var fruit_colors;
$.getJSON(colorURL + "fruit.json", function (json) {
    fruit_colors = json;
});

window.onload = function () {
    hexElement = document.getElementById("hex");
    nameElement = document.getElementById("name");
};

var colors;
var index = 0;
document.addEventListener("keydown", (event) => {
    if (event.keyCode === 38) {
        fruit_mode = !fruit_mode;
        if (fruit_mode)
            colors = fruit_colors;
        else
            colors = standard_colors;
        index = UpdateColor();
    }
    if (event.keyCode === 37) {
        if (index === 0)
            index = colors.length - 1;
        else
            index--;
        UpdateIndexColor();
        return;
    }
    if (event.keyCode === 39) {
        if (index === colors.length - 1)
            index = 0
        else
            index++;
        UpdateIndexColor();
        return;
    }
    var keyName = event.key.toLowerCase();
    var length = hexCode.length;

    if (event.keyCode === 8 && hexCode.length !== 0)
        hexCode = hexCode.substring(0, length - 1);
    else if (length < 6 && "0123456789abcdef".split("").includes(keyName)) {
        hexCode += keyName;
        index = UpdateColor();
    }
    UpdateDisplay();
});

document.addEventListener("copy", function (event) {
    if (hexCode.length === 6)
        event.clipboardData.setData("text/plain",
            nameElement.innerHTML + " - " + hexElement.innerHTML);
    event.preventDefault();
});

function UpdateColor() {
    if (hexCode.length === 6) {
        var rgb = Functions.hexToRGB(hexCode);
        var closest = -1;
        var index = 0;
        var displayColor = "";
        for (var i = 0; i < colors.length; i++) {
            var item = colors[i];
            var color = Functions.hexToRGB(item.Color);
            var similarity = Math.abs(color[0] - rgb[0]) +
                Math.abs(color[1] - rgb[1]) +
                Math.abs(color[2] - rgb[2]);
            if (closest === -1 || similarity < closest) {
                closest = similarity;
                displayColor = item.Name;
                index = i;
            }
        }
        nameElement.innerHTML = displayColor;
        return index;
    }
}

function UpdateDisplay() {
    hexElement.innerHTML = "#" + hexCode;
    if (hexCode.length === 6)
        document.body.style.backgroundColor = "#" + hexCode;
    else {
        document.body.style.backgroundColor = "black";
        nameElement.innerHTML = "";
    }

    var rgb = Functions.hexToRGB(hexCode);
    var color;
    if ((rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 255 >= 0.5)
        color = "black";
    else
        color = "white";
    hexElement.style.color = color;
    nameElement.style.color = color;
}

function UpdateIndexColor() {
    hexCode = colors[index].Color.toLowerCase();
    UpdateColor();
    UpdateDisplay();
}

class Functions {
    static hexToRGB(hex) {
        if (hex[0] === "#")
            hex = hex.substring(1);
        if (hex.length !== 6)
            return false;
        var values = hex.split(""),
            r, g, b;

        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
        return [r, g, b];
    }
}