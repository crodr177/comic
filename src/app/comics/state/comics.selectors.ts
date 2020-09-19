import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComicsState } from './comics.reducer';

const getComicsFeatureState = createFeatureSelector<ComicsState>("comics")

export const getComics = createSelector(
  getComicsFeatureState,
  (state: ComicsState) => state.comics
)
