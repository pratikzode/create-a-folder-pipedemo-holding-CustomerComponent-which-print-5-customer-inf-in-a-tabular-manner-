import{Component} from "@angular/core";
import { Customer } from "./customer";

@Component({

    selector:'cust-comp',
    templateUrl:'./customer.component.html',
    styleUrls:['./customer.component.css']

})

export class CustomerComponent{

    cust:Customer[]=[   
        new Customer(101, "rakesh", "roshan", new Date("1959-02-11"), 45000, "India"),
        new Customer(102, "kajal", "devgan", new Date("1978-10-04"), 57000, "United Kingdom"),
        new Customer(103, "pratik", "babbar", new Date("1986-11-28"), 49000, "United States of America"),
        new Customer(104, "sarika", "thakur", new Date("1960-06-03"), 73000, "Austalia")
    ]

}





























