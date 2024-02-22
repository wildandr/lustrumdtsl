import DetailUserFcec from '@/component/module/fcec/FormResponse'

export default function DetailDashboard({params} : {params: {id: string}}) {
    return (
        <div className=''>
            <DetailUserFcec params={{ id: params.id }} />
        </div>
    );
}