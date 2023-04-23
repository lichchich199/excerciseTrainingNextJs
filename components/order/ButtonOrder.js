import style from './ButtonOrder.module.css'

export default function Button(props) {
    var className = 'btn ';
    switch(props?.type) {
        case 'NEW':
            className += 'btn-success'
            break;
        case 'CONFIRMED':
            className += 'btn-danger'
            break
        default: 
            className += 'btn-secondary'
            break;
    } 
    return (
        <input type='button' className={`${className} ${style.button}`} value={props?.type}></input>
    )
}