export function generateRouterLink(item:string) {
    const encodedItem = encodeURIComponent(item);
    return `/${encodedItem}`; 
}