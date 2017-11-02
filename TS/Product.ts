import { Category } from "./Category";
import { Model } from "./Model";

export class Product extends Model {

    private name:string;
    private description:string;
    private category: Category;
    protected $dom: JQuery;

    constructor( id: number, name:string, description:string ){
        super(id);
        this.name = name;
        this.description = description;
       
    }
    setDescription( description: string ){
        this.description = description;
    }

    getCategory(): Category {
        return this.category;
    }



    display( $parent: JQuery ): void {
        console.log(this.name)
        let div: string = "<h3 id='croix'>X</h3> <div class='product' >" +this.name+" </div>";
        this.$dom = $( div );
        $parent.html( div );

    }

}