(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "border border-input bg-primary text-[black] ",
            destructive: "bg-[0, 100%, 64%] text-destructive-foreground hover:bg-[0, 100%, 64%]",
            outline: "border border-input bg-background  hover:text-accent",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/lib/data:9194de [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60f104335519d9c5073f5db2726ca87660dc15ffcf":"addReplyAction"},"Desktop/proyectos/threadhub/frontend/src/lib/actions.ts",""] */ __turbopack_context__.s([
    "addReplyAction",
    ()=>addReplyAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addReplyAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60f104335519d9c5073f5db2726ca87660dc15ffcf", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addReplyAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgY3JlYXRlVGhyZWFkLCBhZGRSZXBseSwgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuY29uc3QgY3JlYXRlVGhyZWFkU2NoZW1hID0gei5vYmplY3Qoe1xuICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSwgJ1RpdGxlIG11c3QgYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzIGxvbmcuJyksXG4gIGNvbnRlbnQ6IHouc3RyaW5nKCkubWluKDEwLCAnQ29udGVudCBtdXN0IGJlIGF0IGxlYXN0IDEwIGNoYXJhY3RlcnMgbG9uZy4nKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhyZWFkQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBjcmVhdGUgYSB0aHJlYWQuJywgc3RhdHVzOiAnZXJyb3InIH07XG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBjcmVhdGVUaHJlYWRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICB0aXRsZTogZm9ybURhdGEuZ2V0KCd0aXRsZScpLFxuICAgIGNvbnRlbnQ6IGZvcm1EYXRhLmdldCgnY29udGVudCcpLFxuICB9KTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIG1lc3NhZ2U6ICdWYWxpZGF0aW9uIGZhaWxlZC4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQuJyxcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdUaHJlYWQgPSBhd2FpdCBjcmVhdGVUaHJlYWQodmFsaWRhdGVkRmllbGRzLmRhdGEudGl0bGUsIHZhbGlkYXRlZEZpZWxkcy5kYXRhLmNvbnRlbnQsIGN1cnJlbnRVc2VyKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdUaHJlYWQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhJywgc3RhdHVzOiAnc3VjY2VzcycsIHRocmVhZElkOiBuZXdUaHJlYWQuaWQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSB0aHJlYWQuJywgc3RhdHVzOiAnZXJyb3InIH07XG4gIH1cbn1cblxuY29uc3QgYWRkUmVwbHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgY29udGVudDogei5zdHJpbmcoKS5taW4oMSwgJ1JlcGx5IGNhbm5vdCBiZSBlbXB0eS4nKSxcbiAgICB0aHJlYWRJZDogei5zdHJpbmcoKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUmVwbHlBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gcmVwbHkuJywgc3RhdHVzOiAnZXJyb3InIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gYWRkUmVwbHlTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgY29udGVudDogZm9ybURhdGEuZ2V0KCdjb250ZW50JyksXG4gICAgICAgIHRocmVhZElkOiBmb3JtRGF0YS5nZXQoJ3RocmVhZElkJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsaWRhdGlvbiBmYWlsZWQuJyxcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWRkUmVwbHkodmFsaWRhdGVkRmllbGRzLmRhdGEudGhyZWFkSWQsIHZhbGlkYXRlZEZpZWxkcy5kYXRhLmNvbnRlbnQsIGN1cnJlbnRVc2VyKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC90aHJlYWRzLyR7dmFsaWRhdGVkRmllbGRzLmRhdGEudGhyZWFkSWR9YCk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdSZXBseSBhZGRlZCEnLCBzdGF0dXM6ICdzdWNjZXNzJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gYWRkIHJlcGx5LicsIHN0YXR1czogJ2Vycm9yJyB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1RBNENzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreadView",
    ()=>ThreadView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/formatDistanceToNow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$3a$9194de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/data:9194de [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const replyInitialState = {
    message: '',
    status: ''
};
function PostCard({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-10 w-10 border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                src: post.author.avatarUrl,
                                alt: post.author.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                children: post.author.name.charAt(0)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-foreground",
                                        children: post.author.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        dateTime: post.createdAt,
                                        className: "text-xs text-muted-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(post.createdAt), {
                                            addSuffix: true
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-foreground/90 whitespace-pre-wrap",
                                children: post.content
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = PostCard;
function ThreadView({ thread, currentUser }) {
    _s();
    const [replyState, replyAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$3a$9194de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addReplyAction"], replyInitialState);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreadView.useEffect": ()=>{
            if (replyState.status === 'success') {
                formRef.current?.reset();
                toast({
                    title: 'Success!',
                    description: replyState.message
                });
            } else if (replyState.status === 'error') {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: replyState.message
                });
            }
        }
    }["ThreadView.useEffect"], [
        replyState,
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-headline text-3xl font-bold tracking-tight md:text-4xl",
                    children: thread.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: thread.posts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostCard, {
                                post: post
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        ref: formRef,
                        action: replyAction,
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "h-10 w-10 border hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: currentUser.avatarUrl,
                                        alt: currentUser.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        children: currentUser.name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "hidden",
                                        name: "threadId",
                                        value: thread.id
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        name: "content",
                                        placeholder: "Write a reply...",
                                        className: "min-h-[100px]",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            children: [
                                                "Reply ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__["SendHorizonal"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadView.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ThreadView, "r55/fr1FfCOK6+jK2XF/7G04/Rc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c1 = ThreadView;
var _c, _c1;
__turbopack_context__.k.register(_c, "PostCard");
__turbopack_context__.k.register(_c1, "ThreadView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        const props2 = mergeProps(slotProps, children.props);
        if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
            props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/separator/src/separator.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constructFrom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */ __turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function constructFrom(date, value) {
    if (date instanceof Date) {
        return new date.constructor(value);
    } else {
        return new Date(value);
    }
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constructNow.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructNow",
    ()=>constructNow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constructFrom.mjs [app-client] (ecmascript)");
;
function constructNow(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(date, Date.now());
}
const __TURBOPACK__default__export__ = constructNow;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
function toDate(argument) {
    const argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new argument.constructor(+argument);
    } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
        // TODO: Can we get rid of as?
        return new Date(argument);
    } else {
        // TODO: Can we get rid of as?
        return new Date(NaN);
    }
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/compareAsc.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareAsc",
    ()=>compareAsc,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function compareAsc(dateLeft, dateRight) {
    const _dateLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateLeft);
    const _dateRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) {
        return -1;
    } else if (diff > 0) {
        return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
        return diff;
    }
}
const __TURBOPACK__default__export__ = compareAsc;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInCalendarMonths.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarMonths",
    ()=>differenceInCalendarMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function differenceInCalendarMonths(dateLeft, dateRight) {
    const _dateLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateLeft);
    const _dateRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}
const __TURBOPACK__default__export__ = differenceInCalendarMonths;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/endOfDay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfDay",
    ()=>endOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function endOfDay(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfDay;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/endOfMonth.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfMonth",
    ()=>endOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function endOfMonth(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfMonth;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/isLastDayOfMonth.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isLastDayOfMonth",
    ()=>isLastDayOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/endOfDay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/endOfMonth.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
;
;
function isLastDayOfMonth(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(_date) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(_date);
}
const __TURBOPACK__default__export__ = isLastDayOfMonth;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInMonths.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInMonths",
    ()=>differenceInMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/compareAsc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInCalendarMonths.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/isLastDayOfMonth.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
;
;
;
function differenceInMonths(dateLeft, dateRight) {
    const _dateLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateLeft);
    const _dateRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateRight);
    const sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAsc"])(_dateLeft, _dateRight);
    const difference = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(_dateLeft, _dateRight));
    let result;
    // Check for the difference of less than month
    if (difference < 1) {
        result = 0;
    } else {
        if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
            // This will check if the date is end of Feb and assign a higher end of month date
            // to compare it with Jan
            _dateLeft.setDate(30);
        }
        _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
        // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        let isLastMonthNotFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAsc"])(_dateLeft, _dateRight) === -sign;
        // Check for cases of one full calendar month
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$isLastDayOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastDayOfMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateLeft)) && difference === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAsc"])(dateLeft, _dateRight) === 1) {
            isLastMonthNotFull = false;
        }
        result = sign * (difference - Number(isLastMonthNotFull));
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
const __TURBOPACK__default__export__ = differenceInMonths;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/getRoundingMethod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoundingMethod",
    ()=>getRoundingMethod
]);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInMilliseconds.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInMilliseconds",
    ()=>differenceInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function differenceInMilliseconds(dateLeft, dateRight) {
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateLeft) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateRight);
}
const __TURBOPACK__default__export__ = differenceInMilliseconds;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInSeconds.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInSeconds",
    ()=>differenceInSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/getRoundingMethod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInMilliseconds.mjs [app-client] (ecmascript)");
