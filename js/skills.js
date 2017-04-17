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

function populateSkillColumn(column, map, color) {
    for (var [key, value] of map) {
        $(column).append(generateSkillElement(key, color, value));
    }
}

var softwareSkillsMap1 = new Map();
softwareSkillsMap1.set("C/C++", 90);
softwareSkillsMap1.set("C#", 50);
softwareSkillsMap1.set("Kotlin", 30);
softwareSkillsMap1.set("HTML/CSS", 50);
populateSkillColumn("#soft-col-1", softwareSkillsMap1, "#696969");

var softwareSkillsMap2 = new Map();
softwareSkillsMap2.set("Java", 90);
softwareSkillsMap2.set("Assembly", 40);
softwareSkillsMap2.set("Python", 50);
softwareSkillsMap2.set("Javascript", 70);
populateSkillColumn("#soft-col-2", softwareSkillsMap2, "#696969");

var hardwareSkillsMap1 = new Map();
hardwareSkillsMap1.set("Verilog", 50);
populateSkillColumn("#hard-col-1", hardwareSkillsMap1, "#D2B48C");

var hardwareSkillsMap2 = new Map();
hardwareSkillsMap2.set("VHDL", 50);
populateSkillColumn("#hard-col-2", hardwareSkillsMap2, "#D2B48C");

var ideSkillsMap1 = new Map();
ideSkillsMap1.set("Android Studio", 90);
ideSkillsMap1.set("Eclipse", 60);
populateSkillColumn("#ide-col-1", ideSkillsMap1, "#BDB76B");

var ideSkillsMap2 = new Map();
ideSkillsMap2.set("Visual Studio", 70);
ideSkillsMap2.set("Intellij IDEA", 60);
populateSkillColumn("#ide-col-2", ideSkillsMap2, "#BDB76B");

var testSkillsMap1 = new Map();
testSkillsMap1.set("Espresso", 90);
testSkillsMap1.set("JUnit", 90);
testSkillsMap1.set("Lint", 80);
populateSkillColumn("#test-col-1", testSkillsMap1, "#FF6347");

var testSkillsMap2 = new Map();
testSkillsMap2.set("UI Automator", 80);
testSkillsMap2.set("Sonarqube", 70);
testSkillsMap2.set("Wireshark", 70);
populateSkillColumn("#test-col-2", testSkillsMap2, "#FF6347");

var osSkillsMap1 = new Map();
osSkillsMap1.set("Windows", 90);
osSkillsMap1.set("Linux", 80);
populateSkillColumn("#os-col-1", osSkillsMap1, "#9370DB");

var osSkillsMap2 = new Map();
osSkillsMap2.set("Android", 90);
osSkillsMap2.set("DryOS", 70);
populateSkillColumn("#os-col-2", osSkillsMap2, "#9370DB");

var dbSkillsMap1 = new Map();
dbSkillsMap1.set("Firebase", 80);
dbSkillsMap1.set("MySQL", 70);
populateSkillColumn("#db-col-1", dbSkillsMap1, "#778899");

var dbSkillsMap2 = new Map();
dbSkillsMap2.set("SQLite", 80);
dbSkillsMap2.set("PostgreSQL", 60);
populateSkillColumn("#db-col-2", dbSkillsMap2, "#778899");

var vcsSkillsMap1 = new Map();
vcsSkillsMap1.set("SVN", 90);
vcsSkillsMap1.set("Perforce", 90);
populateSkillColumn("#vcs-col-1", vcsSkillsMap1, "#DEB887");

var vcsSkillsMap2 = new Map();
vcsSkillsMap2.set("Git", 90);
populateSkillColumn("#vcs-col-2", vcsSkillsMap2, "#DEB887");
