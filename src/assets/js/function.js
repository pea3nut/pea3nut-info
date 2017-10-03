export function getPeA3nutAge(){
    let now=new Date();
    var nowYear=now.getFullYear();
    var nowMonth=now.getMonth()+1;
    var nowDay=now.getDay();
    if(nowMonth>=5 && nowDay>=18){
        return nowYear-1995+1;
    }else{
        return nowYear-1995;
    }
};

export function countClassData(name,mobileMode){
    return {
        [name] :true,
        [name+'__desktop'] :!mobileMode,
        [name+'__mobile']  : mobileMode,
    };
}

export function useClassData(classData,elt){
    for(let [className,used] of Object.entries(classData)){
        if(used){
            elt.classList.add(className);
        }else{
            elt.classList.remove(className);
        }
    };
}