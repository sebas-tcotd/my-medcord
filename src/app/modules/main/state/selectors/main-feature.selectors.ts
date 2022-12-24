import { createFeatureSelector } from '@ngrx/store';
import { FeaturesEnum } from '../../../../core/enums/features.enum';
import { MainState } from '../main.reducer';

export const MainFeature = createFeatureSelector<MainState>(FeaturesEnum.MAIN);
