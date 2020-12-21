import os
import json
import psycopg2
from psycopg2.extras import RealDictCursor

print("Content-type: application/json")
print()

file = open(os.path.dirname(os.path.abspath(__file__)) + "\pg.credentials")
connection_string = file.readline() + file.readline()
pg = psycopg2.connect(connection_string)

records_query = pg.cursor(cursor_factory=RealDictCursor)
records_query.execute("""
    select 'g' || class_code as class_code, lc.class_name from netherlands.landuse_class 
as lc, s2241587.landuse_per_district as lpd where lc.class_code = lpd.group_2012
group by class_code
ORDER BY class_code
""")

print('{"success":"true", "classes":', json.dumps(records_query.fetchall()), '}')
