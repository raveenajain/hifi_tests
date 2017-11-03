var _step = 0;
var properties;
var createdEntities = [];

// all objects will have a finite lifetime
var LIFETIME = 90; // 1 min

var zone = Entities.addEntity({
    "dimensions": {
        "x": 100,
        "y": 50,
        "z": 100.0009994506836
    },
    "keyLight": {
        "direction": {
            "x": 0.567731374502182,
            "y": -0.258819043636322,
            "z": 0.951251208782196
        }
    },
    "name": "ZoneTest",
    "shapeType": "box",
    "type": "Zone",
    lifetime: LIFETIME,
});
var floor = Entities.addEntity({
    type: "Box",
    name: "Floor",
    position: {x:0, y:-1, z:0},
    dimensions: {x:100, y:1, z:100},
    dynamic: false,
    lifetime: LIFETIME,
    color: { red: 230, green: 250, blue: 200 }
});
var voxel = Entities.addEntity(       {
    type: "PolyVox",
    name: "Terrain",
    position: {x:-4.4, y:1, z:3.4},
    dimensions: {x: 5, y: 5, z: 5},
    rotation: {
        "w": 0.7071067690849304,
        "x": 0,
        "y": 0.7071067690849304,
        "z": 0
    },
    voxelData: "ABAAQAAQAAAAzgAAQAB42u3YMQ7DIBBE0bn/pZ0mRQxYRhFSwvr9bqn5mt05DmAdaeekndPOaeePl+T8kpxfcqadcYMfi6X+5wv/0/mfzv8cve+9/+A/fpr39/7Le/7jMf7Le/7jwff+wrwH//Hf9/66vA//+Y/t+/25vLff8x8F+v25vLff8x8V9v2p+36434P/2L7fG+T9cL93z/MfFfN+tN+75/mP/fN+rs97PzKK/yiW96P9Xn/HfxT0f5j3+jv+4zF5f9Xfgf+olvdX9zzq8wIVumOl",
    voxelSurfaceStyle: 0,
    voxelVolumeSize: {x: 16, y: 64, z: 16},
    lifetime: LIFETIME,
    dynamic: false,
    xTextureURL: "http://headache.hungry.com/~seth/hifi/dirt.jpeg",
    yTextureURL: "http://headache.hungry.com/~seth/hifi/grass.png",
    zTextureURL: "http://headache.hungry.com/~seth/hifi/dirt.jpeg"
});
var hifi = Entities.addEntity({
    type: "Model",
    name: "Hifi",
    position: {x:2, y:0, z:2},
    dimensions: {x:1, y:1, z:1},
    dynamic: false,
    lifetime: LIFETIME,
    modelURL: "https://github.com/highfidelity/hifi_tests/blob/master/assets/models/material_matrix_models/fbx/master/hifi.fbx?raw=true"
});
var roof = Entities.addEntity({
    name: "Roof",
    position: {x:0, y:0, z:10},
    "color": {
        "blue": 0,
        "green": 0,
        "red": 255
    },
    "dimensions": {
        "x": 10,
        "y": 0.20,
        "z": 10
    },
    "shape": "Cube",
    "type": "Box",
});
var greenPaint = Entities.addEntity({
    color: {
        blue: 10,
        green: 10,
        red: 10
    },
    position: {x:1.25, y:0.5, z:1},
    dimensions: {x:500, y:500, z:500},
    linePoints: [
        {
            "x": 0,
            "y": 0,
            "z": 0
        },
        {
            "x": 0.10061257518827915,
            "y": 0.16649961471557617,
            "z": 0.001007152532110922
        },
        {
            "x": 0.23273462429642677,
            "y": 0.40803611278533936,
            "z": 0.0010143050894839689
        },
        {
            "x": 0.34589760005474091,
            "y": 0.63782751560211182,
            "z": 0.0010214576468570158
        },
        {
            "x": 0.51725380122661591,
            "y": 1.0473054647445679,
            "z": 0.0010309943900210783
        },
        {
            "x": 0.61552040278911591,
            "y": 1.2999576330184937,
            "z": 0.0010381469473941252
        },
        {
            "x": 0.71815483272075653,
            "y": 1.5337413549423218,
            "z": 0.0010429153189761564
        },
        {
            "x": 0.86931221187114716,
            "y": 1.8406063318252563,
            "z": 0.0010524520621402189
        },
        {
            "x": 0.91085426509380341,
            "y": 1.9616776704788208,
            "z": 0.0010548362479312345
        },
        {
            "x": 0.88525764644145966,
            "y": 2.0158451795578003,
            "z": 0.0010548362479312345
        },
        {
            "x": 0.81161491572856903,
            "y": 1.9779795408248901,
            "z": 0.0010500678763492033
        },
        {
            "x": 0.72746269404888153,
            "y": 1.8921512365341187,
            "z": 0.001045299504767172
        },
        {
            "x": 0.50455085933208466,
            "y": 1.6641658544540405,
            "z": 0.0010309943900210783
        },
        {
            "x": 0.32814018428325653,
            "y": 1.4712589979171753,
            "z": 0.0010190734610660002
        },
        {
            "x": 0.2354239858686924,
            "y": 1.3538247346878052,
            "z": 0.0010143050894839689
        }
    ],
    name: "hifi_polyline_markerStroke",
    normals: [
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        },
        {
            "x": -6.1036087572574615e-05,
            "y": 1.862645149230957e-09,
            "z": 1
        }
    ],
    rotation: {
        "w": 1,
        "x": 0,
        "y": 0,
        "z": 0
    },
    strokeWidths: [
        0.020000000949949026,
        0.030666666571050882,
        0.041333334520459175,
        0.052000000141561031,
        0.062666665762662888,
        0.073333331383764744,
        0.0839999970048666,
        0.094666667282581329,
        0.094666667282581329,
        0.0839999970048666,
        0.073333331383764744,
        0.062666665762662888,
        0.052000000141561031,
        0.041333334520459175,
        0.030666666571050882
    ],
    textures: "http://mpassets.highfidelity.com/53f930fb-a433-4ccf-8974-2c53a631e40e-v1/markerStroke.png",
    type: "PolyLine",
    lifetime: LIFETIME,
    dynamic: false,
});

