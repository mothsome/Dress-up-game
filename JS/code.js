
window.onload=init;

function init() {
    console.log("window has loaded");

    state.t1 = 0;       //for "top_under" 
    state.t2 = 0;       //for "top_middle"
    state.t3 = 0;       //for "top_middle1"
    state.t4 = 0;       //for "top_over"
    state.b = 0;        //for "bottom"
    state.s = 0;        //for "socks"
    state.sh = 0;       //for "shoes"
    state.bk = 0;       //for "back"
    state.cl2 = 0;      //for "collar2"
    state.cl3 = 0;      //for "collar3"
    state.e = 0;        //for "earrings"
    state.n1 = 0;       //for "necklace1"
    state.n2 = 0;       //for "necklace2"
    state.bag = 0;      //for "bag"

    // Default clothes when page loads
    var top1 = document.getElementById("top_under");
    top1.setAttribute("class", "Top1-1");
    
    var bot = document.getElementById("bottom");
    bot.setAttribute("class", "Bot-1");
    
    var shoes = document.getElementById("shoes");
    shoes.setAttribute("class", "Shoes-4");
}

var state = {
    t1:0,
    t2:0,
    t3:0,
    t4:0,
    b:0,
    s:0,
    sh:0,
    bk:0,
    cl2:0,
    cl3:0,
    e:0,
    n1:0,
    n2:0,
    bag:0
};




// <~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>
// "Next" and "Previous" buttons...

    // ...for the "top_under" category
const tops1 = ["Top1-1", "Top1-2", "Top1-3", "Top1-4", "Top1-5", "Top1-6"];
function nexttop1() {
    const top1 = document.getElementById("top_under");
    state.t1 = (state.t1 + 1) % tops1.length;
    top1.setAttribute("class", tops1[state.t1]);
}

function prevtop1() {
    const top1 = document.getElementById("top_under");
    state.t1 = (state.t1 - 1 + tops1.length) % tops1.length;
    top1.setAttribute("class", tops1[state.t1]);
}

    // ...for the "top_middle" category. Goes with the collars that are supposed to show above all other layers of clothes.
const tops2 = ["Top2-0", "Top2-1", "Top2-2", "Top2-3", "Top2-4", "Top2-5", "Top2-6", "Top2-7", "Top2-8"];
const collars2 = ["Collar2-0", "Collar2-1", "Collar2-2", "Collar2-3", "Collar2-4", "Collar2-5", "Collar2-6", "Collar2-7", "Collar2-8"];

function nexttop2() {
    const top2 = document.getElementById("top_middle");
    const collar2 = document.getElementById("collar2");
    state.t2 = (state.t2 + 1) % tops2.length;
    state.cl2 = (state.cl2 + 1) % collars2.length;
    top2.setAttribute("class", tops2[state.t2]);
    collar2.setAttribute("class", collars2[state.cl2]);
    updateFitButtons();
}

function prevtop2() {
    const top2 = document.getElementById("top_middle");
    const collar2 = document.getElementById("collar2");
    state.t2 = (state.t2 - 1 + tops2.length) % tops2.length;
    state.cl2 = (state.cl2 - 1 + collars2.length) % collars2.length;
    top2.setAttribute("class", tops2[state.t2]);
    collar2.setAttribute("class", collars2[state.cl2]);
    updateFitButtons();
}

    // ...for the "top_middle1" category. Goes with the collars that are supposed to show above all other layers of clothes.
const tops3 = ["Top3-0", "Top3-1", "Top3-2", "Top3-3", "Top3-4", "Top3-5", "Top3-6-1", "Top3-7-1", "Top3-8", "Top3-9"];
const collars3 = ["Collar3-0", "Collar3-1", "Collar3-2", "Collar3-3", "Collar3-4", "Collar3-5", "Collar3-6", "Collar3-7", "Collar3-8", "Collar3-9"];

function nexttop3() {
    const top3 = document.getElementById("top_middle1");
    const collar3 = document.getElementById("collar3");
    state.t3 = (state.t3 + 1) % tops3.length;
    state.cl3 = (state.cl3 + 1) % collars3.length;
    top3.setAttribute("class", tops3[state.t3]);
    collar3.setAttribute("class", collars3[state.cl3]);
    updateFitButtons();
}

