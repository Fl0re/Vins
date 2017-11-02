import { Model } from "./Model";

export class Category extends Model {

    private name: string;

    constructor(id:number, name:string){
        super( id );
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    display($parent: JQuery): void {
        
        let div: string = "<div class='container container-cat' id='" + this.name + "' data-category=" + this.id + " >" +this.name+" </div>";
        this.$dom = $( div );
        $parent.append( this.$dom );

    }

}