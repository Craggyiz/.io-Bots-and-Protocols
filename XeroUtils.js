if (!globalThis.document) throw new Error('XeroUtils requires a window with a document to run.');

const XeroUtils = new function () {
    this.printidentity = function (object) {
        return typeof object;
    };
    this.hookmetamethod = function (object, methodName, methodCaller, defType, callbackFunc) {
        if (!(object[methodName] && typeof object[methodName] == defType) &&
            (object[methodCaller] && typeof object[methodCaller] == defType)) {
            if (!callbackFunc) {
                object[methodName] = function () {
                    return object[methodCaller](methodName);
                };
            }
            object[methodName] = callbackFunc;
        }
    };
    this.pcall = function (object, objName, table) {
        return object[objName].call(table);
    };
    this.hookFunction = function (object, functionName, callback) {
        (function (originalFunction) {
            object[functionName] = function () {
                var returnValue = originalFunction.apply(this, arguments);

                callback.apply(this, [returnValue, originalFunction, arguments]);

                return returnValue;
            };
        }(object[functionName]));
    };
    this.getgenv = function () {
        return Object.keys(window);
    };
    this.getrenv = function () {
        for (var i in window) {
            console.log(i, typeof window[i], window[i]);
        }
    };
    this.getreg = function (finder) {
        return Object.getOwnPropertyNames(finder);
    };
    this.getgc = function () { };
    this.getinstances = function (obj, iterator) {
        var inst = obj
        var r = [];

        for (var i = 0; i < inst.length; i++) {
            if (inst instanceof iterator) {
                r[i] = inst;
            }
        }

        return r;
    };
    this.getnilinstances = function (objects) {
        var inst = objects
        var r = [];

        for (var i = 0; i < inst.length; i++) {
            if (typeof inst == null || typeof inst == undefined) {
                r[i] = inst;
            }
        }

        return r;
    };
    this.getscripts = function () {
        var srcNodeList = document.querySelectorAll('[src],[href]');
        for (var i = 0; i < srcNodeList.length; ++i) {
            var item = srcNodeList[i];
            if (item.getAttribute('src') !== null) {
                console.log(item.getAttribute('src'));
            }
            if (item.getAttribute('href') !== null) {
                console.log(item.getAttribute('href'));
            }
        }
    };
    this.getloadedmodules = function () { };
    this.getconnections = function () { };
    this.firesignal = function () { };
    this.fireclickdetector = function (fireObj) {
        document.querySelector(fireObj).click();
    };
    this.fireproximityprompt = function () { };
    this.firetouchinterest = function () { };
    this.isnetworkowner = function () { };
    this.gethiddenproperty = function () { };
    this.sethiddenproperty = function () { };
    this.setsimulationradius = function () { };
    this.getsenv = function () { };
    this.getcallingscript = function () { };
    this.getscriptclosure = function () { };
    this.getscripthash = function () { };
    this.getrawmetatable = function () { };
    this.setrawmetatable = function () { };
    this.setreadonly = function () { };
    this.isreadonly = function () { };
    this.iswindowactive = function () { };
    this.keypress = function () { };
    this.keyrelease = function () { };
    this.mouse1click = function () { };
    this.mouse1press = function () { };
    this.mouse1release = function () { };
    this.mouse2click = function () { };
    this.mouse2press = function () { };
    this.mouse2release = function () { };
    this.mousescroll = function () { };
    this.mousemoverel = function () { };
    this.mousemoveabs = function () { };
    this.hookmetamethod = function () { };
    this.newcclosure = function (func, func2, func3) {
        if (typeof func != 'function') return console.error("expected function as argument #1");
        if (!func && func2 && func3) return console.error(two, three);
        return func;
    };
    this.loadstring = function () { };
    this.checkcaller = function () { };
    this.islclosure = function () { };
    this.dumpstring = function () { };
    this.decompile = function () { };
    this.rconsoleprint = function () { };
    this.rconsoleinfo = function () { };
    this.rconsolewarn = function () { };
    this.rconsoleerr = function () { };
    this.rconsoleclear = function () { };
    this.rconsolename = function () { };
    this.rconsoleinput = function () { };
    this.printconsole = function () { };
    this.readfile = function () { };
    this.writefile = function () { };
    this.appendfile = function () { };
    this.loadfile = function () { };
    this.listfiles = function () { };
    this.isfile = function () { };
    this.isfolder = function () { };
    this.makefolder = function () { };
    this.delfolder = function () { };
    this.delfile = function () { };
    this.setclipboard = function () { };
    this.setfflag = function () { };
    this.getnamecallmethod = function () { };
    this.setnamecallmethod = function () { };
    this.getsynasset = function () { };
    this.getspecialinfo = function () { };
    this.saveinstance = function () { };
    this.messagebox = function () { };
    this.debug = {
        getconstants() { },
        getconstant() { },
        setconstant() { },
        getupvalues() { },
        getupvalue() { },
        setupvalue() { },
        getprotos() { },
        getproto() { },
        setproto() { },
        getstack() { },
        setstack() { },
        setmetatable() { },
        getregistry() { },
        getinfo() { }
    };
    this.xer = {
        cache_replace() { },
        cache_invalidate() { },
        set_thread_identity() { },
        get_thread_identity() { },
        is_cached() { },
        write_clipboard() { },
        queue_on_teleport() { },
        protect_gui() { },
        unprotect_gui() { },
        is_beta() { },
        request(link) {
            var url = link;

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };

            xhr.send();
        },
        secure_call() { },
        create_secure_function() { },
        run_secure_function() { },
    }
};

globalThis.XeroUtils = XeroUtils
