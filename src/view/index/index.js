import  swiper from 'swiper';
import './index.css'

const horizontalCalendar = {
    dataListArr : [],
    init(){
        this.insertDom();
    },
    createList(){
        let i = 1;
        let len = this.dayMonth(this.getYear(),this.getMonth());
        for(i = 1;i <= len; i ++){
            let datatime = this.getYear() + '-' + this.getMonth() + '-' + i;
            let today = i == this.getDay() ? true : false;
            this.dataListArr.push({
                week : this.dayTransform(datatime),
                day : i,
                today : today
            })
        }
        return this.dataListArr;
    },
    dayTransform(dataString){
        return ['日','一','二','三','四','五','六'][new Date(dataString).getDay()];
    },
    dayMonth(year,month){
        return new Date(year, month, 0).getDate()
    },
    getYear(){
        return new Date().getFullYear();
    },
    getMonth(){
        return new Date().getMonth() + 1;
    },
    getDay(){
        return new Date().getDate();
    },
    insertDom(){
        let calendarDom = document.querySelector("#calendarDom").querySelector(".swiper-wrapper");
        let slideStr = '';
        this.createList().forEach((item) => {
            slideStr += '<div class="swiper-slide">';
            slideStr += '<div class="week">'+ item.week +'</div>';
            if(item.today){
                slideStr += '<span class="day active">'+ item.day +'</span>';
            }else{
                slideStr += '<span class="day">'+ item.day +'</span>';
            }
            slideStr += '</div>';
        })
        calendarDom.innerHTML = slideStr;
        this.initSwiper();
    },
    initSwiper(){
        new swiper('#calendarDom',{
            freeMode : true,
            slidesPerView : 7,
            initialSlide : horizontalCalendar.getDay() - 3,
        })
    }
}

horizontalCalendar.init();





