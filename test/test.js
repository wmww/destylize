function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function compair_strs(a, b) {
    if (a == b) {
        console.log("All good");
    } else {
        console.log("Test failed, \"" + a + "\" != \"" + b + "\"");
    }
}

function test_node(id, str) {
    node = document.getElementById(id);
    compair_strs(node.textContent, str);
}

function run_tests() {
    test_node("test-no-change-on-normal", "Normal ASCII text!");
    test_node("test-boxes-get-changed", "HELLO BOXES");
}

console.log("Waiting for destylize to run…");
sleep(1000).then(() => {
    run_tests();
});
