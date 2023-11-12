import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/json-formatter' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'json-formatter', loadChildren: () => import('./pages/json-formatter/json-formatter.module').then(m => m.JsonFormatterModule) },
  { path: 'text-diff', loadChildren: () => import('./pages/text-diff/text-diff.module').then(m => m.TextDiffModule) },
  { path: 'uuid-generator', loadChildren: () => import('./pages/uuid-generator/uuid-generator.module').then(m => m.UuidGeneratorModule) },
  { path: 'base64-string-converter', loadChildren: () => import('./pages/base64-string-converter/base64-string-converter.module').then(m => m.Base64StringConverterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
