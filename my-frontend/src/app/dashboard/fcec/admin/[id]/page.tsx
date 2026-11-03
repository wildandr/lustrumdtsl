import DetailUserFcec from '@/component/module/fcec/FormResponse'

export default async function DetailDashboard({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    return (
        <div className=''>
            <DetailUserFcec params={{ id }} />
        </div>
    );
}
