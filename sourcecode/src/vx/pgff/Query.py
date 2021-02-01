#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Author: Ivar Vargas Belizario
# Copyright (c) 2020
# E-mail: ivar@usp.br


import tornado.ioloop
import tornado.web
import tornado.httpserver

import ujson
import glob
import os

import pandas as pd
import numpy as np
import os.path
import math

import bcrypt
import uuid

import zipfile
from io import BytesIO
from datetime import datetime
from bson.objectid import ObjectId


from vx.pgff.Settings import *
from vx.pgff.BaseHandler import *
from vx.pgff.MakeProjection import *
from vx.pgff.graphtree.gff import *
from vx.pgff.User import *


from vx.com.py.matrix.MData import *
from vx.com.py.database.MongoDB import *


class Query(BaseHandler):

    #Get RequestHandler
    def get(self):
        dat = self.get_argument('data')
        dat = ujson.loads(dat)

        app = DataTransfer()
        app.load(dat)
        obj = ""

        if app.argms["type"]==0:
            #obj = app.action()
            if app.argms["algorithm"]=="mst" or app.argms["algorithm"]=="nj":
                g = Graph()
                g.make_graph(Settings.DATA_PATH, app.argms)
                # print("app.argms", app.argms)
                # save
                
                app.argms["nodes"] = g.data["graph"]["nodes"];
                app.argms["ranking"] = g.data["ranking"];
                app.argms["rankingmin"] = g.data["rankingmin"];
                app.argms["rankingmax"] = g.data["rankingmax"];
                
                # print("g.data[ranking]", g.data["ranking"], len(g.data["ranking"]))
                # print("g.data[root]", g.data["root"], len(g.data["root"]))
                
                Query.savegraph(app,g.data);
                resultr = Query.openfeature(app);
                obj = ujson.dumps(resultr);

        elif app.argms["type"]==4:
            dap = MakeProjection()
            dap.execute(app.argms);

            Query.saveprojection(app,dap.data);

            resultr = Query.openinstance(app);
            obj = ujson.dumps(resultr);

        elif app.argms["type"]==1:
            obj = ujson.dumps(Query.listdatasets(self.current_user));

        elif app.argms["type"]==2:
            obj = ujson.dumps(Query.loadatributenames(app.argms));
        elif app.argms["type"]==3:
            obj = ujson.dumps(Query.getdatasetname(app.argms));
        # elif app.argms["type"]==4:
        #     obj = ujson.dumps(Query.savechangedashboard(app));
        elif app.argms["type"]==5:
            obj = ujson.dumps(Query.opencsv(app));


        elif app.argms["type"]==6:
            obj = ujson.dumps(Query.updatedatasetname(app));
        elif app.argms["type"]==7:
            obj = ujson.dumps(Query.clonedataset(app, self.current_user));
        elif app.argms["type"]==8:
            obj = ujson.dumps(Query.sharedataset(app));
        elif app.argms["type"]==9:
            obj = ujson.dumps(Query.unsharedataset(app));
        elif app.argms["type"]==10:
            obj = ujson.dumps(Query.dropdataset(app));

        elif app.argms["type"]==11:
            obj = ujson.dumps(User.changePassword(app, self.current_user));

        elif app.argms["type"]==12:
            obj = Query.downloaddataset(app, self.current_user, self);

        elif app.argms["type"]==13:
            obj = ujson.dumps(Query.silhouette(app));

        elif app.argms["type"]==14:
            obj = Query.openfeature(app)
            #print("holaXXXXX",self.current_user, obj);
            obj = ujson.dumps(obj);
            
        elif app.argms["type"]==15:
            obj = Query.openinstance(app)
            #print("holaXXXXX",self.current_user, obj);
            obj = ujson.dumps(obj);

        elif app.argms["type"]==16:
            obj = Query.export2dproj(app, self);

        elif app.argms["type"]==17:
            obj = Query.exportfeat2datafile(app, self);

        elif app.argms["type"]==18:
            obj = User.getUsers();
            obj = ujson.dumps(obj);

        elif app.argms["type"]==19:
            obj = User.newUser(app.argms["data"]);
            obj = ujson.dumps(obj);

        elif app.argms["type"]==20:
            obj = User.setAdmin(app.argms["data"]);
            obj = ujson.dumps(obj);


        # self.write(ujson.dumps(obj))
        self.write(obj)
        self.finish()
        #self.write(obj)


    #Post RequestHandler
    def post(self):
        rs = ""
        #print("data psotssssssssssssssss", self.get_argument('data'))
        if self.current_user:

            dat = self.get_argument('data')
            dat = ujson.loads(dat)
            
            app = DataTransfer()
            app.load(dat)

            #print("datdatdat",app.argms)
            if app.argms["type"]==3:
                app.argms["file"] = self.request.files['fileu'][0]
    #            obj.file = filed['body'].decode('utf-8')

            rs = Query.uploadfiledata(app.argms, self.current_user);

        self.write(rs)





    # static query methods
    @staticmethod
    def listfiles(outdir, ext):
        dires = []
        fileso = []
        for name in os.listdir(outdir):
            dires.append(os.path.join(outdir, name))
            if name.endswith(ext):
