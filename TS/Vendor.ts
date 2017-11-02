import { Product } from "./Product";
import { Model } from "./Model";
import { Category } from "./Category";

export class Vendor extends Model {
    private password: string;

    protected $dom: JQuery;
    private name: string;
    private categories: Category[] = [];
    private products: Product[] = [];

    constructor( id:number, name:string, password:string ){
        super( id );
        this.name = name;
       
        this.password = "";
    }
    
    removeProductById( id:number ){

        for( let key in this.products ){

            let product: Product = this.products[key];
            if( product.getId() == id ){
                let nkey:number = parseInt( key );
                this.products.slice( nkey, 1 );
                return;
            }

        }

    }

    getProducts(): Product[] {
        return this.products;
    }

    addProduct( product: Product ): void{
        this.products.push( product );
    }

    addCategory( category: Category ): void{
        this.categories.push( category );
    }

    removeProduct( product: Product ): void{

        for( let key in this.products ){

            let vproduct: Product = this.products[key];

            if( vproduct.getId() == product.getId() ){
                this.products.splice( parseInt(key), 1 );
            }
            return;
        }

    }

    display($parent: JQuery): void {
        
        let div: string = "<div class='vendor' id='vendor" + this.id + "' data-vendor='" + this.id + "' >";
        div += "<a href='detail'>";    
        div += this.name + "</a></div>";
            
        this.$dom = $( div );
        $parent.append( this.$dom );

    }


}