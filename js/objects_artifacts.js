var BONUS_VALUE_TYPES = {
  INTEGER: 'integer',
  PERCENT: 'percent'
};

Object.freeze(BONUS_VALUE_TYPES);

var artefacts = {
    artid00: {
        id: "artid00",
        img: "scroll_01.png",
        name: localeStrings[286],
        desc: localeStrings[287],
        attr: [],
        change: [],
        priceBuy: 500,
        chance: 1,
        type: "scrolls",
    },
    artid01: {
        id: "artid01",
        name: localeStrings[288],
        desc: localeStrings[289],
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid02: {
        id: "artid02",
        name: localeStrings[290],
        desc: localeStrings[291],
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid03: {
        id: "artid03",
        name: localeStrings[292],
        desc: localeStrings[293],
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid04: {
        id: "artid04",
        name: localeStrings[294],
        desc: localeStrings[295],
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid05: {
        id: "artid05",
        name: localeStrings[296],
        desc: localeStrings[297],
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid06: {
        id: "artid06",
        name: localeStrings[298],
        desc: localeStrings[299],
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid07: {
        id: "artid07",
        name: localeStrings[300],
        desc: localeStrings[301],
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid08: {
        id: "artid08",
        name: localeStrings[302],
        desc: localeStrings[303],
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid09: {
        id: "artid09",
        name: localeStrings[304],
        desc: localeStrings[305],
        attr: ["luck","superstition"],
        change: [0,0],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid10: {
        id: "artid10",
        name: localeStrings[306],
        desc: localeStrings[307],
        attr: [],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid11: {
        id: "artid11",
        img: "glyph_01.png",
        name: locObj.glyphKnightTile.txt,
        desc: locObj.glyphKnightDesc.txt,
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 10 },
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 6 }
        ],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid12: {
        id: "artid12",
        img: "glyph_02.png",
        name: locObj.glyphMonkTile.txt,
        desc: locObj.glyphMonkDesc.txt,
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 4 },
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 12 }
        ],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid13: {
        id: "artid13",
        img: "rune_gold.png",
        name: locObj.goldRuneTitle.txt,
        desc: locObj.goldRuneDesc.txt,
        attr: [{name: "gold", type: BONUS_VALUE_TYPES.PERCENT, val: 1.07}],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid14: {
        id: "artid14",
        img: "lifeblood_vial.png",
        name: locObj.lifebloodVialTitle.txt,
        desc: locObj.lifebloodVialDesc.txt,
        attr: [{ name: "unit_health", type: BONUS_VALUE_TYPES.INTEGER, val: 3 }],
        change: [],
        priceBuy: 1000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid15: {
        id: "artid15",
        img: "darkpact_sword.png",
        name: locObj.darkPactSwordTitle.txt,
        desc: locObj.darkPactSwordDesc.txt,
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 15 },
            { name: "unit_health", type: BONUS_VALUE_TYPES.PERCENT, val: (1 - 0.35) },
        ],
        change: [],
        priceBuy: 7000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid16: {
        id: "artid16",
        img: "crusaders_sword.png",
        name: locObj.crusadersSwordTitle.txt,
        desc: locObj.crusadersSwordDesc.txt,
        attr: [
            { name: "unit_attack", type: BONUS_VALUE_TYPES.PERCENT, val: 1.2 },
        ],
        change: [],
        priceBuy: 7000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid17: {
        id: "artid17",
        img: 'ring_strength.png',
        name: locObj.ringStrengthTitle.txt,
        desc: locObj.ringStrengthDesc.txt,
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 5 },
            { name: "unit_attack", type: BONUS_VALUE_TYPES.PERCENT, val: 1.1 },
        ],
        change: [],
        priceBuy: 3000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid18: {
        id: "artid18",
        img: 'ring_protection.png',
        name: locObj.ringProtectionTitle.txt,
        desc: locObj.ringProtectionDesc.txt,
        attr: [
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 5 },
            { name: "unit_defence", type: BONUS_VALUE_TYPES.PERCENT, val: 1.1 },
        ],
        change: [],
        priceBuy: 3000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    }
};

Object.freeze(artefacts);
