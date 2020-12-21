# ---------------------
# Coordinate Transformation function using WPS specification
# ---------------------
from osgeo import ogr
from osgeo import osr

def title():
    return "Coordinate Transform" # title of the function

def abstract():
    return "A function that tranform coordinates of a vector geometry from one spatial reference system to another." # short description of the function

def inputs():
    return [
        ['feature', 'Input feature','The feature in the source reference system.','application/json', True],
        ['sourcesrid', 'Source SRID', 'The Spatial Reference System Identifier for the input data e.g 4326.', 'integer', True],
        ['targetsrid', 'Target SRID', 'The Spatial Reference System Identifier for the output data e.g 3857.', 'integer', True]
    ]

def outputs():
    return [['result', 'transformed feature','The feature in the target reference system','application/json']]

def execute(parameters):
    feature = parameters.get('feature')
    sourcesrid = parameters.get('sourcesrid')
    targetsrid = parameters.get('targetsrid')
    if (feature is not None) and (sourcesrid is not None) and (targetsrid is not None):
        feature = feature['value']
        sourcesrid = sourcesrid['value']
        targetsrid = targetsrid['value']

    source = osr.SpatialReference()
    source.ImportFromEPSG(int(sourcesrid))
    target = osr.SpatialReference()
    target.ImportFromEPSG(int(targetsrid))

    coordtransform = osr.CoordinateTransformation(source, target)
    inputfeature = ogr.CreateGeometryFromJson(feature)
    inputfeature.Transform(coordtransform)
    print("Content-type: application/json")
    print()
    print(inputfeature.ExportToJson())