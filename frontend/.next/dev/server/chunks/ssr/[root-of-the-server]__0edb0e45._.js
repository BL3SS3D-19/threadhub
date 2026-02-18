module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreadList",
    ()=>ThreadList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function ThreadList({ threads }) {
    if (threads.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No hay hilos todavía."
        }, void 0, false, {
            fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-col gap-4",
        children: threads.map((thread)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "rounded-2xl border border-slate-800 bg-[#0B0B10] px-6 py-5 shadow-md shadow-black/40 transition hover:border-slate-700 hover:bg-[#11111A]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/threads/${thread.id}`,
                        className: "block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-lg font-semibold text-slate-50",
                            children: thread.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 line-clamp-2 text-sm text-slate-300",
                        children: [
                            thread.content.slice(0, 220),
                            "…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "por ",
                                    thread.author.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "hace 2 horas"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, thread.id, true, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/SearchInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SearchInput({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Search threads...",
        value: value,
        onChange: (e)=>onChange(e.target.value),
        className: "w-full rounded-full border border-slate-700 bg-[#050509] px-4 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/SearchInput.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/lib/http.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "http",
    ()=>http
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
async function http(endpoint, options = {}) {
    //Token guardado en localStorage
    let token = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    //Merge de headers
    const headers = new Headers({
        'Content-Type': 'application/json',
        ...token ? {
            Authorization: `Bearer ${token}`
        } : {}
    });
    if (options.headers) {
        new Headers(options.headers).forEach((value, key)=>{
            headers.set(key, value);
        });
    }
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });
    //Controlamos los errores en las peticiones
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.message || 'Error en la peticion HTTP');
    }
    return response.json();
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/services/threads.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "threadsService",
    ()=>threadsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/http.ts [app-ssr] (ecmascript)");
;
const threadsService = {
    async getRepliesByThread (threadId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(`/api/replies/thread/${threadId}`);
    },
    async getAllThreads (filters) {
        const query = filters ? '?' + Object.entries(filters).map(([key, value])=>`${key}=${encodeURIComponent(value)}`).join('&') : '';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(`/api/threads${query}`);
    },
    async getThreadById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(`/api/threads/${id}`);
    },
    async createThread (data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])('/api/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        //TURBOPACK unreachable
        ;
    },
    async updateThread (id, data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(`/api/threads/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    },
    async deleteThread (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(`/api/threads/${id}`, {
            method: 'DELETE'
        });
    }
};
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/hooks/useThreads.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useThreads.ts
__turbopack_context__.s([
    "useThreads",
    ()=>useThreads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/services/threads.service.ts [app-ssr] (ecmascript)");
;
;
function useThreads({ filters, threadId }) {
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [thread, setThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Hilo específico
    const [replies, setReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Respuestas del hilo
    const fetchThreads = async ()=>{
        if (!threadId) {
            setLoading(true);
            setError(null);
        }
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["threadsService"].getAllThreads(filters);
            setThreads(data);
        } catch (err) {
            setError(err.message || 'Error fetching threads');
        } finally{
            setLoading(false);
        }
    };
    const fetchThreadWithReplies = async ()=>{
        if (threadId) {
            setLoading(true);
            setError(null);
            try {
                const [threadData, repliesData] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["threadsService"].getThreadById(threadId),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["threadsService"].getRepliesByThread(threadId)
                ]);
                setThread(threadData);
                setReplies(repliesData);
            } catch (err) {
                setError(err.message || 'Error fetching thread');
            } finally{
                setLoading(false);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (threadId) {
            fetchThreadWithReplies();
        } else {
            fetchThreads();
        }
    }, [
        filters?.search,
        threadId
    ]); // Recarga por search o cambio de threadId
    return {
        threads,
        thread,
        replies,
        loading,
        error,
        refresh: threadId ? fetchThreadWithReplies : fetchThreads
    };
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateThreadButton",
    ()=>CreateThreadButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CreateThreadButton({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-violet-600/40 transition hover:bg-violet-500",
        children: "+ New thread"
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadButton.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$ThreadList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/SearchInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$useThreads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/hooks/useThreads.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$CreateThreadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Home() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const queryFromUrl = searchParams.get('query') || '';
    //Estado para mostrar o no formulario para crear thread
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estado para búsqueda controlada
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(queryFromUrl);
    // Hook para traer threads filtrados
    const { threads, loading, error, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$useThreads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThreads"])({
        filters: {
            search: searchTerm
        }
    });
    // Usuario demo; reemplazar con getCurrentUser si quieres
    const currentUser = {
        id: '1',
        username: 'DemoUser',
        email: 'demo@example.com',
        avatarUrl: null,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    // referencia al contenedor donde se renderiza el formulario
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Opcional: actualizar searchTerm si cambia la query en URL desde fuera
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSearchTerm(queryFromUrl);
    }, [
        queryFromUrl
    ]);
    // cuando showForm pasa a true y el formulario está en el DOM, hacemos scroll suave
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showForm && formRef.current) {
            formRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [
        showForm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050509] text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-col px-6 pb-10 pt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full sm:w-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                                    value: searchTerm,
                                    onChange: setSearchTerm
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$CreateThreadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateThreadButton"], {
                                onClick: ()=>setShowForm(true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-400",
                    children: "Cargando hilos..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-400",
                    children: [
                        "Error: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$ThreadList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThreadList"], {
                    threads: threads
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                    lineNumber: 73,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: formRef,
                    children: showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$CreateThreadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateThreadButton"], {
                        onClick: ()=>setShowForm(true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0edb0e45._.js.map