let amountList = [
    120, 50, 20, 60, 10, 4
];
let daysList = [
    "18-9-3", "18-5-6",
    "18-7-6",
    "18-8-2",
    "18-1-1",
    "18-8-5"
];
let desList = ["tate", "dodo loolo","date to you","debt to nachman", "slom to you", "in my box"]
let categorys = ["ביטוח", "חוב", "הכנסה", "הוצאה"];
categorys.forEach(category=>{
    let options = document.querySelector("#add-action");
    let op = document.createElement("option");
    let TextOp = document.createTextNode(category);
    op.appendChild(TextOp);
    options.appendChild(op);
})