function prevtop3() {
    const top3 = document.getElementById("top_middle1");
    const collar3 = document.getElementById("collar3");
    state.t3 = (state.t3 - 1 + tops3.length) % tops3.length;
    state.cl3 = (state.cl3 - 1 + collars3.length) % collars3.length;
    top3.setAttribute("class", tops3[state.t3]);
    collar3.setAttribute("class", collars3[state.cl3]);
    updateFitButtons();
}

    // ...for the "top_over" category. Goes with the backs (lining) that are supposed to show under all other layers of clothes.
const tops4 = ["Top4-0", "Top4-1", "Top4-2-1", "Top4-3", "Top4-4", "Top4-5"];
const backs = ["Back4-0", "Back4-1", "Back4-2", "Back4-3", "Back4-4", "Back4-5"];

function nexttop4() {
    const top4 = document.getElementById("top_over");
    const back = document.getElementById("back");

    state.t4 = (state.t4 + 1) % tops4.length;
    state.bk = (state.bk + 1) % backs.length;

    top4.setAttribute("class", tops4[state.t4]);
    back.setAttribute("class", backs[state.bk]);
    updateFitButtons();
}

function prevtop4() {
    const top4 = document.getElementById("top_over");
    const back = document.getElementById("back");

    state.t4 = (state.t4 - 1 + tops4.length) % tops4.length;
    state.bk = (state.bk - 1 + backs.length) % backs.length;

    top4.setAttribute("class", tops4[state.t4]);
    back.setAttribute("class", backs[state.bk]);
    updateFitButtons();
}

    // ...for the "bottom" category.
const bots = ["Bot-1", "Bot-2-1", "Bot-3", "Bot-4", "Bot-5", "Bot-6-1", "Bot-7", "Bot-8", "Bot-9", "Bot-10"];
function nextbottom() {
    const bot = document.getElementById("bottom");
    state.b = (state.b + 1) % bots.length;
    bot.setAttribute("class", bots[state.b]);
    updateFitButtons();
}

function prevbottom() {
    const bot = document.getElementById("bottom");
    state.b = (state.b - 1 + bots.length) % bots.length;
    bot.setAttribute("class", bots[state.b]);
    updateFitButtons();
}

    // ...for the "socks" category.
const sockss = ["Socks-0", "Socks-1", "Socks-2", "Socks-3", "Socks-4", "Socks-5", "Socks-6"];
function nextsocks() {
    const socks = document.getElementById("socks");
    state.s = (state.s + 1) % sockss.length;
    socks.setAttribute("class", sockss[state.s]);
}

function prevsocks() {
    const socks = document.getElementById("socks");
    state.s = (state.s - 1 + sockss.length) % sockss.length;
    socks.setAttribute("class", sockss[state.s]);
}

    // ...for the "shoes" category.
const shoess = ["Shoes-1", "Shoes-2", "Shoes-3", "Shoes-4"];
function nextshoes() {
    const shoes = document.getElementById("shoes");
    state.sh = (state.sh + 1) % shoess.length;
    shoes.setAttribute("class", shoess[state.sh]);
}

function prevshoes() {
    const shoes = document.getElementById("shoes");
    state.sh = (state.sh - 1 + shoess.length) % shoess.length;
    shoes.setAttribute("class", shoess[state.sh]);
}

    // ...for the "earrings" category.
const ears = ["Ear-0", "Ear-1", "Ear-2", "Ear-3", "Ear-4"];
function nextearings() {
    const ear = document.getElementById("earrings");
    state.e = (state.e + 1) % ears.length;
    ear.setAttribute("class", ears[state.e]);
}

function prevearings() {
    const ear = document.getElementById("earrings");
    state.e = (state.e - 1 + ears.length) % ears.length;
    ear.setAttribute("class", ears[state.e]);
}

    // ...for the "necklace1" category.
const necks1 = ["Neck1-0", "Neck1-1", "Neck1-2", "Neck1-3"];
function nextnecklace1() {
    const neck1 = document.getElementById("necklace1");
    state.n1 = (state.n1 + 1) % necks1.length;
    neck1.setAttribute("class", necks1[state.n1]);
}

function prevnecklace1() {
    const neck1 = document.getElementById("necklace1");
    state.n1 = (state.n1 - 1 + necks1.length) % necks1.length;
    neck1.setAttribute("class", necks1[state.n1]);
}

    // ...for the "necklace2" category.
