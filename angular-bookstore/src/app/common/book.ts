export class Book {
    //same as spring boot entity 
   //now we will create hard typed copy of data as we are not working with database now go to app.component.ts
    sku:string;
    name:string;
    description:string;
    unitPrice:number;
    imageUrl: string;
    active:boolean;
    unitsInStock:number;
    createdOn:Date;
    updatedOn:Date;

}
