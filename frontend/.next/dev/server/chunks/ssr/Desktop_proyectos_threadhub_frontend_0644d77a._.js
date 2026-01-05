module.exports = [
"[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"601d2a4f6467522241f59d0cc3decfddf6b20e2d7e":"createThreadAction","60f104335519d9c5073f5db2726ca87660dc15ffcf":"addReplyAction"},"",""] */ __turbopack_context__.s([
    "addReplyAction",
    ()=>addReplyAction,
    "createThreadAction",
    ()=>createThreadAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const createThreadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(5, 'Title must be at least 5 characters long.'),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Content must be at least 10 characters long.')
});
async function createThreadAction(prevState, formData) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        return {
            message: 'You must be logged in to create a thread.',
            status: 'error'
        };
    }
    const validatedFields = createThreadSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your input.',
            status: 'error'
        };
    }
    try {
        const newThread = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createThread"])(validatedFields.data.title, validatedFields.data.content, currentUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            message: 'Thread created successfully!',
            status: 'success',
            threadId: newThread.id
        };
    } catch (error) {
        return {
            message: 'Failed to create thread.',
            status: 'error'
        };
    }
}
const addReplySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Reply cannot be empty.'),
    threadId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
async function addReplyAction(prevState, formData) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        return {
            message: 'You must be logged in to reply.',
            status: 'error'
        };
    }
    const validatedFields = addReplySchema.safeParse({
        content: formData.get('content'),
        threadId: formData.get('threadId')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed.',
            status: 'error'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addReply"])(validatedFields.data.threadId, validatedFields.data.content, currentUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/threads/${validatedFields.data.threadId}`);
        return {
            message: 'Reply added!',
            status: 'success'
        };
    } catch (error) {
        return {
            message: 'Failed to add reply.',
            status: 'error'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createThreadAction,
    addReplyAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createThreadAction, "601d2a4f6467522241f59d0cc3decfddf6b20e2d7e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addReplyAction, "60f104335519d9c5073f5db2726ca87660dc15ffcf", null);
}),
"[project]/Desktop/proyectos/threadhub/frontend/.next-internal/server/app/threads/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/proyectos/threadhub/frontend/.next-internal/server/app/threads/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60f104335519d9c5073f5db2726ca87660dc15ffcf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addReplyAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$threads$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/proyectos/threadhub/frontend/.next-internal/server/app/threads/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$proyectos$2f$threadhub$2f$frontend$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/proyectos/threadhub/frontend/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_proyectos_threadhub_frontend_0644d77a._.js.map