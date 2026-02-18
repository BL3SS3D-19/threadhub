module.exports = [
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
        className: "space-y-4",
        children: threads.map((thread)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "border rounded p-4 hover:bg-muted transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/threads/${thread.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
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
                        className: "text-sm text-muted-foreground",
                        children: [
                            thread.content.slice(0, 150),
                            "…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-2 text-muted-foreground",
                        children: [
                            "por ",
                            thread.author.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx",
                        lineNumber: 29,
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
        className: "w-full border rounded px-3 py-2"
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
const API_URL = process.env.NEXT_PUBLIC_API_URL; // URL base del backend
async function http(endpoint, options = {}) {
    //Token guardado en localStorage
    const token = localStorage.getItem('token');
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
"[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateThreadDialog",
    ()=>CreateThreadDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/services/threads.service.ts [app-ssr] (ecmascript)");
;
;
;
function CreateThreadDialog({ currentUser, onCreated }) {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const newThread = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["threadsService"].createThread({
                title,
                content,
                authorId: currentUser.id
            });
            setTitle('');
            setContent('');
            if (onCreated) onCreated(newThread[0]);
        } catch (err) {
            setError(err.message || 'Failed to create thread');
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-2 w-full max-w-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Title",
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                className: "w-full border rounded px-3 py-2",
                required: true
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                placeholder: "Content",
                value: content,
                onChange: (e)=>setContent(e.target.value),
                className: "w-full border rounded px-3 py-2",
                required: true
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx",
                lineNumber: 55,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "px-4 py-2 bg-primary text-white rounded",
                children: loading ? 'Creating...' : 'Create Thread'
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
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
function useThreads(filters) {
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchThreads = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$services$2f$threads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["threadsService"].getAllThreads(filters);
            setThreads(data);
        } catch (err) {
            setError(err.message || 'Error fetching threads');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchThreads();
    }, [
        filters?.search
    ]); // vuelve a cargar cuando cambie el search
    return {
        threads,
        loading,
        error,
        refresh: fetchThreads
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$ThreadList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/ThreadList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/SearchInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$CreateThreadDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/components/threads/CreateThreadDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$useThreads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/hooks/useThreads.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home({ searchParams }) {
    const query = searchParams?.query || '';
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(query);
    const { threads, loading, error, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$hooks$2f$useThreads$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThreads"])({
        search: searchTerm
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-5xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl",
                        children: "Discussions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                                value: searchTerm,
                                onChange: setSearchTerm
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$CreateThreadDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateThreadDialog"], {
                                currentUser: currentUser,
                                onCreated: ()=>refresh()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Cargando hilos..."
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                lineNumber: 46,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: [
                    "Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this),
            !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$components$2f$threads$2f$ThreadList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThreadList"], {
                threads: threads
            }, void 0, false, {
                fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
                lineNumber: 49,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/proyectos/threadhub/frontend/src/app/threads/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_proyectos_threadhub_frontend_src_91580949._.js.map