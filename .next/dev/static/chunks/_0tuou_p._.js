(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/itinerary-drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItineraryDrawer",
    ()=>ItineraryDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/spots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/itinerary-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ItineraryDrawer({ open, onClose }) {
    _s();
    const { savedIds, toggleSaved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItinerary"])();
    const savedSpots = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touristSpots"].filter((spot)=>savedIds.includes(spot.id));
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const drawerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ItineraryDrawer.useEffect": ()=>{
            if (!open) return;
            const previousFocus = document.activeElement;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            closeButtonRef.current?.focus();
            const onKeyDown = {
                "ItineraryDrawer.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onClose();
                        return;
                    }
                    if (event.key !== "Tab" || !drawerRef.current) return;
                    const focusable = drawerRef.current.querySelectorAll('a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])');
                    const first = focusable.item(0);
                    const last = focusable.item(focusable.length - 1);
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last?.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first?.focus();
                    }
                }
            }["ItineraryDrawer.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "ItineraryDrawer.useEffect": ()=>{
                    window.removeEventListener("keydown", onKeyDown);
                    document.body.style.overflow = previousOverflow;
                    if (previousFocus instanceof HTMLElement) previousFocus.focus();
                }
            })["ItineraryDrawer.useEffect"];
        }
    }["ItineraryDrawer.useEffect"], [
        open,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    "aria-label": "Close itinerary",
                    className: "drawer-backdrop",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/components/itinerary-drawer.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                    ref: drawerRef,
                    "aria-labelledby": "itinerary-title",
                    "aria-modal": "true",
                    className: "itinerary-drawer",
                    initial: prefersReducedMotion ? false : {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: prefersReducedMotion ? {
                        opacity: 0
                    } : {
                        x: "100%"
                    },
                    transition: prefersReducedMotion ? {
                        duration: 0
                    } : {
                        type: "spring",
                        damping: 30,
                        stiffness: 280
                    },
                    role: "dialog",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: "YOUR PERSONAL COLLECTION"
                                        }, void 0, false, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "itinerary-title",
                                            children: "Saved places"
                                        }, void 0, false, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: closeButtonRef,
                                    "aria-label": "Close saved places",
                                    className: "icon-button",
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/itinerary-drawer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/itinerary-drawer.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        savedSpots.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-list",
                            children: savedSpots.map((spot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "saved-spot",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "saved-image",
                                            href: `/spots/${spot.id}`,
                                            onClick: onClose,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: spot.images[0].src,
                                                alt: "",
                                                fill: true,
                                                sizes: "88px"
                                            }, void 0, false, {
                                                fileName: "[project]/components/itinerary-drawer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "saved-copy",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "category-label",
                                                    children: spot.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/spots/${spot.id}`,
                                                    onClick: onClose,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: spot.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/itinerary-drawer.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "saved-location",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        spot.district
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": `Remove ${spot.name} from itinerary`,
                                            className: "icon-button remove-saved",
                                            onClick: ()=>toggleSaved(spot.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/itinerary-drawer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, spot.id, true, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/itinerary-drawer.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-empty",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "empty-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/components/itinerary-drawer.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Your next adventure starts here"
                                }, void 0, false, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Save the places that catch your eye and they'll be waiting here when you're ready."
                                }, void 0, false, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-link",
                                    onClick: onClose,
                                    children: [
                                        "Explore destinations ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/itinerary-drawer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/itinerary-drawer.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        savedSpots.length,
                                        " places saved"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Stored on this device"
                                }, void 0, false, {
                                    fileName: "[project]/components/itinerary-drawer.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/itinerary-drawer.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/itinerary-drawer.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/itinerary-drawer.tsx",
            lineNumber: 60,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/itinerary-drawer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ItineraryDrawer, "pbIdIc27GGlCoAwWbBwcRPPtcXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItinerary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ItineraryDrawer;
var _c;
__turbopack_context__.k.register(_c, "ItineraryDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/itinerary-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItineraryProvider",
    ()=>ItineraryProvider,
    "useItinerary",
    ()=>useItinerary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "roam-bangladesh-itinerary";
const EMPTY_SNAPSHOT = "[]";
const listeners = new Set();
function getSnapshot() {
    try {
        return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_SNAPSHOT;
    } catch (error) {
        console.error("Could not load saved itinerary.", error);
        return EMPTY_SNAPSHOT;
    }
}
function subscribe(listener) {
    listeners.add(listener);
    const onStorage = (event)=>{
        if (event.key === STORAGE_KEY || event.key === null) listener();
    };
    window.addEventListener("storage", onStorage);
    return ()=>{
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
}
function readSavedIds(snapshot) {
    try {
        const parsed = JSON.parse(snapshot);
        if (Array.isArray(parsed) && parsed.every((id)=>typeof id === "string")) {
            return parsed;
        }
        console.error("Saved itinerary has an invalid format.");
    } catch (error) {
        console.error("Could not parse saved itinerary.", error);
    }
    return [];
}
const ItineraryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ItineraryProvider({ children }) {
    _s();
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, {
        "ItineraryProvider.useSyncExternalStore[snapshot]": ()=>EMPTY_SNAPSHOT
    }["ItineraryProvider.useSyncExternalStore[snapshot]"]);
    const savedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ItineraryProvider.useMemo[savedIds]": ()=>readSavedIds(snapshot)
    }["ItineraryProvider.useMemo[savedIds]"], [
        snapshot
    ]);
    const toggleSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ItineraryProvider.useCallback[toggleSaved]": (id)=>{
            const current = readSavedIds(getSnapshot());
            const next = current.includes(id) ? current.filter({
                "ItineraryProvider.useCallback[toggleSaved]": (savedId)=>savedId !== id
            }["ItineraryProvider.useCallback[toggleSaved]"]) : [
                ...current,
                id
            ];
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                listeners.forEach({
                    "ItineraryProvider.useCallback[toggleSaved]": (listener)=>listener()
                }["ItineraryProvider.useCallback[toggleSaved]"]);
            } catch (error) {
                console.error("Could not save itinerary to local storage.", error);
            }
        }
    }["ItineraryProvider.useCallback[toggleSaved]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ItineraryProvider.useMemo[value]": ()=>({
                savedIds,
                isSaved: ({
                    "ItineraryProvider.useMemo[value]": (id)=>savedIds.includes(id)
                })["ItineraryProvider.useMemo[value]"],
                toggleSaved
            })
    }["ItineraryProvider.useMemo[value]"], [
        savedIds,
        toggleSaved
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItineraryContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/itinerary-provider.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(ItineraryProvider, "4creAsnMcAdYQCTqLEIzh4HBrbI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = ItineraryProvider;
function useItinerary() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ItineraryContext);
    if (!context) {
        throw new Error("useItinerary must be used within ItineraryProvider.");
    }
    return context;
}
_s1(useItinerary, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ItineraryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/itinerary-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/itinerary-drawer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SiteHeader() {
    _s();
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { savedIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItinerary"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `site-header${pathname.startsWith("/spots/") ? " detail-header" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "brand",
                            href: "/",
                            "aria-label": "Tour Partner home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "brand-mark",
                                    children: "T"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-wordmark",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "TRAVEL, THOUGHTFULLY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-header.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "TOUR PARTNER"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-header.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Main navigation",
                            className: `main-nav${mobileOpen ? " nav-open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#destinations",
                                    onClick: ()=>setMobileOpen(false),
                                    children: "Discover"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#about",
                                    onClick: ()=>setMobileOpen(false),
                                    children: "Our story"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "saved-trigger",
                                    onClick: ()=>setDrawerOpen(true),
                                    "aria-label": `Open               Itinerary, ${savedIds.length} saved`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-header.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Saved places"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-header.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        savedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "saved-count",
                                            children: savedIds.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-header.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mobile-menu icon-button",
                                    "aria-label": mobileOpen ? "Close menu" : "Open menu",
                                    "aria-expanded": mobileOpen,
                                    onClick: ()=>setMobileOpen((open)=>!open),
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 47
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItineraryDrawer"], {
                open: drawerOpen,
                onClose: ()=>setDrawerOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "dUWnFusm3YgrtTPRntQwdO35xH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$itinerary$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItinerary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/touristSpots.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/spots.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSpotById",
    ()=>getSpotById,
    "getSpotImage",
    ()=>getSpotImage,
    "touristSpots",
    ()=>touristSpots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$touristSpots$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/touristSpots.json.[json].cjs [app-client] (ecmascript)");
;
const touristSpots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$touristSpots$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function getSpotById(id) {
    return touristSpots.find((spot)=>spot.id === id);
}
function getSpotImage(spot) {
    return spot.images[0]?.src ?? "/placeholder-landscape.svg";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0tuou_p._.js.map