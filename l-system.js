var iterate = {"number": 0, "sentence": ""};

$(document).ready(function () {
    let canvas = document.getElementById("l-canvas");
    let context = canvas.getContext("2d");
    let turtle = new Turtle(context, 600, 400);
    hookIterateButton(turtle);
    hookSetupButton(turtle);
    hookPlusButton(turtle);
    hookMinusButton(turtle);
    hookUpButton(turtle);
    hookDownButton(turtle);
    hookLeftButton(turtle);
    hookRightButton(turtle);
    hookAddRuleButton();
    hookExampleSelect(turtle);
    hookClearHistoryButton();
    
    fillExamples(turtle);
});

function hookClearHistoryButton() {
    $("#clearHistoryButton").click(function () {
        $("#resultsTable>tbody>tr").remove();
    });
}

function hookExampleSelect(turtle) {
    $("#examples").change(function () {
        exampleSelected(turtle);
    });
}

function exampleSelected(turtle) {
    let example = examples[$("#examples").val()];
    $("#angleInput").val(example.angle);
    $("#axiomInput").val(example.axiom);
    $("#rulesTable>tbody>tr").remove();
    example.rules.forEach(function (v, i) {
        addRuleToTable(v.pattern, v.replace);
    });
    setup(turtle);
}

function fillExamples(turtle) {
    Object.keys(examples).forEach(function (v, i) {
        let example = v;
        let app = 
            `<option>
                ${example}
            </option>`;
        $("#examples").append(app);
    });
    exampleSelected(turtle);
}

function addRuleToTable(pattern, replace) {
    let app = 
        `<tr>
            <td>
                <input type="text" class="rulesPattern" value="${pattern}"/>
            </td>
            <td>
                <input type="text" class="rulesReplace" value="${replace}"/>
                <span class="btn-xs btn-warning" onclick="$(this).parent().parent().remove()">
                    <i class="fa fa-eraser"></i>
                </span>
            </td>
        </tr>`;
    $("#rulesTable>tbody").append(app);
}

function hookAddRuleButton() {
    $("#addRuleButton").click(function () {
        addRuleToTable("", "");
    });
}

function hookUpButton(turtle) {
    $("#upButton").click(function () {
        turtle.startUp();
        turtle.draw(iterate.sentence);
    });
}

function hookDownButton(turtle) {
    $("#downButton").click(function () {
        turtle.startDown();
        turtle.draw(iterate.sentence);
    });
}

function hookLeftButton(turtle) {
    $("#leftButton").click(function () {
        turtle.startLeft();
        turtle.draw(iterate.sentence);
    });
}

function hookRightButton(turtle) {
    $("#rightButton").click(function () {
        turtle.startRight();
        turtle.draw(iterate.sentence);
    });
}

function hookPlusButton(turtle) {
    $("#plusButton").click(function () {
        turtle.setLen(turtle.getLen() + 1);
        turtle.draw(iterate.sentence);
    });
}

function hookMinusButton(turtle) {
    $("#minusButton").click(function () {
        turtle.setLen(turtle.getLen() - 1);
        turtle.draw(iterate.sentence);
    });
}

function setup(turtle) {
    iterate.number = 0;
    iterate.sentence = $("#axiomInput").val();
    turtle.setAngle(Math.PI / 180 * $("#angleInput").val());
    turtle.init();
    appendIterateToTable(iterate);
    turtle.draw(iterate.sentence);
}

function hookSetupButton(turtle) {
    $("#setupButton").click(function () {
        setup(turtle);
    });
}

function hookIterateButton(turtle) {
    $("#iterateButton").click(function () {
        let rules = [];
        $("#rulesTable>tbody tr").each(function () {
            let tr = $(this);
            rules.push({"pattern": tr.find("td:first").find("input").val(), 
                "replace": tr.find("td:last").find("input").val()});
        });
        iterate.number = iterate.number + 1;
        iterate.sentence = doNextIteration(iterate.sentence, rules);
        appendIterateToTable(iterate);
        turtle.draw(iterate.sentence);
    });
}

function appendIterateToTable(it) {
    let trClass = (it.number == 0) ? "class='success'" : "";
    let app = 
        `<tr ${trClass}>
            <td>${it.number}.</td>
            <td>${it.sentence}</td>
        </tr>`;
    $("#resultsTable>tbody").append(app);
}

function doNextIteration(previous, rules) {
    let result = previous;
    rules.forEach(function (v, i) {
        let regexp = new RegExp(v.pattern, "g");
        result = result.replace(regexp, v.replace);
    });
    return result;
}