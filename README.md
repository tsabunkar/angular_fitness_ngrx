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