#                fileso.append(str(os.path.join(outdir, str(name))))
                fileso.append({"name":str(name)})
        return fileso

    @staticmethod
    def listdirs(folder):
        if os.path.exists(folder):
            # listd =  [d for d in os.listdir(folder) if os.path.isdir(os.path.join(folder, d))]
            # for d in listd:
            #     if os.path.isdir(os.path.join(folder, d)):
            #         print("ddd",d)
            return [d for d in os.listdir(folder) if os.path.isdir(os.path.join(folder, d))]
        else:
            return []

    @staticmethod
    def listdatasets(iduser):
        rs = []
        if Settings.MULIUSER == 0:
            dir_list = Query.listdirs(Settings.DATA_PATH)
            # print("dir_list", dir_list)
            for di in dir_list:
                # print(Settings.DATA_PATH, di)
                ro = DBX.find(DBS.DBGFF, "data",{"_id": di})
                for row in ro:
                    rs.append( {"_id":row["_id"], 
                        "_id_user": "localuser",
                        "owner":"localuser",
                        "name":row["name"],
                        "dateupdate":row["dateupdate"],
                        "isshare":row["isshare"],
                        } )

        elif Settings.MULIUSER == 1:

            iduser = iduser.decode("utf-8")
            dbs =   list(MongoDB.find(DBS.DBGFF, "data",
                        {"$or": [
                                    {"_id_user": ObjectId(iduser)},
                                    {"isshare": 1}
                                ]
                        }
                    ))

            for row in dbs:
                row_id = str(row["_id"])
                row_id_user = str(row["_id_user"])
                row_owner = ""


                userdata = list(MongoDB.find(DBS.DBGFF, "user", {"_id": ObjectId(row_id_user)}))

                for ud in userdata:
                    row_owner = ud["name"]
                    if iduser!=str(ud["_id"]):
                        row_id_user = ""

                row["_id"] = row_id
                row["_id_user"] = row_id_user
                row["owner"] = row_owner

            for row in dbs:
                rs.append( {"_id":row["_id"], 
                            "_id_user": row["_id_user"],
                            "owner":row["owner"],
                            "name":row["name"],
                            "dateupdate":row["dateupdate"],
                            "isshare":row["isshare"],
                            } )
        return rs

    @staticmethod
    def loadatributenames(argms):
        f = open(Settings.DATA_PATH+argms["file"]+"/transform.csv", "r")
        columns = f.readline().split(",")
        columns = [x.strip() for x in columns]
        f.close()

        columns_aux = []
        for col in columns:
            if col != "INDEXIDUID_":
                columns_aux.append(col)
        columns = columns_aux
        #print("loadatributenames",columns)
        return columns

    @staticmethod
    def uploadfiledata(argms, iduser):
        r = "<script>alert('Not Supported File Format');</script>"

        # if Settings.MULIUSER == 0:
        if Settings.MULIUSER == 1:
            iduser = ObjectId(iduser.decode("utf-8"))
        #print("iduser",iduser.decode("utf-8"));
        path = Settings.DATA_PATH
        o_fname, ext = os.path.splitext(argms["file"]['filename'])
            
        dt_string = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        #print(ext, ext)
        if ext == ".csv" or ext == ".data":
            rowdata =   {
                                "name": o_fname, 
                                "type": ext,

                                "configfeature": {},
                                "typefeature": "",
                                "layoutfeature": "",
                                "versionfeature": Settings.VERSION,

                                "configinstance": {},
                                "typeinstance": "",
                                "layoutinstance": "",
                                "versioninstance": Settings.VERSION,

                                "datecreate": dt_string,
                                "dateupdate": dt_string,
                                "hasupdate": 0,
                                "isshare": 0,
                                "_id_user":iduser
                            };
                

            idin = DBX.insert(DBS.DBGFF, "data", rowdata)
            idin = str(idin)
            if Settings.MULIUSER == 1:
                idin = ObjectId(idin)

            da = list(DBX.find(DBS.DBGFF, "data", {"_id": idin}))
            for d in da:
                r = "<script>parent.opendatsetparser('"+idin+"');</script>"

            if ext == ".csv":
                # save file
                n_fname = idin;
                n_fname_dir = path+n_fname;

                filename_o = n_fname_dir+"/original.csv";
                filename_t = n_fname_dir+"/transform.csv";

                #create directory
                if not os.path.exists(n_fname_dir):
                    os.makedirs(n_fname_dir)
                    
                #create original csv file
                output_file = open(filename_o, 'wb')
                output_file.write(argms["file"]['body'])
                output_file.close()
                argms["file"] = "";
                    
                #save transform csv file
                df = pd.read_csv(filename_o, delimiter=",")
                cat_columns = df.select_dtypes(['object']).columns
                df[cat_columns] = df[cat_columns].astype('category')
                for col in cat_columns:
                    df[col] = df[col].cat.codes
                df.to_csv(filename_t, index=False)
                
            elif ext == ".data":
                # save file
                n_fname = idin;
                n_fname_dir = path+n_fname;

                filename_o = n_fname_dir+"/original.data";
                filename_t = n_fname_dir+"/transform.csv";

                #create directory
                if not os.path.exists(n_fname_dir):
                    os.makedirs(n_fname_dir)
                    
                #create original csv file
                output_file = open(filename_o, 'wb')
                output_file.write(argms["file"]['body'])
                output_file.close()
                argms["file"] = "";
                    
                #read data original.csv and save
                MData.converdata2csv(filename_o, filename_t)

        return r

    @staticmethod
    def getdatasetname(argms):
        idin = argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = ""
        da = list(DBX.find(DBS.DBGFF, "data", {"_id": idin}))
        for d in da:
            re = d["name"];

        return re

    # @staticmethod
    # def savechangedashboard(app):
    #     idin = app.argms["file"]
    #     dt_string = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    #     MongoDB.update(   DBS.DBGFF, "data",
    #                                 {"_id": ObjectId(idin)},
    #                                 {   "config":app.argms,
    #                                     "layoutfeature":app.layoutfeature,
    #                                     "layoutinstance":app.layoutinstance,
    #                                     "dateupdate":dt_string,
    #                                 }
    #                             )
    #     #print("rerererererererererere",str(re))
    #     return {"response":1};

    @staticmethod
    def opencsv(app):
        filefe = Settings.DATA_PATH+app.argms["file"]+"/transform.csv"
        df = pd.read_csv(filefe)
        #print (df)

        return {"response":1};

    @staticmethod
    def updatedatasetname(app):
        idin = app.argms["file"]

        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        nname = app.argms["newname"]
        DBX.update( DBS.DBGFF,"data",
                                    {"_id": idin},
                                    {"name":nname})

        return {"response":1};

    @staticmethod
    def clonedataset(app, iduser):
        idin = app.argms["file"]

        if Settings.MULIUSER == 0:
            dat = list(DBX.find( DBS.DBGFF,"data", {"_id": idin}))
            datc = {}
            for row in dat:
                for k, v in row.items():
                    if k != "_id":
                        datc[k] = v

            dt_string = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            datc["name"] += " (clone)";
            datc["datecreate"] = dt_string;
            datc["dateupdate"] = dt_string;
            datc["_id_user"] = iduser;
            datc["_id"] = DBFile.uid();
            
            ndir = Settings.DATA_PATH+datc["_id"]
            if not os.path.exists(ndir):
                os.makedirs(ndir)
            DBFile.writeFile(ndir+"/data.obj", datc)

            for name in os.listdir(Settings.DATA_PATH+idin):
                if not name.endswith("data.obj"):
                    os.popen("cp -r "+Settings.DATA_PATH+idin+"/"+name+" "+ndir)

        elif Settings.MULIUSER == 1:
            idin = ObjectId(idin)

            dat = list(MongoDB.find( DBS.DBGFF,"data", {"_id": ObjectId(idin)}))
            datc = {}
            for row in dat:
                for k, v in row.items():
                    if k != "_id":
                        datc[k] = v

            dt_string = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            datc["name"] += " (clone)";
            datc["datecreate"] = dt_string;
            datc["dateupdate"] = dt_string;
            datc["_id_user"] = ObjectId(iduser.decode("utf-8"));

            idinsert = MongoDB.insert( DBS.DBGFF,"data", datc)
            idinsert = str(idinsert)

            ndir = Settings.DATA_PATH+idinsert
            if not os.path.exists(ndir):
                os.makedirs(ndir)

            os.popen("cp -r "+Settings.DATA_PATH+idin+"/* "+ndir)

        return {"response":1};

    @staticmethod
    def downloaddataset(app, iduser, selft):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        zipname="download.zip"

        zipb = ""
        dat = list(DBX.find( DBS.DBGFF,"data", {"_id": idin}))
        for row in dat:
            zipname=row["name"]+".zip";
            f  = BytesIO();
            
            dirpath = Settings.DATA_PATH+idin

            fzip = zipfile.ZipFile(f, 'w', zipfile.ZIP_DEFLATED)
            basedir = os.path.dirname(dirpath) + '/' 
            for root, dirs, files in os.walk(dirpath):
                if os.path.basename(root)[0] == '.':
                    continue
                # dirname = root.replace(basedir, '')
                dirname = root.replace(basedir, '')
                dirname = dirname.replace(idin, '')
                # print(dirname, basedir)
                # dirname = root
                for fi in files:
                    if fi[-1] == '~' or (fi[0] == '.' and fi != '.htaccess'):
                        continue
                    fzip.write(root + '/' + fi, dirname + '/' + fi)

            selft.set_header('Content-Type', 'application/zip')
            selft.set_header("Content-Disposition", "attachment; filename=%s" % zipname)
            fzip.close()
            zipb = f.getvalue()
            f.close()
        return zipb;

    @staticmethod
    def sharedataset(app):
        idin = app.argms["file"]
        MongoDB.update(   DBS.DBGFF, "data",
                                    {"_id": ObjectId(idin)},
                                    {"isshare":1 }
                                )

        return {"response":1};

    @staticmethod
    def unsharedataset(app):
        idin = app.argms["file"]
        MongoDB.update(   DBS.DBGFF, "data",
                                    {"_id": ObjectId(idin)},
                                    {"isshare":0 }
                                )

        return {"response":1};

    @staticmethod
    def dropdataset(app):
        idin = app.argms["file"]
        filefe = Settings.DATA_PATH+idin

        os.system("rm -rf "+filefe)

        if Settings.MULIUSER == 1:
            MongoDB.delete(DBS.DBGFF, "data", {"_id": ObjectId(idin)})

        r = "<script>parent.graphvis.loadlayoutdbs();</script>"
        return {"response":r};

    @staticmethod
    def savegraph(app,p):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        for r in re:
            # config = app.argms
            # if "config" in r and "projection" in r["config"]:
            #     config["projection"] = r["config"]["projection"]

            # MongoDB.update(DBS.DBGFF, "data", 
            #             {"_id":ObjectId(idin)}, {"config":config})

            dataup = {"versionfeature":Settings.VERSION, "typefeature":"graph", "configfeature":app.argms, "layoutfeature":"feature.obj"}
            DBX.update(DBS.DBGFF, "data", 
                        {"_id":idin}, dataup)


            # dataup = {}
            # if "configinstance" in r:
            #     dataup = r["configinstance"];
            #     dataup["ranking"] = app.argms["ranking"]
            # else:
            #     dataup = app.argms

            # dataupx = {"configinstance":dataup}
            # MongoDB.update(DBS.DBGFF, "data", 
            #             {"_id":ObjectId(idin)}, dataupx)
        
        filename = Settings.DATA_PATH+app.argms["file"]+"/feature.obj"
        with open(filename,'w') as fp:
            ujson.dump(p, fp)

    @staticmethod
    def saveprojection(app,p):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        for r in re:

            if "configfeature" in r:
                config = r["configfeature"]
                config["projection"] = app.argms["projection"]
                config["instanceproximity"] = app.argms["instanceproximity"]
                
                config["target"] = app.argms["target"]
                config["intarget"] = app.argms["intarget"]
                config["featureselected"] = app.argms["featureselected"]
                #config["ranking"] = app.argms["ranking"]

                dataup = {"configfeature":config};
                DBX.update(DBS.DBGFF, "data", 
                            {"_id":idin}, dataup)

                #print("r[configfeature]", r["configfeature"])
                app.argms["ranking"] = r["configfeature"]["ranking"];
                app.argms["nodes"] = r["configfeature"]["nodes"];

            dataup = {"versioninstance":Settings.VERSION, "typeinstance":"projection","configinstance":app.argms, "layoutinstance":"instance.obj"}
            DBX.update(DBS.DBGFF, "data", 
                        {"_id":idin}, dataup)

        # typefeature":"graph", "configfeature

        filename = Settings.DATA_PATH+app.argms["file"]+"/instance.obj"
        with open(filename,'w') as fp:
            ujson.dump(p, fp)

    @staticmethod
    def silhouette(app):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        si = 0.0
        for r in re:
            if "typeinstance" in r and r["typeinstance"]=="projection":
                filen = Settings.DATA_PATH+app.argms["file"]+"/instance.obj"
                if os.path.exists(filen):
                    data = {}
                    try:
                        infil = open(filen, "r")
                        data = ujson.load(infil)
                        infil.close()
                    except:
                        print("Something went wrong")
                        data = {}
                    # finally:
                    #     data = {}
                
                    if "points" in data:
                        config = {}
                        if "configinstance" in r:
                            config =r["configinstance"]

                        pp = data["points"]
                        #print(pp)
                        X, y, z = [],[],{}
                        for p in pp:
                            X.append([p["x"], p["y"]])    
                            y.append(p["t"])
                            z[p["t"]]=1

                        si = Metrics.compute_silhoute(X,y,len(z));
                        config["silhouette"] = si;
                        DBX.update(DBS.DBGFF, "data", 
                                    {"_id":idin}, {"configinstance":config})

        return si;

    @staticmethod
    def export2dproj(app,selft):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        export = ""
        name = ""
        for r in re:
            name = r["name"]
            if "typeinstance" in r and r["typeinstance"]=="projection":
                filen = Settings.DATA_PATH+app.argms["file"]+"/instance.obj"
                if os.path.exists(filen):
                    data = {}
                    try:
                        infil = open(filen, "r")
                        data = ujson.load(infil)
                        infil.close()
                    except:
                        print("Something went wrong")
                        data = {}
                    # finally:
                    #     data = {}
                
                    if "points" in data:
                        pp = data["points"]
                        export = "DY\n" 
                        export += str(len(pp))+"\n" 
                        export += "2\n"
                        export += "x;y\n"
                        for p in pp:
                            export += "{};{:.6f};{:.6f};{:.1f}\n".format(p["id"],p["x"], p["y"], p["t"])

        selft.set_header('Content-Type', 'text/plain')
        selft.set_header("Content-Disposition", "attachment; filename=%s" % name+".prj")

        return export;

    @staticmethod
    def openfeature(app):
        idin = app.argms["file"]
        cols = Query.loadatributenames(app.argms)

        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        rs = {};
        for r in re:
            r["_id"] = str(r["_id"])
            r["_id_user"] = str(r["_id_user"])
            rs = r

            rs["fenames"] = cols
            rs["lastversion"] = Settings.VERSION


            filen = Settings.DATA_PATH+app.argms["file"]+"/feature.obj" 
            dfile = {}
            if os.path.exists(filen):
                try:
                    infil = open(filen, "r")
                    dfile = ujson.load(infil)
                    infil.close()
                except:
                    print("Something went wrong")
                    dfile = {}
            rs["layoutfeature"] = dfile

        return rs;

    @staticmethod
    def openinstance(app):
        idin = app.argms["file"]
        #cols = Query.loadatributenames(app.argms)
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        rs = {};
        for r in re:
            r["_id"] = str(r["_id"])
            r["_id_user"] = str(r["_id_user"])
            rs = r

            #rs["fenames"] = cols
            rs["lastversion"] = Settings.VERSION

            filen = Settings.DATA_PATH+app.argms["file"]+"/instance.obj"
            dfile = {}
            if os.path.exists(filen):
                try:
                    infil = open(filen, "r")
                    dfile = ujson.load(infil)
                    infil.close()
                except:
                    print("Something went wrong")
                    dfile = {}

            rs["layoutinstance"] = dfile

        return rs;
    
    @staticmethod
    def exportfeat2datafile(app, selft):
        idin = app.argms["file"]
        if Settings.MULIUSER == 1:
            idin = ObjectId(idin)

        
        filename =  Settings.DATA_PATH+idin+"/transform.csv"    
        re = list(DBX.find(DBS.DBGFF, "data", {"_id":idin}))
        export = ""
        name = ""
        for r in re:
            name = r["name"]

            X = DataMatrix(filename)
            columns = X.columns()
            colsindexes = X.columnsindexes()
            
            XT = X.transpose()
            del X

            export = "DY\n" 
            export += str(XT.rows())+"\n" 
            export += str(XT.cols())+"\n" 
            nfecol = ["att"+str(i) for i in range(XT.cols()) ]
            export += ";".join(nfecol)+"\n" 
            for i in range(XT.rows()):
                row = [str(columns[i])]
                for j in range(XT.cols()):
                    row.append(str(XT.getValue(i,j)))

                export += ";".join(row)
                export += ";"+str(0.0)+"\n"
                
            del XT
            #target_id = X.columnindex(target)
            #print(export)

        selft.set_header('Content-Type', 'text/plain')
        selft.set_header("Content-Disposition", "attachment; filename=%s" % name+".data")

        return export;



