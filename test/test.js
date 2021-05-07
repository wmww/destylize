class ConversionTest {
    constructor(original_text, correct_text) {
        this.original = original_text;
        this.correct = correct_text;
        this.paragraph = document.createElement("p");
        this.text_node = document.createTextNode(this.original);
        this.paragraph.appendChild(this.text_node);
    }

    describe() {
        return "Conversion test '" + this.original + "'";
    }

    get_content() {
        return this.paragraph;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const passed = this.text_node.textContent === this.correct;
        if (!passed) {
            console.error(this.describe() + " failed! ('" + this.text_node.textContent + "' != '" + this.correct + "')");
        }
        return passed;
    }
};

class NoConversionTest {
    constructor(text) {
        this.text = text;
        this.paragraph = document.createElement("p");
        this.text_node = document.createTextNode(this.text);
        this.paragraph.appendChild(this.text_node);
    }

    describe() {
        return "Already correct test '" + this.text + "'";
    }

    get_content() {
        return this.paragraph;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const passed = this.text_node.textContent === this.text;
        if (!passed) {
            console.error(this.describe() + " failed! ('" + this.text_node.textContent + "' != '" + this.text + "')");
        }
        return passed;
    }
};

class InputAreaUnchangedTest {
    constructor() {
        this.text = "🅸🅽🅿🆄🆃 🅰🆁🅴🅰";
        this.input_area = document.createElement("INPUT");
        this.input_area.setAttribute("type", "text");
        this.input_area.value = this.text;
    }

    describe() {
        return "Input area unchanged test";
    }

    get_content() {
        return this.input_area;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const passed = this.input_area.value === this.text;
        if (!passed) {
            console.error(this.describe() + " failed!");
        }
        return passed;
    }
};

class TextAreaUnchangedTest {
    constructor() {
        this.text = "🅸🅽🅿🆄🆃 🅰🆁🅴🅰";
        this.text_area = document.createElement("TEXTAREA"); ;
        this.text_area.value = this.text;
    }

    describe() {
        return "Text area unchanged test";
    }

    get_content() {
        return this.text_area;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const passed = this.text_area.value === this.text;
        if (!passed) {
            console.error(this.describe() + " failed!");
        }
        return passed;
    }
};

class HTMLTextAreaUnchangedTest {
    constructor() {
        this.correct = "🆃🅴🆇🆃 🅰🆁🅴🅰";
        this.node = null
    }

    describe() {
        return "HTML text area unchanged test";
    }

    get_content() {
        this.node = document.getElementById('test-text-area');
        this.node.remove();
        return this.node;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const passed = this.node.value === this.correct;
        if (!passed) {
            console.error(this.describe() + " failed!");
        }
        return passed;
    }
};

class InlineScriptUnchangedTest {
    constructor() {
        this.node = document.createTextNode("Boxed T from inline script unchanged");
    }

    describe() {
        return "Inline script test";
    }

    get_content() {
        return this.node;
    }

    // returns true if the test passes, or false if it doesn't
    check_if_passed() {
        const script = document.getElementById("inline-script");
        if (script.textContent.search("inline_script_value") < 0) {
            console.error(this.describe() + " failed, failed to find normal ASCII text in script");
            return false;
        }
        if (script.textContent.search("🆃") < 0) {
            console.error(this.describe() + " failed, failed to find boxed T in script");
            return false;
        }
        return true;
    }
};

class TestManager {
    constructor(test, table) {
        this.test = test;
        this.did_pass = null;
        const content = this.test.get_content();
        this.row = table.insertRow(-1);
        this.status_cell = this.row.insertCell(-1);
        this.content_cell = this.row.insertCell(-1);
        this.content_cell.appendChild(content);
        this.status_cell.textContent = "⏱";
    }

    passed() {
        let passed_this_time = this.test.check_if_passed();
        if (passed_this_time !== this.did_pass) {
            if (passed_this_time) {
                this.status_cell.textContent = "✅";
            }
            else {
                this.status_cell.textContent = "❌";
            }
        }
        this.did_pass = passed_this_time;
        return this.did_pass;
    }
}

class Stats {
    constructor(stats_node, table_node) {
        this.stats_node = stats_node;
        this.table_node = table_node
        this.tests = []
        this.stats_node.textContent = "Loading…";
    }

    add_test(test) {
        this.tests.push(new TestManager(test, this.table_node));
    }

    update() {
        const count = this.tests.length;
        const sum_passed_tests = (acc, test) => acc + (test.passed() ? 1 : 0)
        const passed = this.tests.reduce(sum_passed_tests, 0);
        const percent = count > 0 ? Math.round((passed / count) * 100) : 0;
        const str = "Passed " + passed.toString() + "/" + count.toString() + " tests (" + percent.toString() + "%)";
        this.stats_node.textContent = str;
        if (count == passed) {
            this.stats_node.style.color = "green";
        }
        else
        {
            this.stats_node.style.color = "red";
        }
    }
}

const tests = [
    new ConversionTest("No change to normal A$CII text!", "No change to normal A$CII text!"),
    new ConversionTest("🆂🆀🆄🅰🆁🅴 🅱🅾🆇🅴🆂", "SQUARE BOXES"),
    new ConversionTest("𝑾𝒉𝒚 do ʸᵒᵘ 𝓱𝓪𝓽𝓮  🅰🅴🆂🆃🅷🅴🆃🅸🅲🆂", "Why do you hate  AESTHETICS"),
        // source: https://mobile.twitter.com/FakeUnicode/status/1192622398580805632
    new ConversionTest('Should be lower case: ₖ𝑒', 'Should be lower case: ke'),
    new ConversionTest('Should be upper case: 🅐Ｍ𝐗', 'Should be upper case: AMX'),
    new NoConversionTest("diacritics: Üüéàï"),
    new NoConversionTest("eñe: Ññ"),
    new NoConversionTest('emoji: 🍑🍩💙😍💍🍪'),
    new NoConversionTest('asterisk-like: ✴✾✷✬'),
    new NoConversionTest("Money symbols: $£€"),
    new InputAreaUnchangedTest(),
    new TextAreaUnchangedTest(),
    new HTMLTextAreaUnchangedTest(),
    new InlineScriptUnchangedTest(),
];

let stats;

function init() {
    stats_node = document.getElementById("test-stats");
    table_node = document.getElementById("all-tests");
    stats = new Stats(stats_node, table_node);
    tests.forEach(test => stats.add_test(test));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function(){
    init();
    console.log("Waiting for destylize to run…");
    sleep(1000).then(() => {
        stats.update();
        console.log("…done");
    });
};
