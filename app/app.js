
/**************************
 Initialize the Angular App
 **************************/

var app = angular.module("app", ["ngRoute", "ngAnimate","ngAria","ngMessages","ngMaterial","app.config", "ui.bootstrap", "easypiechart","app.material", "mgo-angular-wizard","ui.tree", "ngMap", "ngTagsInput", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.map", "app.task", "app.chart.ctrls", "app.chart.directives","countTo","app.music"]).run(["$rootScope", "$location",
    function ($rootScope, $location) {

        $(document).ready(function(config){

            setTimeout(function(){
                $('.page-loading-overlay').addClass("loaded");
                $('.load_circle_wrapper').addClass("loaded");
            },1000);

        });

    }] ).config(["$routeProvider",
    function($routeProvider) {
        return $routeProvider.when("/", {
            redirectTo: "/dashboard/dashboard8"
        }).when("/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard", {
              templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard1", {
                templateUrl: "app/views/dashboards/dashboard1.html"
            }).when("/dashboard/dashboard2", {
                templateUrl: "app/views/dashboards/dashboard2.html"
			}).when("/dashboard/dashboard3", {
                templateUrl: "app/views/dashboards/dashboard3.html"
			}).when("/dashboard/dashboard4", {
                templateUrl: "app/views/dashboards/dashboard4.html"
			}).when("/dashboard/dashboard5", {
                templateUrl: "app/views/dashboards/dashboard5.html"
			}).when("/dashboard/dashboard6", {
                templateUrl: "app/views/dashboards/dashboard6.html"
			}).when("/dashboard/dashboard7", {
                templateUrl: "app/views/dashboards/dashboard7.html"
			}).when("/dashboard/dashboard8", {
                templateUrl: "app/views/dashboards/dashboard8.html"
			}).when("/dashboard/dashboard9", {
                templateUrl: "app/views/dashboards/dashboard9.html"						
            }).when("/ui/typography", {
                templateUrl: "app/views/ui_elements/typography.html"
            }).when("/ui/buttons", {
                templateUrl: "app/views/ui_elements/buttons.html"
            }).when("/ui/cards", {
                templateUrl: "app/views/ui_elements/cards.html"
            }).when("/ui/material-icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/grids", {
                templateUrl: "app/views/ui_elements/grids.html"
            }).when("/ui/widgets", {
                templateUrl: "app/views/ui_elements/widgets.html"
            }).when("/ui/components", {
                templateUrl: "app/views/ui_elements/components.html"
            }).when("/ui/material-design", {
                templateUrl: "app/views/ui_elements/material.html"
            }).when("/ui/timeline", {
                templateUrl: "app/views/ui_elements/timeline.html"
            }).when("/ui/nested-lists", {
                templateUrl: "app/views/ui_elements/nested-lists.html"
            }).when("/forms/elements", {
                templateUrl: "app/views/forms/elements.html"
            }).when("/forms/layouts", {
                templateUrl: "app/views/forms/layouts.html"
            }).when("/forms/validation", {
                templateUrl: "app/views/forms/validation.html"
            }).when("/forms/wizard", {
                templateUrl: "app/views/forms/wizard.html"
            }).when("/maps/gmap", {
                templateUrl: "app/views/maps/gmap.html"
            }).when("/maps/jqvmap", {
                templateUrl: "app/views/maps/jqvmap.html"
            }).when("/tables/static", {
                templateUrl: "app/views/tables/static.html"
            }).when("/tables/responsive", {
                templateUrl: "app/views/tables/responsive.html"
            }).when("/tables/dynamic", {
                templateUrl: "app/views/tables/dynamic.html"
            }).when("/charts/others", {
                templateUrl: "app/views/charts/charts.html"
            }).when("/charts/morris", {
                templateUrl: "app/views/charts/morris.html"
            }).when("/charts/chartjs", {
                templateUrl: "app/views/charts/chartjs.html"
            }).when("/charts/flot", {
                templateUrl: "app/views/charts/flot.html"
            }).when("/mail/inbox", {
                templateUrl: "app/views/mail/inbox.html"
            }).when("/mail/compose", {
                templateUrl: "app/views/mail/compose.html"
            }).when("/mail/single", {
                templateUrl: "app/views/mail/single.html"
            }).when("/pages/features", {
                templateUrl: "app/views/pages/features.html"
            }).when("/pages/signin", {
                templateUrl: "app/views/pages/signin.html"
            }).when("/pages/signup", {
                templateUrl: "app/views/pages/signup.html"
            }).when("/pages/forgot", {
                templateUrl: "app/views/pages/forgot-password.html"
            }).when("/pages/profile", {
                templateUrl: "app/views/ppcs/profil.html"
            }).when("/404", {
                templateUrl: "app/views/pages/404.html"
            }).when("/pages/500", {
                templateUrl: "app/views/pages/500.html"
            }).when("/pages/contact", {
                templateUrl: "app/views/pages/contact.html"
            }).when("/tasks", {
                templateUrl: "app/views/tasks/tasks.html"				
			 }).when("/dokumenty", {
                templateUrl: "app/views/ppcs/dokumenty.html"
			}).when("/dokumenty2", {
                templateUrl: "app/views/ppcs/dokumenty2.html"
			}).when("/dokumenty3", {
                templateUrl: "app/views/ppcs/dokumenty3.html"	
			}).when("/dokumenty4", {
                templateUrl: "app/views/ppcs/dokumenty4.html"	
			}).when("/dokumenty5", {
                templateUrl: "app/views/ppcs/dokumenty5.html"	
			}).when("/dokumenty6", {
                templateUrl: "app/views/ppcs/dokumenty6.html"	
			}).when("/dzialania_plan", {
                templateUrl: "app/views/ppcs/dzialania_plan.html"
			}).when("/akcja_1", {
                templateUrl: "app/views/ppcs/akcja_promocyjna.html"	
			}).when("/akcja_2", {
                templateUrl: "app/views/ppcs/akcja_promocyjna_end.html"
			}).when("/dla_dzieci", {
                templateUrl: "app/views/ppcs/dla_dzieci.html"	
			}).when("/spotkania", {
                templateUrl: "app/views/ppcs/spotkania.html"	
			}).when("/spotkanie1", {
                templateUrl: "app/views/ppcs/spotkanie_1.html"
			}).when("/praktyki_user", {
                templateUrl: "app/views/ppcs/dobre_praktyki_user.html"																
            }).otherwise({
                redirectTo: "/404"
            });
    }
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan',{
            'default': '800'
        })
        .accentPalette('grey',{
            'default': '800'
        })
        ;
});
