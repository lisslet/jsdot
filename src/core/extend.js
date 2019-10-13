export function Extend({ selector, styleUrls }) {
    return target => {
        target._dotSelector = selector;
        target._dotStyleUrls = styleUrls;
    };
}
