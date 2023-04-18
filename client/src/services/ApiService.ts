export default function postFetch(url: string, json = {}, config = {}) {
    const defaults = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(json),
    }
    return fetch(url, {
        ...config,
        ...defaults
    })
}