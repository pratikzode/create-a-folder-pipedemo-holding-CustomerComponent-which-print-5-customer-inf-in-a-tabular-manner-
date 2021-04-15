import{Directive, ElementRef} from "@angular/core"

@Directive({
    selector:'[caps]'
})
export class CapsDirective{
    constructor(e:ElementRef){
        e.nativeElement.style.textTransform="uppercase";
    }
}



































