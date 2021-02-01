/*
# Author: Ivar Vargas Belizario
# Copyright (c) 2020
# E-mail: ivar@usp.br
*/


//EdgeColor = d3.interpolateRgbBasis(["#b300d5", "#fff200", "#6cff00", "#00d3ff", "#0068ff"]);
//EdgeColor  = ["#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]
// EdgeColorPlasma = ["#310086", "#6100a0", "#9300a3", "#bb2885", "#d85969", "#ee884e", "#f5c03b", "#e5fb41"]
//EdgeColorF = d3.interpolateRgbBasis(EdgeColor);

CCTT.id = "plasma";
EdgeColorF = CCTT.interpolate();

// VertexColor = ["#ffd830", "#f49900", "#f43e00", "#b9106a", "#8d2e01"]
CCTT.id = "oranges";
VertexColorF = CCTT.interpolate();


// rainbowcolor = ["#fac89e", "#e3e891", "#c2fc99", "#a3fcb3", "#92e8d5", "#96c8f2", "#ada8ff", "#ce94f7", "#ed94dd", "#fea8bb"];
// rainbowcolor2 = ["#6e40aa", "#7140ab", "#743fac", "#773fad", "#7a3fae", "#7d3faf", "#803eb0", "#833eb0", "#873eb1", "#8a3eb2", "#8d3eb2", "#903db2", "#943db3", "#973db3", "#9a3db3", "#9d3db3", "#a13db3", "#a43db3", "#a73cb3", "#aa3cb2", "#ae3cb2", "#b13cb2", "#b43cb1", "#b73cb0", "#ba3cb0", "#be3caf", "#c13dae", "#c43dad", "#c73dac", "#ca3dab", "#cd3daa", "#d03ea9", "#d33ea7", "#d53ea6", "#d83fa4", "#db3fa3", "#de3fa1", "#e040a0", "#e3409e", "#e5419c", "#e8429a", "#ea4298", "#ed4396", "#ef4494", "#f14592", "#f34590", "#f5468e", "#f7478c", "#f9488a", "#fb4987", "#fd4a85", "#fe4b83", "#ff4d80", "#ff4e7e", "#ff4f7b", "#ff5079", "#ff5276", "#ff5374", "#ff5572", "#ff566f", "#ff586d", "#ff596a", "#ff5b68", "#ff5d65", "#ff5e63", "#ff6060", "#ff625e", "#ff645b", "#ff6659", "#ff6857", "#ff6a54", "#ff6c52", "#ff6e50", "#ff704e", "#ff724c", "#ff744a", "#ff7648", "#ff7946", "#ff7b44", "#ff7d42", "#ff8040", "#ff823e", "#ff843d", "#ff873b", "#ff893a", "#ff8c38", "#ff8e37", "#fe9136", "#fd9334", "#fb9633", "#f99832", "#f89b32", "#f69d31", "#f4a030", "#f2a32f", "#f0a52f", "#eea82f", "#ecaa2e", "#eaad2e", "#e8b02e", "#e6b22e", "#e4b52e", "#e2b72f", "#e0ba2f", "#debc30", "#dbbf30", "#d9c131", "#d7c432", "#d5c633", "#d3c934", "#d1cb35", "#cece36", "#ccd038", "#cad239", "#c8d53b", "#c6d73c", "#c4d93e", "#c2db40", "#c0dd42", "#bee044", "#bce247", "#bae449", "#b8e64b", "#b6e84e", "#b5ea51", "#b3eb53", "#b1ed56", "#b0ef59", "#adf05a", "#aaf159", "#a6f159", "#a2f258", "#9ef258", "#9af357", "#96f357", "#93f457", "#8ff457", "#8bf457", "#87f557", "#83f557", "#80f558", "#7cf658", "#78f659", "#74f65a", "#71f65b", "#6df65c", "#6af75d", "#66f75e", "#63f75f", "#5ff761", "#5cf662", "#59f664", "#55f665", "#52f667", "#4ff669", "#4cf56a", "#49f56c", "#46f46e", "#43f470", "#41f373", "#3ef375", "#3bf277", "#39f279", "#37f17c", "#34f07e", "#32ef80", "#30ee83", "#2eed85", "#2cec88", "#2aeb8a", "#28ea8d", "#27e98f", "#25e892", "#24e795", "#22e597", "#21e49a", "#20e29d", "#1fe19f", "#1edfa2", "#1ddea4", "#1cdca7", "#1bdbaa", "#1bd9ac", "#1ad7af", "#1ad5b1", "#1ad4b4", "#19d2b6", "#19d0b8", "#19cebb", "#19ccbd", "#19cabf", "#1ac8c1", "#1ac6c4", "#1ac4c6", "#1bc2c8", "#1bbfca", "#1cbdcc", "#1dbbcd", "#1db9cf", "#1eb6d1", "#1fb4d2", "#20b2d4", "#21afd5", "#22add7", "#23abd8", "#25a8d9", "#26a6db", "#27a4dc", "#29a1dd", "#2a9fdd", "#2b9cde", "#2d9adf", "#2e98e0", "#3095e0", "#3293e1", "#3390e1", "#358ee1", "#378ce1", "#3889e1", "#3a87e1", "#3c84e1", "#3d82e1", "#3f80e1", "#417de0", "#437be0", "#4479df", "#4676df", "#4874de", "#4a72dd", "#4b70dc", "#4d6ddb", "#4f6bda", "#5169d9", "#5267d7", "#5465d6", "#5663d5", "#5761d3", "#595fd1", "#5a5dd0", "#5c5bce", "#5d59cc", "#5f57ca", "#6055c8", "#6153c6", "#6351c4", "#6450c2", "#654ec0", "#664cbe", "#674abb", "#6849b9", "#6a47b7", "#6a46b4", "#6b44b2", "#6c43af", "#6d41ad", "#6e40aa"]
// turbocolor = ["#23171b", "#271a28", "#2b1c33", "#2f1e3f", "#32204a", "#362354", "#39255f", "#3b2768", "#3e2a72", "#402c7b", "#422f83", "#44318b", "#453493", "#46369b", "#4839a2", "#493ca8", "#493eaf", "#4a41b5", "#4a44bb", "#4b46c0", "#4b49c5", "#4b4cca", "#4b4ecf", "#4b51d3", "#4a54d7", "#4a56db", "#4959de", "#495ce2", "#485fe5", "#4761e7", "#4664ea", "#4567ec", "#446aee", "#446df0", "#426ff2", "#4172f3", "#4075f5", "#3f78f6", "#3e7af7", "#3d7df7", "#3c80f8", "#3a83f9", "#3985f9", "#3888f9", "#378bf9", "#368df9", "#3590f8", "#3393f8", "#3295f7", "#3198f7", "#309bf6", "#2f9df5", "#2ea0f4", "#2da2f3", "#2ca5f1", "#2ba7f0", "#2aaaef", "#2aaced", "#29afec", "#28b1ea", "#28b4e8", "#27b6e6", "#27b8e5", "#26bbe3", "#26bde1", "#26bfdf", "#25c1dc", "#25c3da", "#25c6d8", "#25c8d6", "#25cad3", "#25ccd1", "#25cecf", "#26d0cc", "#26d2ca", "#26d4c8", "#27d6c5", "#27d8c3", "#28d9c0", "#29dbbe", "#29ddbb", "#2adfb8", "#2be0b6", "#2ce2b3", "#2de3b1", "#2ee5ae", "#30e6ac", "#31e8a9", "#32e9a6", "#34eba4", "#35eca1", "#37ed9f", "#39ef9c", "#3af09a", "#3cf197", "#3ef295", "#40f392", "#42f490", "#44f58d", "#46f68b", "#48f788", "#4af786", "#4df884", "#4ff981", "#51fa7f", "#54fa7d", "#56fb7a", "#59fb78", "#5cfc76", "#5efc74", "#61fd71", "#64fd6f", "#66fd6d", "#69fd6b", "#6cfd69", "#6ffe67", "#72fe65", "#75fe63", "#78fe61", "#7bfe5f", "#7efd5d", "#81fd5c", "#84fd5a", "#87fd58", "#8afc56", "#8dfc55", "#90fb53", "#93fb51", "#96fa50", "#99fa4e", "#9cf94d", "#9ff84b", "#a2f84a", "#a6f748", "#a9f647", "#acf546", "#aff444", "#b2f343", "#b5f242", "#b8f141", "#bbf03f", "#beef3e", "#c1ed3d", "#c3ec3c", "#c6eb3b", "#c9e93a", "#cce839", "#cfe738", "#d1e537", "#d4e336", "#d7e235", "#d9e034", "#dcdf33", "#dedd32", "#e0db32", "#e3d931", "#e5d730", "#e7d52f", "#e9d42f", "#ecd22e", "#eed02d", "#f0ce2c", "#f1cb2c", "#f3c92b", "#f5c72b", "#f7c52a", "#f8c329", "#fac029", "#fbbe28", "#fdbc28", "#feb927", "#ffb727", "#ffb526", "#ffb226", "#ffb025", "#ffad25", "#ffab24", "#ffa824", "#ffa623", "#ffa323", "#ffa022", "#ff9e22", "#ff9b21", "#ff9921", "#ff9621", "#ff9320", "#ff9020", "#ff8e1f", "#ff8b1f", "#ff881e", "#ff851e", "#ff831d", "#ff801d", "#ff7d1d", "#ff7a1c", "#ff781c", "#ff751b", "#ff721b", "#ff6f1a", "#fd6c1a", "#fc6a19", "#fa6719", "#f96418", "#f76118", "#f65f18", "#f45c17", "#f25916", "#f05716", "#ee5415", "#ec5115", "#ea4f14", "#e84c14", "#e64913", "#e44713", "#e24412", "#df4212", "#dd3f11", "#da3d10", "#d83a10", "#d5380f", "#d3360f", "#d0330e", "#ce310d", "#cb2f0d", "#c92d0c", "#c62a0b", "#c3280b", "#c1260a", "#be2409", "#bb2309", "#b92108", "#b61f07", "#b41d07", "#b11b06", "#af1a05", "#ac1805", "#aa1704", "#a81604", "#a51403", "#a31302", "#a11202", "#9f1101", "#9d1000", "#9b0f00", "#9a0e00", "#980e00", "#960d00", "#950c00", "#940c00", "#930c00", "#920c00", "#910b00", "#910c00", "#900c00", "#900c00", "#900c00"]


