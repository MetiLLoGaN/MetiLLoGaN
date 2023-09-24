
/* -------------------------------- GPS assortment Start-------------------------------- */

const carGps = [
    {id:"1" ,productName:"FMC920" ,productType:"carGps",productImg:"https://teltonika-gps.com/cdn/extras/17422/fmc920-side-840xAuto.webp",
    protofilo:"GPS کوچک و هوشمند با اتصال 4G Cat 1",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
    
    {id:"2" ,productName:"FMC125" ,productType:"carGps",productImg:"https://teltonika-gps.com/cdn/extras/9609/fmc125-side-840xAuto.webp",
    protofilo:"ترمینال پیشرفته LTE با اتصال GNSS و LTE/GSM، رابط های RS485/RS232 و باتری پشتیبان.",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"3" ,productName:"MSP500" ,productType:"carGps",productImg:"https://wiki.teltonika-gps.com/images/thumb/6/6e/MSP500_PNG_4000x4000_1.png/300px-MSP500_PNG_4000x4000_1.png",
    protofilo:`MSP500 یک ترمینال ردیابی ویژه است که شامل یک زنگ یکپارچه و یک رله برای عملکرد محدود کننده سرعت بر اساس
    سوئیچینگ منبع تغذیه پمپ بنزین میباشد`,
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"4" ,productName:"FMB001" ,productType:"carGps",productImg:"https://teltonika-gps.com/cdn/extras/10085/fmb001-side-840xAuto.webp",
    protofilo:"ترمینال ردیابی بی‌درنگ Plug and Track با اتصال GNSS، GSM و بلوتوث",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"5" ,productName:"FMT100" ,productType:"carGps",productImg:"https://teltonika-gps.com/cdn/extras/9532/fmt100-side-840xAuto.webp",
    protofilo:"ردیاب GNSS ضد آب ویژه و کوچک با شتاب سنج داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"6" ,productName:"FMB920" ,productType:"carGps",productImg:"./Images/carGps/FMB920.png",
    protofilo:"ردیاب GNSS/GSM/Bluetooth با آنتن داخلی GNSS/GSM و باتری داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"7" ,productName:"FMB202" ,productType:"carGps",productImg:"./Images/carGps/FMB202.png",
    protofilo:"ردیاب ضد آب کوچک و حرفه ای با آنتن داخلی GNSS/GSM با بهره بالا، بلوتوث و باتری داخلی Ni-MH با ظرفیت بالا",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"11" ,productName:"FMB120" ,productType:"carGps",productImg:"./Images/carGps/FMB120.png",
    protofilo:"ردیاب GNSS/GSM/Bluetooth با آنتن داخلی GNSS/GSM و باتری داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"8" ,productName:"FMB641" ,productType:"carGps",productImg:"./Images/carGps/FMB641.png",
    protofilo:"ترمینال پیشرو GNSS/GSM برای برنامه های پیشرفته",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
    
]
const mobolityGps =[
    {id:"20" ,productName:"TAT100" ,productType:"mobolityGps",productImg:"https://teltonika-gps.com/cdn/extras/9848/tat100-side-840xAuto.webp",
    protofilo:"nit برای ردیابی کالاهای با ارزش، قرقره های سیم، ابزار، تجهیزات ساختمانی، کانتینرها، واگن ها، بالابرهای قیچی و بسیاری دیگر از دارایی های غیر برقی مناسب است."
    ,status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
    
    {id:"10" ,productName:"TMT250" ,productType:"mobolityGps",productImg:"https://teltonika-gps.com/cdn/extras/10289/tmt250-side-840xAuto.webp",
    protofilo:"Teltonika TMT250 یک ردیاب شخصی مستقل با اتصال GNSS، GSM و بلوتوث است.",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"11" ,productName:"GH5200" ,productType:"mobolityGps",productImg:"https://teltonika-gps.com/cdn/extras/10285/gh5200-side-840xAuto.webp",
    protofilo:"GH5200 یک ردیاب شخصی خودکار با اتصال GNSS، GSM و بلوتوث است.",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
]
const gpsAccessories = [
    {id:"10" ,productName:"TELTOCHARGE" ,productType:"gpsAccessories",productImg:"https://wiki.teltonika-energy.com/images/0/00/TeltoCharge_Charger_main.png",
    protofilo:"شارژر EV آسان، هوشمند و قابل اعتماد که می توانید آن را مطابق با نیاز خود سفارشی کنید",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"11" ,productName:"EYE BEACON" ,productType:"gpsAccessories",productImg:"./Images/gpsAccessories/EyeSensor.png",
    protofilo:"مدل های چراغ و سنسور ID کم انرژی بلوتوث با بدنه محکم و باتری با عمر طولانی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"12" ,productName:"DUALCAM" ,productType:"gpsAccessories",productImg:"https://teltonika-gps.com/cdn/extras/11100/dualcam-840xAuto.webp",
    protofilo:"FMC125 و یک راه حل دوربین برای نظارت تصویری در داخل کابین و جاده",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"13" ,productName:"ADAS" ,productType:"gpsAccessories",productImg:"https://wiki.teltonika-gps.com/images/thumb/b/bf/MDAS-9_2.jpg/500px-MDAS-9_2.jpg",
    protofilo:"دوربین ADAS برای جلوگیری از برخورد و تصادف با قابلیت نظارت بصری طراحی شده است",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"14" ,productName:"LV-CAN200" ,productType:"gpsAccessories",productImg:"https://teltonika-gps.com/cdn/extras/10998/lv-can200-840xAuto.webp",
    protofilo:"آداپتور CAN برای خواندن داده های CAN bus از خودروهای سواری، وسایل نقلیه تجاری سبک، کامیون ها و اتوبوس ها ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"15" ,productName:"TAMPER WRISTBAND" ,productType:"gpsAccessories",productImg:"https://voip.world/media/image/product/3584/lg/teltonika-tmt250-quarantine-monitoring-solution-tragbares-armband-mit-gps-ortung-zur-quarantaene-taeterueberwachung-mit-manipulationserkennung-alarmtaste-und-bewegungssperre.jpg",
    protofilo:"نگهدارنده TMT250",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
]

/* -------------------------------- GPS assortment End-------------------------------- */
/* -------------------------------- CCTV assortment Start-------------------------------- */

const ipCamera =[
    {id:"20" ,productName:"RN-525-IP-R4-T5" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/014-1-scaled.jpg",
    protofilo:"1/3 Progressive Scan CMOS - Ai  هوش مصنوعی- بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-525-IP-S4-T5" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/014-1-scaled.jpg",
    protofilo:"دید در شب رنگی WARM -LIGHT ۳۰متر 1/3 Progressive Scan CMOS - Ai  هوش مصنوعی- بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-525-IPM-D4-T3" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/014-1-scaled.jpg",
    protofilo:"دید در شب DUAL 1/3 Progressive Scan CMOS - Ai  هوش مصنوعی- بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"}, 

    {id:"20" ,productName:"RN-525-IP-S5-T1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/014-1-scaled.jpg",
    protofilo:" خروجی اسپیکر - 1/3 Progressive Scan CMOS - Ai  هوش مصنوعی- بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},  

    {id:"20" ,productName:"RN-560-IP-R4-T5" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure5-600x600.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی- دید در شب - ۳۰ متر Infrared",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-560-IP-D4-T5" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure5-600x600.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی دید در شب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-565-IP-S4-T5" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure1-2-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی دید در شب رنگی WARM - LIGHT ۳۰متر",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-565-IPM-D4-T3" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure1-2-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی 64 گیگ حافظه داخلی خروجی اسپیکر - دید در شب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-565-IP-R5-T1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure1-2-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی - دید در شب - Infrared 4۰متر",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-565-IP-D5-T1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure1-2-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی - دید در شب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-565-IP-S5-T1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure1-2-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی -دید در شب رنگی StarLight",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-580-IP-S5-ZT1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-3-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی - دید در شب رنگی Super StarLight",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-580-IP-D5-ZT1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-3-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب میکروفن داخلی - دید در شب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-580-IP-S8-ZT1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-3-1200x1200.jpg",
    protofilo:"بدنه فلزی - محیط بیرونی - ضد آب - میکروفن داخلی - 8 مگاپیکسل 4k - دید در شب رنگی Super Star Light",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-667-IP-R4-T5" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-667-IP-R4-T5.jpg",
    protofilo:"بدنه فلزی - محیط داخلی میکروفن داخلی - 4 مگاپیکسل - دید در شب - 30 متر infrared",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-665-IP-S4-T5" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-665-IP-S4-T5.jpg",
    protofilo:"بدنه فلزی - محیط داخلی میکروفن داخلی - 4 مگاپیکسل - دید در شب warm light - 30 متر ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-680-IPM-D4-T3" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/60A1161-scaled.jpg",
    protofilo:"بدنه فلزی - محیط داخلی میکروفن داخلی 64 گیگ حافظه داخلی - خروجی اسپیکر - 5 مگاپیکسل - ب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-670-IP-S5-T1" ,productType:"ipCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-1-600x600.jpg",
    protofilo:"بدنه فلزی - محیط داخلی میکروفن داخلی - اسپیکر خروجی - دید در شب DUAL",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-6620-IP-PTZ" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-6620-IP-PTZ.jpg",
    protofilo:"بدنه فلزی و پالستیک - محیط بیرونی - ضد آب میکروفن داخلی - دید در شب - DUAL LAZER LED",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-6533-IP-PTZ" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-6533-IP-PTZ.jpg",
    protofilo:"بدنه فلزی و پالستیک - محیط بیرونی - ضد آب میکروفن داخلی اسپیکر داخلی - 5 مگاپیکسل - دید در شب - DUAL LAZER LED",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-6633-IP-PTZ" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-6620-IP-PTZ.png",
    protofilo:"بدنه فلزی و پالستیک - محیط بیرونی - ضد آب میکروفن داخلی اسپیکر داخلی - 5 مگاپیکسل - دید در شب - DUAL LAZER LED",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-6922-IP-PTZ" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-6922-IP-PTZ.jpg",
    protofilo:"بدنه فلزی و پالستیک - محیط بیرونی - ضد آب میکروفن داخلی اسپیکر داخلی - 5 مگاپیکسل - دید در شب - DUAL LAZER LED ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-6933-IP-PTZ" ,productType:"ipCamera",productImg:"./Images/cctvIpCamera/RN-6922-IP-PTZ.jpg",
    protofilo:"بدنه فلزی و پالستیک - محیط بیرونی - ضد آب میکروفن داخلی اسپیکر داخلی - 5 مگاپیکسل - دید در شب - DUAL LAZER LED - با زوم بیشتر",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},
    
]
const ipRecorder =[
    {id:"20" ,productName:"RN-9216R" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN-9216R.png",
    protofilo:" P6 light P2P - دستگاه ضبط تصاویرتحت شبکه - 16 کانال - 1 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9232R" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN-9216R.png",
    protofilo:" P6 light P2P - دستگاه ضبط تصاویرتحت شبکه - 32 کانال - 2 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9110T5" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN-9216R.png",
    protofilo:"IE SeeTong P2P - دستگاه ضبط تصاویرتحت شبکه - 10 کانال - 1 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9116T5" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN-9216R.png",
    protofilo:"IE SeeTong P2P - دستگاه ضبط تصاویرتحت شبکه - 16 کانال - 1 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9132T5" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN-9216R.png",
    protofilo:"IE SeeTong P2P - دستگاه ضبط تصاویرتحت شبکه - 32 کانال - 2 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9136T5" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN - 9164T5.png",
    protofilo:"IE SeeTong P2P - دستگاه ضبط تصاویرتحت شبکه - 36 کانال - 8 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"RN-9164T5" ,productType:"ipRecorder",productImg:"./Images/cctvIpRecorder/RN - 9164T5.png",
    protofilo:"IE SeeTong P2P - دستگاه ضبط تصاویرتحت شبکه - 64 کانال - 8 هارد حد اکثر ظرفیت 8TB",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},


]
const ipCctvSwitches =[
    {id:"20" ,productName:"2+5 switch" ,productType:"ipCctvSwitches",productImg:"./Images/ipCctvSwitches/25switch.jpg",
    protofilo:"سوییچ 4+2 - فلزی - 220 ولت ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"2+5 switch" ,productType:"ipCctvSwitches",productImg:"./Images/ipCctvSwitches/28switch.jpg",
    protofilo:"سوییچ 8+2 - فلزی - 220 ولت ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"2+5 switch" ,productType:"ipCctvSwitches",productImg:"./Images/ipCctvSwitches/28switch.jpg",
    protofilo:"سوییچ 8+2 - فلزی - 220 ولت ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"2+16 switch" ,productType:"ipCctvSwitches",productImg:"./Images/ipCctvSwitches/216switch.jpg",
    protofilo:"سوییچ 16+2 - فلزی رکموند - 220 ولت ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},

    {id:"20" ,productName:"2+24 switch" ,productType:"ipCctvSwitches",productImg:"./Images/ipCctvSwitches/216switch.jpg",
    protofilo:"سوییچ 24+2 - فلزی - 220 ولت ",
    status1:"value1",status2:"value2",status3:"value3",status4:"value4",status5:"value5",status6:"value6"},


]
const ahdCamera =[
    {id:"20" ,productName:"RN-661-HD-R2-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-661-HD-R2-H1.jpg",
    protofilo:"بدنه پلاستیکی - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب -30 متر Infrared"},
    {id:"20" ,productName:"RN-525-HD-R2-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-525-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب -30 متر Infrared"},
    {id:"20" ,productName:"RN-525-HD-S2-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-525-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب رنگی مترWARM - LIGHT 30 "},
    {id:"20" ,productName:"RN-525-HD-S5-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-525-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب - 5 مگاپیکسل - 25 فریم بر ثانیه - دید در شب رنگی مترWARM - LIGHT 30 "},
    {id:"20" ,productName:"RN-560-HD-R2-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-560-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب -40 متر Infrared"},
    {id:"20" ,productName:"RN-560-HD-S2-H1" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-560-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - Infrared متر 40"},
    {id:"20" ,productName:"RN-560-TVI-S2-N3" ,productType:"ahdCamera",productImg:"./Images/ahdCamera/RN-560-HD-R2-H1.jpg",
    protofilo:"بدنه فلزی ضد آب  میکروفن داخلی(انتقال صدا با کواکسیال) - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - Infrared متر 40"},
    {id:"20" ,productName:"RN-565-HD-R5-H1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/10/Figure1-600x600.jpg",
    protofilo:"بدنه فلزی ضد آب - 5 مگاپیکسل - 25 فریم بر ثانیه - دید در شب رنگی متر WARM - LIGHT 40 "},
    {id:"20" ,productName:"RN-565-HD-R5-H1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/10/Figure1-600x600.jpg",
    protofilo:"بدنه فلزی ضد آب  میکروفن داخلی(انتقال صدا با کواکسیال) - 5 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - Infrared متر 40"},
    {id:"20" ,productName:"RN-565-HD-R5-H1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/10/Figure1-600x600.jpg",
    protofilo:"بدنه فلزی ضد آب - 5 مگاپیکسل - 25 فریم بر ثانیه - دید در شب رنگی متر WARM - LIGHT 40 "},
    {id:"20" ,productName:"RN-580-HD-S5-VH1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-3-1200x1200.jpg",
    protofilo:"فلزی بدنه - محیط بیرونی - ضد آب - 5 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - دید در شب رنگی WARM LIGHT - متر۴۰ "},
    {id:"20" ,productName:"RN-665-HD-R2-H1" ,productType:"ahdCamera",productImg:"./Images/cctvIpCamera/RN-665-IP-S4-T5.jpg",
    protofilo:"فلزی بدنه ضد ضربه محیط داخلی - ضد آب - 2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - دید در شب - 30 متر Infrared "},
    {id:"20" ,productName:"RN-667-HD-S2-H1" ,productType:"ahdCamera",productImg:"./Images/cctvIpCamera/RN-667-IP-R4-T5.jpg",
    protofilo:"فلزی بدنه - محیط بیرونی - ضد آب -2 مگاپیکسل - 25 فریم بر ثانیه - دید در شب - دید در شب رنگی WARM LIGHT - متر30 "},
    {id:"20" ,productName:"RN-670-TVI-S2-N3" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-1-600x600.jpg",
    protofilo:"بدنه فلزی ضد ضربه محیط داخلی میکروفن داخلی - 2 مگاپیکسل - دید در شب رنگی WARM - LIGHT 30 متر"},
    {id:"20" ,productName:"RN-670-HD-R5-H1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/Figure2-1-600x600.jpg",
    protofilo:"بدنه فلزی ضد ضربه محیط داخلی  - 5 مگاپیکسل - infrared 30متر"},
    {id:"20" ,productName:"RN-680-TVI-S5-N2" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/60A1161-scaled.jpg",
    protofilo:"بدنه فلزی ضد ضربه محیط داخلی - میکروفن داخلی - 5  مگاپیکسل - دید در شب - دید در شب رنگی WARM - LIGHT 30 متر"},
    {id:"20" ,productName:"RN-680-HD-S5-H1" ,productType:"ahdCamera",productImg:"https://revisioncctv.com/wp-content/uploads/2022/09/60A1161-scaled.jpg",
    protofilo:"بدنه فلزی ضد ضربه محیط داخلی  - 5  مگاپیکسل - دید در شب - دید در شب رنگی WARM - LIGHT 30 متر"},
]
const ahdRecorder =[
    {id:"20" ,productName:"RN -8104-N5-HI" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید - 4 کاناله HVR - تعداد هارد 1 - حداکثر ظرفیت 8TB - نرم افزار xm"},
    {id:"20" ,productName:"RN -8104-H5-NA" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید TVI  - 4 کاناله HVR - تعداد هارد 1 - حداکثر ظرفیت 8TB - نرم افزار P6S"},
    {id:"20" ,productName:"RN-8108-N5-NT" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید - 8 کاناله HVR - تعداد هارد 1 - حداکثر ظرفیت 8TB - نرم افزار xm"},
    {id:"20" ,productName:"RN -8108-H5-NA" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید TVI - 8 کاناله HVR - تعداد هارد 1 - حداکثر ظرفیت 8TB - نرم افزار P6S"},
    {id:"20" ,productName:"RN -8116-N5-NT" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید - 16 کاناله HVR - تعداد هارد 2 - حداکثر ظرفیت 8TB - نرم افزار xm"},
    {id:"20" ,productName:"RN -8132-N5-NT" ,productType:"ahdRecorder",productImg:"./Images/ahdRecorder/RN -8104-N5-HI.png",
    protofilo:"دستگاه ضبط تصاویر هیبرید - 32 کاناله HVR - تعداد هارد 2 - حداکثر ظرفیت 8TB - نرم افزار xm"},
]
/* -------------------------------- CCTV assortment End-------------------------------- */

const gpsAssortment = [...carGps,...mobolityGps,...gpsAccessories]
const IPCCTV = [...ipCamera,...ipRecorder,...ipCctvSwitches]
const AHDCCTV = [...ahdCamera,...ahdRecorder]
const CCTV = [...IPCCTV,...AHDCCTV]
const allProducts = [...gpsAssortment,...CCTV]

export  {allProducts,gpsAssortment,CCTV,IPCCTV,AHDCCTV,ahdCamera,ahdRecorder,ipCamera,ipRecorder,ipCctvSwitches,carGps,mobolityGps,gpsAccessories};