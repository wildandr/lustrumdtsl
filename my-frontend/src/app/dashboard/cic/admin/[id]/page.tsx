import DetailUserCic from '@/component/module/cic/FormResponse'

export default async function DetailDashboard({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    return (
        <div className=''>
            <DetailUserCic params={{ id }} />
        </div>
    );
}
