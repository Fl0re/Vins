System.register("APIService", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APIService;
    return {
        setters: [],
        execute: function () {
            APIService = class APIService {
                constructor() {
                    this.url = "http://192.168.110.52/courses_typescript/vendor_products/API/";
                }
                static getService() {
                    if (!APIService.instance)
                        APIService.instance = new APIService();
                    return APIService.instance;
                }
                getWines() {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "wines",
                            dataType: "json",
                            success: (wines) => {
                                resolve(wines);
                            },
                            error: (error) => {
                                reject(error);
                            }
                        });
                    });
                }
            };
            APIService.instance = null;
            exports_1("APIService", APIService);
        }
    };
});
System.register("Model", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Model;
    return {
        setters: [],
        execute: function () {
            Model = class Model {
                constructor(id) {
                    this.id = id;
                }
                getId() {
                    return this.id;
                }
                get$Dom() {
                    return this.$dom;
                }
            };
            exports_2("Model", Model);
        }
    };
});
System.register("Category", ["Model"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Model_1, Category;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }
        ],
        execute: function () {
            Category = class Category extends Model_1.Model {
                constructor(id, name) {
                    super(id);
                    this.name = name;
                }
                getName() {
                    return this.name;
                }
                display($parent) {
                    let div = "<div class='container container-cat' id='" + this.name + "' data-category=" + this.id + " >" + this.name + " </div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_3("Category", Category);
        }
    };
});
System.register("Product", ["Model"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Model_2, Product;
    return {
        setters: [
            function (Model_2_1) {
                Model_2 = Model_2_1;
            }
        ],
        execute: function () {
            Product = class Product extends Model_2.Model {
                constructor(id, name, description) {
                    super(id);
                    this.name = name;
                    this.description = description;
                }
                setDescription(description) {
                    this.description = description;
                }
                getCategory() {
                    return this.category;
                }
                display($parent) {
                    console.log(this.name);
                    let div = "<h3 id='croix'>X</h3> <div class='product' >" + this.name + " </div>";
                    this.$dom = $(div);
                    $parent.html(div);
                }
            };
            exports_4("Product", Product);
        }
    };
});
System.register("Vendor", ["Model"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Model_3, Vendor;
    return {
        setters: [
            function (Model_3_1) {
                Model_3 = Model_3_1;
            }
        ],
        execute: function () {
            Vendor = class Vendor extends Model_3.Model {
                constructor(id, name, password) {
                    super(id);
                    this.categories = [];
                    this.products = [];
                    this.name = name;
                    this.password = "";
                }
                removeProductById(id) {
                    for (let key in this.products) {
                        let product = this.products[key];
                        if (product.getId() == id) {
                            let nkey = parseInt(key);
                            this.products.slice(nkey, 1);
                            return;
                        }
                    }
                }
                getProducts() {
                    return this.products;
                }
                addProduct(product) {
                    this.products.push(product);
                }
                addCategory(category) {
                    this.categories.push(category);
                }
                removeProduct(product) {
                    for (let key in this.products) {
                        let vproduct = this.products[key];
                        if (vproduct.getId() == product.getId()) {
                            this.products.splice(parseInt(key), 1);
                        }
                        return;
                    }
                }
                display($parent) {
                    let div = "<div class='vendor' id='vendor" + this.id + "' data-vendor='" + this.id + "' >";
                    div += "<a href='detail'>";
                    div += this.name + "</a></div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_5("Vendor", Vendor);
        }
    };
});
System.register("App", ["Product", "Category", "Vendor"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Product_1, Category_1, Vendor_1, App;
    return {
        setters: [
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (Category_1_1) {
                Category_1 = Category_1_1;
            },
            function (Vendor_1_1) {
                Vendor_1 = Vendor_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.$item = $(".item");
                    this.$item.prop("draggable", true);
                    this.$container = $(".container");
                    this.$category_container = $("#shop-list");
                    this.$sented_container = $("#sended-products");
                    this.$sented_container = $("#sended-products");
                    this.$name = $("#name");
                    this.$password = $("#password");
                    this.$conn = $("#conn");
                    this.$connexion = $("#connexion");
                    this.$categorie = $("#categorie");
                    this.$product = $("#product");
                    this.$secat = $("#secat");
                    this.$secprod = $("#secprod");
                    this.$vin = $("#vin");
                }
                // this.getAllCategories();
                // this.getAllProducts();
                // // this.getAllVendors();
                // this.displayCategories();
                // this.displayVendors();
                // if( this.vendors.length > 0 ){
                //     this.currentVendor = this.vendors[0];
                //     this.displayProductsByVendor( this.currentVendor );
                // }
                // }
                // getCurrentVendor():Vendor {
                //     return this.currentVendor;
                // }
                // setCurrentVendor( vendor:Vendor ){
                //     this.currentVendor = vendor;
                // }
                // getAllProducts(): void {
                //     var api:APIService = APIService.getService();
                //     let products:Promise<any> = api.getWines();
                //     products
                //         .then(( products ) => {
                //             for ( let product of products ){
                //                 let the_product: Product = new Product(
                //                     product.id,
                //                     product.name,
                //                     this.getCategoryById( product.categoryId )
                //                 );
                //                 this.all_products.push( the_product );
                //             }
                //         })
                //         .catch((error) => {
                //             console.log(error);
                //         })
                // }
                // getAllCategories(): void {
                //     let categories: { 
                //         id:number, 
                //         name:string
                //     }[] = BDD.categories;
                //     for( let category of categories ){
                //         let the_category: Category = new Category(
                //             category.id,
                //             category.name
                //         );
                //         this.categories.push( the_category );
                //     }
                // }
                // getCategoryById( id:number ): Category {
                //     for( let category of this.categories ){
                //         if( id == category.getId() ){
                //             return category;
                //         }
                //     }
                //     return null;
                // }
                // getAllVendors(): void {
                //     //On recupere les vendors de la bdd ! ( fausse base de donnée BDD)
                //     let vendors: {
                //         id: number,
                //         name: string,
                //         products: number[],
                //     }[] = BDD.vendors;
                //     //On boucle sur cette liste de vendeurs
                //     for( let vendor of vendors ){
                //         //On va avoir besoin d'un tableau de produit
                //         let vendors_products:Product[] = [];
                //         //Je boucle sur le tableau d'id de vendor.products
                //         for( let product_id of vendor.products ){
                //             //Je cherche le produit correspondant, grace a son id, dans ma liste de produit
                //             let the_product:Product = this.getProductById( product_id );
                //             //Je pousse mon tableau d'objet
                //             vendors_products.push( the_product );
                //         }
                //         //Ici, on créer le vendeur avec sa classe et le tableau de produit créé !
                //         let the_vendor:Vendor = new Vendor(
                //             vendor.id,
                //             vendor.name,
                //             vendors_products,
                //             vendor.password
                //         )
                //         //j'ajoute mon vendeur a ma liste de vendeur de mon app
                //         this.vendors.push( the_vendor );
                //     }
                // }
                // getProductById( id: number ): Product {
                //     for( let product of this.all_products ){
                //         if( id == product.getId() ){
                //             return product;
                //         }
                //     }
                //     return null;
                // }
                // displayCategories(): void {
                //     for( let category of this.categories ){
                //         category.display( this.$categorie );
                //     }
                // }
                // displayVendors(): void {
                //     for( let vendor of this.vendors ){
                //         vendor.display( this.$all_vendors );
                //     }
                // }
                // clearBoard(): void {
                //     this.$sented_container.html("");
                //     for( let category of this.categories ){
                //         category.get$Dom().html("");
                //     }
                // }
                // displayProductsByVendor( vendor:Vendor ):void {
                //     this.clearBoard();
                //     //On cherche quels sont les produits vendu et non-vendu
                //     for( let product of this.all_products ){
                //         let flag:boolean = false;//true = vendu, false = non-vendu
                //         for( let vproduct of vendor.getProducts() ){
                //             if( vproduct.getId() == product.getId() ){
                //                 //On a trouvé l'élément !
                //                 flag = true;
                //             }
                //         }
                //         if( flag == true ){
                //             //affichage colonne droite
                //             product.display( this.$sented_container );
                //         }
                //         else {
                //             //affichage colonne gauche
                //             let category: Category = product.getCategory();
                //             product.display( category.get$Dom() );
                //         }
                //     }
                // }
                // getVendorById( id_vendor:number ):Vendor {
                //     for( let vendor of this.vendors ){
                //         if( vendor.getId() == id_vendor ){
                //             return vendor;
                //         }
                //     }
                //     return null;
                // }
                //Depuis 2016
                //function( test ) { return truc; }
                //
                //( test ) => { return truc; }
                //
                readVendor() {
                    var name = this.$name.val();
                    var password = this.$password.val();
                    $.ajax({
                        url: "http://localhost:8888/mobile/vin/API/vendor",
                        method: "POST",
                        data: {
                            name: name,
                            password: password
                        },
                        dataType: "json",
                        success: (data) => {
                            if (data.success == true) {
                                console.log(data.vendor);
                                this.$connexion.hide();
                                this.$categorie.show();
                                this.$secat.show();
                                //Creer le vendeur avec les données recupéré
                                let vendor = new Vendor_1.Vendor(data.vendor.id, data.vendor.name, data.vendor.password);
                                this.currentVendor = vendor;
                                this.readCategories();
                            }
                        },
                        error: function (error) {
                            console.log(error);
                            alert("error");
                        }
                    });
                }
                readCategories() {
                    var name = this.$name.val();
                    console.log(this.currentVendor);
                    $.ajax({
                        url: "http://localhost:8888/mobile/vin/API/vendor/" + this.currentVendor.getId() + "/categories",
                        method: "GET",
                        dataType: "json",
                        success: (data) => {
                            if (data.success == true) {
                                for (let cat of data.category) {
                                    let category = new Category_1.Category(cat.id, cat.name);
                                    this.currentVendor.addCategory(category);
                                    category.display(this.$categorie);
                                    category.display;
                                }
                            }
                        },
                        error: function (error) {
                            console.log(error);
                            alert("error");
                        }
                    });
                }
                readProduct(idcat) {
                    var name = this.$name.val();
                    console.log(idcat);
                    $.ajax({
                        url: "http://localhost:8888/mobile/vin/API/vendor/" + this.currentVendor.getId() + "/category/" + idcat + "/products",
                        method: "GET",
                        dataType: "json",
                        success: (data) => {
                            console.log(data);
                            if (data.success == true) {
                                for (let prod of data.products) {
                                    let product = new Product_1.Product(prod.id, prod.name, prod.description);
                                    this.currentProduct = product;
                                    product.display(this.$vin);
                                    console.log(this.$vin);
                                    this.$categorie.hide();
                                }
                            }
                        },
                        error: function (error) {
                            console.log(error);
                            alert("error");
                        }
                    });
                }
                readDescription(idcat) {
                    var name = this.$name.val();
                    console.log(idcat);
                    $.ajax({
                        url: "http://localhost:8888/mobile/vin/API/description/product/" + this.currentVendor.getId(),
                        method: "GET",
                        dataType: "json",
                        success: (data) => {
                            console.log(data);
                            this.currentProduct.setDescription(data.products.description);
                        },
                        error: function (error) {
                            console.log(error);
                            alert("error");
                        }
                    });
                }
            };
            exports_6("App", App);
        }
    };
});
System.register("main", ["App"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var App_1, app, div;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            app = new App_1.App();
            div = $("#form");
            div.animate({ left: '50%' }, "slow");
            div.animate({ fontSize: '2em' }, "slow");
            app.$conn.submit(function (event) {
                event.preventDefault();
                app.readVendor();
                app.$categorie.animate({ height: '360px', opacity: '0.4' }, "slow");
                app.$categorie.animate({ width: '360px', opacity: '0.8' }, "slow");
            });
            $(document).on("click", ".container-cat", function () {
                let idcat = parseInt($(this).data("category"));
                app.readProduct(idcat);
                app.$product.show();
                app.$secprod.show();
                app.$secat.hide();
                var div = $("#product");
                div.animate({ left: '50%' }, "slow");
                div.animate({ fontSize: '2em' }, "slow");
            });
            $(document).on("click", "#croix", function () {
                app.$categorie.show();
                app.$secat.show();
                app.$product.hide();
                app.$secprod.hide();
                app.$categorie.animate({ height: '360px', opacity: '0.4' }, "slow");
                app.$categorie.animate({ width: '360px', opacity: '0.8' }, "slow");
            });
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0FQSVNlcnZpY2UudHMiLCJUUy9Nb2RlbC50cyIsIlRTL0NhdGVnb3J5LnRzIiwiVFMvUHJvZHVjdC50cyIsIlRTL1ZlbmRvci50cyIsIlRTL0FwcC50cyIsIlRTL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLGFBQUE7Z0JBYUk7b0JBVlEsUUFBRyxHQUFVLCtEQUErRCxDQUFDO2dCQVUvRCxDQUFDO2dCQVJ2QixNQUFNLENBQUMsVUFBVTtvQkFFYixFQUFFLENBQUEsQ0FBRSxDQUFDLFVBQVUsQ0FBQyxRQUFTLENBQUM7d0JBQ3RCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFFM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLENBQUM7Z0JBSUQsUUFBUTtvQkFFSixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7d0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ0gsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTzs0QkFDdkIsUUFBUSxFQUFDLE1BQU07NEJBQ2YsT0FBTyxFQUFFLENBQUUsS0FBUyxFQUFHLEVBQUU7Z0NBQ3JCLE9BQU8sQ0FBRSxLQUFLLENBQUUsQ0FBQzs0QkFDckIsQ0FBQzs0QkFDRCxLQUFLLEVBQUUsQ0FBRSxLQUFLLEVBQUcsRUFBRTtnQ0FDZixNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7NEJBQ3BCLENBQUM7eUJBQ0osQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFBO2dCQUVOLENBQUM7YUFFSixDQUFBO1lBOUJrQixtQkFBUSxHQUFlLElBQUksQ0FBQzs7UUE4QjlDLENBQUM7Ozs7Ozs7Ozs7WUNoQ0YsUUFBQTtnQkFLSSxZQUFhLEVBQVM7b0JBQ2xCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQUVELEtBQUs7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsQ0FBQzthQUtKLENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7WUNsQkYsV0FBQSxjQUFzQixTQUFRLGFBQUs7Z0JBSS9CLFlBQVksRUFBUyxFQUFFLElBQVc7b0JBQzlCLEtBQUssQ0FBRSxFQUFFLENBQUUsQ0FBQztvQkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxPQUFPO29CQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELE9BQU8sQ0FBQyxPQUFlO29CQUVuQixJQUFJLEdBQUcsR0FBVywyQ0FBMkMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsU0FBUyxDQUFDO29CQUNySSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7Z0JBRWhDLENBQUM7YUFFSixDQUFBOztRQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDcEJGLFVBQUEsYUFBcUIsU0FBUSxhQUFLO2dCQU85QixZQUFhLEVBQVUsRUFBRSxJQUFXLEVBQUUsV0FBa0I7b0JBQ3BELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBRW5DLENBQUM7Z0JBQ0QsY0FBYyxDQUFFLFdBQW1CO29CQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUlELE9BQU8sQ0FBRSxPQUFlO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDdEIsSUFBSSxHQUFHLEdBQVcsOENBQThDLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBQyxTQUFTLENBQUM7b0JBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO2dCQUV4QixDQUFDO2FBRUosQ0FBQTs7UUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7OztZQzlCRixTQUFBLFlBQW9CLFNBQVEsYUFBSztnQkFRN0IsWUFBYSxFQUFTLEVBQUUsSUFBVyxFQUFFLFFBQWU7b0JBQ2hELEtBQUssQ0FBRSxFQUFFLENBQUUsQ0FBQztvQkFKUixlQUFVLEdBQWUsRUFBRSxDQUFDO29CQUM1QixhQUFRLEdBQWMsRUFBRSxDQUFDO29CQUk3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsaUJBQWlCLENBQUUsRUFBUztvQkFFeEIsR0FBRyxDQUFBLENBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVMsQ0FBQyxDQUFBLENBQUM7d0JBRTVCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFDLEVBQUUsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFHLENBQUMsQ0FBQSxDQUFDOzRCQUN4QixJQUFJLElBQUksR0FBVSxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFFLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQzs0QkFDL0IsTUFBTSxDQUFDO3dCQUNYLENBQUM7b0JBRUwsQ0FBQztnQkFFTCxDQUFDO2dCQUVELFdBQVc7b0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsVUFBVSxDQUFFLE9BQWdCO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCxXQUFXLENBQUUsUUFBa0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELGFBQWEsQ0FBRSxPQUFnQjtvQkFFM0IsR0FBRyxDQUFBLENBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVMsQ0FBQyxDQUFBLENBQUM7d0JBRTVCLElBQUksUUFBUSxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRTNDLEVBQUUsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFHLENBQUMsQ0FBQSxDQUFDOzRCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7d0JBQzdDLENBQUM7d0JBQ0QsTUFBTSxDQUFDO29CQUNYLENBQUM7Z0JBRUwsQ0FBQztnQkFFRCxPQUFPLENBQUMsT0FBZTtvQkFFbkIsSUFBSSxHQUFHLEdBQVcsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztvQkFDbkcsR0FBRyxJQUFJLG1CQUFtQixDQUFDO29CQUMzQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7b0JBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDO29CQUNyQixPQUFPLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFFaEMsQ0FBQzthQUdKLENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNqRUYsTUFBQTtnQkFxQkk7b0JBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDO2dCQUVHLDJCQUEyQjtnQkFDM0IseUJBQXlCO2dCQUN6QiwyQkFBMkI7Z0JBRTNCLDRCQUE0QjtnQkFDNUIseUJBQXlCO2dCQUV6QixpQ0FBaUM7Z0JBQ2pDLDRDQUE0QztnQkFDNUMsMERBQTBEO2dCQUMxRCxJQUFJO2dCQUVSLElBQUk7Z0JBRUosOEJBQThCO2dCQUM5QixpQ0FBaUM7Z0JBQ2pDLElBQUk7Z0JBRUoscUNBQXFDO2dCQUNyQyxtQ0FBbUM7Z0JBQ25DLElBQUk7Z0JBRUosMkJBQTJCO2dCQUUzQixvREFBb0Q7Z0JBQ3BELGtEQUFrRDtnQkFFbEQsZUFBZTtnQkFDZixrQ0FBa0M7Z0JBRWxDLCtDQUErQztnQkFDL0MsMERBQTBEO2dCQUMxRCxrQ0FBa0M7Z0JBQ2xDLG9DQUFvQztnQkFDcEMsaUVBQWlFO2dCQUNqRSxxQkFBcUI7Z0JBQ3JCLHlEQUF5RDtnQkFDekQsZ0JBQWdCO2dCQUVoQixhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsa0NBQWtDO2dCQUNsQyxhQUFhO2dCQUViLElBQUk7Z0JBRUosNkJBQTZCO2dCQUU3Qix5QkFBeUI7Z0JBQ3pCLHNCQUFzQjtnQkFDdEIsc0JBQXNCO2dCQUN0Qiw0QkFBNEI7Z0JBRTVCLHlDQUF5QztnQkFFekMscURBQXFEO2dCQUNyRCwyQkFBMkI7Z0JBQzNCLDRCQUE0QjtnQkFDNUIsYUFBYTtnQkFDYixnREFBZ0Q7Z0JBQ2hELFFBQVE7Z0JBRVIsSUFBSTtnQkFFSiwyQ0FBMkM7Z0JBRTNDLDhDQUE4QztnQkFFOUMsd0NBQXdDO2dCQUN4QywrQkFBK0I7Z0JBQy9CLFlBQVk7Z0JBRVosUUFBUTtnQkFFUixtQkFBbUI7Z0JBRW5CLElBQUk7Z0JBRUosMEJBQTBCO2dCQUUxQix5RUFBeUU7Z0JBQ3pFLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLDhCQUE4QjtnQkFFOUIseUJBQXlCO2dCQUV6Qiw4Q0FBOEM7Z0JBQzlDLG9DQUFvQztnQkFFcEMsdURBQXVEO2dCQUN2RCwrQ0FBK0M7Z0JBRS9DLDZEQUE2RDtnQkFDN0Qsb0RBQW9EO2dCQUVwRCw4RkFBOEY7Z0JBQzlGLDJFQUEyRTtnQkFFM0UsOENBQThDO2dCQUM5QyxvREFBb0Q7Z0JBQ3BELFlBQVk7Z0JBRVosb0ZBQW9GO2dCQUNwRiw4Q0FBOEM7Z0JBQzlDLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQixnQ0FBZ0M7Z0JBQ2hDLDhCQUE4QjtnQkFDOUIsWUFBWTtnQkFFWixrRUFBa0U7Z0JBQ2xFLDJDQUEyQztnQkFFM0MsUUFBUTtnQkFFUixJQUFJO2dCQUVKLDBDQUEwQztnQkFFMUMsK0NBQStDO2dCQUUvQyx1Q0FBdUM7Z0JBQ3ZDLDhCQUE4QjtnQkFDOUIsWUFBWTtnQkFFWixRQUFRO2dCQUVSLG1CQUFtQjtnQkFFbkIsSUFBSTtnQkFFSiw4QkFBOEI7Z0JBRTlCLDhDQUE4QztnQkFDOUMsK0NBQStDO2dCQUMvQyxRQUFRO2dCQUVSLElBQUk7Z0JBRUosMkJBQTJCO2dCQUUzQix5Q0FBeUM7Z0JBQ3pDLCtDQUErQztnQkFDL0MsUUFBUTtnQkFFUixJQUFJO2dCQUVKLHVCQUF1QjtnQkFDdkIsdUNBQXVDO2dCQUN2Qyw4Q0FBOEM7Z0JBQzlDLHVDQUF1QztnQkFDdkMsUUFBUTtnQkFDUixJQUFJO2dCQUVKLGtEQUFrRDtnQkFFbEQseUJBQXlCO2dCQUV6Qiw4REFBOEQ7Z0JBQzlELCtDQUErQztnQkFFL0MscUVBQXFFO2dCQUVyRSx1REFBdUQ7Z0JBRXZELHlEQUF5RDtnQkFDekQsNENBQTRDO2dCQUM1QywrQkFBK0I7Z0JBQy9CLGdCQUFnQjtnQkFFaEIsWUFBWTtnQkFFWiw4QkFBOEI7Z0JBQzlCLHlDQUF5QztnQkFDekMseURBQXlEO2dCQUN6RCxZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIseUNBQXlDO2dCQUN6Qyw4REFBOEQ7Z0JBQzlELHFEQUFxRDtnQkFDckQsWUFBWTtnQkFHWixRQUFRO2dCQUVSLElBQUk7Z0JBRUosNkNBQTZDO2dCQUU3Qyx5Q0FBeUM7Z0JBRXpDLDZDQUE2QztnQkFDN0MsNkJBQTZCO2dCQUM3QixZQUFZO2dCQUVaLFFBQVE7Z0JBRVIsbUJBQW1CO2dCQUVuQixJQUFJO2dCQUVKLGFBQWE7Z0JBRWIsbUNBQW1DO2dCQUNuQyxFQUFFO2dCQUNGLDhCQUE4QjtnQkFFOUIsRUFBRTtnQkFFRixVQUFVO29CQUVOLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFCLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBRTFCLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0gsR0FBRyxFQUFFLDZDQUE2Qzt3QkFDbEQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFHOzRCQUNILElBQUksRUFBRyxJQUFJOzRCQUNYLFFBQVEsRUFBRyxRQUFRO3lCQUN0Qjt3QkFDRCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsT0FBTyxFQUFHLENBQUUsSUFBSSxFQUFHLEVBQUU7NEJBRWpCLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQztnQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBRXpCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBRW5CLDRDQUE0QztnQ0FDNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQ0FDdkYsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0NBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFFMUIsQ0FBQzt3QkFHTCxDQUFDO3dCQUNELEtBQUssRUFBRyxVQUFVLEtBQUs7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxjQUFjO29CQUVWLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUV4QixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNILEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLGFBQWE7d0JBQ2hHLE1BQU0sRUFBRSxLQUFLO3dCQUViLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixPQUFPLEVBQUcsQ0FBRSxJQUFvRSxFQUFHLEVBQUU7NEJBR2pGLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQztnQ0FFdkIsR0FBRyxDQUFBLENBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVMsQ0FBQyxDQUFBLENBQUM7b0NBRTVCLElBQUksUUFBUSxHQUFhLElBQUksbUJBQVEsQ0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQztvQ0FDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsUUFBUSxDQUFFLENBQUM7b0NBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO29DQUNwQyxRQUFRLENBQUMsT0FBTyxDQUFBO2dDQUVwQixDQUFDOzRCQUdMLENBQUM7d0JBRUwsQ0FBQzt3QkFDRCxLQUFLLEVBQUcsVUFBVSxLQUFLOzRCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25CLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEtBQVk7b0JBRVosSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFWCxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNILEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLFlBQVksR0FBQyxLQUFLLEdBQUMsV0FBVzt3QkFDakgsTUFBTSxFQUFFLEtBQUs7d0JBRWIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLE9BQU8sRUFBRyxDQUFFLElBQXdGLEVBQUcsRUFBRTs0QkFDckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFFbEIsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFLLENBQUMsQ0FBQSxDQUFDO2dDQUV2QixHQUFHLENBQUEsQ0FBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUyxDQUFDLENBQUEsQ0FBQztvQ0FFN0IsSUFBSSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7b0NBQzVFLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO29DQUU5QixPQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztvQ0FDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7b0NBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBRTNCLENBQUM7NEJBR0wsQ0FBQzt3QkFFTCxDQUFDO3dCQUNELEtBQUssRUFBRyxVQUFVLEtBQUs7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxlQUFlLENBQUMsS0FBWTtvQkFFaEIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFWCxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNILEdBQUcsRUFBRSwyREFBMkQsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTt3QkFDM0YsTUFBTSxFQUFFLEtBQUs7d0JBRWIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLE9BQU8sRUFBRyxDQUFFLElBQUksRUFBRSxFQUFFOzRCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVsQixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQVFsRSxDQUFDO3dCQUNELEtBQUssRUFBRyxVQUFVLEtBQUs7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBQ2YsQ0FBQzthQUVKLENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7WUN6WWQsR0FBRyxHQUFPLElBQUksU0FBRyxFQUFFLENBQUM7WUFDcEIsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBUyxLQUFLO2dCQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRXZCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFJYixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUVsRSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpFLENBQUMsQ0FBQyxDQUFBO1lBRUYsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ3RDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUUzQyxDQUFDLENBQUMsQ0FBQTtZQUVGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDOUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFbEUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVyRSxDQUFDLENBQUMsQ0FBQTtRQUVGLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQVBJU2VydmljZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVybDpzdHJpbmcgPSBcImh0dHA6Ly8xOTIuMTY4LjExMC41Mi9jb3Vyc2VzX3R5cGVzY3JpcHQvdmVuZG9yX3Byb2R1Y3RzL0FQSS9cIjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0U2VydmljZSgpOiBBUElTZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgaWYoICFBUElTZXJ2aWNlLmluc3RhbmNlIClcclxuICAgICAgICAgICAgQVBJU2VydmljZS5pbnN0YW5jZSA9IG5ldyBBUElTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBBUElTZXJ2aWNlLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgZ2V0V2luZXMoKTogUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgXCJ3aW5lc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6XCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoIHdpbmVzOiB7fSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCB3aW5lcyApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCggZXJyb3IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vZGVsIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCAkZG9tOiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGlkOm51bWJlciApe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCREb20oKTogSlF1ZXJ5e1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRkb207XHJcbiAgICB9XHJcblxyXG4gICAgLy8hSW1wb3J0YW50XHJcbiAgICBhYnN0cmFjdCBkaXNwbGF5KCAkcGFyZW50OiBKUXVlcnkgKTogdm9pZDtcclxuXHJcbn0iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL01vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCBuYW1lOnN0cmluZyl7XHJcbiAgICAgICAgc3VwZXIoIGlkICk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5KCRwYXJlbnQ6IEpRdWVyeSk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXY6IHN0cmluZyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyIGNvbnRhaW5lci1jYXQnIGlkPSdcIiArIHRoaXMubmFtZSArIFwiJyBkYXRhLWNhdGVnb3J5PVwiICsgdGhpcy5pZCArIFwiID5cIiArdGhpcy5uYW1lK1wiIDwvZGl2PlwiO1xyXG4gICAgICAgIHRoaXMuJGRvbSA9ICQoIGRpdiApO1xyXG4gICAgICAgICRwYXJlbnQuYXBwZW5kKCB0aGlzLiRkb20gKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL01vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIE1vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIG5hbWU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5OiBDYXRlZ29yeTtcclxuICAgIHByb3RlY3RlZCAkZG9tOiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGlkOiBudW1iZXIsIG5hbWU6c3RyaW5nLCBkZXNjcmlwdGlvbjpzdHJpbmcgKXtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHNldERlc2NyaXB0aW9uKCBkZXNjcmlwdGlvbjogc3RyaW5nICl7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3J5KCk6IENhdGVnb3J5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRpc3BsYXkoICRwYXJlbnQ6IEpRdWVyeSApOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXHJcbiAgICAgICAgbGV0IGRpdjogc3RyaW5nID0gXCI8aDMgaWQ9J2Nyb2l4Jz5YPC9oMz4gPGRpdiBjbGFzcz0ncHJvZHVjdCcgPlwiICt0aGlzLm5hbWUrXCIgPC9kaXY+XCI7XHJcbiAgICAgICAgdGhpcy4kZG9tID0gJCggZGl2ICk7XHJcbiAgICAgICAgJHBhcmVudC5odG1sKCBkaXYgKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL1Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVuZG9yIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCAkZG9tOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0czogUHJvZHVjdFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGlkOm51bWJlciwgbmFtZTpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZyApe1xyXG4gICAgICAgIHN1cGVyKCBpZCApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gXCJcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlUHJvZHVjdEJ5SWQoIGlkOm51bWJlciApe1xyXG5cclxuICAgICAgICBmb3IoIGxldCBrZXkgaW4gdGhpcy5wcm9kdWN0cyApe1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3Q6IFByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzW2tleV07XHJcbiAgICAgICAgICAgIGlmKCBwcm9kdWN0LmdldElkKCkgPT0gaWQgKXtcclxuICAgICAgICAgICAgICAgIGxldCBua2V5Om51bWJlciA9IHBhcnNlSW50KCBrZXkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc2xpY2UoIG5rZXksIDEgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RzKCk6IFByb2R1Y3RbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZHVjdCggcHJvZHVjdDogUHJvZHVjdCApOiB2b2lke1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMucHVzaCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENhdGVnb3J5KCBjYXRlZ29yeTogQ2F0ZWdvcnkgKTogdm9pZHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCggY2F0ZWdvcnkgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9kdWN0KCBwcm9kdWN0OiBQcm9kdWN0ICk6IHZvaWR7XHJcblxyXG4gICAgICAgIGZvciggbGV0IGtleSBpbiB0aGlzLnByb2R1Y3RzICl7XHJcblxyXG4gICAgICAgICAgICBsZXQgdnByb2R1Y3Q6IFByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzW2tleV07XHJcblxyXG4gICAgICAgICAgICBpZiggdnByb2R1Y3QuZ2V0SWQoKSA9PSBwcm9kdWN0LmdldElkKCkgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKCBwYXJzZUludChrZXkpLCAxICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgkcGFyZW50OiBKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGl2OiBzdHJpbmcgPSBcIjxkaXYgY2xhc3M9J3ZlbmRvcicgaWQ9J3ZlbmRvclwiICsgdGhpcy5pZCArIFwiJyBkYXRhLXZlbmRvcj0nXCIgKyB0aGlzLmlkICsgXCInID5cIjtcclxuICAgICAgICBkaXYgKz0gXCI8YSBocmVmPSdkZXRhaWwnPlwiOyAgICBcclxuICAgICAgICBkaXYgKz0gdGhpcy5uYW1lICsgXCI8L2E+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuJGRvbSA9ICQoIGRpdiApO1xyXG4gICAgICAgICRwYXJlbnQuYXBwZW5kKCB0aGlzLiRkb20gKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSIsIlxyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tIFwiLi9WZW5kb3JcIjtcclxuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gXCIuL0FQSVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgcHVibGljICR2aW46IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHVibGljICRzZWNwcm9kOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICRzZWNhdDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICAgIHB1YmxpYyAkY2F0ZWdvcmllOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICRjb25uZXhpb246IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJGNvbm46IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJHBhc3N3b3JkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICRuYW1lOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICRwcm9kdWN0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyAkaXRlbTogSlF1ZXJ5O1xyXG4gICAgcHVibGljICRjb250YWluZXI6IEpRdWVyeTtcclxuICAgIHB1YmxpYyAkY2F0ZWdvcnlfY29udGFpbmVyOiBKUXVlcnk7XHJcbiAgICBwdWJsaWMgJHNlbnRlZF9jb250YWluZXI6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICAgIHByaXZhdGUgY3VycmVudFZlbmRvcjogVmVuZG9yO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdDogUHJvZHVjdFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIHRoaXMuJGl0ZW0gPSAkKFwiLml0ZW1cIik7XHJcbiAgICAgICAgdGhpcy4kaXRlbS5wcm9wKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhdGVnb3J5X2NvbnRhaW5lciA9ICQoXCIjc2hvcC1saXN0XCIpO1xyXG4gICAgICAgIHRoaXMuJHNlbnRlZF9jb250YWluZXIgPSAkKFwiI3NlbmRlZC1wcm9kdWN0c1wiKTtcclxuICAgICAgICB0aGlzLiRzZW50ZWRfY29udGFpbmVyID0gJChcIiNzZW5kZWQtcHJvZHVjdHNcIik7XHJcbiAgICAgICAgdGhpcy4kbmFtZSA9ICQoXCIjbmFtZVwiKTtcclxuICAgICAgICB0aGlzLiRwYXNzd29yZCA9ICQoXCIjcGFzc3dvcmRcIik7XHJcbiAgICAgICAgdGhpcy4kY29ubiA9ICQoXCIjY29ublwiKTtcclxuICAgICAgICB0aGlzLiRjb25uZXhpb24gPSAkKFwiI2Nvbm5leGlvblwiKTtcclxuICAgICAgICB0aGlzLiRjYXRlZ29yaWUgPSAkKFwiI2NhdGVnb3JpZVwiKTtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpO1xyXG4gICAgICAgIHRoaXMuJHNlY2F0ID0kKFwiI3NlY2F0XCIpXHJcbiAgICAgICAgdGhpcy4kc2VjcHJvZCA9JChcIiNzZWNwcm9kXCIpXHJcbiAgICAgICAgdGhpcy4kdmluID0kKFwiI3ZpblwiKVxyXG4gICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdldEFsbENhdGVnb3JpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5nZXRBbGxWZW5kb3JzKCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZGlzcGxheUNhdGVnb3JpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmRpc3BsYXlWZW5kb3JzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmKCB0aGlzLnZlbmRvcnMubGVuZ3RoID4gMCApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRWZW5kb3IgPSB0aGlzLnZlbmRvcnNbMF07XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGlzcGxheVByb2R1Y3RzQnlWZW5kb3IoIHRoaXMuY3VycmVudFZlbmRvciApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0Q3VycmVudFZlbmRvcigpOlZlbmRvciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZlbmRvcjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXRDdXJyZW50VmVuZG9yKCB2ZW5kb3I6VmVuZG9yICl7XHJcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50VmVuZG9yID0gdmVuZG9yO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEFsbFByb2R1Y3RzKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHZhciBhcGk6QVBJU2VydmljZSA9IEFQSVNlcnZpY2UuZ2V0U2VydmljZSgpO1xyXG4gICAgLy8gICAgIGxldCBwcm9kdWN0czpQcm9taXNlPGFueT4gPSBhcGkuZ2V0V2luZXMoKTtcclxuXHJcbiAgICAvLyAgICAgcHJvZHVjdHNcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCBwcm9kdWN0cyApID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgZm9yICggbGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMgKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgdGhlX3Byb2R1Y3Q6IFByb2R1Y3QgPSBuZXcgUHJvZHVjdChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uYW1lLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5QnlJZCggcHJvZHVjdC5jYXRlZ29yeUlkIClcclxuICAgIC8vICAgICAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYWxsX3Byb2R1Y3RzLnB1c2goIHRoZV9wcm9kdWN0ICk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEFsbENhdGVnb3JpZXMoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gICAgIGxldCBjYXRlZ29yaWVzOiB7IFxyXG4gICAgLy8gICAgICAgICBpZDpudW1iZXIsIFxyXG4gICAgLy8gICAgICAgICBuYW1lOnN0cmluZ1xyXG4gICAgLy8gICAgIH1bXSA9IEJERC5jYXRlZ29yaWVzO1xyXG5cclxuICAgIC8vICAgICBmb3IoIGxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzICl7XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgdGhlX2NhdGVnb3J5OiBDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcclxuICAgIC8vICAgICAgICAgICAgIGNhdGVnb3J5LmlkLFxyXG4gICAgLy8gICAgICAgICAgICAgY2F0ZWdvcnkubmFtZVxyXG4gICAgLy8gICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCggdGhlX2NhdGVnb3J5ICk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRDYXRlZ29yeUJ5SWQoIGlkOm51bWJlciApOiBDYXRlZ29yeSB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgZm9yKCBsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzICl7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiggaWQgPT0gY2F0ZWdvcnkuZ2V0SWQoKSApe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEFsbFZlbmRvcnMoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gICAgIC8vT24gcmVjdXBlcmUgbGVzIHZlbmRvcnMgZGUgbGEgYmRkICEgKCBmYXVzc2UgYmFzZSBkZSBkb25uw6llIEJERClcclxuICAgIC8vICAgICBsZXQgdmVuZG9yczoge1xyXG4gICAgLy8gICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgLy8gICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgIHByb2R1Y3RzOiBudW1iZXJbXSxcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgfVtdID0gQkRELnZlbmRvcnM7XHJcblxyXG4gICAgLy8gICAgIC8vT24gYm91Y2xlIHN1ciBjZXR0ZSBsaXN0ZSBkZSB2ZW5kZXVyc1xyXG4gICAgLy8gICAgIGZvciggbGV0IHZlbmRvciBvZiB2ZW5kb3JzICl7XHJcblxyXG4gICAgLy8gICAgICAgICAvL09uIHZhIGF2b2lyIGJlc29pbiBkJ3VuIHRhYmxlYXUgZGUgcHJvZHVpdFxyXG4gICAgLy8gICAgICAgICBsZXQgdmVuZG9yc19wcm9kdWN0czpQcm9kdWN0W10gPSBbXTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vSmUgYm91Y2xlIHN1ciBsZSB0YWJsZWF1IGQnaWQgZGUgdmVuZG9yLnByb2R1Y3RzXHJcbiAgICAvLyAgICAgICAgIGZvciggbGV0IHByb2R1Y3RfaWQgb2YgdmVuZG9yLnByb2R1Y3RzICl7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy9KZSBjaGVyY2hlIGxlIHByb2R1aXQgY29ycmVzcG9uZGFudCwgZ3JhY2UgYSBzb24gaWQsIGRhbnMgbWEgbGlzdGUgZGUgcHJvZHVpdFxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHRoZV9wcm9kdWN0OlByb2R1Y3QgPSB0aGlzLmdldFByb2R1Y3RCeUlkKCBwcm9kdWN0X2lkICk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLy9KZSBwb3Vzc2UgbW9uIHRhYmxlYXUgZCdvYmpldFxyXG4gICAgLy8gICAgICAgICAgICAgdmVuZG9yc19wcm9kdWN0cy5wdXNoKCB0aGVfcHJvZHVjdCApO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAvL0ljaSwgb24gY3LDqWVyIGxlIHZlbmRldXIgYXZlYyBzYSBjbGFzc2UgZXQgbGUgdGFibGVhdSBkZSBwcm9kdWl0IGNyw6nDqSAhXHJcbiAgICAvLyAgICAgICAgIGxldCB0aGVfdmVuZG9yOlZlbmRvciA9IG5ldyBWZW5kb3IoXHJcbiAgICAvLyAgICAgICAgICAgICB2ZW5kb3IuaWQsXHJcbiAgICAvLyAgICAgICAgICAgICB2ZW5kb3IubmFtZSxcclxuICAgIC8vICAgICAgICAgICAgIHZlbmRvcnNfcHJvZHVjdHMsXHJcbiAgICAvLyAgICAgICAgICAgICB2ZW5kb3IucGFzc3dvcmRcclxuICAgIC8vICAgICAgICAgKVxyXG5cclxuICAgIC8vICAgICAgICAgLy9qJ2Fqb3V0ZSBtb24gdmVuZGV1ciBhIG1hIGxpc3RlIGRlIHZlbmRldXIgZGUgbW9uIGFwcFxyXG4gICAgLy8gICAgICAgICB0aGlzLnZlbmRvcnMucHVzaCggdGhlX3ZlbmRvciApO1xyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldFByb2R1Y3RCeUlkKCBpZDogbnVtYmVyICk6IFByb2R1Y3Qge1xyXG5cclxuICAgIC8vICAgICBmb3IoIGxldCBwcm9kdWN0IG9mIHRoaXMuYWxsX3Byb2R1Y3RzICl7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiggaWQgPT0gcHJvZHVjdC5nZXRJZCgpICl7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBkaXNwbGF5Q2F0ZWdvcmllcygpOiB2b2lkIHtcclxuXHJcbiAgICAvLyAgICAgZm9yKCBsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzICl7XHJcbiAgICAvLyAgICAgICAgIGNhdGVnb3J5LmRpc3BsYXkoIHRoaXMuJGNhdGVnb3JpZSApO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZGlzcGxheVZlbmRvcnMoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gICAgIGZvciggbGV0IHZlbmRvciBvZiB0aGlzLnZlbmRvcnMgKXtcclxuICAgIC8vICAgICAgICAgdmVuZG9yLmRpc3BsYXkoIHRoaXMuJGFsbF92ZW5kb3JzICk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjbGVhckJvYXJkKCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMuJHNlbnRlZF9jb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgIC8vICAgICBmb3IoIGxldCBjYXRlZ29yeSBvZiB0aGlzLmNhdGVnb3JpZXMgKXtcclxuICAgIC8vICAgICAgICAgY2F0ZWdvcnkuZ2V0JERvbSgpLmh0bWwoXCJcIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGRpc3BsYXlQcm9kdWN0c0J5VmVuZG9yKCB2ZW5kb3I6VmVuZG9yICk6dm9pZCB7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xyXG5cclxuICAgIC8vICAgICAvL09uIGNoZXJjaGUgcXVlbHMgc29udCBsZXMgcHJvZHVpdHMgdmVuZHUgZXQgbm9uLXZlbmR1XHJcbiAgICAvLyAgICAgZm9yKCBsZXQgcHJvZHVjdCBvZiB0aGlzLmFsbF9wcm9kdWN0cyApe1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IGZsYWc6Ym9vbGVhbiA9IGZhbHNlOy8vdHJ1ZSA9IHZlbmR1LCBmYWxzZSA9IG5vbi12ZW5kdVxyXG5cclxuICAgIC8vICAgICAgICAgZm9yKCBsZXQgdnByb2R1Y3Qgb2YgdmVuZG9yLmdldFByb2R1Y3RzKCkgKXtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZiggdnByb2R1Y3QuZ2V0SWQoKSA9PSBwcm9kdWN0LmdldElkKCkgKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvL09uIGEgdHJvdXbDqSBsJ8OpbMOpbWVudCAhXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBpZiggZmxhZyA9PSB0cnVlICl7XHJcbiAgICAvLyAgICAgICAgICAgICAvL2FmZmljaGFnZSBjb2xvbm5lIGRyb2l0ZVxyXG4gICAgLy8gICAgICAgICAgICAgcHJvZHVjdC5kaXNwbGF5KCB0aGlzLiRzZW50ZWRfY29udGFpbmVyICk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvL2FmZmljaGFnZSBjb2xvbm5lIGdhdWNoZVxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNhdGVnb3J5OiBDYXRlZ29yeSA9IHByb2R1Y3QuZ2V0Q2F0ZWdvcnkoKTtcclxuICAgIC8vICAgICAgICAgICAgIHByb2R1Y3QuZGlzcGxheSggY2F0ZWdvcnkuZ2V0JERvbSgpICk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0VmVuZG9yQnlJZCggaWRfdmVuZG9yOm51bWJlciApOlZlbmRvciB7XHJcblxyXG4gICAgLy8gICAgIGZvciggbGV0IHZlbmRvciBvZiB0aGlzLnZlbmRvcnMgKXtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKCB2ZW5kb3IuZ2V0SWQoKSA9PSBpZF92ZW5kb3IgKXtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB2ZW5kb3I7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9EZXB1aXMgMjAxNlxyXG5cclxuICAgIC8vZnVuY3Rpb24oIHRlc3QgKSB7IHJldHVybiB0cnVjOyB9XHJcbiAgICAvL1xyXG4gICAgLy8oIHRlc3QgKSA9PiB7IHJldHVybiB0cnVjOyB9XHJcblxyXG4gICAgLy9cclxuXHJcbiAgICByZWFkVmVuZG9yKCl7XHJcblxyXG4gICAgICAgIHZhciBuYW1lPXRoaXMuJG5hbWUudmFsKCk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkPXRoaXMuJHBhc3N3b3JkLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9tb2JpbGUvdmluL0FQSS92ZW5kb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA6ICggZGF0YSApID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZGF0YS5zdWNjZXNzID09IHRydWUgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudmVuZG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29ubmV4aW9uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhdGVnb3JpZS5zaG93KCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZWNhdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ3JlZXIgbGUgdmVuZGV1ciBhdmVjIGxlcyBkb25uw6llcyByZWN1cMOpcsOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVuZG9yOiBWZW5kb3IgPSBuZXcgVmVuZG9yKGRhdGEudmVuZG9yLmlkLCBkYXRhLnZlbmRvci5uYW1lLCBkYXRhLnZlbmRvci5wYXNzd29yZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZlbmRvciA9IHZlbmRvcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZnVuY3Rpb24oIGVycm9yICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkQ2F0ZWdvcmllcygpe1xyXG5cclxuICAgICAgICB2YXIgbmFtZT10aGlzLiRuYW1lLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFZlbmRvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvbW9iaWxlL3Zpbi9BUEkvdmVuZG9yL1wiICsgdGhpcy5jdXJyZW50VmVuZG9yLmdldElkKCkgKyBcIi9jYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIDogKCBkYXRhOiB7IHN1Y2Nlc3M6IGJvb2xlYW4sIGNhdGVnb3J5OiB7IGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZyB9W10gfSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZGF0YS5zdWNjZXNzID09IHRydWUgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBjYXQgb2YgZGF0YS5jYXRlZ29yeSApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnk6IENhdGVnb3J5ID0gbmV3IENhdGVnb3J5ICggY2F0LmlkLCBjYXQubmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZlbmRvci5hZGRDYXRlZ29yeSggY2F0ZWdvcnkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5kaXNwbGF5KCB0aGlzLiRjYXRlZ29yaWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5kaXNwbGF5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZnVuY3Rpb24oIGVycm9yICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkUHJvZHVjdChpZGNhdDpudW1iZXIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWU9dGhpcy4kbmFtZS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkY2F0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9tb2JpbGUvdmluL0FQSS92ZW5kb3IvXCIgKyB0aGlzLmN1cnJlbnRWZW5kb3IuZ2V0SWQoKSArIFwiL2NhdGVnb3J5L1wiK2lkY2F0K1wiL3Byb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiAoIGRhdGE6IHsgc3VjY2VzczogYm9vbGVhbiwgcHJvZHVjdHM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjpzdHJpbmcgfVtdIH0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGRhdGEuc3VjY2VzcyA9PSB0cnVlICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciggbGV0IHByb2Qgb2YgZGF0YS5wcm9kdWN0cyApe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3Q6IFByb2R1Y3QgPSBuZXcgUHJvZHVjdCAoIHByb2QuaWQsIHByb2QubmFtZSwgcHJvZC5kZXNjcmlwdGlvbiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdCA9IHByb2R1Y3Q7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGlzcGxheSggdGhpcy4kdmluICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiR2aW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXRlZ29yaWUuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiggZXJyb3IgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlYWREZXNjcmlwdGlvbihpZGNhdDpudW1iZXIpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lPXRoaXMuJG5hbWUudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkY2F0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9tb2JpbGUvdmluL0FQSS9kZXNjcmlwdGlvbi9wcm9kdWN0L1wiK3RoaXMuY3VycmVudFZlbmRvci5nZXRJZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiAoIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2R1Y3Quc2V0RGVzY3JpcHRpb24oZGF0YS5wcm9kdWN0cy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIDogZnVuY3Rpb24oIGVycm9yICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gXCIuL1ZlbmRvclwiO1xyXG5cclxudmFyIGFwcDpBcHAgPSBuZXcgQXBwKCk7XHJcbnZhciBkaXYgPSAkKFwiI2Zvcm1cIik7ICBcclxuZGl2LmFuaW1hdGUoe2xlZnQ6ICc1MCUnfSwgXCJzbG93XCIpO1xyXG5kaXYuYW5pbWF0ZSh7Zm9udFNpemU6ICcyZW0nfSwgXCJzbG93XCIpO1xyXG5cclxuYXBwLiRjb25uLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGFwcC5yZWFkVmVuZG9yKCk7XHJcblxyXG4gICBcclxuICAgIFxyXG4gICAgICAgIGFwcC4kY2F0ZWdvcmllLmFuaW1hdGUoe2hlaWdodDogJzM2MHB4Jywgb3BhY2l0eTogJzAuNCd9LCBcInNsb3dcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXBwLiRjYXRlZ29yaWUuYW5pbWF0ZSh7d2lkdGg6ICczNjBweCcsIG9wYWNpdHk6ICcwLjgnfSwgXCJzbG93XCIpO1xyXG4gICAgXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmNvbnRhaW5lci1jYXRcIiwgZnVuY3Rpb24oKXtcclxuICAgIGxldCBpZGNhdCA9IHBhcnNlSW50KCQodGhpcykuZGF0YShcImNhdGVnb3J5XCIpKTtcclxuICAgIGFwcC5yZWFkUHJvZHVjdChpZGNhdCk7XHJcbiAgICBhcHAuJHByb2R1Y3Quc2hvdygpO1xyXG4gICAgYXBwLiRzZWNwcm9kLnNob3coKTtcclxuICAgIGFwcC4kc2VjYXQuaGlkZSgpO1xyXG4gICAgdmFyIGRpdiA9ICQoXCIjcHJvZHVjdFwiKTsgIFxyXG4gICAgZGl2LmFuaW1hdGUoe2xlZnQ6ICc1MCUnfSwgXCJzbG93XCIpO1xyXG4gICAgZGl2LmFuaW1hdGUoe2ZvbnRTaXplOiAnMmVtJ30sIFwic2xvd1wiKTtcclxuICAgIFxyXG59KSAgICAgXHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI2Nyb2l4XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuJGNhdGVnb3JpZS5zaG93KCk7XHJcbiAgICBhcHAuJHNlY2F0LnNob3coKTtcclxuICAgIGFwcC4kcHJvZHVjdC5oaWRlKCk7XHJcbiAgICBhcHAuJHNlY3Byb2QuaGlkZSgpO1xyXG4gICAgYXBwLiRjYXRlZ29yaWUuYW5pbWF0ZSh7aGVpZ2h0OiAnMzYwcHgnLCBvcGFjaXR5OiAnMC40J30sIFwic2xvd1wiKTtcclxuICAgIFxyXG4gICAgYXBwLiRjYXRlZ29yaWUuYW5pbWF0ZSh7d2lkdGg6ICczNjBweCcsIG9wYWNpdHk6ICcwLjgnfSwgXCJzbG93XCIpO1xyXG4gICAgXHJcbn0pICAgICBcclxuXHJcbiJdfQ==
