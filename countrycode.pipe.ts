import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'code'})
export class CountryCode  implements PipeTransform{
    transform(value:string):string{
        if(value=="India")
        {
            return "ind";
        }
        else if(value=="United Kingdom")
        {
            return "uk"
        }
        else if(value=="United States of America")
        {
            return "us"
        }
        else
        {
            return "aus"
        }
    }


}





















