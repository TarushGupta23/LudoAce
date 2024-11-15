export function Pawn({index}) {
    let color = ''
    switch (Math.floor(index/4)) {
        case 0:
            color = 'red'
            break;
        case 1:
            color = 'green'
            break;
        case 2:
            color = 'blue'
            break;
        default:
            color = 'yello'
            break;
    }
    return (
        <span className={color}></span>
    )
}