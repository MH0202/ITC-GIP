# import cgi
# import json
# import psycopg2
# from psycopg2.extras import RealDictCursor

# params = cgi.FieldStorage()
# country_name = params.getvalue("country_name")

# if country_name.lower() == "netherlands":

#   pg = psycopg2.connect("dbname='exercises' host='gisedu.itc.utwente.nl' port='5432' \
#                         user='exercises' password='exercises'")

#   records_query = pg.cursor(cursor_factory=RealDictCursor)
#   records_query.execute("""
#       SELECT 'Feature' as type,
#              gid as id,
#              row_to_json((SELECT list FROM (SELECT admin_name, cntry_name,pop_admin) AS list )) as properties,
#              ST_AsGeoJSON(ST_Transform(geom,4326),6) as geometry
#       FROM world.prov_pop
#       WHERE cntry_name = '%s';
#   """ % (country_name))

#   result = '{"type":"FeatureCollection", "features":' + str(records_query.fetchall()) + '}'
#   result = result.replace( "'{" , "{" ).replace( "}'" , "}" )

#   print ("Content-type: application/json; charset=utf-8")
#   print ()
#   print ( result.replace( "'" , '"' ) )

# else:

#   print ("Content-type: text/plain; charset=utf-8")
#   print ()
#   print ("The Country  %s' is not available...!" % (country_name))


import cgi
import json
import psycopg2
from psycopg2.extras import RealDictCursor

params = cgi.FieldStorage()
country_name = params.getvalue("CountryName")

if (country_name.lower() == "netherlands" or country_name.lower() == "belgium" or
        country_name.lower() == "bangladesh"):

    pg = psycopg2.connect("dbname='exercises' host='gisedu.itc.utwente.nl' port='5432' \
                        user='exercises' password='exercises'")

    records_query = pg.cursor(cursor_factory=RealDictCursor)
    records_query.execute("""
      SELECT 'Feature' as type, 
             gid as id, 
             row_to_json((SELECT list FROM (SELECT admin_code, admin_name, pop_admin) AS list )) as properties, 
             ST_AsGeoJSON(ST_Transform(geom,4326),6) as geometry 
      FROM world.prov_pop 
      WHERE cntry_name = '%s';
  """ % (country_name))

    result = '{"type":"FeatureCollection", "features":' + \
        str(records_query.fetchall()) + '}'
    result = result.replace("'{", "{").replace("}'", "}")

    print("Content-type: application/json; charset=utf-8")
    print()
    print(result.replace("'", '"'))

else:

    print("Content-type: text/plain; charset=utf-8")
    print()
    print("The Country  %s' is not available...!" % (country_name))
