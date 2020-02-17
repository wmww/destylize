class ConversionTest {
    constructor(original_text, correct_text) {
        this.original = original_text;
        this.correct = correct_text;
        this.paragraph = document.createElement("p");
        this.text_node = document.createTextNode(this.original);
        this.paragraph.appendChild(this.text_node);
        this.added_to_div = false;
    }

    describe() {
        return "Conversion test '" + this.original + "'";
    }

    add_to_div(parent_div) {
        if (this.added_to_div) {
            console.warn(this.describe() + " added to div multiple times");
        }
        parent_div.appendChild(this.paragraph);
        this.added_to_div = true;
    }

    // returns true if the test passes, or false if it doesn't
    verify_correct() {
        if (!this.added_to_div) {
            console.error(this.describe() + " not added to div");
        }

        if (this.text_node.textContent === this.correct) {
            console.log(this.describe() + " passed");
            this.paragraph.style.backgroundColor = "green";
            return true;
        }
        else {
            console.error(this.describe() + " failed! ('" + this.text_node.textContent + "' != '" + this.correct + "')");
            this.paragraph.style.backgroundColor = "red";
            return false;
        }
    }
};

const tests = [
    new ConversionTest("No change to normal A$CII text!", "No change to normal A$CII text!"),
    new ConversionTest("🆂🆀🆄🅰🆁🅴 🅱🅾🆇🅴🆂", "SQUARE BOXES"),
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function init() {
    test_div = document.getElementById("allTests");
    if (!test_div) {
        console.error("Failed to find test div");
        return;
    }
    for (let test of tests) {
        test.add_to_div(test_div);
    }
}

function run_tests() {
    for (let test of tests) {
        test.verify_correct();
    }
}

window.onload = function(){
    init();
    console.log("Waiting for destylize to run…");
    sleep(1000).then(() => {
        run_tests();
    });
};
