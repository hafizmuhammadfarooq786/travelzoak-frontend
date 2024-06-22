
/**
 * @param code the HTTP code to check
 * @returns TRUE if the code is a success code, FALSE otherwise
 */
export function isHttpSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

// Regular expression to match a URL with a protocol (eg. http://www.google.com, www.google.com, google.com)
const REGEX_URL_WITHOUT_PROTOCOL_SUBDOMAIN = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

/**
 * Check if a string is a valid URL
 * 
 * @param str the string to check
 * @returns TRUE: if the string is a valid URL, FALSE: otherwise
 */
export function isUrl(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch {
        // first check without http/https or www
        if (str.match(REGEX_URL_WITHOUT_PROTOCOL_SUBDOMAIN)) {
            return true;
        }
        return false;
    }
}

// Make sure a URL has a protocol (http/https)
export function formatUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return `http://${url}`;
}