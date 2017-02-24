# Kamailio_Register_Pgsql
Kamailio registrar server with pgsql database engine

# Quick Start

## Install the Kamailio Dependency 
```shell
$  apt-get install git gcc flex bison make lib32ncurses5-dev libevent-dev libcurl4-gnutls-dev  libcurl4-nss-dev libcurl4-openssl-dev  apt-get install libcurl3
```
## Install the LUA  
```shell
$  apt-get install lua5.1 liblua5.1-dev 
```
## Install the postgresql
```shell
$  sudo apt-get install postgresql-9.4 postgresql-client-9.4 libpq-dev
```

## Install the Kamailio from GIT Repository
```shell
$ git clone https://github.com/kamailio/kamailio.git
$ git checkout remotes/origin/5.5
$ cd kamailio/src
$ make cfg
$ make all && make install
```
### NOTE: you need to edit modules.lst file for including the app_lua,db_postgres app_lua http_async_client
Example: modules.lst
```
# this file is autogenerated by make modules-cfg

# the list of sub-directories with modules
modules_dirs:=modules

# the list of module groups to compile
cfg_group_include=

# the list of extra modules to compile
include_modules=db_postgres app_lua http_async_client

# the list of static modules
static_modules=

# the list of modules to skip from compile list
skip_modules=

# the list of modules to exclude from compile list
exclude_modules= acc_radius app_java app_mono app_perl app_python auth_ephemeral auth_identity auth_radius carrierroute cdp cdp_avp cnxcc cplc crypto db2_ldap db_berkeley db_cassandra db_mongodb db_mysql db_oracle db_perlvdb db_sqlite db_unixodbc dialplan dnssec erlang evapi geoip geoip2 gzcompress h350 http_async_client http_client ims_auth ims_charging ims_dialog ims_icscf ims_isc ims_ocs ims_qos ims_registrar_pcscf ims_registrar_scscf ims_usrloc_pcscf ims_usrloc_scscf jansson janssonrpcc json jsonrpcc kazoo lcr ldap log_systemd memcached misc_radius ndb_cassandra ndb_mongodb ndb_redis nsq osp outbound peering presence presence_conference presence_dialoginfo presence_mwi presence_profile presence_reginfo presence_xml pua pua_bla pua_dialoginfo pua_reginfo pua_rpc pua_usrloc pua_xmpp rabbitmq regex rls sctp snmpstats tls utils uuid websocket xcap_client xcap_server xhttp_pi xmlops xmlrpc xmpp $(skip_modules)

modules_all= $(filter-out modules/CVS,$(wildcard modules/*))

```
### After Installation of Kamailio edit kamctlrc (/usr/local/etc/kamailio/kamctlrc) as follow:

```
# this parameter.
 DBENGINE=PGSQL

## database host
DBHOST=127.0.0.1

## database post
#DBPORT=5432

## database name (for ORACLE this is TNS name)
DBNAME=kamailio

# database path used by dbtext, db_berkeley or sqlite
# DB_PATH="/usr/local/etc/kamailio/dbtext"

## database read/write user
DBRWUSER="postgres"

## password for database read/write user
DBRWPW="kamailio"

## database read only user
DBROUSER="postgres"

## password for database read only user
DBROPW="kamailio"
```
### copy the kamailio_registrar_pgsql.cfg to your kamailio cfg directory(default:/usr/local/etc/kamailio)

### start the kamailio with -f option 
```shell
$ kamailio -f /usr/local/etc/kamailio/kamailio_registrar_pgsql.cfg
```
### Note: you can test the Register with sipp scenario :
```shell
./sipp 172.31.26.0:7070 -sf test_scenario/Register.xml -inf test_scenario/Register.csv -m 1 -l 1
```
