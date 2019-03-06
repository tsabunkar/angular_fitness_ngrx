Installing Angular Material in Project
Step 1)
npm install --save @angular/material @angular/cdk @angular/animations

Step 2)
Go to AppModule
@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

Step 3)
Create material.module.ts -> CustomMaterialModule , which will have all the Angular Material components
that we have imported for AngularMaterial Core libr 
Directly we can just export this module to AppModule. Rather than importing all the angular material compo
in the AppModule

Step 4)
Goto style.css ->
@import "~@angular/material/prebuilt-themes/indigo-pink.css"; (paste this import)
Angular Material have different themes like :
-deeppurple-amber
-indigo-pink
-pink-bluegrey
-purple-green

U can find above themes below path -
node_modules/angular/material/prebuilt-themes

Step 5)
Gesture Support -> Used when our angular application is used in the mobile application like- sliding, etc
npm install --save hammerjs

To use it Goto -> Main.ts > import 'hammerjs';

Step 6)
Material Icons
Goto index.html > 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


================================================================================================
Error :-
ng g c auth/signup --dry-run

More than one module matches. Use skip-import option to skip importing the component into the closest module.

Ans- It means angular-cli is confused which module to update AppModule or CustomMaterialModule
So specifiy the module where/in-which declarations u want to update this component by specifiying the flag

ng g c auth/signup --dry-run --module app.module
================================================================================================
How to conrtol the layouts/Responsiveness of our Components without using boostrap (bcoz using bootstap and Angular material is not acceptable, Since bootstrap is library used to provide custom styling, which 
has already been achieved using ANgular Material so it is not sensable to use to bootstrap library [which is such a huge libr, just for Responsiveness or layout] ) --use-->
[[ Flexbox ]]

(bcoz Grid is not a part of angular material, So use0 flex-layout)

Git link:
https://github.com/angular/flex-layout

Flex documentation :
https://github.com/angular/flex-layout/wiki/API-Documentation

Angular Flex-Layout :
->Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery
->Flex-layout is a package which uses flexbox-css behind the scene, This allow us developer to precision
  our components layout using directives.
-> This directives can find 
     Documentation > Static API (https://github.com/ angular/flex-layout/wiki/Declarative-API-Overview)
     Documentation > Responsive API (https://github.com/angular/flex-layout/wiki/Responsive-API)
-> Static API :
The Angular Layout API is an intuitive list of HTML directives (aka attributes) that can be used on HTML containers and elements. Instead of using traditional CSS stylesheets, developers will define their layouts declaratively directly in the HTML.

*> API for DOM containers:  (parent Component which act as container)
fxLayout - (It is added to container element, Which tells how the child elements should be positined )
            fxLayout can have values like :   row | column | row-reverse | column-reverse
            If fxLayout is row, Which simply means all child compo is in row
fxLayoutAlign - 
          main-axis: start | center | end | space-around | space-between | space-evenly
          cross-axis: start | center | end | stretch | space-between | space-around | baseline
          
*> API for DOM elements: (All child Component which is present inside the parent container)
fxFlex - "" | px | % | vw | vh | <grow> <shrink> <basis> 
fxFlexOrder - int

NOTE : 
fxLayoutAlign="center center" , Which means -> first value is for main axis and second value is for
cross axis 


-> Responsive API : 
Responsive layouts in Material Design adapt to any possible screen size. Google's specifications provide guidance that includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.
Different Breakpoints are : 
xs	'screen and (max-width: 599px)'
sm	'screen and (min-width: 600px) and (max-width: 959px)'
md	'screen and (min-width: 960px) and (max-width: 1279px)'
lg	'screen and (min-width: 1280px) and (max-width: 1919px)'
xl	'screen and (min-width: 1920px) and (max-width: 5000px)
lt-sm	'screen and (max-width: 599px)'
lt-md	'screen and (max-width: 959px)'
lt-lg	'screen and (max-width: 1279px)'
lt-xl	'screen and (max-width: 1919px)'
gt-xs	'screen and (min-width: 600px)'
gt-sm	'screen and (min-width: 960px)'
gt-md	'screen and (min-width: 1280px)'
gt-lg	'screen and (min-width: 1920px)'

STEPS TO INSTALL :
TO use this flexbox layout in our Angular Material we need to install it :
https://github.com/angular/flex-layout/wiki/Using-Angular-CLI

$ npm install @angular/flex-layout @angular/cdk --save

Goto app.module.ts
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [FlexLayoutModule],
  ...
})



