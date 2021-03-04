export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}
export function calcularMarca(marca){
    let increment;
    switch(marca){
        
        case 'europeo':
            increment= 1.30;
            break;
        case 'americano':
            increment= 1.15;        
            break;
        case 'asiatico':
            increment= 1.05;
            break;
        default:
            break;
    }
    return increment;
}
export function calculaPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}
export function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}