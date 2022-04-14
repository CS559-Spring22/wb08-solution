/**
 * CS559 Spring 2022 Example Solution
 * Written by CS559 course staff
 */

/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { GrDice } from "./08-05-dice.js";

// define a class of Domino here - it should be a subclass of GrObject

// Begin Example Solution
/** @type {number} */ let dominoCount = 0;
class GrDomino extends GrObject {
    constructor(params = {}) {
        /** @type {T.Group} */ const domino = new T.Group();
        super(`GrDomino${++dominoCount}`, domino);
        // Copy all the parameters with defaults
        /** @type {number} */ const x = params.x || 0; // Position x
        /** @type {number} */ const y = params.y || 0; // Position y
        /** @type {number} */ const z = params.z || 0; // Position z
        /** @type {number} */ const s = params.s || 1; // Scale
        /** @type {number} */ const sx = params.sx || s; // Scale x
        /** @type {number} */ const sy = params.sy || s; // Scale y
        /** @type {number} */ const sz = params.sz || s; // Scale z
        /** @type {number} */ const rx = params.rx || 0; // Rotation x
        /** @type {number} */ const ry = params.ry || 0; // Rotation y
        /** @type {number} */ const rz = params.rz || 0; // Rotation z
        /** @type {number} */ const offset = params.offset || 0; // Rounded edge
        /** @type {number[]} */ const index = params.index || [1, 2]; // Numbers on the face
        // Create two dice (with appropriate z-scale) to fake a domino
        /** @type {GrDice} */ const top = new GrDice({ y: 1, sz: 0.25, rz: Math.PI * 0.5, index: [0, 0, 0, 0, index[0], 0], offset: offset });
        /** @type {GrDice} */ const bottom = new GrDice({ y: -1, sz: 0.25, rz: Math.PI * 0.5, index: [0, 0, 0, 0, index[1], 0], offset: offset });
        // Put everything into the group and transform the group
        domino.add(...top.objects, ...bottom.objects);
        domino.position.set(x, y, z);
        domino.scale.set(sx, sy, sz);
        domino.rotation.set(rx, ry, rz);
    }
}
// End Example Solution

let world = new GrWorld();

// put the domino into the world Here
// you can, of course, add more than 1
// Begin Example Solution
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        if (i >= j) {
            // Put the regular dominos (1, 1), (1, 2), (1, 3), ...
            /** @type {GrDomino} */ const domino = new GrDomino({ y: 1, x: (i - 3.5) * 1.25, s: 0.5, z: (j - 0.5) * 1.25 - 3, index: [i, j] });
            world.add(domino);
        }
        else {
            // Put the rounded edge dominos
            /** @type {GrDomino} */ const domino = new GrDomino({ y: 1, x: (i - 3.5) * 1.25, s: 0.5 * 0.75, z: (j - 0.5) * 1.25 - 3, index: [i, j], offset: 0.5 });
            world.add(domino);
        }
    }
}
// End Example Solution

world.go();
