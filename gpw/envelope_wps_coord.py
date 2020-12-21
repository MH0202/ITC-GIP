# ---------------------
# Envelope Extraction function using WPS specification
# ---------------------
from osgeo import ogr


def title():
    return "Get Envelope" # title of the function

def abstract():
    return "A function that gets the envelope or bounding box of a vector geometry." # short description of the function

def inputs():
    return [
        ['feature', 'Input feature','The original feature whose envelope is to be determined.','application/json', True],
    ]

def outputs():
    return [
        ['result', 'Envelope feature','The envelope feature extents (xmin,xmax,ymin,ymax) of the bounding box of the original vector','application/text']
    ]

def execute(parameters):
    feature = parameters.get('feature')
    if (not feature is None):
        feature = feature['value']

    # Transform geojson into a geometry feature
    inputfeature = ogr.CreateGeometryFromJson(feature)
    env = inputfeature.GetEnvelope()                    # extents of geometry
    print("Content-type: application/text")
    print()
    print("Feature extents: xmin=%.2f, xmax=%.2f, ymin=%.2f, ymax=%.2f" % (env[0], env[1], env[2], env[3]))