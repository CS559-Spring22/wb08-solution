/**
 * CS559 Spring 2022 Example Solution
 * Written by CS559 course staff
 */

/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import * as Geom from "../libs/CS559-Three/examples/jsm/deprecated/Geometry.js";

/*
 * Define your 3 objects here. If the objects fit inside +/- 1,
 * the world code below will place them nicely.
 * Otherwise, you need to modify the world code below to make the
 * world bigger and space the objects out differently.
 */

class Object1 extends GrObject {
  constructor() {
    // student, fill this in
    // you will need a call to "super"
    // Begin Example Solution
    /** @type {Geom.Geometry} */ const geometry = new Geom.Geometry();
    // Use the same vertices but add the backside faces
    geometry.vertices.push(new T.Vector3(-1, 1, -1));
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(1, 1, -1));
    // Add the front faces
    /** @type {Geom.Face3} */ const f1 = new Geom.Face3(0, 1, 2);
    geometry.faces.push(f1);
    // Set face color
    f1.color.setStyle("red");
    /** @type {Geom.Face3} */ const f2 = new Geom.Face3(1, 3, 2);
    geometry.faces.push(f2);
    // Set face color
    f2.color.setStyle("green");
    // Add the back faces
    /** @type {Geom.Face3} */ const f3 = new Geom.Face3(0, 3, 1);
    geometry.faces.push(f3);
    // Set face color
    f3.color.setStyle("blue");
    /** @type {Geom.Face3} */ const f4 = new Geom.Face3(0, 2, 3);
    geometry.faces.push(f4);
    // Set face color
    f4.color.setStyle("yellow");
    geometry.computeFaceNormals();
    // The material uses vertexColors
    /** @type {T.MeshStandardMaterial} */ const material = new T.MeshStandardMaterial({
      roughness: 0.75,
      vertexColors: true
    });
    /** @type {T.Mesh} */ const mesh = new T.Mesh(geometry.toBufferGeometry(), material);
    super("Object1", mesh);
    // End Example Solution
  }
}
class Object2 extends GrObject {
  constructor() {
    // student, fill this in
    // you will need a call to "super"
    // Begin Example Solution
    /** @type {Geom.Geometry} */ const geometry = new Geom.Geometry();
    // Use the same vertices but add the backside faces
    geometry.vertices.push(new T.Vector3(-1, 1, -1));
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(1, 1, -1));
    // Add the front faces
    /** @type {Geom.Face3} */ const f1 = new Geom.Face3(0, 1, 2);
    geometry.faces.push(f1);
    // Set vertex color
    f1.vertexColors[0] = new T.Color("red");
    f1.vertexColors[1] = new T.Color("green");
    f1.vertexColors[2] = new T.Color("blue");
    /** @type {Geom.Face3} */ const f2 = new Geom.Face3(1, 3, 2);
    geometry.faces.push(f2);
    // Set vertex color
    f2.vertexColors[0] = new T.Color("green");
    f2.vertexColors[1] = new T.Color("yellow");
    f2.vertexColors[2] = new T.Color("blue");
    // Add the back faces
    /** @type {Geom.Face3} */ const f3 = new Geom.Face3(0, 3, 1);
    geometry.faces.push(f3);
    // Set vertex color
    f3.vertexColors[0] = new T.Color("red");
    f3.vertexColors[1] = new T.Color("yellow");
    f3.vertexColors[2] = new T.Color("green");
    /** @type {Geom.Face3} */ const f4 = new Geom.Face3(0, 2, 3);
    geometry.faces.push(f4);
    // Set vertex color
    f4.vertexColors[0] = new T.Color("red");
    f4.vertexColors[1] = new T.Color("blue");
    f4.vertexColors[2] = new T.Color("yellow");
    geometry.computeFaceNormals();
    // The material uses vertexColors
    /** @type {T.MeshStandardMaterial} */ const material = new T.MeshStandardMaterial({
      roughness: 0.75,
      vertexColors: true
    });
    /** @type {T.Mesh} */ const mesh = new T.Mesh(geometry.toBufferGeometry(), material);
    super("Object2", mesh);
    // End Example Solution
  }
}
class Object3 extends GrObject {
  constructor() {
    // student, fill this in
    // you will need a call to "super"
    // Begin Example Solution
    /** @type {Geom.Geometry} */ const geometry = new Geom.Geometry();
    // Use the same vertices but add the backside faces
    geometry.vertices.push(new T.Vector3(-1, 1, -1));
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(1, 1, -1));
    // Add the front faces
    /** @type {Geom.Face3} */ const f1 = new Geom.Face3(0, 1, 2);
    geometry.faces.push(f1);
    const s2 = Math.sqrt(2) / 2;
    // Set vertex normals
    f1.vertexNormals[0] = new T.Vector3(-s2, 0, s2);
    f1.vertexNormals[1] = new T.Vector3(0, 0, 1);
    f1.vertexNormals[2] = new T.Vector3(0, 0, 1);
    /** @type {Geom.Face3} */ const f2 = new Geom.Face3(1, 3, 2);
    geometry.faces.push(f2);
    // Set vertex normals
    f2.vertexNormals[0] = new T.Vector3(0, 0, 1);
    f2.vertexNormals[1] = new T.Vector3(s2, 0, s2);
    f2.vertexNormals[2] = new T.Vector3(0, 0, 1);
    // Add the back faces
    /** @type {Geom.Face3} */ const f3 = new Geom.Face3(0, 3, 1);
    geometry.faces.push(f3);
    // Set vertex normals
    f3.vertexNormals[0] = new T.Vector3(-s2, 0, s2);
    f3.vertexNormals[1] = new T.Vector3(s2, 0, s2);
    f3.vertexNormals[2] = new T.Vector3(0, 0, 1);
    /** @type {Geom.Face3} */ const f4 = new Geom.Face3(0, 2, 3);
    geometry.faces.push(f4);
    // Set vertex normals
    f4.vertexNormals[0] = new T.Vector3(-s2, 0, s2);
    f4.vertexNormals[1] = new T.Vector3(0, 0, 1);
    f4.vertexNormals[2] = new T.Vector3(s2, 0, s2);
    // The material uses vertexColors
    /** @type {T.MeshStandardMaterial} */ const material = new T.MeshStandardMaterial({
      roughness: 0.75,
      color: "yellow"
    });
    /** @type {T.Mesh} */ const mesh = new T.Mesh(geometry.toBufferGeometry(), material);
    super("Object3", mesh);
    // End Example Solution
  }
}