=====================================================================================================
Naming Conventions & Standards to be followed in Angular :-

https://angular.io/guide/styleguide


-> Apply the single responsibility principle (SRP) to all components, services, and other symbols. 
-> define one thing, such as a service or component, per file (use- app.comp.ts, app.comp.html, app.comp.css, rather than defining all this files in app.comp.ts)
-> define small functions
-> Naming conventions are hugely important to maintainability and readability. This guide recommends naming conventions for the file name and the symbol name 
-> use consistent names for all symbols.
-> use dashes to separate words in the descriptive name. (or) use dots to separate the descriptive name from the type
-> use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many
-> use consistent names for all assets named after what they represent.
-> use upper camel case for class names.
-> match the name of the symbol to the name of the file
-> append the symbol name with the conventional suffix (such as Component, Directive, Module, Pipe, or Service) for a thing of that type.
->  give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.
-> use consistent names for all services named after their feature.
-> suffix a service class name with Service. For example, something that gets data or heroes should be called a DataService or a HeroService.
-> use dashed-case or kebab-case for naming the element selectors of component

*) spinal-case,  kebab-case, caterpillar-case, dash-case, hyphen-case --> app-root (all words are in lower case)
*) camelCase (or lowerCamelCase) --> appRoot 
*) PascalCase (or UpperCamelCase) --> AppRoot
*) snake_case --> app_root (all words lower case)
*) SCREAMING_SNAKE_CASE --> APP_ROOT (all words upper case)
*) kebab-case --> app-root  (all words lower case)
*) TRAIN-CASE --> APP-ROOT (all words upper case)
*) Studly caps --> Mixed case with no semantic or syntactic significance to the use of the capitals. Sometimes only vowels are upper case, at other times upper and lower case are alternated, but often it is simply random. ex- tHeqUicKBrOWnFoXJUmpsoVeRThElAzydOG,  Sun Microsystems

-> use a hyphenated, lowercase element selector value (e.g. admin-users).
-> use a custom prefix for a component selector. For example, the prefix toh represents from Tour of Heroes and the prefix admin represents an admin feature area.
->  Use lower camel case for naming the selectors of directives.
-> use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).
-> use consistent names for all pipes, named after their feature.
-> name test specification files the same as the component they test.
-> name test specification files with a suffix of .spec.
-> name end-to-end test specification files after the feature they test with a suffix of .e2e-spec.
-> append the symbol name with the suffix Module.
-> give the file name the .module.ts extension.
-> name the module after the feature and folder it resides in.
-> suffix a RoutingModule class name with RoutingModule.
-> end the filename of a RoutingModule with -routing.module.ts.
-> use upper camel/PascalCase case when naming classes.
-> declare variables with const if their values should not change during the application lifetime.
->  spelling const variables in lower camel case. bcoz- Lower camel case variable names (heroRoutes) are easier to read and understand than the traditional UPPER_SNAKE_CASE names (HERO_ROUTES). Also typecript make it easy to identifiy a variable is const or not.
-> tolerate existing const variables that are spelled in UPPER_SNAKE_CASE.
-> name an interface using upper camel case.
-> naming an interface without an I prefix.
-> using a class instead of an interface for services and declarables (components, directives, and pipes).
-> using an interface for data models.
-> use lower camel case to name properties and methods.
-> Avoid prefixing private properties and methods with an underscore. bcoz-  JavaScript lacks a true private property or method. Also TypeScript tooling makes it easy to identify private vs. public properties and methods.
-> leaving one empty line between third party imports and application imports.
-> listing import lines alphabetized by the module.
-> extract templates and styles into a separate file, when more than 3 lines.
-> name the template file [component-name].component.html, where [component-name] is the component name
-> name the style file [component-name].component.css, where [component-name] is the component name.
-> specify component-relative URLs, prefixed with ./
-> use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the @Directive and @Component metadata:
-> placing @Input() or @Output() on the same line as the property it decorates.
-> Avoid input and output aliases except when it serves an important purpose. bcoz - Two names for the same property (one private, one public) is inherently confusing.
-> place properties up top followed by methods.
-> place private members after public members, alphabetized
-> **limit logic in a component to only that required for the view. All other logic should be delegated to services.
-> move reusable logic to services and keep components simple and focused on their intended purpose.
-> name events without the prefix 'on'
-> name event handler methods with the prefix 'on' followed by the event name.
-> use services as singletons within the same injector. Use them for sharing data and functionality
    (Services are ideal for sharing stateful in-memory data.)
