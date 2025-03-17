const KitchenConfig = {
    room:{
        width: 3,   // Длина комнаты
        height: 2.5, // Высота комнаты
        depth: 3,    // Глубина комнаты
       
    },
    kithchen:{
        width: 3,   // Длина кухни
        height: 2.5, // Высота кухни
        depth: 3,    // Глубина кухни
        cabinets: [], // Массив шкафов
    },
    direct:{
        is:false,
        one:false,
        two:false,
        three:false,
    },
    angle:{
        is:false,
        side1:{
            one:false,
            two:false,
            three:false,
        },
        side2:{
            one:false,
            two:false,
            three:false,
        },
     
    },
    double:{
        is:false,
        one:false,
        two:false,
        three:false,
    }
};

export default KitchenConfig;