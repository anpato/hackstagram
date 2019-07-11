const languages = ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABLE", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "APL", "App Inventor for Android's visual block language", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blue", "Bon", "Boo", "Boomerang", "Bourne shell", "bash", "ksh", "BREW", "BPEL", "C", "C--", "C++", "C#", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Candle", "Cayenne", "CDuce", "Cecil", "Cel", "Cesil", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "CHAIN", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "CL", "Claire", "Clarion", "Clean", "Clipper", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL", "Cobra", "CODE", "CoffeeScript", "Cola", "ColdC", "ColdFusion", "COMAL", "Combined Programming Language", "COMIT", "Common Intermediate Language", "Common Lisp", "COMPASS", "Component Pascal", "Constraint Handling Rules", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "csh", "CSP", "Csound", "CUDA", "Curl", "Curry", "Cyclone", "Cython", "D", "DASL", "DASL", "Dart", "DataFlex", "Datalog", "DATATRIEVE", "dBase", "dc", "DCL", "Deesel", "Delphi", "DinkC", "DIBOL", "Dog", "Draco", "DRAKON", "Dylan", "DYNAMO", "E", "E#", "Ease", "Easy PL/I", "Easy Programming Language", "EASYTRIEVE PLUS", "ECMAScript", "Edinburgh IMP", "EGL", "Eiffel", "ELAN", "Elixir", "Elm", "Emacs Lisp", "Emerald", "Epigram", "EPL", "Erlang", "es", "Escapade", "Escher", "ESPOL", "Esterel", "Etoys", "Euclid", "Euler", "Euphoria", "EusLisp Robot Programming Language", "CMS EXEC", "EXEC 2", "Executable UML", "F", "F#", "Factor", "Falcon", "Fancy", "Fantom", "FAUST", "Felix", "Ferite", "FFP", "Fjölnir", "FL", "Flavors", "Flex", "FLOW-MATIC", "FOCAL", "FOCUS", "FOIL", "FORMAC", "@Formula", "Forth", "Fortran", "Fortress", "FoxBase", "FoxPro", "FP", "FPr", "Franz Lisp", "Frege", "F-Script", "FSProg", "G", "Google Apps Script", "Game Maker Language", "GameMonkey Script", "GAMS", "GAP", "G-code", "Genie", "GDL", "Gibiane", "GJ", "GEORGE", "GLSL", "GNU E", "GM", "Go", "Go!", "GOAL", "Gödel", "Godiva", "GOM (Good Old Mad)", "Goo", "Gosu", "GOTRAN", "GPSS", "GraphTalk", "GRASS", "Groovy", "Hack (programming language)", "HAL/S", "Hamilton C shell", "Harbour", "Hartmann pipelines", "Haskell", "Haxe", "High Level Assembly", "HLSL", "Hop", "Hope", "Hugo", "Hume", "HyperTalk", "IBM Basic assembly language", "IBM HAScript", "IBM Informix-4GL", "IBM RPG", "ICI", "Icon", "Id", "IDL", "Idris", "IMP", "Inform", "Io", "Ioke", "IPL", "IPTSCRAE", "ISLISP", "ISPF", "ISWIM", "J", "J#", "J++", "JADE", "Jako", "JAL", "Janus", "JASS", "Java", "JavaScript", "JCL", "JEAN", "Join Java", "JOSS", "Joule", "JOVIAL", "Joy", "JScript", "JScript .NET", "JavaFX Script", "Julia", "Jython", "K", "Kaleidoscope", "Karel", "Karel++", "KEE", "Kixtart", "KIF", "Kojo", "Kotlin", "KRC", "KRL", "KUKA", "KRYPTON", "ksh", "L", "L# .NET", "LabVIEW", "Ladder", "Lagoona", "LANSA", "Lasso", "LaTeX", "Lava", "LC-3", "Leda", "Legoscript", "LIL", "LilyPond", "Limbo", "Limnor", "LINC", "Lingo", "Linoleum", "LIS", "LISA", "Lisaac", "Lisp", "Lite-C", "Lithe", "Little b", "Logo", "Logtalk", "LPC", "LSE", "LSL", "LiveCode", "LiveScript", "Lua", "Lucid", "Lustre", "LYaPAS", "Lynx", "M2001", "M4", "Machine code", "MAD", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER", "MARK-IV", "Mary", "MASM Microsoft Assembly x86", "Mathematica", "MATLAB", "Maxima", "Macsyma", "Max", "MaxScript", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metacard", "Metafont", "MetaL", "Microcode", "MicroScript", "MIIS", "MillScript", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Moby", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "CIL", "MSL", "MUMPS", "NASM", "NATURAL", "Napier88", "Neko", "Nemerle", "nesC", "NESL", "Net.Data", "NetLogo", "NetRexx", "NewLISP", "NEWP", "Newspeak", "NewtonScript", "NGL", "Nial", "Nice", "Nickle", "Nim", "NPL", "Not eXactly C", "Not Quite C", "NSIS", "Nu", "NWScript", "NXT-G", "o:XML", "Oak", "Oberon", "Obix", "OBJ2", "Object Lisp", "ObjectLOGO", "Object REXX", "Object Pascal", "Objective-C", "Objective-J", "Obliq", "Obol", "OCaml", "occam", "occam-π", "Octave", "OmniMark", "Onyx", "Opa", "Opal", "OpenCL", "OpenEdge ABL", "OPL", "OPS5", "OptimJ", "Orc", "ORCA/Modula-2", "Oriel", "Orwell", "Oxygene", "Oz", "P#", "ParaSail (programming language)", "PARI/GP", "Pascal", "Pawn", "PCASTL", "PCF", "PEARL", "PeopleCode", "Perl", "PDL", "PHP", "Phrogram", "Pico", "Picolisp", "Pict", "Pike", "PIKT", "PILOT", "Pipelines", "Pizza", "PL-11", "PL/0", "PL/B", "PL/C", "PL/I", "PL/M", "PL/P", "PL/SQL", "PL360", "PLANC", "Plankalkül", "Planner", "PLEX", "PLEXIL", "Plus", "POP-11", "PostScript", "PortablE", "Powerhouse", "PowerBuilder", "PowerShell", "PPL", "Processing", "Processing.js", "Prograph", "PROIV", "Prolog", "PROMAL", "Promela", "PROSE modeling language", "PROTEL", "ProvideX", "Pro*C", "Pure", "Python", "Q (equational programming language)", "Q (programming language from Kx Systems)", "Qalb", "QtScript", "QuakeC", "QPL", "R", "R++", "Racket", "RAPID", "Rapira", "Ratfiv", "Ratfor", "rc", "REBOL", "Red", "Redcode", "REFAL", "Reia", "Revolution", "rex", "REXX", "Rlab", "RobotC", "ROOP", "RPG", "RPL", "RSL", "RTL/2", "Ruby", "RuneScript", "Rust", "S", "S2", "S3", "S-Lang", "S-PLUS", "SA-C", "SabreTalk", "SAIL", "SALSA", "SAM76", "SAS", "SASL", "Sather", "Sawzall", "SBL", "Scala", "Scheme", "Scilab", "Scratch", "Script.NET", "Sed", "Seed7", "Self", "SenseTalk", "SequenceL", "SETL", "Shift Script", "SIMPOL", "SIGNAL", "SiMPLE", "SIMSCRIPT", "Simula", "Simulink", "SISAL", "SLIP", "SMALL", "Smalltalk", "Small Basic", "SML", "Snap!", "SNOBOL", "SPITBOL", "Snowball", "SOL", "Span", "SPARK", "Speedcode", "SPIN", "SP/k", "SPS", "Squeak", "Squirrel", "SR", "S/SL", "Stackless Python", "Starlogo", "Strand", "Stata", "Stateflow", "Subtext", "SuperCollider", "SuperTalk", "Swift (Apple programming language)", "Swift (parallel scripting language)", "SYMPL", "SyncCharts", "SystemVerilog", "T", "TACL", "TACPOL", "TADS", "TAL", "Tcl", "Tea", "TECO", "TELCOMP", "TeX", "TEX", "TIE", "Timber", "TMG", "Tom", "TOM", "Topspeed", "TPU", "Trac", "TTM", "T-SQL", "TTCN", "Turing", "TUTOR", "TXL", "TypeScript", "Turbo C++", "Ubercode", "UCSD Pascal", "Umple", "Unicon", "Uniface", "UNITY", "Unix shell", "UnrealScript", "Vala", "VBA", "VBScript", "Verilog", "VHDL", "Visual Basic", "Visual Basic .NET", "Visual DataFlex", "Visual DialogScript", "Visual Fortran", "Visual FoxPro", "Visual J++", "Visual J#", "Visual Objects", "Visual Prolog", "VSXu", "Vvvv", "WATFIV, WATFOR", "WebDNA", "WebQL", "Windows PowerShell", "Winbatch", "Wolfram", "Wyvern", "X++", "X#", "X10", "XBL", "XC", "XMOS architecture", "xHarbour", "XL", "Xojo", "XOTcl", "XPL", "XPL0", "XQuery", "XSB", "XSLT", "XPath", "Xtend", "Yorick"]