-> create services with a single responsibility that is encapsulated by its context.
-> create a new service once the service begins to exceed that singular purpose.
-> provide a service with the app root injector in the @Injectable decorator of the service.
[
  -The Angular injector is hierarchical.
  -When you provide the service to a root injector, that instance of the service is shared and available    in every class that needs the service. This is ideal when a service is sharing methods or state.
  -When you register a service in the @Injectable decorator of the service, optimization tools such as      those used by the Angular CLI's production builds can perform tree shaking and remove services that     aren't used by your app.
  -This is not ideal when two different components need different instances of a service. In this           scenario it would be better to provide the service at the component level that needs the new and        separate instance.
]
-> make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.
-> Use Lifecycle hooks to tap into important events exposed by Angular.






=====================================================================================================
Project Folder Structure :-
https://angular.io/guide/styleguide#application-structure-and-ngmodules

-> LIFT 
(Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY)

*) structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY.
*) define the structure to follow above four LIFT basic guidelines, listed in order of importance

-> Locate
*) make locating code intuitive, simple and fast.

-> Identify
*) name the file such that you instantly know what it contains and represents.
*) be descriptive with file names and keep the contents of the file to exactly one component.

-> Flat
*) keep a flat folder structure as long as possible.
*) creating sub-folders when a folder reaches seven or more files.

-> T-DRY (Try to be DRY)
*) be DRY (Don't Repeat Yourself). but avoid being so DRY that you sacrifice readability


-> Folders-by-feature structure
*) create folders named for the feature area they represent.
*) create an NgModule for each feature area.
*) RootModule, FeatureModule-1, FeatureModule-2, .., CoreModule, SharedModule

*) App root module 
    (*) create an NgModule in the app's root folder, for example, in /src/app.
    (*) Consider naming the root module app.module.ts.
*) Feature modules
    (*) create an NgModule for all distinct features in an application; for example, a Heroes, Villans      feature.
    (*) place the feature module in the same named folder as the feature area; for example, in app/heroes
    (*) name the feature module file reflecting the name of the feature area and folder; for example, app/heroes/heroes.module.ts.
    (*) name the feature module symbol reflecting the name of the feature area, folder, and file; for example, app/heroes/heroes.module.ts defines HeroesModule.
*) Shared module
    (*) create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule.
    (*) declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
    (*) do not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module
    (*) import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
    (*) declare all components, directives, and pipes in the SharedModule
    (*) export all symbols from the SharedModule that other feature modules need to use
    (*) Avoid specifying app-wide singleton providers in a SharedModule
*) Core module
    (*) create a feature module named CoreModule in a core folder (e.g. app/core/core.module.ts defines CoreModule).
    (*) calling the application-wide core module, CoreModule. Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.
    (*) put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
    (*) import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).
    (*) gather application-wide, single use components in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).
    (*) Avoid importing the CoreModule anywhere except in the AppModule.
    (*) export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.
    (*) Only the root AppModule should import the CoreModule.
    (*) guard against reimporting of CoreModule and fail fast by adding guard logic.
    ex-
    
    export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
      if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
      }
    }

Tips for lazy loaded Module: 
-> put the contents of lazy loaded features in a lazy loaded folder. A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.
-> Avoid allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.

--------------------------------Summary--------------------------------
Summary (LIFT, Locate, Identify, Flat, T-DRY, Folders-by-feature)-
-> Do start small but keep in mind where the app is heading down the road.
-> Do have a near term view of implementation and a long term vision.
-> Do put all of the app's code in a folder named src.

To check above folder structure : 
https://angular.io/guide/styleguide#overall-structural-guidelines


=====================================================================================================
