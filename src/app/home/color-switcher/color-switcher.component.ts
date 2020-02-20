import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AppConfigColorSelection, AppConfiguration } from '../../core/models';
import { getJSONConfig } from '../store/actions/color-switcher.action';
import { selectColorSwitcherConfig } from '../store/selectors/color-switcher.selector';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.scss']
})
export class ColorSwitcherComponent implements OnInit {

  appConfigurationFiles: string[] = [
    'config_1',
    'config_2',
    'config_3',
  ];
  inputNumber = '0';
  appConfiguration: AppConfiguration;
  isLimitError = false;
  isColorSelectionError = false;

  fileName: string;
  colorSquare: string;
  colors: AppConfigColorSelection[];

  private destroy$: Subject<any> = new Subject<any>();

  constructor(private store: Store<any>) {
    this.store.pipe(
      select(selectColorSwitcherConfig),
      filter(item => !!item),
      takeUntil(this.destroy$),
    ).subscribe((appConfig: AppConfiguration) => {
      if (!appConfig.graphic || this.isEmptyObject(appConfig.graphic)) { return; }
      appConfig.graphic.colorSelection = this.addSelectedField([...appConfig.graphic.colorSelection]);
      this.appConfiguration = appConfig;
      this.colors = this.addSelectedField([...appConfig.graphic.colorSelection]);
      this.isColorSelectionError = this.colors && !this.colors.length;
      if (this.isColorSelectionError) { return; }
      this.colorSquare = this.colors[0].color;
      this.inputNumber = this.appConfiguration.input && this.appConfiguration.input.default ?
        String(this.appConfiguration.input.default) : '0';
      this.isLimitError = false;
    });
  }

  ngOnInit() {}

  onSelectedFileName(fileName: string) {
    this.store.dispatch(getJSONConfig({ fileName }));
    this.fileName = fileName;
  }

  selectColor(color: AppConfigColorSelection): void {
    this.selectedStateColors(color.name);
    this.colorSquare = color.color;
  }

  onReset(): void {
    this.inputNumber = '0';
    this.isLimitError = false;
  }

  get getStylesForSquare() {
    const borderColor = this.appConfiguration.graphic.borderColor;
    return {
      border: borderColor ? `1px solid ${borderColor}` : 'none',
      'background-color': this.colorSquare,
    };
  }

  multipliedByTwoNumber(inputNumber: string): number {
    return +inputNumber * 2;
  }

  checkLimitState(ev: string): void {
    if (!this.appConfiguration.input) {
      return;
    }
    const multipliedNumber = this.multipliedByTwoNumber(ev);
    const isNegative = (multipliedNumber < 0);
    this.isLimitError = isNegative ?
      (+this.appConfiguration.input.min > multipliedNumber) :
      (+this.appConfiguration.input.max < multipliedNumber);
  }

  private isEmptyObject(obj): boolean {
    return Object.entries(obj).length === 0;
  }

  private selectedStateColors(name: string) {
    this.colors = this.colors.map(item => {
      item.selected = item.name === name;
      return item;
    });
  }

  private addSelectedField(colors: AppConfigColorSelection[]): AppConfigColorSelection[] {
    return colors.map((item, index) => {
      item.selected = index === 0;
      return item;
    });
  }

}
