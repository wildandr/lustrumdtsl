
import DetailUserCic from '@/component/module/cic/FormResponse'
import DetailUserFcec from '@/component/module/fcec/FormResponse'
import DetailUserSbc from '@/component/module/sbc/FormResponse'
import DetailUserCraft from '@/component/module/craft/FormResponse'

export default function DetailDashboard({params} : {params: {id: string}}) {
    console.log(params.id);
const separated = params.id.split("%26");

    let int1 = parseInt(separated[0]);
    let int2 = parseInt(separated[1]);

   console.log(int1);
    console.log(int2);
       

    return (
        <div className=''>
        {int1 === 1 && <DetailUserFcec params={{ id: int2 }} />}
        {int1 === 2 && <DetailUserCraft params={{ id: int2 }} />}
        {int1 === 3 && <DetailUserSbc params={{ id: int2 }} />}
        {int1 === 4 && <DetailUserCic params={{ id: int2 }} />}
        
        </div>
    );
}