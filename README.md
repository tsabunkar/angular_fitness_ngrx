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
