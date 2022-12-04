/* jshint esversion: 11 */
const countries = [
    {
        "country": "Afghanistan",
        "iso2": "AF",
        "latitude": 34.1340260137693,
        "longitude": 66.5921613109527
    },
    {
        "country": "Albania",
        "iso2": "AL",
        "latitude": 41.1416589489165,
        "longitude": 20.0610827672694
    },
    {
        "country": "Algeria",
        "iso2": "DZ",
        "latitude": 28.350969744889,
        "longitude": 2.65584647197691
    },
    {
        "country": "American Samoa",
        "iso2": "AS",
        "latitude": -14.3057119877705,
        "longitude": -170.700731617449
    },
    {
        "country": "Andorra",
        "iso2": "AD",
        "latitude": 42.5485983485476,
        "longitude": 1.58022436112328
    },
    {
        "country": "Angola",
        "iso2": "AO",
        "latitude": -12.1674240626679,
        "longitude": 17.651768783079
    },
    {
        "country": "Anguilla",
        "iso2": "AI",
        "latitude": 18.222874004219,
        "longitude": -63.060083437718
    },
    {
        "country": "Antarctica",
        "iso2": "AQ",
        "latitude": -77.1698752141583,
        "longitude": -177.564516134088
    },
    {
        "country": "Antigua & Barbuda",
        "iso2": "AG",
        "latitude": 17.0714675937296,
        "longitude": -61.7853082322637
    },
    {
        "country": "Argentina",
        "iso2": "AR",
        "latitude": -35.69727051812,
        "longitude": -64.5323850384307
    },
    {
        "country": "Armenia",
        "iso2": "AM",
        "latitude": 40.1784127423067,
        "longitude": 45.0549083196525
    },
    {
        "country": "Aruba",
        "iso2": "AW",
        "latitude": 12.5156257229928,
        "longitude": -69.9756401428404
    },
    {
        "country": "Australia",
        "iso2": "AU",
        "latitude": -25.697337673983,
        "longitude": 134.022771709161
    },
    {
        "country": "Austria",
        "iso2": "AT",
        "latitude": 47.6318582698957,
        "longitude": 13.797778364631
    },
    {
        "country": "Azerbaijan",
        "iso2": "AZ",
        "latitude": 40.3920509942049,
        "longitude": 48.6345926706443
    },
    {
        "country": "Bahamas",
        "iso2": "BS",
        "latitude": 24.7216263364678,
        "longitude": -78.0727537006031
    },
    {
        "country": "Bahrain",
        "iso2": "BH",
        "latitude": 26.0479850153706,
        "longitude": 50.5406954022767
    },
    {
        "country": "Bangladesh",
        "iso2": "BD",
        "latitude": 23.673728665121,
        "longitude": 90.4321256260861
    },
    {
        "country": "Barbados",
        "iso2": "BB",
        "latitude": 13.1832193693375,
        "longitude": -59.5573839491502
    },
    {
        "country": "Belarus",
        "iso2": "BY",
        "latitude": 53.4679137454316,
        "longitude": 27.9642520547151
    },
    {
        "country": "Belgium",
        "iso2": "BE",
        "latitude": 50.6182138854095,
        "longitude": 4.67501015469648
    },
    {
        "country": "Belize",
        "iso2": "BZ",
        "latitude": 17.2425247664715,
        "longitude": -88.6827351002344
    },
    {
        "country": "Benin",
        "iso2": "BJ",
        "latitude": 9.50301319961589,
        "longitude": 2.3057145288302
    },
    {
        "country": "Bermuda",
        "iso2": "BM",
        "latitude": 32.3150674307407,
        "longitude": -64.7458500599169
    },
    {
        "country": "Bhutan",
        "iso2": "BT",
        "latitude": 27.4216393395982,
        "longitude": 90.4671664717386
    },
    {
        "country": "Bolivia",
        "iso2": "BO",
        "latitude": -16.7312488393574,
        "longitude": -64.452095975112
    },
    {
        "country": "Bonaire",
        "iso2": "BQ",
        "latitude": 12.1808449824403,
        "longitude": -68.2935044595876
    },
    {
        "country": "Bosnia & Herzegovina",
        "iso2": "BA",
        "latitude": 44.1441535612642,
        "longitude": 17.8346724078753
    },
    {
        "country": "Botswana",
        "iso2": "BW",
        "latitude": -22.2366090020629,
        "longitude": 23.857799569956
    },
    {
        "country": "Bouvet Island",
        "iso2": "BV",
        "latitude": -54.4231667939524,
        "longitude": 3.41196946505762
    },
    {
        "country": "Brazil",
        "iso2": "BR",
        "latitude": -11.5246304164266,
        "longitude": -54.3552066082564
    },
    {
        "country": "British Indian Ocean Territory",
        "iso2": "IO",
        "latitude": -7.32354844438574,
        "longitude": 72.4350161847601
    },
    {
        "country": "British Virgin Islands",
        "iso2": "VG",
        "latitude": 18.421958196197,
        "longitude": -64.6240651925769
    },
    {
        "country": "Brunei Darussalam",
        "iso2": "BN",
        "latitude": 4.5432058899176,
        "longitude": 114.643095836046
    },
    {
        "country": "Bulgaria",
        "iso2": "BG",
        "latitude": 42.8204367730243,
        "longitude": 25.2517391225619
    },
    {
        "country": "Burkina Faso",
        "iso2": "BF",
        "latitude": 12.1087090363127,
        "longitude": -1.69328162118423
    },
    {
        "country": "Burundi",
        "iso2": "BI",
        "latitude": -3.26125199327864,
        "longitude": 29.8851822784529
    },
    {
        "country": "Cabo Verde",
        "iso2": "CV",
        "latitude": 15.0764115186516,
        "longitude": -23.6340100590047
    },
    {
        "country": "Cambodia",
        "iso2": "KH",
        "latitude": 12.6991868655077,
        "longitude": 105.039730786807
    },
    {
        "country": "Cameroon",
        "iso2": "CM",
        "latitude": 6.29416848748099,
        "longitude": 12.9484741423982
    },
    {
        "country": "Canada",
        "iso2": "CA",
        "latitude": 57.5504800446556,
        "longitude": -98.4168051786806
    },
    {
        "country": "Canarias",
        "iso2": "ES",
        "latitude": 28.2976651065255,
        "longitude": -16.5379944102164
    },
    {
        "country": "Cayman Islands",
        "iso2": "KY",
        "latitude": 19.3112318056202,
        "longitude": -81.2520320897787
    },
    {
        "country": "Central African Republic",
        "iso2": "CF",
        "latitude": 6.33139003394431,
        "longitude": 20.5207434193972
    },
    {
        "country": "Chad",
        "iso2": "TD",
        "latitude": 15.2834935466545,
        "longitude": 18.427113900363
    },
    {
        "country": "Chile",
        "iso2": "CL",
        "latitude": -37.8293828304996,
        "longitude": -70.7686343173921
    },
    {
        "country": "China",
        "iso2": "CN",
        "latitude": 38.0732548110572,
        "longitude": 104.691138558496
    },
    {
        "country": "Christmas Island",
        "iso2": "CX",
        "latitude": -10.4464408021834,
        "longitude": 105.702095122005
    },
    {
        "country": "Cocos Islands",
        "iso2": "CC",
        "latitude": -12.1712494501995,
        "longitude": 96.83688767323
    },
    {
        "country": "Colombia",
        "iso2": "CO",
        "latitude": 4.18775387735273,
        "longitude": -72.6445066243485
    },
    {
        "country": "Comoros",
        "iso2": "KM",
        "latitude": -11.6588614745084,
        "longitude": 43.348265874294
    },
    {
        "country": "Congo",
        "iso2": "CG",
        "latitude": -0.729439159523384,
        "longitude": 14.8797328494913
    },
    {
        "country": "Congo DRC",
        "iso2": "CD",
        "latitude": -3.33862959620789,
        "longitude": 23.4198275742821
    },
    {
        "country": "Cook Islands",
        "iso2": "CK",
        "latitude": -21.2226132533998,
        "longitude": -159.787688709522
    },
    {
        "country": "Costa Rica",
        "iso2": "CR",
        "latitude": 9.86346740740621,
        "longitude": -84.1467362570181
    },
    {
        "country": "Côte d'Ivoire",
        "iso2": "CI",
        "latitude": 7.5367792794213,
        "longitude": -5.57171019491773
    },
    {
        "country": "Croatia",
        "iso2": "HR",
        "latitude": 44.911921008567,
        "longitude": 16.6257611295833
    },
    {
        "country": "Cuba",
        "iso2": "CU",
        "latitude": 21.4761765228694,
        "longitude": -79.698178576187
    },
    {
        "country": "Curacao",
        "iso2": "CW",
        "latitude": 12.1999966479398,
        "longitude": -68.9693976859904
    },
    {
        "country": "Cyprus",
        "iso2": "CY",
        "latitude": 35.1170041634523,
        "longitude": 33.3753460091992
    },
    {
        "country": "Czechia",
        "iso2": "CZ",
        "latitude": 49.7491737093098,
        "longitude": 15.3832732920235
    },
    {
        "country": "Denmark",
        "iso2": "DK",
        "latitude": 56.0011881797105,
        "longitude": 9.3786705424094
    },
    {
        "country": "Djibouti",
        "iso2": "DJ",
        "latitude": 11.7502357276188,
        "longitude": 42.6134968987895
    },
    {
        "country": "Dominica",
        "iso2": "DM",
        "latitude": 15.4292698609405,
        "longitude": -61.3604719469429
    },
    {
        "country": "Dominican Republic",
        "iso2": "DO",
        "latitude": 18.7795481852299,
        "longitude": -70.4349519852001
    },
    {
        "country": "Ecuador",
        "iso2": "EC",
        "latitude": -1.56427213888531,
        "longitude": -78.4630326109714
    },
    {
        "country": "Egypt",
        "iso2": "EG",
        "latitude": 26.6051703445062,
        "longitude": 30.2401354350123
    },
    {
        "country": "El Salvador",
        "iso2": "SV",
        "latitude": 13.7580415170554,
        "longitude": -88.8591148923898
    },
    {
        "country": "Equatorial Guinea",
        "iso2": "GQ",
        "latitude": 1.59546439365907,
        "longitude": 10.4254566723538
    },
    {
        "country": "Eritrea",
        "iso2": "ER",
        "latitude": 15.0055331476676,
        "longitude": 39.2672401449901
    },
    {
        "country": "Estonia",
        "iso2": "EE",
        "latitude": 58.648108311231,
        "longitude": 25.9168702506338
    },
    {
        "country": "Eswatini",
        "iso2": "SZ",
        "latitude": -26.5625409356087,
        "longitude": 31.510685746082
    },
    {
        "country": "Ethiopia",
        "iso2": "ET",
        "latitude": 8.72938955704839,
        "longitude": 39.9149028865442
    },
    {
        "country": "Falkland Islands",
        "iso2": "FK",
        "latitude": -51.7590131276672,
        "longitude": -58.7466463637998
    },
    {
        "country": "Faroe Islands",
        "iso2": "FO",
        "latitude": 62.1308962814953,
        "longitude": -6.98110609131228
    },
    {
        "country": "Fiji",
        "iso2": "FJ",
        "latitude": -17.8224709523362,
        "longitude": 177.981446137326
    },
    {
        "country": "Finland",
        "iso2": "FI",
        "latitude": 65.0157895974991,
        "longitude": 25.657384334547
    },
    {
        "country": "France",
        "iso2": "FR",
        "latitude": 46.6423682169416,
        "longitude": 2.19402366278862
    },
    {
        "country": "French Guiana",
        "iso2": "GF",
        "latitude": 3.85742974249707,
        "longitude": -53.3223230715662
    },
    {
        "country": "French Polynesia",
        "iso2": "PF",
        "latitude": -17.6746840801206,
        "longitude": -149.400416710997
    },
    {
        "country": "French Southern Territories",
        "iso2": "TF",
        "latitude": -49.2632968710564,
        "longitude": 69.5468698472483
    },
    {
        "country": "Gabon",
        "iso2": "GA",
        "latitude": -0.628448459921234,
        "longitude": 11.8394108985457
    },
    {
        "country": "Gambia",
        "iso2": "GM",
        "latitude": 13.4286179591893,
        "longitude": -15.3833803858696
    },
    {
        "country": "Georgia",
        "iso2": "GE",
        "latitude": 42.1798627773722,
        "longitude": 43.3788665341122
    },
    {
        "country": "Germany",
        "iso2": "DE",
        "latitude": 51.0830453980048,
        "longitude": 10.4261714274308
    },
    {
        "country": "Ghana",
        "iso2": "GH",
        "latitude": 7.94530467243628,
        "longitude": -1.21923336252658
    },
    {
        "country": "Gibraltar",
        "iso2": "GI",
        "latitude": 36.1402267133608,
        "longitude": -5.34554948459435
    },
    {
        "country": "Greece",
        "iso2": "GR",
        "latitude": 39.4201226172797,
        "longitude": 23.1103689361618
    },
    {
        "country": "Greenland",
        "iso2": "GL",
        "latitude": 74.1684721896599,
        "longitude": -42.0756778806698
    },
    {
        "country": "Grenada",
        "iso2": "GD",
        "latitude": 12.1129266563389,
        "longitude": -61.6793793720409
    },
    {
        "country": "Guadeloupe",
        "iso2": "GP",
        "latitude": 16.2442000270555,
        "longitude": -61.5438226228275
    },
    {
        "country": "Guam",
        "iso2": "GU",
        "latitude": 13.4454304799452,
        "longitude": 144.780244582988
    },
    {
        "country": "Guatemala",
        "iso2": "GT",
        "latitude": 15.8208785153526,
        "longitude": -90.3121934911961
    },
    {
        "country": "Guernsey",
        "iso2": "GG",
        "latitude": 49.4587077137887,
        "longitude": -2.57639258289156
    },
    {
        "country": "Guinea",
        "iso2": "GN",
        "latitude": 10.2559865413781,
        "longitude": -10.9869488480402
    },
    {
        "country": "Guinea-Bissau",
        "iso2": "GW",
        "latitude": 11.9800753248205,
        "longitude": -14.9801867569108
    },
    {
        "country": "Guyana",
        "iso2": "GY",
        "latitude": 4.68211981385056,
        "longitude": -58.9135261275466
    },
    {
        "country": "Haiti",
        "iso2": "HT",
        "latitude": 18.8835204869835,
        "longitude": -72.89291379842
    },
    {
        "country": "Heard Island & McDonald Islands",
        "iso2": "HM",
        "latitude": -53.0841700355137,
        "longitude": 73.4929856084404
    },
    {
        "country": "Honduras",
        "iso2": "HN",
        "latitude": 14.74037069575,
        "longitude": -86.4925167900696
    },
    {
        "country": "Hungary",
        "iso2": "HU",
        "latitude": 47.2252733248629,
        "longitude": 19.3962004836614
    },
    {
        "country": "Iceland",
        "iso2": "IS",
        "latitude": 65.1236092020551,
        "longitude": -19.0568296710609
    },
    {
        "country": "India",
        "iso2": "IN",
        "latitude": 23.5863005677467,
        "longitude": 81.1730040853018
    },
    {
        "country": "Indonesia",
        "iso2": "ID",
        "latitude": 0.155919799590376,
        "longitude": 113.965382468473
    },
    {
        "country": "Iran",
        "iso2": "IR",
        "latitude": 32.90602374289,
        "longitude": 54.2370770010654
    },
    {
        "country": "Iraq",
        "iso2": "IQ",
        "latitude": 33.1050756675279,
        "longitude": 43.8325291810568
    },
    {
        "country": "Ireland",
        "iso2": "IE",
        "latitude": 53.3048953981649,
        "longitude": -8.24112854555409
    },
    {
        "country": "Isle of Man",
        "iso2": "IM",
        "latitude": 54.2285530100801,
        "longitude": -4.53299505546844
    },
    {
        "country": "Israel",
        "iso2": "IL",
        "latitude": 31.5135422200431,
        "longitude": 35.027923472437
    },
    {
        "country": "Italy",
        "iso2": "IT",
        "latitude": 42.9820112761426,
        "longitude": 12.7636571661231
    },
    {
        "country": "Jamaica",
        "iso2": "JM",
        "latitude": 18.1220788934165,
        "longitude": -77.3035889454277
    },
    {
        "country": "Japan",
        "iso2": "JP",
        "latitude": 36.7673883259782,
        "longitude": 137.469342343518
    },
    {
        "country": "Jersey",
        "iso2": "JE",
        "latitude": 49.2153969257243,
        "longitude": -2.12916011626535
    },
    {
        "country": "Jordan",
        "iso2": "JO",
        "latitude": 31.3870648844491,
        "longitude": 36.9572888454724
    },
    {
        "country": "Kazakhstan",
        "iso2": "KZ",
        "latitude": 47.6414651951768,
        "longitude": 66.3759193479301
    },
    {
        "country": "Kenya",
        "iso2": "KE",
        "latitude": 0.689918231837617,
        "longitude": 37.9530941126237
    },
    {
        "country": "Kiribati",
        "iso2": "KI",
        "latitude": 1.8676673749241,
        "longitude": -157.390241893235
    },
    {
        "country": "Kosovo",
        "iso2": "XK",
        "latitude": 42.579126,
        "longitude": 20.895667
    },
    {
        "country": "Kuwait",
        "iso2": "KW",
        "latitude": 29.281360965443,
        "longitude": 47.5631110932018
    },
    {
        "country": "Kyrgyzstan",
        "iso2": "KG",
        "latitude": 41.3569890543835,
        "longitude": 74.1753290346831
    },
    {
        "country": "Laos",
        "iso2": "LA",
        "latitude": 18.1172827368732,
        "longitude": 103.763758990264
    },
    {
        "country": "Latvia",
        "iso2": "LV",
        "latitude": 56.8138530475541,
        "longitude": 24.6936713256544
    },
    {
        "country": "Lebanon",
        "iso2": "LB",
        "latitude": 33.9116017072208,
        "longitude": 35.8965194632474
    },
    {
        "country": "Lesotho",
        "iso2": "LS",
        "latitude": -29.6016811692481,
        "longitude": 28.2447531786422
    },
    {
        "country": "Liberia",
        "iso2": "LR",
        "latitude": 6.52012979398834,
        "longitude": -9.25898893549761
    },
    {
        "country": "Libya",
        "iso2": "LY",
        "latitude": 27.2029157716907,
        "longitude": 17.9113339245423
    },
    {
        "country": "Liechtenstein",
        "iso2": "LI",
        "latitude": 47.1462756213303,
        "longitude": 9.54767467237637
    },
    {
        "country": "Lithuania",
        "iso2": "LT",
        "latitude": 55.2943739341717,
        "longitude": 23.9460216050135
    },
    {
        "country": "Luxembourg",
        "iso2": "LU",
        "latitude": 49.7752345454236,
        "longitude": 6.10323033845887
    },
    {
        "country": "Madagascar",
        "iso2": "MG",
        "latitude": -19.0416361249304,
        "longitude": 46.6849346683254
    },
    {
        "country": "Malawi",
        "iso2": "MW",
        "latitude": -13.128986464184,
        "longitude": 34.2344118229888
    },
    {
        "country": "Malaysia",
        "iso2": "MY",
        "latitude": 3.67166085563878,
        "longitude": 114.633303039928
    },
    {
        "country": "Maldives",
        "iso2": "MV",
        "latitude": -0.606557716800992,
        "longitude": 73.1007624514047
    },
    {
        "country": "Mali",
        "iso2": "ML",
        "latitude": 17.1681462085848,
        "longitude": -4.34639984178115
    },
    {
        "country": "Malta",
        "iso2": "MT",
        "latitude": 35.8905226508993,
        "longitude": 14.4419224425084
    },
    {
        "country": "Marshall Islands",
        "iso2": "MH",
        "latitude": 7.30792990099434,
        "longitude": 168.72016025351
    },
    {
        "country": "Martinique",
        "iso2": "MQ",
        "latitude": 14.6426973535976,
        "longitude": -61.0143238087508
    },
    {
        "country": "Mauritania",
        "iso2": "MR",
        "latitude": 20.46673121282,
        "longitude": -10.4950790450357
    },
    {
        "country": "Mauritius",
        "iso2": "MU",
        "latitude": -20.2814231747519,
        "longitude": 57.5641567106654
    },
    {
        "country": "Mayotte",
        "iso2": "YT",
        "latitude": -12.824468416301,
        "longitude": 45.128142327031
    },
    {
        "country": "Mexico",
        "iso2": "MX",
        "latitude": 23.8743606809359,
        "longitude": -101.553997316301
    },
    {
        "country": "Micronesia",
        "iso2": "FM",
        "latitude": 6.87894481292554,
        "longitude": 158.229189944452
    },
    {
        "country": "Moldova",
        "iso2": "MD",
        "latitude": 47.0725674580696,
        "longitude": 28.3911118659413
    },
    {
        "country": "Monaco",
        "iso2": "MC",
        "latitude": 43.7479822499565,
        "longitude": 7.41282087327119
    },
    {
        "country": "Mongolia",
        "iso2": "MN",
        "latitude": 47.0864445460485,
        "longitude": 103.398736032745
    },
    {
        "country": "Montenegro",
        "iso2": "ME",
        "latitude": 42.7369483521045,
        "longitude": 19.2950508715675
    },
    {
        "country": "Montserrat",
        "iso2": "MS",
        "latitude": 16.7353633914603,
        "longitude": -62.1869328125625
    },
    {
        "country": "Morocco",
        "iso2": "MA",
        "latitude": 28.6875981349793,
        "longitude": -8.81721258725081
    },
    {
        "country": "Mozambique",
        "iso2": "MZ",
        "latitude": -17.5252303094887,
        "longitude": 35.2085770312901
    },
    {
        "country": "Myanmar",
        "iso2": "MM",
        "latitude": 19.9012279313998,
        "longitude": 97.0889228539734
    },
    {
        "country": "Namibia",
        "iso2": "NA",
        "latitude": -21.9085816328147,
        "longitude": 18.1645134584526
    },
    {
        "country": "Nauru",
        "iso2": "NR",
        "latitude": -0.522102144066899,
        "longitude": 166.929376331391
    },
    {
        "country": "Nepal",
        "iso2": "NP",
        "latitude": 28.3009206997556,
        "longitude": 84.1338898313567
    },
    {
        "country": "New Caledonia",
        "iso2": "NC",
        "latitude": -21.3300337266082,
        "longitude": 165.507670404386
    },
    {
        "country": "New Zealand",
        "iso2": "NZ",
        "latitude": -43.8276543254442,
        "longitude": 170.690355414286
    },
    {
        "country": "Nicaragua",
        "iso2": "NI",
        "latitude": 12.8935666319305,
        "longitude": -85.016088327669
    },
    {
        "country": "Niger",
        "iso2": "NE",
        "latitude": 17.0810539240729,
        "longitude": 8.86863247002646
    },
    {
        "country": "Nigeria",
        "iso2": "NG",
        "latitude": 9.61029352034213,
        "longitude": 8.14771484525619
    },
    {
        "country": "Niue",
        "iso2": "NU",
        "latitude": -19.0523092168039,
        "longitude": -169.86878106699
    },
    {
        "country": "Norfolk Island",
        "iso2": "NF",
        "latitude": -29.0376544450462,
        "longitude": 167.952595974833
    },
    {
        "country": "North Korea",
        "iso2": "KP",
        "latitude": 40.1919809147083,
        "longitude": 127.337980565374
    },
    {
        "country": "North Macedonia",
        "iso2": "MK",
        "latitude": 41.5940289014311,
        "longitude": 21.7099892387277
    },
    {
        "country": "Northern Mariana Islands",
        "iso2": "MP",
        "latitude": 15.1780635164321,
        "longitude": 145.741197372031
    },
    {
        "country": "Norway",
        "iso2": "NO",
        "latitude": 64.9777588294774,
        "longitude": 16.6702592723908
    },
    {
        "country": "Oman",
        "iso2": "OM",
        "latitude": 20.7242833183209,
        "longitude": 55.841088119829
    },
    {
        "country": "Pakistan",
        "iso2": "PK",
        "latitude": 30.1161883714108,
        "longitude": 69.0883509076965
    },
    {
        "country": "Palau",
        "iso2": "PW",
        "latitude": 7.53477585254739,
        "longitude": 134.57965086721
    },
    {
        "country": "Palestinian Territory",
        "iso2": "PS",
        "latitude": 31.9308187364538,
        "longitude": 35.2425118415458
    },
    {
        "country": "Panama",
        "iso2": "PA",
        "latitude": 8.43953674957689,
        "longitude": -80.1442876148279
    },
    {
        "country": "Papua New Guinea",
        "iso2": "PG",
        "latitude": -7.15691281915213,
        "longitude": 144.834894299469
    },
    {
        "country": "Paraguay",
        "iso2": "PY",
        "latitude": -23.4219055925942,
        "longitude": -58.3890635742865
    },
    {
        "country": "Peru",
        "iso2": "PE",
        "latitude": -8.52271798424029,
        "longitude": -74.1141619678188
    },
    {
        "country": "Philippines",
        "iso2": "PH",
        "latitude": 15.5865422510942,
        "longitude": 121.822089414167
    },
    {
        "country": "Pitcairn",
        "iso2": "PN",
        "latitude": -24.3661217475654,
        "longitude": -128.314984862758
    },
    {
        "country": "Poland",
        "iso2": "PL",
        "latitude": 52.0684805569247,
        "longitude": 19.4357327923446
    },
    {
        "country": "Portugal",
        "iso2": "PT",
        "latitude": 39.6752921470213,
        "longitude": -7.933662183874
    },
    {
        "country": "Puerto Rico",
        "iso2": "PR",
        "latitude": 18.2162240866109,
        "longitude": -66.494253395935
    },
    {
        "country": "Qatar",
        "iso2": "QA",
        "latitude": 25.3185284864253,
        "longitude": 51.197949187432
    },
    {
        "country": "Réunion",
        "iso2": "RE",
        "latitude": -21.1198254606651,
        "longitude": 55.5439350619468
    },
    {
        "country": "Romania",
        "iso2": "RO",
        "latitude": 45.8245489439758,
        "longitude": 25.0941582015632
    },
    {
        "country": "Russia",
        "iso2": "RU",
        "latitude": 59.0394342141061,
        "longitude": 98.6704990698032
    },
    {
        "country": "Rwanda",
        "iso2": "RW",
        "latitude": -2.01468746004715,
        "longitude": 29.919439681764
    },
    {
        "country": "Saba",
        "iso2": "BQ",
        "latitude": 17.6325126163897,
        "longitude": -63.2373948190949
    },
    {
        "country": "Saint Barthelemy",
        "iso2": "BL",
        "latitude": 17.9056169124173,
        "longitude": -62.8305161000515
    },
    {
        "country": "Saint Eustatius",
        "iso2": "BQ",
        "latitude": 17.4919042294197,
        "longitude": -62.978230589445
    },
    {
        "country": "Saint Helena",
        "iso2": "SH",
        "latitude": -15.9629633183403,
        "longitude": -5.7173916208131
    },
    {
        "country": "Saint Kitts & Nevis",
        "iso2": "KN",
        "latitude": 17.3147362995877,
        "longitude": -62.7456038589578
    },
    {
        "country": "Saint Lucia",
        "iso2": "LC",
        "latitude": 13.8957491851299,
        "longitude": -60.9689510935251
    },
    {
        "country": "Saint Martin",
        "iso2": "MF",
        "latitude": 18.0780121132244,
        "longitude": -63.0667852536194
    },
    {
        "country": "Saint Pierre & Miquelon",
        "iso2": "PM",
        "latitude": 46.9515391361519,
        "longitude": -56.3246535343755
    },
    {
        "country": "Saint Vincent & the Grenadines",
        "iso2": "VC",
        "latitude": 13.2548081229706,
        "longitude": -61.193766354393
    },
    {
        "country": "Samoa",
        "iso2": "WS",
        "latitude": -13.6342529532746,
        "longitude": -172.441076557401
    },
    {
        "country": "San Marino",
        "iso2": "SM",
        "latitude": 43.9428207290978,
        "longitude": 12.4612783495817
    },
    {
        "country": "Sao Tome & Principe",
        "iso2": "ST",
        "latitude": 0.227447042947937,
        "longitude": 6.6061587968576
    },
    {
        "country": "Saudi Arabia",
        "iso2": "SA",
        "latitude": 24.1360381447578,
        "longitude": 44.6009581782255
    },
    {
        "country": "Senegal",
        "iso2": "SN",
        "latitude": 14.2288614917634,
        "longitude": -14.6108753683523
    },
    {
        "country": "Serbia",
        "iso2": "RS",
        "latitude": 44.0267987013196,
        "longitude": 20.8567744439574
    },
    {
        "country": "Seychelles",
        "iso2": "SC",
        "latitude": -4.66000231882274,
        "longitude": 55.4725078959552
    },
    {
        "country": "Sierra Leone",
        "iso2": "SL",
        "latitude": 8.56133038475058,
        "longitude": -11.7865669573111
    },
    {
        "country": "Singapore",
        "iso2": "SG",
        "latitude": 1.35282518900063,
        "longitude": 103.81025757634
    },
    {
        "country": "Sint Maarten",
        "iso2": "SX",
        "latitude": 18.0394260846307,
        "longitude": -63.068831359153
    },
    {
        "country": "Slovakia",
        "iso2": "SK",
        "latitude": 48.6980839052048,
        "longitude": 19.5810153624909
    },
    {
        "country": "Slovenia",
        "iso2": "SI",
        "latitude": 46.137592295645,
        "longitude": 14.8906368999737
    },
    {
        "country": "Solomon Islands",
        "iso2": "SB",
        "latitude": -9.61310473459651,
        "longitude": 160.164757950338
    },
    {
        "country": "Somalia",
        "iso2": "SO",
        "latitude": 6.52453457310392,
        "longitude": 45.4003786724397
    },
    {
        "country": "South Africa",
        "iso2": "ZA",
        "latitude": -28.5536193067973,
        "longitude": 24.7525274648908
    },
    {
        "country": "South Georgia & South Sandwich Islands",
        "iso2": "GS",
        "latitude": -54.3766644386213,
        "longitude": -36.7750957589892
    },
    {
        "country": "South Korea",
        "iso2": "KR",
        "latitude": 36.4023867125441,
        "longitude": 127.762245513576
    },
    {
        "country": "South Sudan",
        "iso2": "SS",
        "latitude": 7.65778204176329,
        "longitude": 30.3851856901788
    },
    {
        "country": "Spain",
        "iso2": "ES",
        "latitude": 40.3650083366838,
        "longitude": -3.65162514099569
    },
    {
        "country": "Sri Lanka",
        "iso2": "LK",
        "latitude": 7.69663093932994,
        "longitude": 80.6693116977062
    },
    {
        "country": "Sudan",
        "iso2": "SD",
        "latitude": 15.6706023098425,
        "longitude": 29.951458283594
    },
    {
        "country": "Suriname",
        "iso2": "SR",
        "latitude": 4.09872359592017,
        "longitude": -55.8555143115612
    },
    {
        "country": "Svalbard",
        "iso2": "SJ",
        "latitude": 78.5731893646962,
        "longitude": 16.0363788515052
    },
    {
        "country": "Sweden",
        "iso2": "SE",
        "latitude": 62.7342098610844,
        "longitude": 17.0624319880049
    },
    {
        "country": "Switzerland",
        "iso2": "CH",
        "latitude": 46.7367812868493,
        "longitude": 8.28692879489528
    },
    {
        "country": "Syria",
        "iso2": "SY",
        "latitude": 35.0975110605831,
        "longitude": 38.5117323139514
    },
    {
        "country": "Taiwan",
        "iso2": "TW",
        "latitude": 23.69781,
        "longitude": 120.960515
    },
    {
        "country": "Tajikistan",
        "iso2": "TJ",
        "latitude": 38.5693313838297,
        "longitude": 70.9421528106569
    },
    {
        "country": "Tanzania",
        "iso2": "TZ",
        "latitude": -6.35579444004114,
        "longitude": 34.8183220606038
    },
    {
        "country": "Thailand",
        "iso2": "TH",
        "latitude": 13.6622278474553,
        "longitude": 101.086751162145
    },
    {
        "country": "The Netherlands",
        "iso2": "NL",
        "latitude": 52.1340541289238,
        "longitude": 5.55413642612848
    },
    {
        "country": "Timor-Leste",
        "iso2": "TL",
        "latitude": -8.80989463060196,
        "longitude": 125.950240495626
    },
    {
        "country": "Togo",
        "iso2": "TG",
        "latitude": 8.66074303771781,
        "longitude": 0.899085757110968
    },
    {
        "country": "Tokelau",
        "iso2": "TK",
        "latitude": -9.19517476725654,
        "longitude": -171.852659507227
    },
    {
        "country": "Tonga",
        "iso2": "TO",
        "latitude": -21.1592721282385,
        "longitude": -175.204158785112
    },
    {
        "country": "Trinidad & Tobago",
        "iso2": "TT",
        "latitude": 10.415515638298,
        "longitude": -61.3723657997624
    },
    {
        "country": "Tunisia",
        "iso2": "TN",
        "latitude": 34.0863617956572,
        "longitude": 9.65587551697984
    },
    {
        "country": "Turkey",
        "iso2": "TR",
        "latitude": 38.9320736312339,
        "longitude": 35.5688676407669
    },
    {
        "country": "Turkmenistan",
        "iso2": "TM",
        "latitude": 39.0606911800142,
        "longitude": 58.4577357627054
    },
    {
        "country": "Turks & Caicos Islands",
        "iso2": "TC",
        "latitude": 21.7998654274837,
        "longitude": -71.740589468115
    },
    {
        "country": "Tuvalu",
        "iso2": "TV",
        "latitude": -8.51470150644722,
        "longitude": 179.217833977593
    },
    {
        "country": "Uganda",
        "iso2": "UG",
        "latitude": 1.28217292184162,
        "longitude": 32.3437176846312
    },
    {
        "country": "Ukraine",
        "iso2": "UA",
        "latitude": 48.6575325155637,
        "longitude": 31.2737720844263
    },
    {
        "country": "United Arab Emirates",
        "iso2": "AE",
        "latitude": 24.1825029230913,
        "longitude": 54.2792052578958
    },
    {
        "country": "United Kingdom",
        "iso2": "GB",
        "latitude": 53.9784473508021,
        "longitude": -2.85294390932925
    },
    {
        "country": "USA",
        "iso2": "US",
        "latitude": 38.8208089190304,
        "longitude": -96.3316166082963
    },
    {
        "country": "US Minor Outlying Islands",
        "iso2": "UM",
        "latitude": 19.3020458122159,
        "longitude": 166.638003397496
    },
    {
        "country": "Uruguay",
        "iso2": "UY",
        "latitude": -32.7819504383109,
        "longitude": -56.0191952345808
    },
    {
        "country": "US Virgin Islands",
        "iso2": "VI",
        "latitude": 17.7380097087725,
        "longitude": -64.7615534140979
    },
    {
        "country": "Uzbekistan",
        "iso2": "UZ",
        "latitude": 41.4879065244633,
        "longitude": 63.8548297593985
    },
    {
        "country": "Vanuatu",
        "iso2": "VU",
        "latitude": -15.1891321216993,
        "longitude": 166.849127356697
    },
    {
        "country": "Vatican City",
        "iso2": "VA",
        "latitude": 41.9040235131673,
        "longitude": 12.4513129170261
    },
    {
        "country": "Venezuela",
        "iso2": "VE",
        "latitude": 7.1483247605071,
        "longitude": -66.3649213598513
    },
    {
        "country": "Vietnam",
        "iso2": "VN",
        "latitude": 16.5173471708393,
        "longitude": 105.913388327587
    },
    {
        "country": "Wallis & Futuna",
        "iso2": "WF",
        "latitude": -14.2834423078266,
        "longitude": -178.127355557771
    },
    {
        "country": "Yemen",
        "iso2": "YE",
        "latitude": 16.0013926163074,
        "longitude": 47.4681579320638
    },
    {
        "country": "Zambia",
        "iso2": "ZM",
        "latitude": -13.1628329531862,
        "longitude": 27.7552136343089
    },
    {
        "country": "Zimbabwe",
        "iso2": "ZW",
        "latitude": -18.9270012198147,
        "longitude": 29.7178296407208
    }
]
