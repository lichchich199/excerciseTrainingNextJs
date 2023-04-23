import { useForm } from 'react-hook-form';
import  style from  '../FormOrder.module.css'

// form for add edit confirm contact
 export default function FormSearchOrder(props) {

    const {register, handleSubmit} = useForm();

    return (
            <form onSubmit={handleSubmit((data) => {
                props.onSubmit(data)
            })}>
                <div className={` d-flex justify-content-evenly ${style.searchBlock}`}>
                    <input {...register('orderDay')} type="date" className={`form-control ${style.widthBlock4}`} placeholder="Ngày bắt đầu" aria-label="Search" aria-describedby="search-addon" />
                    <input {...register('fee')} type="number" className={`form-control ${style.widthBlock4}`} placeholder="Chi phí" aria-label="Search" aria-describedby="search-addon" />
                    <select {...register('orderStatus')} className={` form-select ${style.widthBlock4}`} defaultValue={''}>
                                <option value="">Select Order Status... </option>
                                <option value="NEW">NEW</option>
                                <option value="CONFIRMED">CONFIRMED</option>
                                <option value="REJECTED">REJECTED</option>
                    </select>
                    <button type="submit" className={`btn btn-primary ${style.widthBlock4}`}>Search</button>
                </div>
            </form>
    );
}