CCTT.id = "rainbow";
ProjectionColorF = CCTT.interpolate();

function gelem(id) {
    return document.getElementById(id);
}
function gvalue(id) {
    return document.getElementById(id).value;
}
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}
function ffocus(v) {
    gelem(v).focus();
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//var featureselected = [];
//var layoutfeatures;
//var layoutintantes;

//var dataload = [];
//var datafiles = [];
//var datafileselected = "";
//let lwidth = ( (window.screen.availWidth)/2 ) - 100;

function DataIO() {
    var data = {
        "argms": {
            "type": 0,
            "threshold": 0.0,
            "target": "",
            "intarget": false,
            "proximity": "",
            "instanceproximity": "",
            "clustering": "",
            "relevance": "",
            "algorithm": "",
            "noderoot": "",
            "nodetarget": "",
            "layout": "",
            "projection": "",
            "infleft": "",
            "infright": "",
            "file": "",
            "isfeature": 0,
            "featureselected": {},
            "ranking": [],
            "colorbar1": 0,
            "colorbar2": 0,
            "p1": 1,
            "p2": 1,

        },
        "layoutfeature": {},
        "layoutinstance": {},
    };
    return data;
}


var processkey = 0;
var process = {};
function pushprocess(p, pname) {
    process[p] = pname;
    showloading();
    console.log("push p:", p);
}
function popprocess(p) {
    delete process[p];
    console.log("delete p:", p, Object.keys(process).length, process);
    if (Object.keys(process).length == 0) {
        hideloading();
    }
}
function showloading() {
    gelem("idloading").style.display = "block";
}
function hideloading() {
    gelem('idloading').style.display = "none";
}




function ServiceData(pname) {
    var self = this;
    this.in = new DataIO();
    this.ou = '';
    this.event = function () { };
    this.start = function () {
        processkey++;
        let ps = processkey;
        pushprocess(ps, pname);
        try {
            var url = "./query?data=" + JSON.stringify(self.in);
            d3.json(url, function (data) {
                self.ou = data;
                self.event();
                popprocess(ps);
            });
        }
        catch (err) {
            popprocess(ps);
            alert("Error: " + err.message);
        }

    };
}


function GraphVis() {
    let self = this;
    this.adminid = 0;
    this.email = "";
    this.multiuser = 0;

    this.layoutfeatures = null;
    this.layoutintantes = null;

    this.dataload = [];
    this.datafiles = [];
    this.featureselected = [];
    this.ranking = [];
    this.datafileselected = "";
    this.datafileselectedname = "";
    this.lwidth = ((window.screen.availWidth) / 2) - 100;

    this.isnamedbedited = false;
    this.intarget = false;
    this.exchageslider = 0;
    this.intargetaction = false;
    this.target = "";
    this.lfenamesindex = {};
    this.lfenames = []
    this.dataoutfeature = null;
    this.dataoutinstance = null;
    this.edgetransparency = 0.75;

    this.instvertexratio = 4;
    this.instvertexoacity = 0.75;


    this.ispresskey = 3;
    this.keepselectvertex = -1;

    this.colorstableshitttype = -1;

    //this.proximity = {  "Euclidean":0, "Manhattan":1, "Chebychev":2,
    //                    "Cosine":3, "Pearson":4,"Correlation":5};
    //this.relevance = {  "Pearson":0, "Correlation":1, "Extratrees":2};

    //this.algorithm = {  "mst":0, "nj":1};

    //this.layout = {  "fo":0, "cb":1, "sb":2, "pk":3};

    //this.projection = {  "simple":0, "tsne":1, "umap":2, "lsp":3};



    this.visFeatures = function () {
        self.cleanfeatures();

        self.fullScreen();
        var idview = "#vis";
        if (self.datafileselected != "") {
            var ob = new ServiceData("visFeatures");
            ob.in.argms["type"] = 0;
            ob.in.argms["threshold"] = 0.78;
            ob.in.argms["target"] = self.target;
            ob.in.argms["intarget"] = self.intarget;
            //console.log("ob.in.argms[intarget]", ob.in.argms["intarget"]);
            ob.in.argms["proximity"] = gvalue('proximity');
            ob.in.argms["instanceproximity"] = gvalue('instanceproximity');
            ob.in.argms["relevance"] = gvalue('relevance');
            ob.in.argms["algorithm"] = gvalue('algorithm');
            ob.in.argms["layout"] = gvalue('layout');
            ob.in.argms["topleft"] = 'topleft1';
            ob.in.argms["topfright"] = 'topright1';
            ob.in.argms["infleft"] = 'topleft1';
            ob.in.argms["infright"] = 'topright1';
            ob.in.argms["file"] = self.datafileselected;
            ob.in.argms["isfeature"] = 1;
            ob.in.argms["featureselected"] = self.featureselected;
            ob.in.argms["ranking"] = [];

            //console.log("ob.in.argms",ob.in.argms);
            ob.event = function () {
                //var data = this.ou;
                self.dataoutfeature = this.ou;
                //console.log("data feature:",self.dataoutfeature);
                //if ("lastversion" in this.ou && this.ou["lastversion"]==this.ou["version"]){
                self.ranking = self.dataoutfeature.configfeature.ranking;
                var data = self.dataoutfeature.layoutfeature;

                //console.log("layoutfeatures", data);
                if (this.in.argms["layout"] == "fo") {
                    self.layoutfeatures = new chart_force(VertexColorF, EdgeColorF, self, idview, self.lwidth, data, -10, this.in.argms);
                    gelem('edgeslider').value = 0;
                    chart_palettecolors(self.layoutfeatures.selectbythreshold,
                        "seq1", 20, self.lwidth-20, VertexColorF);
                    //chart_palettecolors(self.layoutfeatures.updatelinkThreshold,
                    //                "seqedge", 20, self.lwidth, EdgeColor);

                    chart_histogram(self.setToolpiltex,
                        self.hideToolpiltex,
                        self.layoutfeatures.updatelinkoption,
                        "seqedgehist", self.lwidth, EdgeColorF, data["edgehist"]);

                    self.intargetaction = self.intarget;
                    self.changeintarget();
                }
                else if (this.in.argms["layout"] == "sb") {
                    self.layoutfeatures = new chart_sunburst(idview, self.lwidth, data, VertexColorF, self, this.in.argms);
                    chart_palettecolors(self.layoutfeatures.selectbythreshold,
                        "seq1", 20, self.lwidth-20, VertexColorF);
                    
                    self.intargetaction = self.intarget;
                    self.changeintarget();
                }
                // else if (this.in.argms["layout"] == "cb") {
                //     self.layoutfeatures = new chart_circularbundle(idview, data, self.lwidth);
                //     chart_palettecolors(self.layoutfeatures.selectbythreshold,
                //         "seq1", 20, self.lwidth, VertexColorF);
                // }
                else if (this.in.argms["layout"] == "pk") {
                    self.layoutfeatures = new chart_circlepack(idview, self.lwidth, data.tree, data.graph, VertexColorF);
                }
                //}
            };
            ob.start();
        }
    };

    this.visInstnaces = function () {
        self.cleaninstances();
        self.fullScreen();
        var idview = "#visp";
        if (self.featureselected.length >= 2) {
            //console.log("console log instances");
            var ob = new ServiceData("vis instances");
            ob.in.argms["type"] = 4;
            ob.in.argms["threshold"] = 0.78;
            ob.in.argms["target"] = self.target;
            ob.in.argms["intarget"] = self.intarget;
            ob.in.argms["proximity"] = gvalue('proximity');
            ob.in.argms["instanceproximity"] = gvalue('instanceproximity');
            ob.in.argms["relevance"] = gvalue('relevance');
            ob.in.argms["algorithm"] = gvalue('algorithm');
            ob.in.argms["layout"] = gvalue('layout');
            ob.in.argms["projection"] = gvalue('projection');
            ob.in.argms["topleft"] = 'topleft2';
            ob.in.argms["topfright"] = 'topright2';
            ob.in.argms["infleft"] = 'infleft2';
            ob.in.argms["infright"] = 'infright2';
            ob.in.argms["file"] = self.datafileselected;
            ob.in.argms["isfeature"] = 0;
            ob.in.argms["featureselected"] = self.featureselected;
            ob.in.argms["ranking"] = [];

            if (ob.in.argms["projection"] == "mst") {

            }
            else if (ob.in.argms["projection"] == "simple") {
                self.loadfilecsv();
                //console.log("simple");
                setTimeout(showloading, 1);
                setTimeout(self.plotpaiercorrelate, 100);
            }
            else {
                ob.event = function () {
                    self.dataoutinstance = this.ou;
                    //console.log("data instance:",self.dataoutinstance);
                    if ("lastversion" in this.ou && "versioninstance" in this.ou && this.ou["lastversion"] == this.ou["versioninstance"]) {
                        var data = self.dataoutinstance.layoutinstance;
                        //self.ranking = self.dataoutinstance.configinstance.ranking;
                        //console.log("this.in.argms",this.in.argms);
                        self.layoutintantes = new plotProjection(ProjectionColorF, idview, self, data, this.in.argms);
                        gelem("topleft2").innerHTML = "";

                    }
                };
                ob.start();
            }
        }
    };

    this.loaddatasets = function () {
        var ob = new ServiceData("load datasets");
        ob.in.argms["type"] = 1;

        //console.log("listdatasets");
        ob.event = function () {
            self.datafiles = this.ou;
            //console.log("self.datafiles",this.ou);
            //datafiles.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

            self.searchdataset('');
        };
        ob.start();
    };

    this.loadlayoutdbs = function () {
        self.loaddatasets();
        self.shifflayoutcontrols('iddatasetlayout');
    };

    this.listusers = function () {
        USERC.listUsers();
        if(self.adminid==1){
            gelem("idformnewuser").innerHTML = USERC.newUserForm();
        }
        //gelem("idformnewuser").innerHTML = "<table><tr><td>d<t/d></tr><tr><td>d<t/d></tr></table>";
        self.shifflayoutcontrols('iduserlayout');
    };

    this.cleanfeatures = function () {
        // clear all layouts
        d3.select("#seq1").selectAll("svg").remove();
        d3.select("#vis").selectAll("svg").remove();
        d3.select("#seqedgehist").selectAll("svg").remove();
        self.hideFeaturesSelected("feature");
        gelem("infleft1").innerHTML = "";
        gelem("infright1").innerHTML = "";
        gelem("topleft1").innerHTML = "";
        gelem("topright1").innerHTML = "";

        self.exchageslider = 0;
        gelem('edgeslider').style.transform = 'rotate('+self.exchageslider+'deg)';
        self.keepselectvertex = -1;
    }

    this.cleaninstances = function () {
        d3.select("#visp").selectAll("svg").remove();
        d3.select("#seq2").selectAll("svg").remove();
        self.hideFeaturesSelected("instance");
        gelem("infleft2").innerHTML = "";
        gelem("infright2").innerHTML = "";
        gelem("topleft2").innerHTML = "";
        gelem("topright2").innerHTML = "";
    }

    this.opendataset = function (filename, userid) {

        self.isnamedbedited = true;
        if (userid == "")
            self.isnamedbedited = false;

        self.fullScreen();

        self.cleanfeatures();
        self.cleaninstances();

        self.featureselected = [];
        self.ranking = [];
        self.intargetaction = false;
        self.intarget = false;
        self.target = "";
        self.exchageslider = 0;

        self.layoutfeatures = null;
        self.layoutintantes = null;

        self.datafileselected = filename;
        self.getdatasetname();

        self.openfeature();
        self.openinstance();
        self.shifflayoutcontrols('mainlayout');
    };

    this.openfeature = function () {
        var ob = new ServiceData("open feature dataset");
        ob.in.argms["type"] = 14;
        ob.in.argms["file"] = self.datafileselected;
        ob.event = function () {

            //ds = self.dataoutfeature;
            self.lfenamesindex = {};
            self.lfenames = [];

            if ("fenames" in this.ou) {
                self.lfenames = this.ou["fenames"];
                strs = "";
                i = 0;
                for (var item of self.lfenames) {
                    self.lfenamesindex[item] = i;
                    strs += "<option value='" + item + "'>" + item + "</option>";
                    i++;
                }
                gelem("target").innerHTML = strs;
                gelem("target").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                self.target = gelem("target").value;
            }

            if ("lastversion" in this.ou && "versionfeature" in this.ou && this.ou["lastversion"] == this.ou["versionfeature"]) {
                self.dataoutfeature = this.ou;
                self.ranking = self.dataoutfeature.configfeature.ranking;

                ds = this.ou;
                if ("configfeature" in ds) {
                    conf = ds["configfeature"];
                    //console.log("confconfconfconfconfconfconfconfconf>X",conf);                
                    if ("configfeature" in ds) {

                        if ("target" in conf) {
                            //gelem("target").selectedIndex = self.lfenamesindex[conf["target"]];
                            gelem('target').value = conf["target"];
                            self.target = conf["target"];
                        }
                        else {
                            gelem("target").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                            self.target = gelem("target").value;
                        }
                        if ("proximity" in conf) {
                            //gelem("proximity").selectedIndex = self.proximity[conf["proximity"]];
                            gelem('proximity').value = conf["proximity"];
                        }
                        if ("relevance" in conf) {
                            //gelem("relevance").selectedIndex = self.relevance[conf["relevance"]];
                            gelem('relevance').value = conf["relevance"];
                        }
                        if ("algorithm" in conf) {
                            //gelem("algorithm").selectedIndex = self.algorithm[conf["algorithm"]];
                            gelem('algorithm').value = conf["algorithm"];
                        }
                        if ("layout" in conf) {
                            //gelem("layout").selectedIndex = self.layout[conf["layout"]];
                            gelem('layout').value = conf["layout"];
                        }
                    }

                    if ("typefeature" in ds) {
                        if (ds["typefeature"] == "graph") {
                            if ("layoutfeature" in ds && ds["layoutfeature"] != "" && "layout" in conf) {
                                inargms = {};
                                inargms["infleft"] = 'topleft1';
                                inargms["infright"] = 'topright1';
                                var data = ds["layoutfeature"];
                                //console.log("data feature",data);
                                if (conf["layout"] == "fo" && Object.keys(data).length > 0) {
                                    self.layoutfeatures = new chart_force(VertexColorF, EdgeColorF, self, "#vis", self.lwidth, data, -10, inargms);
                                    
                                    gelem('edgeslider').value = 0;
                                    self.edgeslider = 0;
                                    
                                    chart_palettecolors(self.layoutfeatures.selectbythreshold,
                                        "seq1", 20, self.lwidth-20, VertexColorF);

                                    chart_histogram(self.setToolpiltex,
                                        self.hideToolpiltex,
                                        self.layoutfeatures.updatelinkoption,
                                        "seqedgehist", self.lwidth, EdgeColorF, data["edgehist"]);

                                    //chart_palettecolors(self.layoutfeatures.updatelinkThreshold,
                                    //                "seqedge", 20, self.lwidth, EdgeColor);
                                }
                                else if (conf["layout"] == "sb" && Object.keys(data).length > 0) {
                                    //self.layoutfeatures = new chart_force(VertexColorF, EdgeColorF, self, "#vis", self.lwidth, data, -10, inargms);
                                    self.layoutfeatures = new chart_sunburst("#vis", self.lwidth, data, VertexColorF, self, inargms);
                                    
                                    gelem('edgeslider').value = 0;
                                    self.edgeslider = 0;

                                    chart_palettecolors(self.layoutfeatures.selectbythreshold,
                                        "seq1", 20, self.lwidth-20, VertexColorF);

                                }
                                //if

                            }
                        }
                        else if (ds["typefeature"] == "otherss") {
                            if ("layoutfeature" in ds && ds["layoutfeature"] != "" && "layout" in conf) {

                            }
                        }
                    }
                    //add feature selected
                    //add is target is included
                    if ("intarget" in conf && "featureselected" in conf) {
                        self.intargetaction = conf["intarget"];
                        self.intarget = conf["intarget"];
                        self.featureselected = conf["featureselected"];
                        //console.log("self.featureselected", self.featureselected);
                        self.changeintarget();
                    }
                }
                else {
                    gelem("target").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                    self.target = gelem("target").value;
                }
            }
        };
        ob.start();
    };

    this.openinstance = function () {
        var ob = new ServiceData("open instance dataset");
        ob.in.argms["type"] = 15;
        ob.in.argms["file"] = self.datafileselected;
        ob.event = function () {
            if ("lastversion" in this.ou && "versioninstance" in this.ou && this.ou["lastversion"] == this.ou["versioninstance"]) {
                self.dataoutinstance = this.ou;
                //self.ranking = self.dataoutfeature.configfeature.ranking;

                ds = self.dataoutinstance;
                if ("configinstance" in ds) {
                    conf = ds["configinstance"];
                    if ("projection" in conf) {
                        //gelem("projection").selectedIndex = self.projection[conf["projection"]];
                        gelem('projection').value = conf["projection"];
                    }
                    if ("instanceproximity" in conf) {
                        //gelem("projection").selectedIndex = self.projection[conf["projection"]];
                        gelem('instanceproximity').value = conf["instanceproximity"];
                    }
                    if ("typeinstance" in ds) {
                        if (ds["typeinstance"] == "projection") {
                            if ("layoutinstance" in ds && ds["layoutinstance"] != "") {
                                inargms = {};
                                inargms["infleft"] = 'infleft2';
                                inargms["infright"] = 'infright2';
                                data = ds["layoutinstance"]
                                if (Object.keys(data).length) {
                                    self.layoutintantes = new plotProjection(ProjectionColorF, "#visp", self, data, inargms);
                                }
                            }
                        }
                        else if (ds["typeinstance"] == "graph") {
                            if ("layoutinstance" in ds) {
                                //
                            }
                        }
                    }

                    if ("silhouette" in ds["configinstance"]) {
                        gelem("topleft2").innerHTML = "SILHOUETTE: " + ds["configinstance"]["silhouette"];
                    }
                }
            }
        };
        ob.start();
    };



    this.searchdataset = function (txti) {
        let txt = trim(txti);
        gelem("idtabledatasets").innerHTML = "";
        let b = [];
        if (txt != "") {
            b = self.datafiles.filter(item => item.name.toLowerCase().indexOf(txt) > -1);
        }
        else {
            b = self.datafiles;
        }
        //console.log(b);

        var stringhtml = "";
        var txtshare = "";
        if(graphvis.multiuser==1){
            txtshare =  `<th>
                            <div style="width: 70px">
                                Is shared?
                            </div>
                        </th>
                        <th>
                            <div style="width: 60px">
                                Owner
                            </div>
                        </th>
                        `
                        //`+graphvis.multiuser+`
        }
        stringhtml = `<table class="table table-striped table-sm btn-table" style="margin: 0 auto">
                    <thead>
                        <tr>
                            <th style="width: 100%">
                                Name
                            </th>
                            `+txtshare+`
                            <th>
                                <div style="width: 150px">
                                    Last Modified
                                </div>
                            </th>
                            <th>
                                <div style="width: 150px">
                                    Actions
                                </div>
                            </th>
                        </tr>
                    <thead>
                    <tbody>`;

        isnoshare = `<i  class="fa fa-link fa-lg"
                            title="Shared"
                            style="color: #48ad09;"
                        ></i>`;

        for (var i = 0; i < b.length; ++i) {
            stringhtml += `<tr class="trover"
                                style="z-index:9">`;
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
                                "
                                title="Open dashboard"
                            >`+ b[i].name + `</td>`;

            issh = ""
            if (b[i].isshare == 1)
                issh = isnoshare;

            if (graphvis.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
                                "
                                title="Open dashboard"
                            >`+ issh + `</td>`;
            }
            
            if (graphvis.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
                                "
                                title="Open dashboard"
                            >
                                <div
                                    style=" width: 45px;
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis
                                    "
                                >`+ b[i].owner + `</div></td>`;
            }

            ownclt = ""
            if (b[i]._id_user != "") {

                ownclt1 = `
                            <a href="#" class="btn btn-light"
                                style="padding: 2px;"
                                title="Share dataset"
                                onclick="
                                    graphvis.sharedataset('`+ b[i]._id + `');
                                "
                            >
                                <i  class="fa fa-link fa-lg"
                                    style="color: #48ad09;"
                                ></i>
                            </a>
                            <a href="#" class="btn btn-light"
                                style="padding: 2px;"
                                title="Unshare dataset"
                                onclick="
                                    graphvis.unsharedataset('`+ b[i]._id + `');
                                "
                            >
                                <i class="fa fa-link fa-lg"
                                ></i>
                            </a>
                        `
                ownclt = `


                                    <a href="#" class="btn btn-light"
                                        style="padding: 2px;"
                                        title="Drop dataset"
                                        onclick="
                                            graphvis.dropdataset('`+ b[i]._id + `');
                                        "
                                    >
                                        <i class="fa fa-trash fa-lg"
                                            style="color: #ff0000;"
                                        ></i>
                                    </a>`
                if(self.multiuser==1){
                    ownclt = ownclt1+ownclt
                }    
            }
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
                                "
                                title="Open dashboard"
                            >`+ b[i].dateupdate + `</td>`;
            stringhtml += `<td>
                                <div style="z-index:10">
                                    <a href="#" class="btn btn-light"
                                        style="padding: 2px;"
                                        title="Clone dataset"
                                        onclick="
                                            graphvis.clonedataset('`+ b[i]._id + `');
                                        "
                                    >
                                        <i  class="fa fa-clone fa-lg"
                                            style="color: #1479d9;"
                                        ></i>
                                    </a>
                                    <a href="#" class="btn btn-light"
                                        style="padding: 2px;"
                                        title="Downlod dataset"
                                        onclick="
                                            graphvis.downloaddataset('`+ b[i]._id + `');
                                        "
                                    >
                                        <i class="fa fa-download fa-lg"
                                            style="color: #f5a742;"
                                        ></i>
                                    </a>
                                    `+ ownclt + `
                                </div>
                        </td>`;
            stringhtml += '</tr>';
        }
        stringhtml += '</tbody></table>';

        //console.log("stringhtml",stringhtml);
        gelem("idtabledatasets").innerHTML = stringhtml;
    };

    this.getdatasetname = function () {
        var ob = new ServiceData("get data set name");
        ob.in.argms["type"] = 3;
        ob.in.argms["file"] = self.datafileselected;
        ob.event = function () {
            gelem('iddatasettitle').innerHTML = this.ou;
            gelem('idtxtsearch').value = this.ou;
            gelem('idtextdbname').value = this.ou;
            self.datafileselectedname = this.ou;

            gelem('layoutchangenametxtdb').style.display = 'none';
            gelem('iddatasettitle').style.display = 'block';
        };
        ob.start();
    };

    this.uploadfiledata = function () {
        // self.fullScreen();
        var ob = new DataIO();
        ob.argms.type = 3;
        //console.log('obj',ob);
        gelem('datafromupload').value = JSON.stringify(ob);
        showloading();
        gelem('formupload').submit();

        gelem('fileu').value = "";
    };

    this.loadfilecsv = function () {
        //var ob = new ServiceData();
        //ob.in.argms["type"] = 5; 
        //ob.in.argms["file"] = datafileselected; 
        //ob.event = function() {
        //    console.log("opencsvvvvvvv",this.ou);
        //    //d3.csv("http://localhost:8888/data/data_imagescorel_150.csv(20:08:19:16:26:55)/original.csv", function(datai) {
        //    //    dataload = datai;
        //    //});
        //};
        //ob.start();

        //d3.csv("http://localhost:8888/data/"+datafileselected+"/transform.csv", function(datai) {
        d3.csv("./data/" + self.datafileselected + "/transform.csv", function (datai) {
            self.dataload = datai;
            //console.log("dataload!",dataload);
        });
    };

    this.padmove = function (wwwd) {
        var idviewpad = "#idpadmover";
        d3.select(idviewpad).selectAll("svg").remove();

        var xx = 0;
        var yy = 0;
        var dragpad = d3.drag()
            .on("start", function () {
                xx = d3.event.x;
                yy = d3.event.y;
            })
            .on("drag", function (d, i) {
                //console.log("resta:", xi,yi);
                coordination(d3.event.x, d3.event.y);
            })
            .on("end", function () {

            });


        var svgpad = d3.select(idviewpad).append("svg")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", wwwd)
            .attr("height", wwwd)
            .append("rect")
            .attr("width", wwwd + "px")
            .attr("height", wwwd + "px")
            .attr("fill", "#ffdb56")
            .call(dragpad)
            .on("click", function () {
                //var coords = d3.mouse(this);
                //coordination(coords[0], coords[1]);
                //console.log(coords);    
            })
        svgpad.append("g");

        // var circleSelection = svgpad.append("g").append("circle")
        //     .attr("cx", wwwd/2)
        //     .attr("cy", wwwd/2)
        //     .attr("r", wwwd/5)
        //     .style("fill", "purple");    

        function coordination(x, y) {
            if (x >= 0 && y >= 0 && x < wwwd && y < wwwd) {
                var xi = x - xx;
                var yi = y - yy;

                cx = (xi / wwwd) * 17.0;
                cy = (yi / wwwd) * 17.0;
                //console.log("QQWEAA",cx, cy);
                self.layoutfeatures.translatte(cx, cy);
                //                layoutfeatures.scalle(2.0);
                //circleSelection.attr("transform", "translate(" + x + "," + y+ ")");
            }
        }
    };

    this.plotpaiercorrelate = function () {
        if (self.featureselected.length >= 2) {
            d3.select("#visp").selectAll("svg").remove();

            chart_correlation("#visp", self.dataload, self.featureselected, gvalue('target'));
            //        chart_correlation_hist("#visp", dataload, featrs);


            //        var i, j, col1, col2;
            //        for(i=0;i<featrs.length;++i){
            //            for(j=i;j<featrs.length;++j){
            //                if(i!=j){
            //                    col1 = featrs[i];
            //                    col2 = featrs[j];
            //                    chart_scatterplot("#visp", 240, 240, dataload, col1, col2);
            //                }
            //            }
            //        }
        }
        hideloading();
    };

    // this.savechangedashboard = function (){
    //     var ob = new ServiceData("save change dashboard");
    //     ob.in.argms["type"] = 4;
    //     ob.in.argms["threshold"] = gvalue('edgeslider');
    //     ob.in.argms["target"] = gvalue('target');
    //     ob.in.argms["intarget"] = self.intarget;
    //     ob.in.argms["proximity"] = gvalue('proximity');
    //     ob.in.argms["importance"] = gvalue('importance');
    //     ob.in.argms["algorithm"] = gvalue('algorithm');
    //     ob.in.argms["layout"] = gvalue('layout');
    //     ob.in.argms["projection"] = gvalue('projection');
    //     ob.in.argms["file"] = self.datafileselected;
    //     ob.in.argms["colorbar1"] = 0;
    //     ob.in.argms["colorbar2"] = 0;
    //     ob.in.argms["isfeature"] = 1;
    //     ob.in.argms["featureselected"] = self.featureselected;

    //     ob.in["layoutfeature"] = {};
    //     ob.in["layoutinstance"] = {};

    //     ob.event = function() {
    //         response = this.ou;
    //         //console.log("response",response);
    //         //response
    //     };
    //     ob.start();
    // };

    this.dropdataset = function (iddb) {
        if (confirm("Are you sure to delete the dataset?")) {
            var ob = new ServiceData("drop data set");
            ob.in.argms["type"] = 10;
            ob.in.argms["file"] = iddb;

            ob.event = function () {
                response = this.ou;
                //console.log("responseresponseresponse",response);
                self.loadlayoutdbs();
            };
            ob.start();
        }
    };

    this.sharedataset = function (iddb) {
        //if (confirm("Are you sure to share the dataset?")) {
        var ob = new ServiceData("share data set");
        ob.in.argms["type"] = 8;
        ob.in.argms["file"] = iddb;

        ob.event = function () {
            response = this.ou;
            //console.log("responseresponseresponse",response);
            self.loadlayoutdbs();
        };
        ob.start();
        //}
    };

    this.unsharedataset = function (iddb) {
        var ob = new ServiceData("unshare data set");
        ob.in.argms["type"] = 9;
        ob.in.argms["file"] = iddb;

        ob.event = function () {
            response = this.ou;
            //console.log("responseresponseresponse",response);
            self.loadlayoutdbs();
        };
        ob.start();
    };

    this.clonedataset = function (iddb) {
        if (confirm("Are you sure to clone the dataset?")) {
            var ob = new ServiceData();
            ob.in.argms["type"] = 7;
            ob.in.argms["file"] = iddb;

            ob.event = function () {
                response = this.ou;
                //console.log("responseresponseresponse",response);
                self.loadlayoutdbs();
            };
            ob.start();
        }
    };

    this.downloaddataset = function (iddb) {
        datin = new DataIO();
        datin.argms["type"] = 12;
        datin.argms["file"] = iddb;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url;
    };

    this.export2dproj = function () {
        datin = new DataIO();
        datin.argms["type"] = 16;
        datin.argms["file"] = self.datafileselected;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url;
    };

    this.exportfeat2datafile = function () {
        datin = new DataIO();
        datin.argms["type"] = 17;
        datin.argms["file"] = self.datafileselected;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url;
    };


    this.updatedatasetname = function (e, newname) {
        //self.datafileselected = trim(self.datafileselected);
        newname = trim(newname);
        //console.log(e.keyCode);
        if (e.keyCode === 13) {
            if (self.datafileselected != "" && newname != "") {
                var ob = new ServiceData("update data set name");
                ob.in.argms["type"] = 6;
                ob.in.argms["file"] = self.datafileselected;
                ob.in.argms["newname"] = newname;

                ob.event = function () {
                    response = this.ou;
                    self.getdatasetname();

                    //gelem('layoutchangenametxtdb').style.display = 'none';
                    //gelem('iddatasettitle').style.display = 'block';
                };
                ob.start();
            }
        }
    };

    this.changepassword = function () {
        pass = gelem("ipassword").value;
        npass = gelem("inpassword").value;
        rpass = gelem("inpasswordr").value;
        //console.log("0000000000");
        if (pass != "" && npass != "" && rpass != "") {
            //console.log("111111111", pass, npass);
            if (npass == rpass) {
                //console.log("2222222222");
                var ob = new ServiceData("change password");
                ob.in.argms["type"] = 11;
                ob.in.argms["password"] = pass;
                ob.in.argms["newpassword"] = npass;

                ob.event = function () {
                    response = this.ou;
                    if (response["response"] == 1) {
                        alert("The new password was saved!");
                        window.location.href = "./logout";
                    }
                    //console.log(response["response"]);
                };
                ob.start();
            }
        }
    };

    this.silhouette = function () {
        var ob = new ServiceData("compute silhouette");
        ob.in.argms["type"] = 13;
        ob.in.argms["file"] = self.datafileselected;

        ob.event = function () {
            response = this.ou;
            //console.log("response silhouette", response);
            gelem("topleft2").innerHTML = "SILHOUETTE: " + response;

        };
        ob.start();
    };


    this.changeintarget = function () {
        var el = gelem("btnintarget");
        if (self.intargetaction) {
            el.style.backgroundColor = '#ffd70f';
            self.intarget = true;
            self.intargetaction = false;

            if (self.featureselected.length > 0) {
                var istargetinclude = false;
                var taindex = self.lfenamesindex[self.target];
                for (var i in self.featureselected) {
                    e = self.featureselected[i];
                    if (e == taindex) {
                        istargetinclude = true;
                        break;
                    }
                }
                if (istargetinclude == false) {
                    self.featureselected.push(taindex);
                }
                if (self.layoutfeatures != null) {
                    self.layoutfeatures.highlightforce(self.featureselected);
                }
            }
        }
        else {
            el.style.backgroundColor = '#f1f1f1';
            self.intarget = false;
            self.intargetaction = true;
            ref = [];
            taindex = self.lfenamesindex[self.target];
            for (var i in self.featureselected) {
                e = self.featureselected[i];
                if (e != taindex) {
                    ref.push(e);
                }
            }
            self.featureselected = ref;
            if (self.layoutfeatures != null) {
                self.layoutfeatures.highlightforce(self.featureselected);
            }
        }
    };

    this.shifflayoutcontrols = function (el) {
        //fullScreen();
        gelem("idchangepasswordlayout").style.display = "none";
        gelem("iduserlayout").style.display = "none";
        gelem("iddatasetlayout").style.display = "none";
        gelem("idaboutlayout").style.display = "none";
        gelem("mainlayout").style.display = "none";

        gelem(el).style.display = "block";
    };

    this.showedgebundlingX = function () {
        if (self.layoutfeatures.isupdatebundling) {
            setTimeout(showloading, 1);
        }
        setTimeout(self.layoutfeatures.showedgebundling, 500);
    };

    this.main = function () {
        self.loaddatasets();
        self.shifflayoutcontrols("iddatasetlayout");
        self.padmove(100);

        gelem("vis").style.width = self.lwidth + "px";
        gelem("vis").style.height = self.lwidth + "px";
        gelem("vis").style.minHeight = self.lwidth + "px";
        gelem("vis").style.minWidth = self.lwidth + "px";
        gelem("vis").style.maxHeight = self.lwidth + "px";
        gelem("vis").style.maxWidth = self.lwidth + "px";

        gelem("visp").style.width = self.lwidth + "px";
        gelem("visp").style.height = self.lwidth + "px";
        gelem("visp").style.minHeight = self.lwidth + "px";
        gelem("visp").style.minWidth = self.lwidth + "px";
        gelem("visp").style.maxHeight = self.lwidth + "px";
        gelem("visp").style.maxWidth = self.lwidth + "px";

        gelem("idlayout1bar").style.maxHeight = self.lwidth + "px";
        gelem("idlayout1bar").style.minHeight = self.lwidth + "px";

        gelem("idlayout2bar").style.maxHeight = self.lwidth + "px";
        gelem("idlayout2bar").style.minHeight = self.lwidth + "px";

        if (graphvis.adminid==1 && graphvis.multiuser==1){
            gelem("iduserlistop").style.display = "block";
        }
    
    };

    this.fullScreen = function () {
        var element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

    this.save_as_svg = function (idp,title) {
        //if (opt == "feature") {
            $.get("./lib/style.css", function (cssContent) {
                //console.log("My CSS = ", cssContent);
                d3.select(idp).select("svg")
                    .append("defs").append("style").attr("type", "text/css").html(cssContent);

                var html = d3.select(idp).select("svg")
                    .attr("version", 1.1)
                    .attr("xmlns", "http://www.w3.org/2000/svg")
                    .node().parentNode.innerHTML;

                var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);

                gelem("svgdataurl").href = "";
                gelem("svgdataurl").download = self.datafileselectedname+"_"+title;

                gelem("svgdataurl").href = imgsrc;
                gelem("svgdataurl").click();


            });
        //}
        // else if (opt == "instance") {
        //     $.get("./lib/style.css", function (cssContent) {
        //         //console.log("My CSS = ", cssContent);
        //         d3.select("#visp").select("svg")
        //             .append("defs").append("style").attr("type", "text/css").html(cssContent);

        //         var html = d3.select("#visp").select("svg")
        //             .attr("version", 1.1)
        //             .attr("xmlns", "http://www.w3.org/2000/svg")
        //             .node().parentNode.innerHTML;

        //         var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);

        //         gelem("svgdataurl").href = "";
        //         gelem("svgdataurl").download = self.datafileselectedname;

        //         gelem("svgdataurl").href = imgsrc;
        //         gelem("svgdataurl").click();


        //     });

        // }

    };

    this.featureselectionbyfiltername = function (txt2filter) {
        //gelem("iddialog").style.display = "none";
        featsel = [];
        txtfilter = txt2filter.split(';');
        for (var i in txtfilter) {
            txtfilter[i] = trim(txtfilter[i]);
            if (txtfilter[i] in self.lfenamesindex) {
                index = self.lfenamesindex[txtfilter[i]];
                featsel.push(index);
                //console.log("XX",txtfilter[i], index);
            }
            //console.log(txtfilter[i], self.lfenamesindex);

        }
        if (featsel.length > 0) {
            self.featureselected = featsel;
            self.layoutfeatures.highlightforce(self.featureselected);
        }
        //console.log(txtfilter);
    };

    this.setToolpiltex = function (ex, ey, txt) {
        gelem("floatdiv").innerHTML = "";
        gelem('floatdiv').style.left = (ex + 2) + "px";
        gelem('floatdiv').style.top = (ey - 23) + "px";
        gelem('floatdiv').style.display = "block";
        gelem("floatdiv").innerHTML = txt;
    };

    this.hideToolpiltex = function () {
        gelem("floatdiv").style.display = "none";
        gelem("floatdiv").innerHTML = "";
    };

    this.setkey = function (event) {
        if (event.ctrlKey || event.altKey ) {
            //console.log("control key");
            self.ispresskey = 1;
        }
        else if (event.shiftKey) {
            //console.log("shift key");
            self.ispresskey = 2;
        }
    };
    this.hidekey = function () {
        //console.log(" key nullll");
        self.ispresskey = 0;
    };

    this.viewFeaturesSelected = function (opt) {
        //this.featureselected;
        let datfe = [];
        let maxv = -1;
        let title = "";
        //let minv = -1;
        if (opt == "feature") {
            title = self.dataoutfeature.configfeature.relevance;
            //console.log(self.lfenames);
            //console.log(self.lfenamesindex);
            for (var i in self.featureselected) {
                e = self.featureselected[i];
                //score = self.ranking[e];
                score = self.dataoutfeature.configfeature.nodes[e].weight;

                datfe.push({
                    "label": self.lfenames[e],
                    "color": VertexColorF(score),
                    "score": score,
                    "scorenorm": score,
                });
                if (score > maxv) {
                    maxv = score;
                }
            }
            for (var i in datfe) {
                datfe[i]["scorenorm"] = datfe[i]["scorenorm"] / maxv;
            }
            gelem("featselectfeaturetitle").innerHTML = title;
            chart_circularhist(datfe, "#featselectfeaturecontent", 500, 500);
        }
        else if (opt == "instance") {
            //console.log("self.dataoutinstance.configinstance",self.dataoutinstance);
            var featt = self.dataoutinstance.configinstance.featureselected;
            //var rank = self.dataoutinstance.configinstance.ranking;
            var rank = self.dataoutinstance.configinstance.nodes;
            title = self.dataoutinstance.configinstance.relevance;
            for (var i in featt) {
                e = self.dataoutinstance.configinstance.featureselected[i];
                score = rank[e]["weight"];
                datfe.push({
                    "label": self.lfenames[e],
                    "color": VertexColorF(score),
                    "score": score,
                    "scorenorm": score,
                });
                if (score > maxv) {
                    maxv = score;
                }
            }
            for (var i in datfe) {
                datfe[i]["scorenorm"] = datfe[i]["scorenorm"] / maxv;
            }
            gelem("featselectinstancetitle").innerHTML = title;
            chart_circularhist(datfe, "#featselectinstancecontent", 500, 500);
        }
    };

    this.hideFeaturesSelected = function (opt) {
        if (opt == "feature") {
            gelem('featselectfeature').style.display = 'none';
        }
        else if (opt == "instance") {
            gelem('featselectinstance').style.display = 'none';
        }
    };

    this.initradiallayout = function () {
        //self.layoutfeatures.isradiallayout = true;
        //self.layoutfeatures.isupdatebundling = false;
        self.layoutfeatures.initradiallayout();

        //self.layoutfeatures.initlocation();

    };

    this.changecolorstable = function (c) {
        //console.log("c", c);
        if(graphvis.colorstableshitttype==1){
            CCTT.id = c;
            VertexColorF = CCTT.interpolate();

            chart_palettecolors(self.layoutfeatures.selectbythreshold,
                "seq1", 20, self.lwidth-20, VertexColorF);

            self.layoutfeatures.vertexcolorf = VertexColorF;
            self.layoutfeatures.updatecolors();

        }
        else if(graphvis.colorstableshitttype==2){
            CCTT.id = c;
            EdgeColorF = CCTT.interpolate();
            chart_histogram(self.setToolpiltex,
                self.hideToolpiltex,
                self.layoutfeatures.updatelinkoption,
                "seqedgehist", self.lwidth, EdgeColorF, self.dataoutfeature.layoutfeature["edgehist"]);

            self.layoutfeatures.edgecolorf = EdgeColorF;
            self.layoutfeatures.drawedges();
        }
        else if(graphvis.colorstableshitttype==3){
            //console.log("self.layoutintantes1", self.layoutintantes.projectioncolorf);
            CCTT.id = c;
            ProjectionColorF = CCTT.interpolate();
            //console.log("self.layoutintantes2", self.layoutintantes.projectioncolorf);

            self.layoutintantes.projectioncolorf = ProjectionColorF;
            self.layoutintantes.updatecolors();
        }
    };
}

$(document).ready(function () {
    $('#idtextdbname').focusout(function () {
        graphvis.getdatasetname();
        graphvis.fullScreen();
        //console.log("sdddddddddddd");
    });
});

function opendatsetparser(fid) {
    //self.fullScreen();
    graphvis.loadlayoutdbs();
    //graphvis.opendataset(fid);
}


let graphvis = new GraphVis();