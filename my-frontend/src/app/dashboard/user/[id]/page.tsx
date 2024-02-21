
import DetailUser from '@/component/module/cic/FormResponse'

export default function DashboardUser({params} : {params: {id: string}}) {
    const separated = params.id.split("&");

    const int1 = parseInt(separated[0]);
    const int2 = parseInt(separated[1]);

    console.log(int1, int2);

    return (
        <div>
            {/* Use int1 and int2 here */}
        </div>
    );
}