function assignLanguage(arr) {
  let end = arr.length/100
  let data = arr.slice(Math.floor(Math.random()* arr.length), Math.random()*-end)
  return data
}
console.log(assignLanguage(languages))

const fakeUsers = [
  {
    "firstName": "jacob",
    "lastName": "williams",
    "email": "jacob.williams@example.com",
    "username": "crazyzebra890",
    "password": "naughty",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "alberte",
    "lastName": "larsen",
    "email": "alberte.larsen@example.com",
    "username": "brownbird182",
    "password": "simple1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/62.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "viljami",
    "lastName": "jutila",
    "email": "viljami.jutila@example.com",
    "username": "yellowdog607",
    "password": "spunky",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "wendy",
    "lastName": "brooks",
    "email": "wendy.brooks@example.com",
    "username": "bigsnake240",
    "password": "blacky",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/77.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "mia",
    "lastName": "freeman",
    "email": "mia.freeman@example.com",
    "username": "tinypanda661",
    "password": "tasha1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "tilde",
    "lastName": "mortensen",
    "email": "tilde.mortensen@example.com",
    "username": "blackrabbit273",
    "password": "beau",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/74.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "آرتين",
    "lastName": "یاسمی",
    "email": "آرتين.یاسمی@example.com",
    "username": "bigmeercat939",
    "password": "1215",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "درسا",
    "lastName": "حسینی",
    "email": "درسا.حسینی@example.com",
    "username": "yellowmouse571",
    "password": "otis",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/16.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "vanessa",
    "lastName": "carpenter",
    "email": "vanessa.carpenter@example.com",
    "username": "lazydog895",
    "password": "hakr",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/12.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "claire",
    "lastName": "lemoine",
    "email": "claire.lemoine@example.com",
    "username": "tinybutterfly334",
    "password": "44444",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "roméo",
    "lastName": "caron",
    "email": "roméo.caron@example.com",
    "username": "ticklishtiger669",
    "password": "manowar",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/96.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "cecil",
    "lastName": "sanders",
    "email": "cecil.sanders@example.com",
    "username": "crazydog111",
    "password": "puppies",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/64.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "minttu",
    "lastName": "harju",
    "email": "minttu.harju@example.com",
    "username": "bluelion602",
    "password": "golfball",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "addison",
    "lastName": "kumar",
    "email": "addison.kumar@example.com",
    "username": "beautifulgorilla673",
    "password": "johnson1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "knud",
    "lastName": "kuhn",
    "email": "knud.kuhn@example.com",
    "username": "greenladybug907",
    "password": "skip",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "marina",
    "lastName": "moreno",
    "email": "marina.moreno@example.com",
    "username": "greenleopard287",
    "password": "bruiser",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "kenan",
    "lastName": "özbir",
    "email": "kenan.özbir@example.com",
    "username": "bluepanda913",
    "password": "alibaba",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "consuelo",
    "lastName": "moya",
    "email": "consuelo.moya@example.com",
    "username": "bluepanda685",
    "password": "bikini",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "theo",
    "lastName": "chu",
    "email": "theo.chu@example.com",
    "username": "silverfish211",
    "password": "kingpin",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/54.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "alexander",
    "lastName": "christensen",
    "email": "alexander.christensen@example.com",
    "username": "beautifulpanda633",
    "password": "jackpot",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "franklin",
    "lastName": "baker",
    "email": "franklin.baker@example.com",
    "username": "redtiger738",
    "password": "precious",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/54.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "lucas",
    "lastName": "ouellet",
    "email": "lucas.ouellet@example.com",
    "username": "organictiger716",
    "password": "winner1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/37.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "coşkun",
    "lastName": "keseroğlu",
    "email": "coşkun.keseroğlu@example.com",
    "username": "whitedog173",
    "password": "core",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/90.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "marius",
    "lastName": "møller",
    "email": "marius.møller@example.com",
    "username": "yellowmouse922",
    "password": "bambam",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "cleide",
    "lastName": "jesus",
    "email": "cleide.jesus@example.com",
    "username": "bluelion545",
    "password": "deborah",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "emil",
    "lastName": "petersen",
    "email": "emil.petersen@example.com",
    "username": "bigbutterfly878",
    "password": "abraham",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "joshua",
    "lastName": "williams",
    "email": "joshua.williams@example.com",
    "username": "beautifulwolf808",
    "password": "aceace",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/66.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "violet",
    "lastName": "patel",
    "email": "violet.patel@example.com",
    "username": "goldenbird157",
    "password": "fishfish",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "amalia",
    "lastName": "engvik",
    "email": "amalia.engvik@example.com",
    "username": "greenduck729",
    "password": "scarface",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "georgia",
    "lastName": "foster",
    "email": "georgia.foster@example.com",
    "username": "purplefish732",
    "password": "carmex2",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/51.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "björn",
    "lastName": "kögler",
    "email": "björn.kögler@example.com",
    "username": "heavyfrog581",
    "password": "paradise",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "bérénice",
    "lastName": "rousseau",
    "email": "bérénice.rousseau@example.com",
    "username": "organicgorilla322",
    "password": "hawkeye",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "saana",
    "lastName": "manninen",
    "email": "saana.manninen@example.com",
    "username": "beautifulkoala664",
    "password": "antoine",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "olga",
    "lastName": "guerrero",
    "email": "olga.guerrero@example.com",
    "username": "bluefish361",
    "password": "andrew1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "olivia",
    "lastName": "wirkkala",
    "email": "olivia.wirkkala@example.com",
    "username": "greenfrog375",
    "password": "maryann",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/78.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "theo",
    "lastName": "mitchell",
    "email": "theo.mitchell@example.com",
    "username": "crazybird951",
    "password": "lucky1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/38.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "vincent",
    "lastName": "neal",
    "email": "vincent.neal@example.com",
    "username": "crazyswan524",
    "password": "zappa",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/97.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "fernando",
    "lastName": "sanz",
    "email": "fernando.sanz@example.com",
    "username": "organicmeercat911",
    "password": "dumb",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "layla",
    "lastName": "butler",
    "email": "layla.butler@example.com",
    "username": "happyfrog640",
    "password": "panasoni",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "swen",
    "lastName": "preis",
    "email": "swen.preis@example.com",
    "username": "bigmeercat539",
    "password": "hockey",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "marie-louise",
    "lastName": "hausmann",
    "email": "marie-louise.hausmann@example.com",
    "username": "goldenladybug336",
    "password": "masters",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "federico",
    "lastName": "van engelen",
    "email": "federico.vanengelen@example.com",
    "username": "lazybear826",
    "password": "boat",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "amber",
    "lastName": "day",
    "email": "amber.day@example.com",
    "username": "ticklishgorilla866",
    "password": "insert",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "antonino",
    "lastName": "moura",
    "email": "antonino.moura@example.com",
    "username": "crazymeercat585",
    "password": "2469",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/36.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "everett",
    "lastName": "weaver",
    "email": "everett.weaver@example.com",
    "username": "blackfish356",
    "password": "sixty9",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "ibérico",
    "lastName": "duarte",
    "email": "ibérico.duarte@example.com",
    "username": "sadmeercat837",
    "password": "peachy",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "martine",
    "lastName": "mercier",
    "email": "martine.mercier@example.com",
    "username": "orangeostrich123",
    "password": "66666",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "vilma",
    "lastName": "polon",
    "email": "vilma.polon@example.com",
    "username": "crazymouse116",
    "password": "angus",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/62.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "selésio",
    "lastName": "lima",
    "email": "selésio.lima@example.com",
    "username": "blackostrich669",
    "password": "blue42",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "vanessa",
    "lastName": "grant",
    "email": "vanessa.grant@example.com",
    "username": "happybird531",
    "password": "cigar",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "عباس",
    "lastName": "سهيلي راد",
    "email": "عباس.سهيليراد@example.com",
    "username": "yellowpeacock447",
    "password": "royals",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/19.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "olivia",
    "lastName": "wirtanen",
    "email": "olivia.wirtanen@example.com",
    "username": "brownzebra652",
    "password": "123654",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "fletcher",
    "lastName": "taylor",
    "email": "fletcher.taylor@example.com",
    "username": "angrylion597",
    "password": "darlene",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/90.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "kristin",
    "lastName": "nordlie",
    "email": "kristin.nordlie@example.com",
    "username": "purplepeacock451",
    "password": "sparky1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/47.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "clémentine",
    "lastName": "guillaume",
    "email": "clémentine.guillaume@example.com",
    "username": "greenbear538",
    "password": "north",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/40.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "susana",
    "lastName": "campos",
    "email": "susana.campos@example.com",
    "username": "yellowbear912",
    "password": "hawks",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/42.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jennie",
    "lastName": "carter",
    "email": "jennie.carter@example.com",
    "username": "redladybug372",
    "password": "tyson",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/83.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "heidy",
    "lastName": "perrin",
    "email": "heidy.perrin@example.com",
    "username": "orangezebra959",
    "password": "2468",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "enrique",
    "lastName": "lozano",
    "email": "enrique.lozano@example.com",
    "username": "browncat246",
    "password": "empire",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/83.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "roland",
    "lastName": "medina",
    "email": "roland.medina@example.com",
    "username": "redswan407",
    "password": "sascha",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/9.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "adrienne",
    "lastName": "dos santos",
    "email": "adrienne.dossantos@example.com",
    "username": "brownleopard454",
    "password": "barefoot",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/33.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "marcus",
    "lastName": "watts",
    "email": "marcus.watts@example.com",
    "username": "sadpeacock924",
    "password": "burn",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "nikee",
    "lastName": "bobeldijk",
    "email": "nikee.bobeldijk@example.com",
    "username": "yellowostrich812",
    "password": "boss",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/89.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "liam",
    "lastName": "davis",
    "email": "liam.davis@example.com",
    "username": "goldenwolf250",
    "password": "bacardi",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/86.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "constantin",
    "lastName": "roloff",
    "email": "constantin.roloff@example.com",
    "username": "smallpanda702",
    "password": "sapper",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/25.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jaime",
    "lastName": "castillo",
    "email": "jaime.castillo@example.com",
    "username": "heavydog903",
    "password": "pearl",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "abel",
    "lastName": "joly",
    "email": "abel.joly@example.com",
    "username": "whitefish171",
    "password": "dummy",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "ebony",
    "lastName": "hoeven",
    "email": "ebony.hoeven@example.com",
    "username": "happyleopard236",
    "password": "maurice",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "cristian",
    "lastName": "castillo",
    "email": "cristian.castillo@example.com",
    "username": "beautifulcat904",
    "password": "monica",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "armando",
    "lastName": "robin",
    "email": "armando.robin@example.com",
    "username": "tinyostrich978",
    "password": "church",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "iida",
    "lastName": "wuollet",
    "email": "iida.wuollet@example.com",
    "username": "orangeostrich313",
    "password": "corolla",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/54.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jennie",
    "lastName": "miles",
    "email": "jennie.miles@example.com",
    "username": "beautifulswan692",
    "password": "salem",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "emmi",
    "lastName": "elo",
    "email": "emmi.elo@example.com",
    "username": "smallladybug185",
    "password": "098765",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "آوینا",
    "lastName": "رضایی",
    "email": "آوینا.رضایی@example.com",
    "username": "redzebra961",
    "password": "bobafett",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "mariana",
    "lastName": "roux",
    "email": "mariana.roux@example.com",
    "username": "crazyfrog690",
    "password": "ffffff",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/89.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "رها",
    "lastName": "پارسا",
    "email": "رها.پارسا@example.com",
    "username": "whitecat282",
    "password": "templar",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "meral",
    "lastName": "akgül",
    "email": "meral.akgül@example.com",
    "username": "crazypeacock989",
    "password": "klaus",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "ellen",
    "lastName": "pulkkinen",
    "email": "ellen.pulkkinen@example.com",
    "username": "beautifulostrich821",
    "password": "pirates",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/35.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "ایلیا",
    "lastName": "رضایی",
    "email": "ایلیا.رضایی@example.com",
    "username": "happyladybug206",
    "password": "everett",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/81.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "hymke",
    "lastName": "de vroom",
    "email": "hymke.devroom@example.com",
    "username": "bigmeercat972",
    "password": "double",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "elise",
    "lastName": "carpentier",
    "email": "elise.carpentier@example.com",
    "username": "crazyswan553",
    "password": "mmmmmmmm",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/39.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jorge",
    "lastName": "washington",
    "email": "jorge.washington@example.com",
    "username": "purplegoose497",
    "password": "diver1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jimi",
    "lastName": "marttila",
    "email": "jimi.marttila@example.com",
    "username": "organickoala245",
    "password": "easy",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/58.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "dustin",
    "lastName": "rogers",
    "email": "dustin.rogers@example.com",
    "username": "angrylion450",
    "password": "woowoo",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "محمدطاها",
    "lastName": "سالاری",
    "email": "محمدطاها.سالاری@example.com",
    "username": "angrysnake768",
    "password": "987654",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "kevin",
    "lastName": "cruz",
    "email": "kevin.cruz@example.com",
    "username": "organicbird164",
    "password": "carlton",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "annette",
    "lastName": "ferguson",
    "email": "annette.ferguson@example.com",
    "username": "yellowgorilla316",
    "password": "athena",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "emilia",
    "lastName": "pakkala",
    "email": "emilia.pakkala@example.com",
    "username": "angrylion613",
    "password": "bosco1",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/36.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "lauri",
    "lastName": "kyllonen",
    "email": "lauri.kyllonen@example.com",
    "username": "yellowbutterfly756",
    "password": "films",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/10.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "vildan",
    "lastName": "kavaklıoğlu",
    "email": "vildan.kavaklıoğlu@example.com",
    "username": "sadsnake508",
    "password": "kirk",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "anne-mieke",
    "lastName": "belt",
    "email": "anne-mieke.belt@example.com",
    "username": "purplefrog310",
    "password": "362436",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "elsa",
    "lastName": "hatala",
    "email": "elsa.hatala@example.com",
    "username": "redkoala143",
    "password": "charlotte",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/64.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "naomi",
    "lastName": "jackson",
    "email": "naomi.jackson@example.com",
    "username": "purpleleopard699",
    "password": "fritz",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/84.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "lisa",
    "lastName": "harter",
    "email": "lisa.harter@example.com",
    "username": "happygorilla514",
    "password": "krissy",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "georgino",
    "lastName": "ramos",
    "email": "georgino.ramos@example.com",
    "username": "redtiger896",
    "password": "driven",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "iiris",
    "lastName": "koskela",
    "email": "iiris.koskela@example.com",
    "username": "smallfish413",
    "password": "chemical",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/66.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "jaxon",
    "lastName": "thomas",
    "email": "jaxon.thomas@example.com",
    "username": "yellowbutterfly167",
    "password": "shearer",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "eduardo",
    "lastName": "cruz",
    "email": "eduardo.cruz@example.com",
    "username": "blacksnake699",
    "password": "loverboy",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "mustafa",
    "lastName": "özbir",
    "email": "mustafa.özbir@example.com",
    "username": "blueladybug195",
    "password": "ryan",
    "profileImage": "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    "skills" : assignLanguage(languages)
  },
  {
    "firstName": "idalina",
    "lastName": "da cunha",
    "email": "idalina.dacunha@example.com",
    "username": "tinyelephant567",
    "password": "powers",
    "profileImage": "https://randomuser.me/api/portraits/thumb/women/91.jpg",
    "skills" : assignLanguage(languages)
  }
]
module.exports = {
  fakeUsers
}