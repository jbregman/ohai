require 'json'

file = File.read("test")
data_hash = JSON.parse(file)

ip_address =  data_hash['ipaddress']
mac_address = data_hash['macaddress']
hostname = data_hash['hostname']
machinename = data_hash['machinename']
user = data_hash['current_user']

print ip_address+'|'+mac_address+"|"+hostname+"|"+machinename+"|"+user

