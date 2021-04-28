/*
# Author: Ivar Vargas Belizario
# Copyright (c) 2020
# E-mail: ivar@usp.br
*/


<<<<<<< HEAD
//EdgeColor = d3.interpolateRgbBasis(["#b300d5", "#fff200", "#6cff00", "#00d3ff", "#0068ff"]);
//EdgeColor  = ["#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]
// EdgeColorPlasma = ["#310086", "#6100a0", "#9300a3", "#bb2885", "#d85969", "#ee884e", "#f5c03b", "#e5fb41"]
//EdgeColorF = d3.interpolateRgbBasis(EdgeColor);
=======
/**
 * Making initial objects
 */
CCTT = new ColorPalette();
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

CCTT.id = "plasma";
EdgeColorF = CCTT.interpolate();

<<<<<<< HEAD
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
            "attributes": "",
            "tooltip": "",
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
=======
CCTT.id = "oranges";
VertexColorF = CCTT.interpolate();

CCTT.id = "rainbow";
ProjectionColorF = CCTT.interpolate();

MOPRO = new MonitorProcess();


/**
 * Auxiliar methods
 */
function DataIO() {
    var data = {
        "argms": {}
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    };
    return data;
}

<<<<<<< HEAD

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
=======
/* 
function showloading(text) {
    gelem("idloading").style.display = "block";
    gelem("idloadingtxt").innerHTML = text+" ...";
}
function showstatus(load) {
    gelem("idloadingload").style.width = load+"%";
    //gelem("idloadingload").innerHTML = size;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
}
function hideloading() {
    gelem('idloading').style.display = "none";
}
<<<<<<< HEAD




=======
 */


/**
 * Claass: SevcieData
 */
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
function ServiceData(pname) {
    var self = this;
    this.in = new DataIO();
    this.ou = '';
    this.event = function () { };
    this.start = function () {
<<<<<<< HEAD
        processkey++;
        let ps = processkey;
        pushprocess(ps, pname);
=======
        var ps = MOPRO.pushprocess(pname);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        try {
            var url = "./query?data=" + JSON.stringify(self.in);
            d3.json(url, function (data) {
                self.ou = data;
                self.event();
<<<<<<< HEAD
                popprocess(ps);
            });
        }
        catch (err) {
            popprocess(ps);
            alert("Error: " + err.message);
        }

=======
                MOPRO.popprocess(ps);
            });
        }
        catch (err) {
            MOPRO.popprocess(ps);
            //self.mw.alert("","Error: " + err.message);
            console.log("err.message", err.message);
        }
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    };
}


