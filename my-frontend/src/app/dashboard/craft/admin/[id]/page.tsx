import DetailUserCraft from '@/component/module/craft/FormResponse'

export default async function DetailDashboard({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    return (
        <div className=''>
            <DetailUserCraft params={{ id }} />
        </div>
    );
}
