//% weight=100 color=#333333 icon="\uf100"
namespace moreBasic{
//% block
//% blockId= when @h
export function when(x: () => void, h: boolean) {








basic.forever(function () {
    

    if (h){
        x
    }
})








}
//% block
export function xor(a: boolean, b: boolean): boolean {

return (a || b) && (!(a && b))


}




















}
