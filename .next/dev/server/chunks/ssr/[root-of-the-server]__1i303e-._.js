module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/spots/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spot$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spot-detail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/spots.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["touristSpots"].map((spot)=>({
            id: spot.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSpotById"])(id);
    if (!spot) return {
        title: "Place not found"
    };
    return {
        title: spot.name,
        description: spot.description,
        openGraph: {
            title: `${spot.name} — Tour Partner`,
            description: spot.description
        }
    };
}
async function SpotPage({ params }) {
    const { id } = await params;
    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSpotById"])(id);
    if (!spot) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spot$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpotDetail"], {
                spot: spot
            }, void 0, false, {
                fileName: "[project]/app/spots/[id]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer detail-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "footer-brand",
                        href: "/",
                        children: "TOUR PARTNER"
                    }, void 0, false, {
                        fileName: "[project]/app/spots/[id]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Thoughtful journeys through Bangladesh."
                    }, void 0, false, {
                        fileName: "[project]/app/spots/[id]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: spot.images[0].source,
                        rel: "noreferrer",
                        target: "_blank",
                        children: [
                            "Photo by ",
                            spot.images[0].attribution,
                            " · ",
                            spot.images[0].license
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/spots/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/spots/[id]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/spots/[id]/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/spots/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/spots/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/spot-detail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotDetail",
    ()=>SpotDetail
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SpotDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SpotDetail() from the server but SpotDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/spot-detail.tsx", "SpotDetail");
}),
"[project]/components/spot-detail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotDetail",
    ()=>SpotDetail
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SpotDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SpotDetail() from the server but SpotDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/spot-detail.tsx <module evaluation>", "SpotDetail");
}),
"[project]/components/spot-detail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spot$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/spot-detail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spot$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/spot-detail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spot$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/data/touristSpots.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "cox-s-bazar",
        "name": "Cox's Bazar",
        "district": "Cox's Bazar",
        "category": "Beach",
        "description": "Follow the curve of the world's longest natural sea beach, where golden sand, fishing boats and a wide-open horizon set an easy pace.",
        "specialty": "A 120 km stretch of unbroken shoreline",
        "rating": 4.9,
        "reviews": 2840,
        "bestSeason": "November – February",
        "budget": "৳3,000–6,000 / day",
        "tags": [
            "Sea views",
            "Local seafood",
            "Sunset"
        ],
        "activities": [
            "Beach walks",
            "Surfing",
            "Seafood tasting",
            "Sunset watching"
        ],
        "images": [
            {
                "src": "/images/cox-bazar.jpg",
                "alt": "Golden-hour light over Cox's Bazar sea beach",
                "attribution": "Tanweer Morshed",
                "license": "CC BY-SA 3.0",
                "source": "https://commons.wikimedia.org/wiki/File:Cox%27s_Bazar_sea_beach_01.jpg"
            }
        ],
        "coordinates": {
            "lat": 21.4272,
            "lng": 92.0058
        },
        "transit": {
            "Bus": "Frequent overnight and daytime coaches run from Dhaka to Cox's Bazar.",
            "Train": "Take a train to Chattogram, then continue by road to the coast.",
            "Flight": "Domestic flights connect Dhaka with Cox's Bazar Airport."
        },
        "keywords": [
            "sea",
            "coast",
            "beach",
            "ocean"
        ]
    },
    {
        "id": "sajek-valley",
        "name": "Sajek Valley",
        "district": "Rangamati",
        "category": "Hill",
        "description": "Wake above a sea of clouds in the Chittagong Hill Tracts, where quiet ridgelines and small hillside communities reward a slower journey.",
        "specialty": "Cloud-wrapped hilltop sunrises",
        "rating": 4.8,
        "reviews": 1920,
        "bestSeason": "October – April",
        "budget": "৳4,000–7,000 / day",
        "tags": [
            "Clouds",
            "Hilltop stays",
            "Sunrise"
        ],
        "activities": [
            "Sunrise viewpoints",
            "Hill trekking",
            "Village visits",
            "Photography"
        ],
        "images": [
            {
                "src": "/images/sajek-valley.jpg",
                "alt": "A view across the hills of Sajek Valley",
                "attribution": "Thenameissayem",
                "license": "CC BY-SA 4.0",
                "source": "https://commons.wikimedia.org/wiki/File:Sajek_Valley_20190818.jpg"
            }
        ],
        "coordinates": {
            "lat": 23.3815,
            "lng": 92.2938
        },
        "transit": {
            "Bus": "Travel to Khagrachari by bus; local shared vehicles continue to Sajek.",
            "Train": "There is no direct train. Reach Chattogram by rail and continue by road.",
            "Flight": "Fly to Chattogram, then arrange onward road transport."
        },
        "keywords": [
            "mountain",
            "hills",
            "clouds",
            "nature"
        ]
    },
    {
        "id": "sundarbans",
        "name": "The Sundarbans",
        "district": "Khulna",
        "category": "Forest",
        "description": "Drift through tidal waterways beneath a vast mangrove canopy, in a living landscape shaped by the rhythm of river and sea.",
        "specialty": "The world's largest mangrove forest",
        "rating": 4.9,
        "reviews": 1560,
        "bestSeason": "November – March",
        "budget": "৳5,000–10,000 / day",
        "tags": [
            "Mangroves",
            "River life",
            "Wildlife"
        ],
        "activities": [
            "River cruises",
            "Birdwatching",
            "Wildlife spotting",
            "Nature walks"
        ],
        "images": [
            {
                "src": "/images/sundarbans.jpg",
                "alt": "A fisherman travelling by boat through the Sundarbans",
                "attribution": "Hafijulwiki",
                "license": "CC BY-SA 4.0",
                "source": "https://commons.wikimedia.org/wiki/File:River,_boat_and_one_fisherman_inside_in_Sundorbon.JPG"
            }
        ],
        "coordinates": {
            "lat": 21.9497,
            "lng": 89.1833
        },
        "transit": {
            "Bus": "Buses connect Dhaka with Khulna; guided boat trips depart from nearby launch points.",
            "Train": "Take a train from Dhaka to Khulna, then connect with an organized river tour.",
            "Flight": "Fly to Jessore and continue by road to Khulna."
        },
        "keywords": [
            "mangrove",
            "wildlife",
            "river",
            "nature"
        ]
    },
    {
        "id": "sylhet-tea-gardens",
        "name": "Sylhet Tea Gardens",
        "district": "Sylhet",
        "category": "Hill",
        "description": "Take the scenic road through rolling tea estates, misty slopes and forest-fringed trails in Bangladesh's green northeast.",
        "specialty": "Endless emerald tea-covered hills",
        "rating": 4.7,
        "reviews": 1180,
        "bestSeason": "May – September",
        "budget": "৳2,500–5,000 / day",
        "tags": [
            "Tea country",
            "Green hills",
            "Slow travel"
        ],
        "activities": [
            "Tea garden walks",
            "Tea tasting",
            "Waterfall visits",
            "Photography"
        ],
        "images": [
            {
                "src": "/images/sylhet-tea.jpg",
                "alt": "Curving rows of tea bushes in the Sylhet tea country",
                "attribution": "Shahnoor Habib Munmun",
                "license": "CC BY 3.0",
                "source": "https://commons.wikimedia.org/wiki/File:Tea_Garden_Srimongol_Sylhet_Bangladesh_4.JPG"
            }
        ],
        "coordinates": {
            "lat": 24.8949,
            "lng": 91.8687
        },
        "transit": {
            "Bus": "Direct coach services run from Dhaka to Sylhet throughout the day.",
            "Train": "Intercity trains connect Dhaka and Sylhet; local transport reaches the estates.",
            "Flight": "Daily domestic flights connect Dhaka with Osmani International Airport."
        },
        "keywords": [
            "tea",
            "garden",
            "green",
            "nature",
            "hills"
        ]
    },
    {
        "id": "sreemangal",
        "name": "Sreemangal",
        "district": "Moulvibazar",
        "category": "Forest",
        "description": "A gentle escape into tea country, with forest trails, rain-washed gardens and a famously unhurried small-town feel.",
        "specialty": "Tea estates beside protected rainforest",
        "rating": 4.8,
        "reviews": 940,
        "bestSeason": "October – March",
        "budget": "৳2,000–4,500 / day",
        "tags": [
            "Rainforest",
            "Tea trails",
            "Birdlife"
        ],
        "activities": [
            "Forest trekking",
            "Tea garden visits",
            "Birdwatching",
            "Cycling"
        ],
        "images": [
            {
                "src": "/images/sreemangal.jpg",
                "alt": "Tea gardens rolling over the hills of Sreemangal",
                "attribution": "Radman Siddiki",
                "license": "CC BY 4.0",
                "source": "https://commons.wikimedia.org/wiki/File:Tea_Gardens_of_Sreemangal_01.jpg"
            }
        ],
        "coordinates": {
            "lat": 24.3065,
            "lng": 91.7296
        },
        "transit": {
            "Bus": "Coaches to Sreemangal and nearby Moulvibazar run from Dhaka and Sylhet.",
            "Train": "Intercity trains from Dhaka stop at Sreemangal station.",
            "Flight": "Fly to Sylhet, then continue around 80 km by road."
        },
        "keywords": [
            "tea",
            "forest",
            "nature",
            "rainforest"
        ]
    },
    {
        "id": "sonargaon",
        "name": "Sonargaon",
        "district": "Narayanganj",
        "category": "Historical",
        "description": "Step into Bengal's past among old merchant houses, riverside lanes and the restored timber architecture of Panam City.",
        "specialty": "The atmospheric merchant street of Panam City",
        "rating": 4.6,
        "reviews": 780,
        "bestSeason": "November – February",
        "budget": "৳1,500–3,000 / day",
        "tags": [
            "Old town",
            "Architecture",
            "Heritage"
        ],
        "activities": [
            "Heritage walks",
            "Museum visits",
            "Architecture tours",
            "Local crafts"
        ],
        "images": [
            {
                "src": "/images/sonargaon.png",
                "alt": "Historic merchant houses on the old street of Panam City",
                "attribution": "K M Rabbani",
                "license": "CC BY-SA 4.0",
                "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyLlkgAaUOW0_MLIXPL_arWxIIUJNCEbHsoJW8Cm1Hw&s=10"
            }
        ],
        "coordinates": {
            "lat": 23.6514,
            "lng": 90.6078
        },
        "transit": {
            "Bus": "Local buses and rideshare services connect central Dhaka with Sonargaon.",
            "Train": "Take a train to Dhaka, then continue by road to the historic town.",
            "Flight": "Fly to Dhaka and travel onward by road."
        },
        "keywords": [
            "history",
            "heritage",
            "architecture",
            "old town"
        ]
    },
    {
        "id": "tanguar-haor",
        "name": "Tanguar Haor",
        "district": "Sunamganj",
        "category": "Wetland",
        "description": "Sail across a shimmering freshwater haor, where floating villages and seasonal birdlife turn the horizon into open water.",
        "specialty": "A vast Ramsar-listed freshwater wetland",
        "rating": 4.8,
        "reviews": 620,
        "bestSeason": "June – September",
        "budget": "৳3,000–6,000 / day",
        "tags": [
            "Open water",
            "Boat journeys",
            "Birdlife"
        ],
        "activities": [
            "Boat trips",
            "Birdwatching",
            "Village visits",
            "Sunrise cruises"
        ],
        "images": [
            {
                "src": "/images/tanguar-haor.jpg",
                "alt": "Silhouettes of trees reflected in the wide water of Tanguar Haor",
                "attribution": "Abdul Momin",
                "license": "CC BY-SA 4.0",
                "source": "https://commons.wikimedia.org/wiki/File:Tanguar_haor,_Bangladesh_01.jpg"
            }
        ],
        "coordinates": {
            "lat": 25.1175,
            "lng": 91.0628
        },
        "transit": {
            "Bus": "Travel to Sunamganj by bus from Sylhet, then arrange local boat transport.",
            "Train": "Take a train to Sylhet and continue to Sunamganj by road.",
            "Flight": "Fly to Sylhet and travel onward by road to the haor."
        },
        "keywords": [
            "wetland",
            "haor",
            "water",
            "birdwatching",
            "river"
        ]
    },
    {
        "id": "lalbagh-fort",
        "name": "Lalbagh Fort",
        "district": "Dhaka",
        "category": "Historical",
        "description": "Find a moment of calm inside Old Dhaka's unfinished Mughal fortress, framed by graceful gardens and centuries-old brickwork.",
        "specialty": "An unfinished 17th-century Mughal fort",
        "rating": 4.5,
        "reviews": 1430,
        "bestSeason": "October – March",
        "budget": "৳1,000–2,500 / day",
        "tags": [
            "Mughal history",
            "Gardens",
            "Old Dhaka"
        ],
        "activities": [
            "Fort tours",
            "History walks",
            "Garden visits",
            "Street food"
        ],
        "images": [
            {
                "src": "/images/lalbagh-fort.jpg",
                "alt": "Brick gateway and gardens at Lalbagh Fort in Dhaka",
                "attribution": "Shmunmun",
                "license": "Public domain",
                "source": "https://commons.wikimedia.org/wiki/File:Dhaka_Lalbagh_Fort_5.JPG"
            }
        ],
        "coordinates": {
            "lat": 23.7195,
            "lng": 90.3888
        },
        "transit": {
            "Bus": "Local buses and rideshare services reach Old Dhaka from across the city.",
            "Train": "Arrive at Dhaka railway station and continue by local transport.",
            "Flight": "Fly to Hazrat Shahjalal International Airport; the fort is in central Dhaka."
        },
        "keywords": [
            "history",
            "fort",
            "mughal",
            "heritage",
            "architecture"
        ]
    }
];
}),
"[project]/lib/spots.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSpotById",
    ()=>getSpotById,
    "getSpotImage",
    ()=>getSpotImage,
    "touristSpots",
    ()=>touristSpots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$touristSpots$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/touristSpots.json.[json].cjs [app-rsc] (ecmascript)");
;
const touristSpots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$touristSpots$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
function getSpotById(id) {
    return touristSpots.find((spot)=>spot.id === id);
}
function getSpotImage(spot) {
    return spot.images[0]?.src ?? "/placeholder-landscape.svg";
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1i303e-._.js.map