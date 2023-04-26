import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import  style from  './FormOrder.module.css'

// form for add edit confirm contact
 export default function FormOrder(props) {
    // use yup to create a validattion schema
    const validationSchema = Yup.object().shape({
        orderStatus: Yup.string()
            .required('orderStatus is required'),
        orderDay: Yup.string()
            .required('orderDay is required'),
        estimateStartDate: Yup.string()
            .required('estimateStartDate is required'),
        orderDepartment: Yup.string()
            .required('orderDepartment is required'),
        contractStatus: Yup.string()
        .required('ContractStatus is required'),
        workplaceDepartment: Yup.string()
        .required('workplaceDepartment is required'),
        career: Yup.string()
        .required('career is required'),
        numPeopleOrder: Yup.string()
        .required('numPeopleOrder is required'),
        numPeopleUndecided: Yup.string()
        .required('numPeopleUndecided is required'),
        zip: Yup.string()
        .required('zip is required'),
        fee: Yup.string()
        .required('fee is required'),
        addressOrder: Yup.string()
        .required('addressOrder is required'),
        info1: Yup.string()
        .required('info1 is required'),
        info2: Yup.string()
        .required('info2 is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    if(props.valuesEdit) {
        formOptions.values = props.valuesEdit
    }
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    return (
            <form onSubmit={handleSubmit((data) => {
                props.onSubmit(data)
            })}>
                <div className="form-row d-flex justify-content-between">
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Order</label>
                        <input name="orderNumber" type="text" {...register('orderNumber')} className={`form-control ${errors.orderNumber ? 'is-invalid' : ''}`} disabled/>
                        <div className="invalid-feedback">{errors.orderNumber?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Order Status</label>
                        <select {...register("orderStatus")} className={`form-select form-control ${errors.orderStatus ? 'is-invalid' : ''}`} defaultValue={''}>
                            <option value="" disabled>Choose...</option>
                            <option value="NEW">NEW</option>
                            <option value="CONFIRMED">CONFIRMED</option>
                            <option value="REJECTED">REJECTED</option>
                        </select>
                        <div className="invalid-feedback">{errors.orderStatus?.message}</div>
                    </div>
                </div>
                <div className={`form-row d-flex justify-content-between ${style.marginBlock}`}>
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Ngày Order</label>
                        <input name="orderDay" type="date" {...register('orderDay')} className={`form-control ${errors.orderDay ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.orderDay?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Ngày dự kiến bắt đầu</label>
                        <input name="estimateStartDate" type="date" {...register('estimateStartDate')} className={`form-control ${errors.estimateStartDate ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.estimateStartDate?.message}</div>
                    </div>
                </div>
                <div className={`form-row d-flex justify-content-between ${style.marginBlock}`}>
                    <div className={`form-group ${style.widthBlock4}`}>
                        <label>Tên bộ phận đặt hàng</label>
                        <input name="orderDepartment" type="text" {...register('orderDepartment')} className={`form-control ${errors.orderDepartment ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.orderDepartment?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock4}`}>
                        <label>Tình trạng hợp đồng</label>
                        <input name="contractStatus" type="text" {...register('contractStatus')} className={`form-control ${errors.contractStatus ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.contractStatus?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock4}`}>
                        <label>Tên bộ phận nơi làm việc</label>
                        <input name="workplaceDepartment" type="text" {...register('workplaceDepartment')} className={`form-control ${errors.workplaceDepartment ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.workplaceDepartment?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock4}`}>
                        <label>Nghề nghiệp</label>
                        <input name="career" type="text" {...register('career')} className={`form-control ${errors.career ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.career?.message}</div>
                    </div>
                </div>
                <div className={`form-row d-flex justify-content-between ${style.marginBlock}`}>
                    <div className={`form-group ${style.widthBlock3}`}>
                        <label>Số người order</label>
                        <input name="numPeopleOrder" type="number" {...register('numPeopleOrder')} className={`form-control ${errors.numPeopleOrder ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.numPeopleOrder?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock3}`}>
                        <label>Số người chưa quyết định</label>
                        <input name="numPeopleUndecided" type="number" {...register('numPeopleUndecided')} className={`form-control ${errors.numPeopleUndecided ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.numPeopleUndecided?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock3}`}>
                        <label>Zip</label>
                        <input name="zip" type="text" {...register('zip')} className={`form-control ${errors.zip ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.zip?.message}</div>
                    </div>
                </div>
                <div className={`form-row ${style.marginBlock}`}>
                    <div className="form-group col">
                        <label>Phí phái cử</label>
                        <input name="fee" type="text" {...register('fee')} className={`form-control ${errors.fee ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'} placeholder='1234 Main St'/>
                        <div className="invalid-feedback">{errors.fee?.message}</div>
                    </div>
                </div>
                <div className={`form-row ${style.marginBlock}`}>
                    <div className="form-group col">
                        <label>Địa chỉ người Order</label>
                        <input name="addressOrder" type="text" {...register('addressOrder')} className={`form-control ${errors.addressOrder ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'} placeholder='Apartment, studio or floor'/>
                        <div className="invalid-feedback">{errors.addressOrder?.message}</div>
                    </div>
                </div>
                <div className={`form-row d-flex justify-content-between ${style.marginBlock}`}>
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Thông tin 1</label>
                        <input name="info1" type="text" {...register('info1')} className={`form-control ${errors.info1 ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'} placeholder='Apartment, studio or floor'/>
                        <div className="invalid-feedback">{errors.info1?.message}</div>
                    </div>
                    <div className={`form-group ${style.widthBlock2}`}>
                        <label>Thông tin 2</label>
                        <input name="info2" type="text" {...register('info2')} className={`form-control ${errors.info2 ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'} placeholder='Apartment, studio or floor'/>
                        <div className="invalid-feedback">{errors.info2?.message}</div>
                    </div>
                </div>
                <div className={`form-group ${style.marginBlock}`}>
                   
                    <button type="button" className="btn btn-secondary"><Link href={`/order/list`}>Cancel</Link></button>
                    <button type="submit" className="btn btn-primary mr-1">{props.titleButton}</button>
                </div>
            </form>
    );
}
