export class Book {
        forEach(arg0: (libro: any, index: any) => void) {
          throw new Error('Method not implemented.');
        }
    
        constructor  ( 
          public title: string, public type: string, 
          public author: string, public price: number,
          public photo: string, public id_book: number =0, public id_user: number =0)
          
        {

        }
}