;
;
function differenceInSeconds(dateLeft, dateRight, options) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMilliseconds"])(dateLeft, dateRight) / 1000;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInSeconds;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs [app-client] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-unused-vars */ /**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/localize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildMatchFn.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/match.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildMatchFn.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/localize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US/_lib/match.mjs [app-client] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US.mjs [app-client] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/defaultOptions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/formatDistance.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistance",
    ()=>formatDistance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/compareAsc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInMonths.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/differenceInSeconds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/toDate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/locale/en-US.mjs [app-client] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/defaultOptions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function formatDistance(date, baseDate, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$compareAsc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareAsc"])(date, baseDate);
    if (isNaN(comparison)) {
        throw new RangeError("Invalid time value");
    }
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    let dateLeft;
    let dateRight;
    if (comparison > 0) {
        dateLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(baseDate);
        dateRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    } else {
        dateLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
        dateRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(baseDate);
    }
    const seconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInSeconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInSeconds"])(dateRight, dateLeft);
    const offsetInSeconds = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(dateRight) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(dateLeft)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) {
                return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            } else if (seconds < 10) {
                return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            } else if (seconds < 20) {
                return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            } else if (seconds < 40) {
                return locale.formatDistance("halfAMinute", 0, localizeOptions);
            } else if (seconds < 60) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", 1, localizeOptions);
            }
        } else {
            if (minutes === 0) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", minutes, localizeOptions);
            }
        }
    // 2 mins up to 0.75 hrs
    } else if (minutes < 45) {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
    // 0.75 hrs up to 1.5 hrs
    } else if (minutes < 90) {
        return locale.formatDistance("aboutXHours", 1, localizeOptions);
    // 1.5 hrs up to 24 hrs
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInDay"]) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) {
        return locale.formatDistance("xDays", 1, localizeOptions);
    // 1.75 days up to 30 days
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInMonth"]) {
        const days = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInDay"]);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInMonth"] * 2) {
        months = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInMonth"]);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$differenceInMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMonths"])(dateRight, dateLeft);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesInMonth"]);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance("aboutXYears", years, localizeOptions);
        // N years 3 months up to N years 9 months
        } else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance("overXYears", years, localizeOptions);
        // N years 9 months up to N year 12 months
        } else {
            return locale.formatDistance("almostXYears", years + 1, localizeOptions);
        }
    }
}
const __TURBOPACK__default__export__ = formatDistance;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/formatDistanceToNow.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatDistanceToNow",
    ()=>formatDistanceToNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/constructNow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/date-fns/formatDistance.mjs [app-client] (ecmascript)");
;
;
function formatDistanceToNow(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$date$2d$fns$2f$constructNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructNow"])(date), options);
}
const __TURBOPACK__default__export__ = formatDistanceToNow;
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SendHorizontal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
            key: "117uat"
        }
    ],
    [
        "path",
        {
            d: "M6 12h16",
            key: "s4cdu5"
        }
    ]
];
const SendHorizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("SendHorizontal", __iconNode);
;
 //# sourceMappingURL=send-horizontal.js.map
}),
"[project]/Desktop/proyectos/threadhub/frontend/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendHorizonal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_proyectos_threadhub_frontend_b71b9756._.js.map