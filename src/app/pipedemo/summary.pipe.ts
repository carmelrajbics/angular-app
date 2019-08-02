import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'summary'
})

export class Summary implements PipeTransform{

    transform(value:string,lowerlimt:number, upperlimit:number=5){
        var myupperLimit=myupperLimit;
return value.substring(lowerlimt,upperlimit)+"... read more";
    }
}