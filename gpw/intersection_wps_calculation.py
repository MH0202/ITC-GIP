# ---------------------
# Intersection Calculation function using WPS specification
# ---------------------
from osgeo import ogr

def title():
    return "Intersection Calculation" # title of the function

def abstract():
    return "A function that calculate intersection between two geometries." # short description of the function

def inputs():
    return [
        ['geom1', 'Geometry 1','The geometry of first object.','application/json', True],
        ['geom2', 'Geometry 2','The geometry of second object.', 'application/json', True],
    ]

def outputs():
    return [['result', 'intersection','Intersection between two objects', 'application/json']]

def execute(parameters):
    geom1 = parameters.get('geom1')
    geom2 = parameters.get('geom2')
    if (geom1 is not None) and (geom2 is not None):
        geom1 = geom1['value']
        geom2 = geom2['value']

    poly1 = ogr.CreateGeometryFromJson(geom1)
    poly2 = ogr.CreateGeometryFromJson(geom2)

    intersection = poly1.Intersection(poly2)

    print("Content-type: application/json")
    print()
    print (intersection.ExportToJson())
