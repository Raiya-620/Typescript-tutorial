"use strict";
function KgTLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
KgTLbs(10);
KgTLbs('10');
//# sourceMappingURL=index.js.map