createdEntities.push(zone);
createdEntities.push(floor);
createdEntities.push(voxel);
createdEntities.push(hifi);
createdEntities.push(greenPaint);
createdEntities.push(roof);

var steps = [
    // Step 2
    function() {
        properties = {
            visible: false
        };
        Entities.editEntity(zone, properties);
        properties = {
            position: {x:-4, y:10, z:2}
        };
        Entities.editEntity(roof, properties);
    },
    // Step 3
    function() {
        properties = {
            "visible": true,
            "keyLight": {
                "intensity": 1,
                "direction": Vec3.fromPolar(45*Math.PI/180.0, 90*Math.PI/180.0),
            }
        };
        Entities.editEntity(zone, properties);
    },
    // End
    function () {
    }
];

function reset() {
    MyAvatar.goToLocation(
        {x:0, y:0, z:0},
        true,
        Quat.angleAxis(0, {x: 1, y: 0, z: 0}),
        true
    );
}

print("Running Shadows Test - press <SPACE> to go to next steps");
reset();

Controller.keyPressEvent.connect(function(event){
    if (event.key == 32) {
        steps[_step]();
        if (_step<steps.length-1) {
            print("Playing Shadows Test - step "+(_step+2));
            _step++;
            _step = Math.min(_step, steps.length-1);
        } else {
            print("Playing Shadows Test - finished");
        }
    }
});
  
// clean up after test
Script.scriptEnding.connect(function () {
    for (var i = 0; i < createdEntities.length; i++) {
        Entities.deleteEntity(createdEntities[i]);
    }
});