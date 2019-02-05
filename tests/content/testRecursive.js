// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var nitpick = createNitpick(Script.resolvePath("."));

var testsRootPath = nitpick.getTestsRootPath();

if (typeof Test !== 'undefined') {
    Test.wait(10000);
};

nitpick.enableRecursive();
nitpick.enableAuto();

Script.include(testsRootPath + "content/overlay/material/test.js");
Script.include(testsRootPath + "content/entity/zone/zoneOrientation/test.js");
Script.include(testsRootPath + "content/entity/zone/zoneEffects/test.js");
Script.include(testsRootPath + "content/entity/zone/shadowControl/test.js");
Script.include(testsRootPath + "content/entity/zone/create/test.js");
Script.include(testsRootPath + "content/entity/zone/ambientLightInheritance/test.js");
Script.include(testsRootPath + "content/entity/text/topMargin/test.js");
Script.include(testsRootPath + "content/entity/text/textColor/test.js");
Script.include(testsRootPath + "content/entity/text/textAlpha/test.js");
Script.include(testsRootPath + "content/entity/text/rightMargin/test.js");
Script.include(testsRootPath + "content/entity/text/lineHeight/test.js");
Script.include(testsRootPath + "content/entity/text/leftMargin/test.js");
Script.include(testsRootPath + "content/entity/text/bottomMargin/test.js");
Script.include(testsRootPath + "content/entity/text/billboardMode/test.js");
Script.include(testsRootPath + "content/entity/text/backgroundColor/test.js");
Script.include(testsRootPath + "content/entity/text/backgroundAlpha/test.js");
Script.include(testsRootPath + "content/entity/shape/renderLayer/front/test.js");
Script.include(testsRootPath + "content/entity/shape/renderLayer/alpha/test.js");
Script.include(testsRootPath + "content/entity/shape/create/test.js");
Script.include(testsRootPath + "content/entity/procedural/shapeUniforms/test.js");
Script.include(testsRootPath + "content/entity/polyline/textures/test.js");
Script.include(testsRootPath + "content/entity/polyline/strokeColors/test.js");
Script.include(testsRootPath + "content/entity/polyline/normals/test.js");
Script.include(testsRootPath + "content/entity/polyline/linePoints/test.js");
Script.include(testsRootPath + "content/entity/polyline/isUVModeStretch/test.js");
Script.include(testsRootPath + "content/entity/polyline/glow/test.js");
Script.include(testsRootPath + "content/entity/polyline/faceCamera/test.js");
Script.include(testsRootPath + "content/entity/polyline/color/test.js");
Script.include(testsRootPath + "content/entity/parenting/test.js");
Script.include(testsRootPath + "content/entity/model/renderLayer/hud/test.js");
Script.include(testsRootPath + "content/entity/model/renderLayer/front/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/transparent/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/still_life/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/waterBottle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/vertexColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/unlit/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangleNoIndices/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureTransform/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureSettings/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureCoordinate/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/suzy/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/sponza/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/specVsMetal/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/sparseAccessor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/simpleMesh/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/scifiHelmet/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/riggedSimple/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/riggedFigure/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/plane/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/orientation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/oldCamera/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/normalTangentMirror/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/normalTangent/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/multiUV/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphSphere/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphPrimitives/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphCube/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/monster/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/milkTruck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/metalRoughSpheres/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/lantern/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/interpolation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/fish/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/engine/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/vertexColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/triangleNoIndices/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/triangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/textureSettings/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/sparseAccessor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/riggedFigure/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/orientation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/monster/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/metalRoughSpheres/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/engine/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/duck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/city/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/buggy/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/brainstem/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/boxTexture/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/boxAnimation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/embedded/animatedTriangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/duck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/damagedHelmet/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/city/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/buggy/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/brainstem/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxTexture/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxNPOT/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxInterleaved/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxAnimation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boomBoxAxes/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boomBox/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/avocado/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/animatedTriangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/animatedCube/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/alphaBlend/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/glbTestSuite/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/glbTestSuite/avocado/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/still_life/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/simple/test.js");
Script.include(testsRootPath + "content/entity/material/fallthrough/test.js");
Script.include(testsRootPath + "content/entity/material/create/test.js");
Script.include(testsRootPath + "content/entity/material/apply/targeting/test.js");
Script.include(testsRootPath + "content/entity/material/apply/overlays/model/test.js");
Script.include(testsRootPath + "content/entity/material/apply/entities/shape/test.js");
Script.include(testsRootPath + "content/entity/material/apply/entities/model/test.js");
Script.include(testsRootPath + "content/entity/material/apply/avatars/test.js");
Script.include(testsRootPath + "content/entity/light/spot/create/test.js");
Script.include(testsRootPath + "content/entity/light/point/create/test.js");
Script.include(testsRootPath + "content/entity/image/subImage/test.js");
Script.include(testsRootPath + "content/entity/image/keepAspectRatio/test.js");
Script.include(testsRootPath + "content/entity/image/emissive/test.js");
Script.include(testsRootPath + "content/entity/image/color/test.js");
Script.include(testsRootPath + "content/entity/image/billboardMode/test.js");
Script.include(testsRootPath + "content/entity/image/alpha/test.js");
Script.include(testsRootPath + "content/entity/grid/gridEvery/test.js");
Script.include(testsRootPath + "content/entity/grid/followCamera/test.js");
Script.include(testsRootPath + "content/entity/grid/color/test.js");
Script.include(testsRootPath + "content/entity/grid/alpha/test.js");

nitpick.runRecursive();