const necks2 = ["Neck2-0", "Neck2-1", "Neck2-2"];
function nextnecklace2() {
    const neck2 = document.getElementById("necklace2");
    state.n2 = (state.n2 + 1) % necks2.length;
    neck2.setAttribute("class", necks2[state.n2]);
    updateFitButtons();
}

function prevnecklace2() {
    const neck2 = document.getElementById("necklace2");
    state.n2 = (state.n2 - 1 + necks2.length) % necks2.length;
    neck2.setAttribute("class", necks2[state.n2]);
    updateFitButtons();
}

    // ...for the "bag" category.
const bags = ["Bag-0", "Bag-1", "Bag-2", "Bag-3", "Bag-4", "Bag-5"];
function nextbag() {
    const bag = document.getElementById("bag");
    state.bag = (state.bag + 1) % bags.length;
    bag.setAttribute("class", bags[state.bag]);
    updateFitButtons();
}

function prevbag() {
    const bag = document.getElementById("bag");
    state.bag = (state.bag - 1 + bags.length) % bags.length;
    bag.setAttribute("class", bags[state.bag]);
    updateFitButtons();
}
// <~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>~~~~~<~~~~~>




// 👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~
// "Hide" buttons. Don't touch it, it works on dark magic. Any attempt to fix this code will lead to chaos and destruction. 
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hide-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            const targets = this.dataset.target.split(',').map(t => t.trim());

            targets.forEach(targetId => {
                const target = document.getElementById(targetId);
                if (!target) return;

                const isHidden = window.getComputedStyle(target).display === 'none';
                target.style.display = isHidden ? 'block' : 'none';

                // Update all buttons linked to ANY of those target IDs
                const allButtons = document.querySelectorAll('.hide-btn');

                allButtons.forEach(btn => {
                    const btnTargets = btn.dataset.target
                        .split(',')
                        .map(t => t.trim());

                    // EXACT match (no substring matches)
                    if (btnTargets.includes(targetId)) {
                        btn.value = isHidden ? '👁' : '👁';
                        btn.classList.toggle('shown', isHidden);
                        btn.classList.toggle('hidden', !isHidden);
                    }
                });
            });
        });
    });
});

// 👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~👁~~~~~




// fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit
// Configuration for all "fit" buttons
const fitConfigs = [
    {
        targetId: "top_middle",
        activeClasses: ["Top2-3", "Top2-3-1"],
        toggleClasses: ["Top2-3", "Top2-3-1"]
    },
    
    {
        targetId: "top_middle1",
        activeClasses: ["Top3-2", "Top3-2-1", "Top3-6", "Top3-6-1", "Top3-7", "Top3-7-1", "Top3-9", "Top3-9-1"],
        toggleClassesList: [
            ["Top3-2", "Top3-2-1"],
            ["Top3-6", "Top3-6-1"],
            ["Top3-7", "Top3-7-1"],
            ["Top3-9", "Top3-9-1"]
        ]
    },
 
    {
        targetId: "top_over",
        activeClasses: ["Top4-2", "Top4-2-1"],
        toggleClasses: ["Top4-2", "Top4-2-1"]
    },
  
    {
        targetId: "bottom",
        activeClasses: ["Bot-2", "Bot-2-1", "Bot-6", "Bot-6-1"],
        toggleClassesList: [
            ["Bot-2", "Bot-2-1"],
            ["Bot-6", "Bot-6-1"]
        ]
    },
   
    {
        targetId: "necklace2",
        activeClasses: ["Neck2-1", "Neck2-1-1"],
        toggleClasses: ["Neck2-1", "Neck2-1-1"]
    },
  
    {
        targetId: "bag",
        activeClasses: ["Bag-1", "Bag-1-1", "Bag-2", "Bag-2-1", "Bag-3", "Bag-3-1", "Bag-4", "Bag-4-1", "Bag-5", "Bag-5-1"],
        toggleClassesList: [
            ["Bag-1", "Bag-1-1"],
            ["Bag-2", "Bag-2-1"],
            ["Bag-3", "Bag-3-1"],
            ["Bag-4", "Bag-4-1"],
            ["Bag-5", "Bag-5-1"]
            
        ]
    }
];

