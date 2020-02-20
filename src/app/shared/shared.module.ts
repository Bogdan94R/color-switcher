import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDropDownModule } from './components/select-drop-down/select-drop-down.module';

export const COMMON_MODULES = [
  SelectDropDownModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMMON_MODULES,
  ],
  exports: [...COMMON_MODULES],
})
export class SharedModule { }