class DataTransfer:
    def __init__(self):
        self.argms = {}
        self.layoutfeature = {}
        self.layoutinstance = {}

    def load(self, data):
        for k in self.__dict__:
            if k in data:
                setattr( self, k, (data[k]) )

"""
Database X
"""

class DBX:
        
    @staticmethod
    def find(dbs, collect, rdata):
        rest = []
        if Settings.MULIUSER == 0:
            rest = DBFile.find(DBS.DBGFF, "data", rdata)
        elif Settings.MULIUSER == 1:
            rest = MongoDB.find(DBS.DBGFF, "data", rdata)
        return rest
    @staticmethod
    def insert(dbs, collect, rdata):
        rest = []
        if Settings.MULIUSER == 0:
            rest = DBFile.insert(dbs, collect, rdata)
        elif Settings.MULIUSER == 1:
            rest = MongoDB.insert(dbs, collect, rdata)
        return rest
    
    @staticmethod
    def update(dbs, collect, queryid, rdata):
        if Settings.MULIUSER == 0:
            DBFile.update(dbs, collect, queryid, rdata)
        elif Settings.MULIUSER == 1:
            MongoDB.update(dbs, collect, queryid, rdata)

    @staticmethod
    def delete(dbs, collect, queryid):
        if Settings.MULIUSER == 0:
            DBFile.delete(dbs, collect, queryid)
        elif Settings.MULIUSER == 1:
            MongoDB.delete(dbs, collect, queryid)

