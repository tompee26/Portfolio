function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

// Populate Software Skills
var rowFormat = "<div class=\"flex-display skill-row\"><p class=\"skill-tag align-middle\" style=\"background-color: %colordark%\">%skill%</p><p class=\"skill-bar\" style=\"background-color: %color%; width:%percentage%\">&nbsp</p></div>"

function ComputePercentage(percentage) {
    var percentage = (0.8 * percentage).toString() + "\%";
    return percentage;
}

// C/C++
$("#soft-col-1").append(rowFormat.replace("%skill%", "C/C++").replace("%color%","#FFA500").
    replace("%colordark%", LightenDarkenColor("#FFA500", -20)).replace("%percentage%", ComputePercentage(100)));

// Java
$("#soft-col-1").append(rowFormat.replace("%skill%", "Java").replace("%color%","#48D1CC").
    replace("%colordark%", LightenDarkenColor("#48D1CC", -20)).replace("%percentage%", ComputePercentage(100)));

// Kotlin
$("#soft-col-1").append(rowFormat.replace("%skill%", "Kotlin").replace("%color%","#DA70D6").
    replace("%colordark%", LightenDarkenColor("#DA70D6", -20)).replace("%percentage%", ComputePercentage(100)));

// HTML
$("#soft-col-1").append(rowFormat.replace("%skill%", "HTML").replace("%color%","#778899").
    replace("%colordark%", LightenDarkenColor("#778899", -20)).replace("%percentage%", ComputePercentage(100)));

// C#
$("#soft-col-2").append(rowFormat.replace("%skill%", "C#").replace("%color%","#8B4513").
    replace("%colordark%", LightenDarkenColor("#8B4513", -20)).replace("%percentage%", ComputePercentage(100)));

// Assembly
$("#soft-col-2").append(rowFormat.replace("%skill%", "Assembly").replace("%color%","#2E8B57").
    replace("%colordark%", LightenDarkenColor("#2E8B57", -20)).replace("%percentage%", ComputePercentage(100)));

// Python
$("#soft-col-2").append(rowFormat.replace("%skill%", "Python").replace("%color%","#BDB76B").
    replace("%colordark%", LightenDarkenColor("#BDB76B", -20)).replace("%percentage%", ComputePercentage(100)));

// Javascript
$("#soft-col-2").append(rowFormat.replace("%skill%", "Javascript").replace("%color%","#B22222").
    replace("%colordark%", LightenDarkenColor("#B22222", -20)).replace("%percentage%", ComputePercentage(100)));
