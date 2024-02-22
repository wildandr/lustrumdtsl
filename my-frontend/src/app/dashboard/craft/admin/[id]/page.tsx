import DetailUserCraft from '@/component/module/craft/FormResponse'

export default function DetailDashboard({params} : {params: {id: string}}) {
    return (
        <div className=''>
            <DetailUserCraft params={{ id: params.id }} />
        </div>
    );
}