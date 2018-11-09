/**
 * @directive
 * */
import MoveTo from 'moveto';

let setBySelf = false;
function onHashchange(){
    if(setBySelf){
        setBySelf = false;
        return;
    }

    const hash = decodeURIComponent(location.hash.substr(1));
    if(!hash) return;
    if(
        document.getElementById(hash)
        || document.getElementsByName(hash).length
    )return; // the browser can consume that

    const targetElt = Array.from(
        document.querySelectorAll(`[data-pea-focus]`)
    ).find(elt => elt.dataset.peaFocus === hash);
    if(!targetElt) return;

    targetElt.dispatchEvent(new Event('focus'));
    (new MoveTo()).move(targetElt);

}
function onEltClick(event) {
    setHashWithoutScroll(event.currentTarget.dataset.peaFocus);
}

export function enable(){
    onHashchange();
    window.addEventListener('hashchange', onHashchange);
}
export const peaFocus = {
    bind(elt,{value}){
        elt.dataset.peaFocus = value;

        elt.style.cursor = 'pointer';
        elt.addEventListener('click', onEltClick);
    },
    update(elt,{value}){
        elt.dataset.peaFocus = value;
    },
    unbind(elt){
        elt.style.cursor = null;
        elt.removeEventListener('click', onEltClick);
    },
};
export function setHashWithoutScroll(hash) {
    setBySelf = true;
    location.hash = hash;
}
