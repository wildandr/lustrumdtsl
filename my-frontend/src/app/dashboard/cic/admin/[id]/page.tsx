import DetailUserCic from '@/component/module/cic/FormResponse'

export default function DetailDashboard({params} : {params: {id: string}}) {
    return (
        <div className=''>
            <DetailUserCic params={{ id: params.id }} />
        </div>
    );
}