<<<<<<< HEAD
function GraphVis() {
    let self = this;
=======
/**
 * Claass: Graph From Features
 */
function GraphFromFeatures() {
    let self = this;
    this.datax = {}

    this.listinstances = [
        {
            "collect":"instances",
            "query":    [
                            ["configinstance"],
                            ["typeinstance"],
                            ["layoutinstance"],
                            ["versioninstance"],
                        ]
        }
    ];

    
    this.listfeatures = [
        {
            "collect":"features",
            "query":    [
                            ["configfeature"],
                            ["typefeature"],
                            ["versionfeature"],
                            ["featurecheck"],

                            ["layoutfeature","root"],
                            ["layoutfeature","ranking"],
                            ["layoutfeature","rankingmin"],
                            ["layoutfeature","rankingmax"],
                            ["layoutfeature","initvertex1"],
                            ["layoutfeature","initvertex2"],
                            ["layoutfeature","tree"],
                            ["layoutfeature","treehi"],
                            ["layoutfeature","edgehist"]
                        ]
        },

        {
            "collect":"features",
            "query":    [
                            ["layoutfeature","graph","nodes"]
                        ]
        },

        {
            "collect":"features",
            "query":    [
                            ["layoutfeature","graph","links"]
                        ]
        },

        {
            "collect":"features",
            "query":    [
                            ["layoutfeature","graph","whole"]
                        ]
        },

    ];
    

    this.listbase = [
                            {
                                "collect":"features",
                                "query":    [

                                                ["fenames"],
                                                ["lastversion"],
                                                    
                                                ["_id"],
                                                ["name"],
                                                ["type"],

                                                /* features */
                                                /* instances */

                                                ["datecreate"],
                                                ["dateupdate"],
                                                ["hasupdate"],
                                                ["isshare"],
                                                
                                                ["statusopt"],
                                                ["statusval"],
                                                
                                                ["_id_user"]
                                            ]
                            },

                        ];

    this.listdataset = this.listbase.concat(this.listfeatures, this.listinstances);
    this.listdataset_count = 0;
    this.datagff = {};
    this.memprocess = function(){};
    //console.log("this.listdataset", this.listdataset);



    this.mw = new ModalWindow();
    this.USFOBJ = new UnselectedFeatures("idselectedfebt","idunselectedfecont",self);
        
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    this.adminid = 0;
    this.email = "";
    this.multiuser = 0;

    this.layoutfeatures = null;
<<<<<<< HEAD
    this.layoutintantes = null;
=======
    this.layoutinstance = null;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

    this.dataload = [];
    this.datafiles = [];
    this.featureselected = [];
<<<<<<< HEAD
    this.ranking = [];
=======
    //this.ranking = [];
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    this.datafileselected = "";
    this.datafileselectedname = "";
    this.lwidth = ((window.screen.availWidth) / 2) - 100;

    this.isnamedbedited = false;
    this.intarget = false;
    this.exchageslider = 0;
    this.intargetaction = false;
    this.target = "";
<<<<<<< HEAD
    this.attributes = [];
    this.tooltip = "";
    this.lfenamesindex = {};
    this.lfenames = []
    this.dataoutfeature = null;
    this.dataoutinstance = null;
=======
    this.lfenamesindex = {};
    //this.lfenames = []
    //this.dataoutfeature = null;
    //this.dataoutinstance = null;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    this.edgetransparency = 0.75;

    this.instvertexratio = 4;
    this.instvertexoacity = 0.75;


    this.ispresskey = 3;
    this.keepselectvertex = -1;

    this.colorstableshitttype = -1;

<<<<<<< HEAD
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
=======
    
    // new attributes
    this.unselectedfeids = [];
    this.idinstancelabel = [];
    
    this.auxfeatureselectedf = {};
    this.auxfeatureselectedi = {};


    this.featuresChecks = [];
    this.featuresChecks_count = 0;

/*     this.featuresChecks = [];
    this.featuresChecks_count = 0; */

    this.makeFeatureAux = function(nodes){
        var rest = {};
        for(var e of nodes){
            rest[e.label] = e.name;
        }
        return rest;
    };

    this.makeInstancesLabels = function(colname){
        if (self.datafileselected != "" && colname!=""){
            var ob = new ServiceData("compute instances labels");
            ob.in.argms["type"] = 21;
            ob.in.argms["file"] = self.datafileselected;
            ob.in.argms["idinstanceslabels"] = colname;

            ob.event = function () {
                self.idinstancelabel = this.ou;
            };
            ob.start();
        }
    };


    this.getfeatureselected = function (){
        var featureselectedTrueIds = [];
        for(var i of self.featureselected){
            label = self.getNode(i).label;
            tid = self.lfenamesindex[label];
            if (self.USFOBJ.at(tid).value==0){
                featureselectedTrueIds.push(tid);
            }
        }
        return featureselectedTrueIds;
    };

    this.setfeatureselected = function (featureselected){
        rest = [];
        for(var i of featureselected){
            nam = self.datagff.fenames[i];
            rest.push(self.auxfeatureselectedf[nam]);
        }
        return rest;
    };

    
    this.visFeatures = function () {

        //self.fullScreen();
        self.setfullScreen();
        self.unselectedfeids = self.USFOBJ.getUnselected();        
        
        if (self.datafileselected != "" && self.unselectedfeids.length<(self.datagff.fenames.length-1)) {
            self.cleanfeatures();
            var status = "making graphs from features";
            var ob = new ServiceData(status);
            ob.in.argms["type"] = 0;
            ob.in.argms["file"] = self.datafileselected;
            ob.in.argms["target"] = self.target;
            ob.in.argms["intarget"] = self.intarget;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            ob.in.argms["proximity"] = gvalue('proximity');
            ob.in.argms["instanceproximity"] = gvalue('instanceproximity');
            ob.in.argms["relevance"] = gvalue('relevance');
            ob.in.argms["algorithm"] = gvalue('algorithm');
            ob.in.argms["layout"] = gvalue('layout');
<<<<<<< HEAD
            ob.in.argms["attributes"] = self.attributes;
            ob.in.argms["tooltip"] = self.tooltip;
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
=======
            ob.in.argms["isfeature"] = 1;
            ob.in.argms["featureselected"] = self.getfeatureselected();
            ob.in.argms["ranking"] = [];

            ob.in.argms["idinstanceslabels"] = gvalue("idinstanceslabels");

            ob.in.argms["statusval"] = status;

            ob.event = function () {

                if(this.ou["statusopt"]==0){
                    //loading results
                    //console.log("ready ok");
                    self.dequeLoadFeatures();
                    //self.processFeaturesResults(this.ou);
                }
                else if(this.ou["statusopt"]==1){
                    //working
                    self.memprocess = function () {
                        self.dequeLoadFeatures();
                    };
                    self.showstatuspanel(this.ou);
                }
                else if(this.ou["statusopt"]==2){
                    //error
                    //console.log("error");
                }
            };
            ob.start();
        }

    };


    this.visInstnaces = function () {
        self.cleaninstances();
        self.setfullScreen();
        if (self.featureselected.length >= 2) {
            var status = "making projection from features selected";
            var ob = new ServiceData(status);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            ob.in.argms["type"] = 4;
            ob.in.argms["threshold"] = 0.78;
            ob.in.argms["target"] = self.target;
            ob.in.argms["intarget"] = self.intarget;
            ob.in.argms["proximity"] = gvalue('proximity');
            ob.in.argms["instanceproximity"] = gvalue('instanceproximity');
            ob.in.argms["relevance"] = gvalue('relevance');
            ob.in.argms["algorithm"] = gvalue('algorithm');
            ob.in.argms["layout"] = gvalue('layout');
<<<<<<< HEAD
            ob.in.argms["attributes"] = self.attributes;
            ob.in.argms["tooltip"] = self.tooltip;
=======
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            ob.in.argms["projection"] = gvalue('projection');
            ob.in.argms["topleft"] = 'topleft2';
            ob.in.argms["topfright"] = 'topright2';
            ob.in.argms["infleft"] = 'infleft2';
            ob.in.argms["infright"] = 'infright2';
            ob.in.argms["file"] = self.datafileselected;
            ob.in.argms["isfeature"] = 0;
<<<<<<< HEAD
            ob.in.argms["featureselected"] = self.featureselected;
            ob.in.argms["ranking"] = [];

=======
            ob.in.argms["featureselected"] = self.getfeatureselected();
            ob.in.argms["ranking"] = [];

            ob.in.argms["idinstanceslabels"] = gvalue("idinstanceslabels");

            ob.in.argms["statusval"] = status;

            //self.unselectedfeids
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            if (ob.in.argms["projection"] == "mst") {

            }
            else if (ob.in.argms["projection"] == "simple") {
                self.loadfilecsv();
<<<<<<< HEAD
                //console.log("simple");
                setTimeout(showloading, 1);
=======
                setTimeout( function() {
                                MOPRO.show("simple projection");
                            }
                            , 1);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                setTimeout(self.plotpaiercorrelate, 100);
            }
            else {
                ob.event = function () {
<<<<<<< HEAD
                    self.dataoutinstance = this.ou;
                    //console.log("data instance:",self.dataoutinstance);
                    if ("lastversion" in this.ou && "versioninstance" in this.ou && this.ou["lastversion"] == this.ou["versioninstance"]) {
                        var data = self.dataoutinstance.layoutinstance;
                        //self.ranking = self.dataoutinstance.configinstance.ranking;
                        //console.log("this.in.argms",this.in.argms);
                        self.layoutintantes = new plotProjection(ProjectionColorF, idview, self, data, this.in.argms);
                        gelem("topleft2").innerHTML = "";

=======
                    if(this.ou["statusopt"]==0){
                        self.dequeLoadInstances();
                        //self.processInstancesResults(this.ou);
                        //self.processFeaturesResults(this.ou);
                    }
                    else if(this.ou["statusopt"]==1){
                        //working
                        self.memprocess = function () {
                            self.dequeLoadInstances();
                        };
                        self.showstatuspanel(this.ou);
                    }
                    else if(this.ou["statusopt"]==2){
                        //error
                        //console.log("error");
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                    }
                };
                ob.start();
            }
        }
    };
<<<<<<< HEAD
=======
    

   


    /**
     * Load one dataset
     */
    this.dequeLoadDataset = function(datasetid){
        MOPRO.auto = false;

        var obj = {};
        var count = 0;
        loadObject( "loading dataset", obj, self.listdataset, count, datasetid,
            //process function
            function (obj, ou) {
                for(let q of ou["response"]){
                    setDict(obj, q["query"], q["response"]);
                }
            },
            //end function
            function (obj) {
                MOPRO.auto = true;
        
                self.datagff = {};
                self.datagff = obj;
                
                self.processFeaturesResults(self.datagff);
                self.processInstancesResults(self.datagff);
            },
            //busy function
            function (ou) {
                self.memprocess = function () {
                    self.dequeLoadDataset(datasetid);
                    //console.log("busyyyyyyyyyyyyyyyyy datasetatast");
                };
                self.showstatuspanel(ou);
                //self.shifflayoutcontrols("idstatedataset");
            },
            24
        );
    };


    /**
     * Load one dataset-features
     */
     this.dequeLoadFeatures = function(){
        MOPRO.auto = false;
        var count = 0;
        var obj = {};
        loadObject("loading dataset (features)", obj, self.listfeatures, count, self.datafileselected, 
            //process function
            function (obj, ou) {
                for(let q of ou["response"]){
                    setDict(obj, q["query"], q["response"]);
                }
            }, 
            //end function
            function(obj) {
                MOPRO.auto = true;
                //update datagff
                for (var k in obj){
                    self.datagff[k] = {};
                    self.datagff[k] = obj[k];
                }
                self.processFeaturesResults(self.datagff);
            },
            //busy function
            function (ou) {
                self.memprocess = function () {
                    self.dequeLoadFeatures();
                    //console.log("busyyyyyyyyyyyyyyyyy");
                };
                self.showstatuspanel(ou);
            },
            24
        );
    };


    /**
     * Load one dataset-features
     */
     this.dequeLoadInstances = function(){
        MOPRO.auto = false;
        var count = 0;
        var obj = {};
        loadObject("loading dataset (instances)", obj, self.listinstances, count, self.datafileselected, 
            //process function
            function (obj, ou) {
                for(let q of ou["response"]){
                    setDict(obj, q["query"], q["response"]);
                }
            }, 
            //end function
            function(obj) {
                MOPRO.auto = true;
                //update datagff
                for (var k in obj){
                    self.datagff[k] = {};
                    self.datagff[k] = obj[k];
                }
                self.processInstancesResults(self.datagff);
            },
            //busy function
            function (ou) {
                self.memprocess = function () {
                    self.dequeLoadInstances();
                };
                self.showstatuspanel(ou);
            },
            24
        );
    };

    /**
     * Send select and unselect features
     */
    this.dequeSendFeaturesChecks = function () {
        self.unselectedfeids = self.USFOBJ.getUnselected();                
        if (self.datafileselected != "" && self.unselectedfeids.length<(self.datagff.fenames.length-1)) {
            var list = [];
            for (var e of self.USFOBJ.unselectedfeatures){
                var v = e.value==1 ? 0 : 1;
                list.push([e.id, v]);
            }
            //self.featuresChecks = chunk(self.USFOBJ.unselectedfeatures,5);
            self.featuresChecks = chunk(list,100);
            
            
            MOPRO.auto = false;
            var count = 0;
            
            var obj = {};
            loadObject("sending features selected and unselected",
                obj, self.featuresChecks, count, self.datafileselected,
                //process function
                function (obj, ou) {
    
                },
                //end function
                function (obj) {
                    MOPRO.auto = true;
                    self.visFeatures();
                },
                //busy function
                function () {
    
                },
                23
            );
        }
    };

    this.processFeaturesResults = function(ds){
        self.shifflayoutcontrols("mainlayout");
        if ("lastversion" in ds && "versionfeature" in ds && ds["lastversion"] == ds["versionfeature"]) {
            //self.dataoutfeature = ds;
            //self.ranking = ds.configfeature.ranking;

            self.lfenamesindex = {};
            //self.lfenames = [];
            if ("fenames" in ds) {
                //self.lfenames = ds["fenames"];
                strs = "";
                stro = "";
                i = 0;
                for (var item of ds["fenames"]) {
                    self.lfenamesindex[item] = i;
                    strs += "<option value='" + item + "'>" + item + "</option>";
                    stro += "<option value='" + item + "'>" + item + "</option>";
                    i++;
                }
                gelem("target").innerHTML = strs;
                gelem("target").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                self.target = gelem("target").value;
                
                gelem("idinstanceslabels").innerHTML = stro;
                gelem("idinstanceslabels").selectedIndex = 0;
            }
            
            if ("configfeature" in ds) {
                conf = ds["configfeature"];
                if ("target" in conf) {
                    gelem('target').value = conf["target"];
                    self.target = conf["target"];
                }
                if ("proximity" in conf) {
                    gelem('proximity').value = conf["proximity"];
                }
                if ("relevance" in conf) {
                    gelem('relevance').value = conf["relevance"];
                }
                if ("algorithm" in conf) {
                    gelem('algorithm').value = conf["algorithm"];
                }
                if ("layout" in conf) {
                    gelem('layout').value = conf["layout"];
                }


                //add feature selected
                //add is target is included
                if ("intarget" in conf) {
                    self.intargetaction = conf["intarget"];
                    self.intarget = conf["intarget"];
                }
                if (Object.keys(ds.layoutfeature.graph.nodes).length > 0 ) {
                    self.auxfeatureselectedf = self.makeFeatureAux(ds.layoutfeature.graph.nodes);
                }
                if ("featureselected" in conf) {
                    //console.log("conf[featureselected]", conf["featureselected"]);
                    self.featureselected = self.setfeatureselected(conf["featureselected"]);
                }

                //begin new code
                self.getUnselecteFeatures();
                /* 
                self.USFOBJ.init();
                if ("unselectedfeids" in conf) {
                    self.unselectedfeids = conf["unselectedfeids"];
                    self.USFOBJ.load();
                }
                self.USFOBJ.print();
                */
                //end new code

                if (    "typefeature" in ds &&
                        "layoutfeature" in ds &&
                        ds["layoutfeature"] != "" &&
                        "layout" in conf
                ){
                    if (ds["typefeature"] == "graph") {
                        inargms = {};
                        inargms["infleft"] = 'topleft1';
                        inargms["infright"] = 'topright1';
                        //var data = ds["layoutfeature"];
                        if (conf["layout"] == "fo" && Object.keys(ds["layoutfeature"]).length > 0) {
                            self.layoutfeatures = new chart_force(VertexColorF, EdgeColorF, self, "#vis", -10, inargms);
                        }
                        else if (conf["layout"] == "sb" && Object.keys(ds["layoutfeature"]).length > 0) {
                            self.layoutfeatures = new chart_sunburst("#vis", VertexColorF, self, inargms);
                        }
                        else if (conf["layout"] == "pk") {
                            self.layoutfeatures = new chart_circlepack("#vis", self, VertexColorF);
                        }
                        gelem('edgeslider').value = 0;
                        self.edgeslider = 0;
                        
                        chart_palettecolors(self.layoutfeatures.selectbythreshold,
                            "seq1", 20, self.lwidth-20, VertexColorF);

                        chart_histogram(self.setToolpiltex,
                            self.hideToolpiltex,
                            self.layoutfeatures.updatelinkoption,
                            "seqedgehist", self.lwidth, EdgeColorF, self.datagff.layoutfeature["edgehist"]);

                        self.changeintarget();
                    }
                    else if (ds["typefeature"] == "otherss") {
                        if ("layoutfeature" in ds && ds["layoutfeature"] != "" && "layout" in conf) {

                        }
                    }
                }
            }
        }
            
    };


    this.processInstancesResults = function(ds){
        self.shifflayoutcontrols("mainlayout");
        if ("lastversion" in ds && "versioninstance" in ds && ds["lastversion"] == ds["versioninstance"]) {
            //self.dataoutinstance = ds;
            if ("configinstance" in ds) {
                conf = ds["configinstance"];
                if ("projection" in conf) {
                    gelem('projection').value = conf["projection"];
                }
                if ("instanceproximity" in conf) {
                    gelem('instanceproximity').value = conf["instanceproximity"];
                }

                if ("idinstanceslabels" in conf && conf["idinstanceslabels"]!="") {
                    gelem('idinstanceslabels').value = conf["idinstanceslabels"];
                    self.makeInstancesLabels(conf["idinstanceslabels"]);
                }
                else{
                    self.makeInstancesLabels(gelem('idinstanceslabels').value);
                }

                if ("silhouette" in conf) {
                    gelem("topleft2").innerHTML = "SILHOUETTE: " + conf["silhouette"];
                }

            }
            if ("typeinstance" in ds) {
                if (ds["typeinstance"] == "projection") {
                    if ("layoutinstance" in ds && ds["layoutinstance"] != "") {
                        //var data = ds["layoutinstance"];
                        argms = {"infleft": 'infleft2',"infright": 'infright2'};
                        self.layoutinstance = new plotProjection(ProjectionColorF, "#visp", self, argms);

                        self.auxfeatureselectedi = self.makeFeatureAux(self.datagff.configinstance.nodes);
                    }
                }
                else if (ds["typeinstance"] == "graph") {
                    if ("layoutinstance" in ds) {
                        //
                    }
                }
            }
        }
    };
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

    this.loaddatasets = function () {
        var ob = new ServiceData("load datasets");
        ob.in.argms["type"] = 1;

<<<<<<< HEAD
        //console.log("listdatasets");
        ob.event = function () {
            self.datafiles = this.ou;
            //console.log("self.datafiles",this.ou);
            //datafiles.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

=======
        ob.event = function () {
            self.datafiles = this.ou;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            self.searchdataset('');
        };
        ob.start();
    };

    this.loadlayoutdbs = function () {
<<<<<<< HEAD
=======
/*         gelem('iddatasettitle').innerHTML = "";
        gelem("iddatasettitle").style.display = "none"
        gelem("layoutchangenametxtdb").style.display = "none" */
        
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        self.loaddatasets();
        self.shifflayoutcontrols('iddatasetlayout');
    };

    this.listusers = function () {
        USERC.listUsers();
        if(self.adminid==1){
            gelem("idformnewuser").innerHTML = USERC.newUserForm();
        }
<<<<<<< HEAD
        //gelem("idformnewuser").innerHTML = "<table><tr><td>d<t/d></tr><tr><td>d<t/d></tr></table>";
=======
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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

<<<<<<< HEAD
    this.opendataset = function (filename, userid) {

        self.isnamedbedited = true;
        if (userid == "")
            self.isnamedbedited = false;

        self.fullScreen();
=======
    this.opendataset = function (filename, usersame) {

        self.isnamedbedited = usersame;
        
        self.USFOBJ.close();

        self.setfullScreen();
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

        self.cleanfeatures();
        self.cleaninstances();

        self.featureselected = [];
<<<<<<< HEAD
        self.ranking = [];
        self.intargetaction = false;
        self.intarget = false;
        self.target = "";
        self.attributes = [];
        self.tooltip = "";
        self.exchageslider = 0;

        self.layoutfeatures = null;
        self.layoutintantes = null;
=======
        //self.ranking = [];
        self.intargetaction = false;
        self.intarget = false;
        self.target = "";
        self.exchageslider = 0;

        self.layoutfeatures = null;
        self.layoutinstance = null;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

        self.datafileselected = filename;
        self.getdatasetname();

<<<<<<< HEAD
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

                gelem("attributes").innerHTML = strs;
                gelem("attributes").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                self.attributes = gelem("attributes").value;

                gelem("tooltip").innerHTML = strs;
                gelem("tooltip").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                self.tooltip = gelem("tooltip").value;
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
                        if ("attributes" in conf) {
                            gelem('attributes').value = conf["attributes"];
                            self.attributes = conf["attributes"];
                        }
                        else {
                            gelem("attributes").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                            self.attributes = gelem("attributes").value;
                        }
                        if ("tooltip" in conf) {
                            gelem('tooltip').value = conf["tooltip"];
                            self.tooltip = conf["tooltip"];
                        }
                        else {
                            gelem("tooltip").selectedIndex = Object.keys(self.lfenamesindex).length - 1;
                            self.tooltip = gelem("tooltip").value;
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



=======
        /*
        self.openfeature();
        self.openinstance();
        */
        self.shifflayoutcontrols('mainlayout');

        self.dequeLoadDataset(self.datafileselected);


    };

>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
        //console.log(b);

        var stringhtml = "";
        var txtshare = "";
        if(graphvis.multiuser==1){
=======
        var stringhtml = "";
        var txtshare = "";

        if(self.multiuser==1){
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
                        `
                        //`+graphvis.multiuser+`
=======
                        `;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
=======
            var usersame = false;
            if (b[i]._id_user_query == b[i]._id_user) {
                usersame = true;
            }
    
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            stringhtml += `<tr class="trover"
                                style="z-index:9">`;
            stringhtml += `<td
                                onclick="
<<<<<<< HEAD
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
=======
                                    GFFOBJ.opendataset('`+ b[i]._id + `', `+usersame+`);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                                "
                                title="Open dashboard"
                            >`+ b[i].name + `</td>`;

            issh = ""
            if (b[i].isshare == 1)
                issh = isnoshare;

<<<<<<< HEAD
            if (graphvis.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
=======
            if (self.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    GFFOBJ.opendataset('`+ b[i]._id + `', `+usersame+`);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                                "
                                title="Open dashboard"
                            >`+ issh + `</td>`;
            }
            
<<<<<<< HEAD
            if (graphvis.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
=======
            if (self.multiuser==1){
            stringhtml += `<td
                                onclick="
                                    GFFOBJ.opendataset('`+ b[i]._id + `', `+usersame+ `);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
            if (b[i]._id_user != "") {
=======
            if (usersame) {
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

                ownclt1 = `
                            <a href="#" class="btn btn-light"
                                style="padding: 2px;"
                                title="Share dataset"
                                onclick="
<<<<<<< HEAD
                                    graphvis.sharedataset('`+ b[i]._id + `');
=======
                                    GFFOBJ.sharedataset('`+ b[i]._id + `');
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
                                    graphvis.unsharedataset('`+ b[i]._id + `');
=======
                                    GFFOBJ.unsharedataset('`+ b[i]._id + `');
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
                                            graphvis.dropdataset('`+ b[i]._id + `');
=======
                                            GFFOBJ.mw.option('',
                                                'Are you sure to delete the dataset?',
                                                GFFOBJ.dropdataset,
                                                ['`+b[i]._id+`']);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
                                    graphvis.opendataset('`+ b[i]._id + `', '` + b[i]._id_user + `');
=======
                                    GFFOBJ.opendataset('`+ b[i]._id + `', `+usersame+`);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                                "
                                title="Open dashboard"
                            >`+ b[i].dateupdate + `</td>`;
            stringhtml += `<td>
                                <div style="z-index:10">
                                    <a href="#" class="btn btn-light"
                                        style="padding: 2px;"
                                        title="Clone dataset"
                                        onclick="
<<<<<<< HEAD
                                            graphvis.clonedataset('`+ b[i]._id + `');
=======
                                        GFFOBJ.mw.option('',
                                            'Are you sure to clone the dataset?',
                                            GFFOBJ.clonedataset,
                                            ['`+b[i]._id+`']);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                                        "
                                    >
                                        <i  class="fa fa-clone fa-lg"
                                            style="color: #1479d9;"
                                        ></i>
                                    </a>
                                    <a href="#" class="btn btn-light"
                                        style="padding: 2px;"
<<<<<<< HEAD
                                        title="Downlod dataset"
                                        onclick="
                                            graphvis.downloaddataset('`+ b[i]._id + `');
=======
                                        title="Download dataset"
                                        onclick="
                                            GFFOBJ.downloaddataset('`+ b[i]._id + `');
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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

<<<<<<< HEAD
        //console.log("stringhtml",stringhtml);
=======
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        gelem("idtabledatasets").innerHTML = stringhtml;
    };

    this.getdatasetname = function () {
        var ob = new ServiceData("get data set name");
        ob.in.argms["type"] = 3;
        ob.in.argms["file"] = self.datafileselected;
        ob.event = function () {
<<<<<<< HEAD
            gelem('iddatasettitle').innerHTML = this.ou;
=======
            var txtnamedb = this.ou;
            if (self.isnamedbedited){
                txtnamedb += `&nbsp;<i class="fas fa-edit fa-sm"></i>`;
            }
            gelem('iddatasettitle').innerHTML = txtnamedb;
            gelem('iddatasettitle').setAttribute("title","Change name");

>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            gelem('idtxtsearch').value = this.ou;
            gelem('idtextdbname').value = this.ou;
            self.datafileselectedname = this.ou;

            gelem('layoutchangenametxtdb').style.display = 'none';
            gelem('iddatasettitle').style.display = 'block';
        };
        ob.start();
    };

    this.uploadfiledata = function () {
<<<<<<< HEAD
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
=======
        var fi = document.getElementById('fileu');
        var file = fi.value;
        var reg = /(.*?)\.(csv|zip)$/;
        if (file.match(reg)) {
            var fsize = fi.files.item(0).size;
            var z = Math.round((fsize / 1024));
            if (z <= 71680) {
                var ob = new DataIO();
                ob.argms.type = 3;
                gelem('datafromupload').value = JSON.stringify(ob);
                MOPRO.status(100);
                MOPRO.show("uploading file");

                //showloading
                gelem('formupload').submit();        
                gelem('fileu').value = "";        
            }
            else{
                self.mw.alert("","please use files up to 70MB");
            }
        }
        else{
            self.mw.alert("","Please use .csv and zip files");
        }
        fi.value = "";
    };

    this.loadfilecsv = function () {
        //d3.csv("http://localhost:8888/data/"+datafileselected+"/transform.csv", function(datai) {
        d3.csv("./data/" + self.datafileselected + "/transform.csv", function (datai) {
            self.dataload = datai;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
                //console.log("resta:", xi,yi);
=======
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                coordination(d3.event.x, d3.event.y);
            })
            .on("end", function () {

            });

<<<<<<< HEAD

=======
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
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
=======

            });

        svgpad.append("g");
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

        function coordination(x, y) {
            if (x >= 0 && y >= 0 && x < wwwd && y < wwwd) {
                var xi = x - xx;
                var yi = y - yy;

                cx = (xi / wwwd) * 17.0;
                cy = (yi / wwwd) * 17.0;
<<<<<<< HEAD
                //console.log("QQWEAA",cx, cy);
                self.layoutfeatures.translatte(cx, cy);
                //                layoutfeatures.scalle(2.0);
                //circleSelection.attr("transform", "translate(" + x + "," + y+ ")");
=======
                self.layoutfeatures.translatte(cx, cy);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            }
        }
    };

    this.plotpaiercorrelate = function () {
        if (self.featureselected.length >= 2) {
            d3.select("#visp").selectAll("svg").remove();
<<<<<<< HEAD

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
=======
            chart_correlation("#visp", self.dataload, self.featureselected, gvalue('target'));
        }
        MOPRO.hide();
    };
    
/*     this.featureCheck = function (feid, feva) {
        var ob = new ServiceData("unselected feature");
        ob.in.argms["type"] = 22;
        ob.in.argms["file"] = self.datafileselected;
        ob.in.argms["feid"] = feid;
        ob.in.argms["feva"] = feva;
        ob.event = function () {
            response = this.ou;
            if (response["response"] != 0) {

            }
        };
        ob.start();
    }; */


    this.getUnselecteFeatures = function () {
        var ob = new ServiceData("get unselected features");
        ob.in.argms["type"] = 22;
        ob.in.argms["file"] = self.datafileselected;
        ob.event = function () {
            //self.USFOBJ.unselectedfeatures = this.ou["response"];
            //console.log("this.ou", this.ou);
            self.unselectedfeids = this.ou;
            self.USFOBJ.init();
            self.USFOBJ.load();
            self.USFOBJ.print();
        };
        ob.start();
    };





    this.dropdataset = function (iddb) {
        var ob = new ServiceData("drop dataset");
        ob.in.argms["type"] = 10;
        ob.in.argms["file"] = iddb;
        ob.event = function () {
            response = this.ou;
            self.loadlayoutdbs();
        };
        ob.start();
    };

    this.sharedataset = function (iddb) {
        var ob = new ServiceData("share dataset");
        ob.in.argms["type"] = 8;
        ob.in.argms["file"] = iddb;
        ob.event = function () {
            response = this.ou;
            self.loadlayoutdbs();
        };
        ob.start();
    };

    this.unsharedataset = function (iddb) {
        var ob = new ServiceData("unshare dataset");
        ob.in.argms["type"] = 9;
        ob.in.argms["file"] = iddb;
        ob.event = function () {
            response = this.ou;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            self.loadlayoutdbs();
        };
        ob.start();
    };

    this.clonedataset = function (iddb) {
<<<<<<< HEAD
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
=======
        var ob = new ServiceData("clone dataset");
        ob.in.argms["type"] = 7;
        ob.in.argms["file"] = iddb;
        ob.event = function () {
            response = this.ou;
            self.loadlayoutdbs();
        };
        ob.start();
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    };

    this.downloaddataset = function (iddb) {
        datin = new DataIO();
        datin.argms["type"] = 12;
        datin.argms["file"] = iddb;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url;
    };

<<<<<<< HEAD
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
=======
    this.export2dprojwhole = function () {
        /* datin = new DataIO();
        datin.argms["type"] = 16;
        datin.argms["file"] = self.datafileselected;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url; */
    };

    this.export2dprojselected = function () {
        /* datin = new DataIO();
        datin.argms["type"] = 16;
        datin.argms["file"] = self.datafileselected;
        var url = "./query?data=" + JSON.stringify(datin);
        window.location.href = url; */
    };

    this.exportfeat2datafile = function () {   
        if(Object.keys(self.datagff.layoutfeature.graph.nodes).length){
            MOPRO.show("download .data file");
            datin = new DataIO();
            datin.argms["type"] = 17;
            datin.argms["file"] = self.datafileselected;
            var url = "./query?data=" + JSON.stringify(datin);
            window.location.href = url;
            /*
            window.open(
                url,
                '_blank'
                );
            */
            MOPRO.hide();
            
            /* setTimeout( function () {

            }
            , 1); */

        }
    };

    this.updatedatasetname = function (e, newname) {
        newname = trim(newname);
        if (e.keyCode === 13) {
            if (self.datafileselected != "" && newname != "") {
                var ob = new ServiceData("update dataset name");
                ob.in.argms["type"] = 6;
                ob.in.argms["file"] = self.datafileselected;
                ob.in.argms["newname"] = newname;
                ob.event = function () {
                    response = this.ou;
                    self.getdatasetname();
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                };
                ob.start();
            }
        }
    };

<<<<<<< HEAD
=======
    this.logout = function () {
        window.location.href = "./logout";
    };

>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    this.changepassword = function () {
        pass = gelem("ipassword").value;
        npass = gelem("inpassword").value;
        rpass = gelem("inpasswordr").value;
<<<<<<< HEAD
        //console.log("0000000000");
        if (pass != "" && npass != "" && rpass != "") {
            //console.log("111111111", pass, npass);
            if (npass == rpass) {
                //console.log("2222222222");
=======
        if (pass != "" && npass != "" && rpass != "") {
            if (npass == rpass) {
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                var ob = new ServiceData("change password");
                ob.in.argms["type"] = 11;
                ob.in.argms["password"] = pass;
                ob.in.argms["newpassword"] = npass;
<<<<<<< HEAD

                ob.event = function () {
                    response = this.ou;
                    if (response["response"] == 1) {
                        alert("The new password was saved!");
                        window.location.href = "./logout";
                    }
                    //console.log(response["response"]);
=======
                ob.event = function () {
                    response = this.ou;
                    if (response["response"] == 1) {
                        self.mw.alert("","The new password was saved!", self.logout);
                    }
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                };
                ob.start();
            }
        }
    };

    this.silhouette = function () {
<<<<<<< HEAD
        var ob = new ServiceData("compute silhouette");
        ob.in.argms["type"] = 13;
        ob.in.argms["file"] = self.datafileselected;

        ob.event = function () {
            response = this.ou;
            //console.log("response silhouette", response);
            gelem("topleft2").innerHTML = "SILHOUETTE: " + response;

=======
        var status = "compute silhouette";
        var ob = new ServiceData(status);
        ob.in.argms["type"] = 13;
        ob.in.argms["file"] = self.datafileselected;
        ob.in.argms["statusval"] = status;
        ob.event = function () {
            response = this.ou;
            gelem("topleft2").innerHTML = "SILHOUETTE: " + response;
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        };
        ob.start();
    };


    this.changeintarget = function () {
<<<<<<< HEAD
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
=======
        if (self.intargetaction) {
            self.intarget = true;
            self.intargetaction = false;
            if (self.featureselected.length > 0) {
                var istargetinclude = false;
                var taindex = self.auxfeatureselectedf[self.target];
                for (var e of self.featureselected) {
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
            el.style.backgroundColor = '#f1f1f1';
            self.intarget = false;
            self.intargetaction = true;
            ref = [];
            taindex = self.lfenamesindex[self.target];
=======
            self.intarget = false;
            self.intargetaction = true;
            ref = [];
            taindex = self.auxfeatureselectedf[self.target];
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
=======
        self.changeintargetbtn();
    };
    
    this.changeintargetbtn = function () {
        var el = gelem("btnintarget");
        if (self.intargetaction) {
            el.style.backgroundColor = '#f1f1f1';
        }
        else{
            el.style.backgroundColor = '#ffd70f';
        }
    };

    this.getNode = function(i){
        //return this.dataoutfeature.layoutfeature["graph"].nodes[i];
        return self.datagff.layoutfeature["graph"].nodes[i];
    };

    //listfeatures
    this.showstatuspanel = function(ou){
        self.shifflayoutcontrols("idstatedataset");
        gelem("idstatusval").innerHTML = ou["statusval"];
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
    };

    this.shifflayoutcontrols = function (el) {
        //fullScreen();
        gelem("idchangepasswordlayout").style.display = "none";
        gelem("iduserlayout").style.display = "none";
        gelem("iddatasetlayout").style.display = "none";
        gelem("idaboutlayout").style.display = "none";
        gelem("mainlayout").style.display = "none";
<<<<<<< HEAD

=======
        gelem("idstatedataset").style.display = "none";
        
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        gelem(el).style.display = "block";
    };

    this.showedgebundlingX = function () {
        if (self.layoutfeatures.isupdatebundling) {
<<<<<<< HEAD
            setTimeout(showloading, 1);
=======

            setTimeout( function () {
                            MOPRO.show("making edge bundling");
                        }
                        , 1);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        }
        setTimeout(self.layoutfeatures.showedgebundling, 500);
    };

    this.main = function () {
<<<<<<< HEAD
=======
        MOPRO.main();
        self.mw.main();
        
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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

<<<<<<< HEAD
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

=======
        if (self.adminid==1 && self.multiuser==1){
            gelem("iduserlistop").style.display = "block";
        }
        

        document.addEventListener('keydown', (event) => {
            self.setkey(event);
        });
        document.addEventListener('keyup', (event) => {
            self.hidekey();
        });
        self.hidekey();

        CCTT.main();

    };

    this.fullScreen = function () {
        var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

        if (!isInFullScreen) {
            self.setfullScreen();
        } else {
            self.exitfullScreen();
        }
    };

    this.setfullScreen = function () {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    };

    this.exitfullScreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };
    
    this.save_as_svg = function (idp,title) {
        $.get("./lib/style.css", function (cssContent) {
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
    };

    this.featureselectionbyfiltername = function (txt2filter) {
        featsel = [];
        txtfilter = txt2filter.split(';');
        nfilter = [];
        for (var wd of txtfilter) {
            wd = trim(wd);
            if (wd in self.auxfeatureselectedf) {
                index = self.auxfeatureselectedf[wd]
                featsel.push(index);
                nfilter.push(wd);
            }
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        }
        if (featsel.length > 0) {
            self.featureselected = featsel;
            self.layoutfeatures.highlightforce(self.featureselected);
<<<<<<< HEAD
        }
        //console.log(txtfilter);
=======
            gelem("fesenanetxt").value = nfilter.join(';');
        }
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
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
=======
            self.ispresskey = 1;
            //console.log("event.ctrlKey || event.altKey");
        }
        else if (event.shiftKey) {
            self.ispresskey = 2;
            //console.log(event.shiftKey);
        }

    };
    this.hidekey = function () {
        self.ispresskey = 0;
        //console.log("self.ispresskey", self.ispresskey);
    };

    this.viewFeaturesSelected = function (opt) {
        let datfe = [];
        let maxv = -1;
        let title = "";
        if (opt == "feature") {
            title = self.datagff.configfeature.relevance;
            for (var i of self.featureselected) {
                var item = self.getNode(i);
                score = self.datagff.configfeature.nodes[item.name].weight;
                datfe.push({
                    "label": item.label,
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
                    "color": VertexColorF(score),
                    "score": score,
                    "scorenorm": score,
                });
                if (score > maxv) {
                    maxv = score;
                }
            }
<<<<<<< HEAD
=======

>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            for (var i in datfe) {
                datfe[i]["scorenorm"] = datfe[i]["scorenorm"] / maxv;
            }
            gelem("featselectfeaturetitle").innerHTML = title;
            chart_circularhist(datfe, "#featselectfeaturecontent", 500, 500);
        }
        else if (opt == "instance") {
<<<<<<< HEAD
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
=======
            title = self.datagff.layoutinstance.configinstance.relevance;
            var featt = self.datagff.layoutinstance.configinstance.featureselected;
            for (var e of featt) {
                var i = self.auxfeatureselectedi[self.datagff.fenames[e]];
                var item = self.datagff.layoutinstance.configinstance.nodes[i];
                score = item.weight;
                datfe.push({
                    "label": item.label,
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
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
<<<<<<< HEAD
        //self.layoutfeatures.isradiallayout = true;
        //self.layoutfeatures.isupdatebundling = false;
        self.layoutfeatures.initradiallayout();

        //self.layoutfeatures.initlocation();

    };

    this.changecolorstable = function (c) {
        //console.log("c", c);
        if(graphvis.colorstableshitttype==1){
=======
        self.layoutfeatures.initradiallayout();
    };

    this.changecolorstable = function (c) {
        if(self.colorstableshitttype==1){
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            CCTT.id = c;
            VertexColorF = CCTT.interpolate();

            chart_palettecolors(self.layoutfeatures.selectbythreshold,
                "seq1", 20, self.lwidth-20, VertexColorF);

            self.layoutfeatures.vertexcolorf = VertexColorF;
            self.layoutfeatures.updatecolors();
<<<<<<< HEAD

        }
        else if(graphvis.colorstableshitttype==2){
=======
        }
        else if(self.colorstableshitttype==2){
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
            CCTT.id = c;
            EdgeColorF = CCTT.interpolate();
            chart_histogram(self.setToolpiltex,
                self.hideToolpiltex,
                self.layoutfeatures.updatelinkoption,
<<<<<<< HEAD
                "seqedgehist", self.lwidth, EdgeColorF, self.dataoutfeature.layoutfeature["edgehist"]);
=======
                "seqedgehist", self.lwidth, EdgeColorF, self.datagff.layoutfeature["edgehist"]);
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974

            self.layoutfeatures.edgecolorf = EdgeColorF;
            self.layoutfeatures.drawedges();
        }
<<<<<<< HEAD
        else if(graphvis.colorstableshitttype==3){
            //console.log("self.layoutintantes1", self.layoutintantes.projectioncolorf);
            CCTT.id = c;
            ProjectionColorF = CCTT.interpolate();
            //console.log("self.layoutintantes2", self.layoutintantes.projectioncolorf);

            self.layoutintantes.projectioncolorf = ProjectionColorF;
            self.layoutintantes.updatecolors();
=======
        else if(self.colorstableshitttype==3){
            CCTT.id = c;
            ProjectionColorF = CCTT.interpolate();

            self.layoutinstance.projectioncolorf = ProjectionColorF;
            self.layoutinstance.updatecolors();
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
        }
    };
}

<<<<<<< HEAD
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
=======

/**
 * Others auxiliar methods
 */
/* $(document).ready(function () {
    $('#idtextdbname').focusout(function () {
        GFFOBJ.getdatasetname();
        GFFOBJ.fullScreen();
    });
}); */
function opendatsetparser() {
    //self.fullScreen();
    GFFOBJ.loadlayoutdbs();
}
function mwalert(title, txtbody) {
    //self.fullScreen();
    GFFOBJ.mw.alert(title, txtbody);
}
/* function showloading(title, txtbody) {
    //self.fullScreen();
    MOPRO.show(title);
} */


/***
* function: Load Object recursively
*/
function loadObject(work, obj, list, count, dataset, functpro, functend, functbusy, type) {
    if(count<list.length){
        MOPRO.status((count*100.0)/list.length);
        let ob = new ServiceData(work+" ("+(count+1)+" of "+list.length+")");
        ob.in.argms["type"] = type;
        ob.in.argms["file"] = dataset;
        ob.in.argms["data"] = list[count];
        ob.event = function () {
            switch (this.ou["statusopt"]) {
                // ok
                case 0:
                    //console.log("out", out, this.in.argms["data"]);
                    //update obj
                    functpro.apply(this, [obj, this.ou]);

                    /* var timer = setTimeout(
                        function(){
                        },1000); */
                    count++;
                    loadObject(work, obj, list, count, dataset, functpro, functend, functbusy, type);
                    break;
                // working
                case 1:
                    functbusy.apply(this,[this.ou]);
                    break;
                // error
                case 2:
    
                    break;
                //default:
                    
            };
        };
        ob.start();
    }
    else{
        //execute function when end
        functend.apply(this, [obj]);
    }
};
>>>>>>> d52e075ee9202ad56995099b7c9fedb6ea96a974
