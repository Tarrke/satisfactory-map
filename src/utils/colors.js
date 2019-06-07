

export function generateIconColor(color) {
    return {
        main: color,
        mid: mix(0.2, "#000", color),
        dark: mix(0.6, "#000", color),
        outline: mix(0.2, "#fff", color)
    };
}