
export default  function  DayTracker ()  {
    const today:Date = new Date();
    const currentDay:number = today.getDate();
    const currentWeekDay:number = today.getDay();
    const currentMonth:number = today.getMonth();

    const weekdays: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    const months: string[] = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
            <div className="flex items-center gap-3">
                <div className="flex flex-col mr-4">
                    <span className="text-5xl font-semibold">{currentDay}</span>
                    <span className="text-gray-500">{months[currentMonth]}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold">{weekdays[currentWeekDay]}</span>
                    <span className="text-gray-500">Día Actual</span>
                </div>
            </div>
        </div>
    );
};
