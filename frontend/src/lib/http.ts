const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function http<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    //Token guardado en localStorage
    let token = null;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
    }

    //Merge de headers
    const headers = new Headers({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });

    if (options.headers) {
        new Headers(options.headers).forEach((value, key) => {
            headers.set(key, value);
        });
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    //Controlamos los errores en las peticiones
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error en la peticion HTTP');
    }

    return response.json() as Promise<T>;
}