// Function to update visibility of all fit buttons
function updateFitButtons() {
    fitConfigs.forEach(config => {
        const elem = document.getElementById(config.targetId);
        if (!elem) return;

        // Determine if any active class is present
        const show = config.activeClasses.some(cls => elem.classList.contains(cls));

        const fitButtons = document.querySelectorAll(`.fit-btn[data-target="${config.targetId}"]`);
        fitButtons.forEach(btn => {
            btn.style.visibility = show ? "visible" : "hidden";
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {

    const fitButtons = document.querySelectorAll('.fit-btn');

    fitButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const config = fitConfigs.find(c => c.targetId === targetId);
            if (!config) return;

            const elem = document.getElementById(targetId);
            if (!elem) return;

            // Handle multiple toggle pairs if defined
            if (config.toggleClassesList) {
                for (const pair of config.toggleClassesList) {
                    if (elem.classList.contains(pair[0])) {
                        elem.classList.remove(pair[0]);
                        elem.classList.add(pair[1]);
                        break;
                    } else if (elem.classList.contains(pair[1])) {
                        elem.classList.remove(pair[1]);
                        elem.classList.add(pair[0]);
                        break;
                    }
                }
            } else if (config.toggleClasses) {
                if (elem.classList.contains(config.toggleClasses[0])) {
                    elem.classList.remove(config.toggleClasses[0]);
                    elem.classList.add(config.toggleClasses[1]);
                } else if (elem.classList.contains(config.toggleClasses[1])) {
                    elem.classList.remove(config.toggleClasses[1]);
                    elem.classList.add(config.toggleClasses[0]);
                }
            }

            updateFitButtons();
        });
    });

    // Initial check
    updateFitButtons();
});
// fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit~~~~~fit




// rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng
// Random outfit generator

function rng_outfit() {
    //
    // TOP UNDER (t1)
    //
    state.t1 = Math.floor(Math.random() * tops1.length);
    document.getElementById("top_under").setAttribute("class", tops1[state.t1]);

    //
    // TOP MIDDLE (t2 + collar2)
    //
    state.t2 = Math.floor(Math.random() * tops2.length);
    state.cl2 = state.t2; // collars stay in sync with top2
    document.getElementById("top_middle").setAttribute("class", tops2[state.t2]);
    document.getElementById("collar2").setAttribute("class", collars2[state.cl2]);

    //
    // TOP MIDDLE 1 (t3 + collar3)
    //
    state.t3 = Math.floor(Math.random() * tops3.length);
    state.cl3 = state.t3;
    document.getElementById("top_middle1").setAttribute("class", tops3[state.t3]);
    document.getElementById("collar3").setAttribute("class", collars3[state.cl3]);

    //
    // TOP OVER (t4 + back)
    //
    state.t4 = Math.floor(Math.random() * tops4.length);
    state.bk = state.t4;
    document.getElementById("top_over").setAttribute("class", tops4[state.t4]);
    document.getElementById("back").setAttribute("class", backs[state.bk]);

    //
    // BOTTOMS
    //
    state.b = Math.floor(Math.random() * bots.length);
    document.getElementById("bottom").setAttribute("class", bots[state.b]);

    //
    // SOCKS
    //
    state.s = Math.floor(Math.random() * sockss.length);
    document.getElementById("socks").setAttribute("class", sockss[state.s]);

    //
    // SHOES
    //
    state.sh = Math.floor(Math.random() * shoess.length);
    document.getElementById("shoes").setAttribute("class", shoess[state.sh]);

    //
    // EARRINGS
    //
    state.e = Math.floor(Math.random() * ears.length);
    document.getElementById("earrings").setAttribute("class", ears[state.e]);

    //
    // NECKLACE 1
    //
    state.n1 = Math.floor(Math.random() * necks1.length);
    document.getElementById("necklace1").setAttribute("class", necks1[state.n1]);

    //
    // NECKLACE 2
    //
    state.n2 = Math.floor(Math.random() * necks2.length);
    document.getElementById("necklace2").setAttribute("class", necks2[state.n2]);

    //
    // BAG
    //
    state.bag = Math.floor(Math.random() * bags.length);
    document.getElementById("bag").setAttribute("class", bags[state.bag]);

    //
    // updates visibility for fit-buttons
    //
    updateFitButtons();
}
// rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng~~~~~rng