"""
Database from file
"""
class DBFile:
    
    @staticmethod
    def openFile(pathf):
        dfile = {}
        with open(pathf,'r') as fp:
            dfile = ujson.load(fp)

        return dfile

    @staticmethod    
    def writeFile(pathf, rdata):
        with open(pathf,'w') as fp:
            ujson.dump(rdata, fp)

        


    @staticmethod
    def find(dbs, collect, rdata):
        # print("rdata", rdata)
        rdata["_id"] = str(rdata["_id"])
        rest = []
        f = Settings.DATA_PATH+rdata["_id"]+"/"+collect+".obj"            
        if os.path.isfile(f):
            rest = [DBFile.openFile(f)]
        return rest

    @staticmethod
    def insert(dbs, collect, rdata):
        idud = DBFile.uid()
        rdata["_id"] = idud

        if not os.path.exists(Settings.DATA_PATH+idud):
            os.makedirs(Settings.DATA_PATH+idud)

        DBFile.writeFile(Settings.DATA_PATH+idud+"/"+collect+".obj", rdata)
        return idud
    
    @staticmethod
    def update(dbs, collect, queryid, rdata):
        queryid["_id"] = str(queryid["_id"])
        db = DBFile.openFile(Settings.DATA_PATH+queryid["_id"]+"/"+collect+".obj")
        for k, v in rdata.items():
            db[k] = v

        DBFile.writeFile(Settings.DATA_PATH+queryid["_id"]+"/"+collect+".obj", db)

    @staticmethod
    def uid():
        return uuid.uuid4().hex

