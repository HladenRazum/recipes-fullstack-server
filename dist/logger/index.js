"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
const pino_1 = require("pino");
const log = pino_1.default({
    prettyPring: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});
exports.default = log;
//# sourceMappingURL=index.js.map