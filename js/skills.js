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
var rowFormat = " \
    <div class=\"flex-display skill-row\"> \
        <p class=\"skill-tag align-middle\" style=\"background-color: %colordark%\">%skill%</p> \
        <p class=\"skill-bar\" style=\"background-color: %color%; width:%percentage%\">&nbsp</p> \
    </div>";

function ComputePercentage(percentage) {
    var percentage = (0.8 * percentage).toString() + "\%";
    return percentage;
}

function generateSkillElement(skill, color, percentage) {
    return rowFormat.replace("%skill%", skill).replace("%color%", color).
        replace("%colordark%", LightenDarkenColor(color, -20)).replace("%percentage%", ComputePercentage(percentage));
}

$("#soft-col-1").append(generateSkillElement("C/C++", "#696969", 100));
$("#soft-col-1").append(generateSkillElement("C#", "#696969", 50));
$("#soft-col-1").append(generateSkillElement("Kotlin", "#696969", 30));
$("#soft-col-1").append(generateSkillElement("HTML/CSS", "#696969", 50));

$("#soft-col-2").append(generateSkillElement("Java", "#696969", 90));
$("#soft-col-2").append(generateSkillElement("Assembly", "#696969", 40));
$("#soft-col-2").append(generateSkillElement("Python", "#696969", 50));
$("#soft-col-2").append(generateSkillElement("Javascript", "#696969", 70));

$("#hard-col-1").append(generateSkillElement("Verilog", "#D2B48C", 50));

$("#hard-col-2").append(generateSkillElement("VHDL", "#D2B48C", 50));

$("#ide-col-1").append(generateSkillElement("Android Studio", "#BDB76B", 90));
$("#ide-col-1").append(generateSkillElement("Eclipse", "#BDB76B", 60));

$("#ide-col-2").append(generateSkillElement("Visual Studio", "#BDB76B", 70));
$("#ide-col-2").append(generateSkillElement("Intellij", "#BDB76B", 60));

$("#test-col-1").append(generateSkillElement("Espresso", "#FF6347", 90));
$("#test-col-1").append(generateSkillElement("JUnit", "#FF6347", 90));
$("#test-col-1").append(generateSkillElement("Lint", "#FF6347", 80));

$("#test-col-2").append(generateSkillElement("UI Automator", "#FF6347", 80));
$("#test-col-2").append(generateSkillElement("Sonarqube", "#FF6347", 70));
$("#test-col-2").append(generateSkillElement("Wireshark", "#FF6347", 70));

$("#os-col-1").append(generateSkillElement("Windows", "#9370DB", 90));
$("#os-col-1").append(generateSkillElement("Linux", "#9370DB", 80));

$("#os-col-2").append(generateSkillElement("Android", "#9370DB", 90));
$("#os-col-2").append(generateSkillElement("DryOS", "#9370DB", 70));

$("#db-col-1").append(generateSkillElement("Firebase", "#778899", 80));
$("#db-col-1").append(generateSkillElement("MySQL", "#778899", 70));

$("#db-col-2").append(generateSkillElement("SQLite", "#778899", 90));
$("#db-col-2").append(generateSkillElement("PostgreSQL", "#778899", 60));

$("#vcs-col-1").append(generateSkillElement("SVN", "#DEB887", 90));
$("#vcs-col-1").append(generateSkillElement("Perforce", "#DEB887", 90));

$("#vcs-col-2").append(generateSkillElement("Git", "#DEB887", 90));
