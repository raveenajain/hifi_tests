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

Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/transparent/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/still_life/test.js");

Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/alphaBlend/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/animatedCube/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/animatedTriangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/avocado/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boomBox/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boomBoxAxes/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxAnimation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxInterleaved/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxNPOT/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxTexture/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/brainstem/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/buggy/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/city/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/damagedHelmet/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/duck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/engine/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/fish/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/interpolation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/lantern/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/metalRoughSpheres/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/milkTruck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/monster/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphCube/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphPrimitives/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphSphere/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/multiUV/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/normalTangent/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/normalTangentMirror/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/oldCamera/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/orientation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/plane/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/riggedFigure/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/riggedSimple/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/scifiHelmet/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/simpleMesh/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/sparseAccessor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/specVsMetal/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/sponza/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/suzy/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureCoordinates/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureSettings/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureTransform/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangleNoIndices/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/unlit/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/vertexColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/waterBottle/test.js");

Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxAnimation/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/city/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/duck/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/metalRoughSpheres/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/monster/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/morphCube/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/riggedFigure/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/sparseAccessor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/specVsMetal/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/textureSettings/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangle/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/triangleNoIndices/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/vertexColor/test.js");

Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/still_life/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/simple/test.js");

nitpick.runRecursive();