// translate an object in the X direction
function shift(grobj, x) {
  grobj.objects.forEach(element => {
    element.translateX(x);
  });
  return grobj;
}

// Set the Object's Y rotate
function roty(grobj, ry) {
  grobj.objects.forEach(element => {
    element.rotation.y = ry;
  });
  return grobj;
}

/*
 * The world making code here assumes the objects are +/- 1
 * and have a single mesh as their THREE objects.
 * If you don't follow this convention, you will need to modify
 * the code below.
 * The code is a little funky because it is designed to work for
 * a variety of demos.
 */
let mydiv = document.getElementById("div1");

let box = InputHelpers.makeBoxDiv({ width: mydiv ? 640 : 820 }, mydiv);
if (!mydiv) {
  InputHelpers.makeBreak(); // sticks a break after the box
}
InputHelpers.makeHead("Three Different Objects", box);

let world = new GrWorld({ width: mydiv ? 600 : 800, where: box });
let tt = shift(new Object1(), -3);
world.add(tt);

let t2 = shift(new Object2(), 0);
world.add(t2);

let t3 = shift(new Object3(), 3);
world.add(t3);

let div = InputHelpers.makeBoxDiv({}, box);

let sl = new InputHelpers.LabelSlider("ry", { min: -2, max: 2, where: div });

InputHelpers.makeBreak(box);

sl.oninput = function (evt) {
  let v = sl.value();
  roty(tt, v);
  roty(t2, v);
  roty(t3, v);
};

world.go();
